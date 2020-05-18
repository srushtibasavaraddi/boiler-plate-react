const galleryReducerDefaultState=[];

export default (state=galleryReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_IMAGE':
            return [...state,action.newImage];
        case 'SET_GALLERY':
            return action.gallery
        case 'REM_IMG':
            return state.filter(({id})=>id!==action.id);
        default:
            return state
    }
}
