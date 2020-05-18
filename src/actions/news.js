import database from '../firebase/firebase';

export const addNews= (newNews) => ({
    type:"ADD_NEWS",
    newNews     
});

export const startAddNews=(submissionData={})=>{
    return (dispatch,getState) =>{
        const {
            title='',
            description=''
        } = submissionData;
        const news={title,description};
        database.ref("/news").push(news).then((ref)=>{
            dispatch(addNews({
                id:ref.key,
                ...news
            }));
        })
    }
}


export const removeNews= ({id}={})=>(
    {
        type:"REM_NEWS",
        id
    }
);

export const startRemoveNews = (id)=>{
    return (dispatch,getState)=>{
        // const id=getState().news.id
        database.ref(`news/${id}`).remove().then(()=>{
        }).catch((e)=>{
            console.log("Error!!",e);
        })

        dispatch(removeNews({id}));
    }
}

export const setNews = (news)=>({
    type:"SET_NEWS",
    news
})

export const startSetNews=()=>{
    return (dispatch,getState)=>{
        return database.ref('news').once('value').then((snapshot)=>{
                const news=[];
                snapshot.forEach((item)=>{
                news.push({
                    id:item.key,
                    ...item.val()
                });
            });
            dispatch(setNews(news));  
        });
    }
};