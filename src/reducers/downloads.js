const downloadsReducerDefaultState=[];

export default (state=downloadsReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_DOWNLOAD':
            return [...state,action.download];
        case 'SET_DOWNLOADS':
            return action.downloads
        case 'REM_DOWNLOAD':
            return state.filter(({id})=>id!==action.id);
        default:
            return state
    }
}
