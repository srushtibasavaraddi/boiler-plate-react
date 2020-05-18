import database from '../firebase/firebase';

export const addSubmission= (newForm) => ({
    type:"ADD_FORM",
    newForm     
});

export const startAddSubmission=(submissionData={})=>{
    return (dispatch,getState) =>{
        const {
            firstName='',
            lastName='',
            address='',
            phoneNo=0,
            fatherName='',
            mothersName='',
            grade=0,
            createdAt=0
        } = submissionData;

        const sub={firstName,lastName,address,phoneNo,fatherName,mothersName,grade,createdAt};
        database.ref("/submissions").push(sub).then((ref)=>{
            dispatch(addSubmission({
                id:ref.key,
                ...sub
            }));
        })
    }
}


export const setSubmissions = (submission)=>({
    type:"SET_SUBMISSIONS",
    submission
})

export const startSetSubmissions=()=>{
    return (dispatch,getState)=>{
        return database.ref('submissions').once('value').then((snapshot)=>{
                const submissons=[];
                snapshot.forEach((item)=>{
                submissons.push({
                    id:item.key,
                    ...item.val()
                });
            });
            dispatch(setSubmissions(submissons));  
        });
    }
};