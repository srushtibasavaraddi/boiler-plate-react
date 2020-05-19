import database,{storage} from '../firebase/firebase';
import uuid from 'uuid';

export const addImage= (newImage) => ({
    type:"ADD_IMAGE",
    newImage     
});

export const startAddImage=(submissionData={})=>{
    return (dispatch,getState) =>{
        const {
            url='',
            description=''
        } = submissionData;

        const img={url,description};
        const imgName=uuid();
        storage.ref(`gallery/${imgName}`).put(submissionData.url).then(()=>{
            storage.ref().child(`gallery/${imgName}`).getDownloadURL().then((url)=>{
                img.url=url;
                img.imgName=imgName;
                database.ref("/gallery").push(img).then((ref)=>{
                    dispatch(addImage({
                        id:ref.key,
                        imgName,
                        ...img
                    }));
                })
            })
        })
        
    }
}


export const removeImg= (id)=>(
    {
        type:"REM_IMG",
        id
    }
);

export const startRemoveImg = ({id,imgName})=>{
    return (dispatch,getState)=>{
            database.ref(`gallery/${id}`).remove().then(()=>{
                storage.ref().child(`gallery/${imgName}`).delete().then(()=>{
                }).catch((e)=>{
                    console.log("er",e);
                })
                dispatch(removeImg(id));
            })
    }
}

export const setGallery = (gallery)=>({
    type:"SET_GALLERY",
    gallery
})

export const startSetGallery=()=>{
    return (dispatch,getState)=>{
        return database.ref('gallery').once('value').then((snapshot)=>{
                const gallery=[];
                snapshot.forEach((item)=>{
                gallery.push({
                    id:item.key,
                    ...item.val()
                });
            });
            dispatch(setGallery(gallery));  
        });
    }
};