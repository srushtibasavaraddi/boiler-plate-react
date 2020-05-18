const galleryReducerDefaultState=[];

export default (state=galleryReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_IMAGE':
            return [...state,action.newImage];
        case 'SET_GALLERY':
            return action.gallery
        default:
            return state
    }
}
