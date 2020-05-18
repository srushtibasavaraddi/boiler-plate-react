const submissionReducerDefaultState=[];

export default (state=submissionReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_FORM':
            return [...state,action.newForm];
        case 'SET_SUBMISSIONS':
            return action.submission
        default:
            return state
    }
}
