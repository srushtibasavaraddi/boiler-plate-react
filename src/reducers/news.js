const newsReducerDefaultState=[];

export default (state=newsReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_NEWS':
            return [...state,action.newNews];
        case 'SET_NEWS':
            return action.news
        case 'REM_NEWS':
            return state.filter(({id})=>id!==action.id);
        default:
            return state
    }
}
