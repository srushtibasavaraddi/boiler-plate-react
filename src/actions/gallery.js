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
                database.ref("/gallery").push(img).then((ref)=>{
                    dispatch(addImage({
                        ...img
                    }));
                })
            })
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
            console.log(gallery);
            dispatch(setGallery(gallery));  
        });
    }
};