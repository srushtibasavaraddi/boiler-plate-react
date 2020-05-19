import database,{storage} from '../firebase/firebase';
import uuid from 'uuid';

export const addDownload= (download) => ({
    type:"ADD_DOWNLOAD",
    download     
});

export const startAddDownload=(submissionData={})=>{
    return (dispatch,getState) =>{
        const {
            url='',
            description='',
            grade=0
        } = submissionData;

        const download={url,description,grade};
        const downloadName=uuid();
        storage.ref(`downloads/${downloadName}`).put(submissionData.url).then(()=>{
            storage.ref().child(`downloads/${downloadName}`).getDownloadURL().then((url)=>{
                download.url=url;
                download.downloadName=downloadName
                database.ref("downloads").push(download).then((ref)=>{
                    dispatch(addDownload({
                        id:ref.key,
                        downloadName,
                        ...download
                    }));
                })
            })
        })
        
    }
}


export const removeDownload= (id)=>(
    {
        type:"REM_DOWNLOAD",
        id
    }
);

export const startRemoveDownload = ({id,downloadName})=>{
    return (dispatch,getState)=>{
            database.ref(`downloads/${id}`).remove().then(()=>{
                storage.ref().child(`downloads/${downloadName}`).delete().then(()=>{
                }).catch((e)=>{
                    console.log("er",e);
                })
                dispatch(removeDownload(id));
            })
    }
}

export const setDownloads = (downloads)=>({
    type:"SET_DOWNLOADS",
    downloads
})

export const startSetDownloads=()=>{
    return (dispatch,getState)=>{
        return database.ref('/downloads').once('value').then((snapshot)=>{
                const downloads=[];
                snapshot.forEach((item)=>{
                    downloads.push({
                    id:item.key,
                    ...item.val()
                });
            });
            dispatch(setDownloads(downloads));  
        });
    }
};