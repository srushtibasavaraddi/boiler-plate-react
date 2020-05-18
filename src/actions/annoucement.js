import database from '../firebase/firebase';

export const addAnnouncement= (announcement) => ({
    type:"CNG_ANC",
    announcement     
});

export const startAddAnnoucement=(submissionData)=>{
    return (dispatch,getState) =>{
        database.ref("announcement").set(submissionData).then((ref)=>{
            console.log(submissionData);
            dispatch(addAnnouncement(submissionData));
        })        
    }
}

export const setAnnouncement = (announcement)=>({
    type:"SET_ANC",
    announcement
})

export const startSetAnnouncement=()=>{
    return (dispatch,getState)=>{
        return database.ref('announcement').once('value').then((snapshot)=>{
            const val=snapshot.val();
                dispatch(setAnnouncement(val));
            });  
    }
};