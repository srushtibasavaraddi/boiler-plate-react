const annoucementReducerDefaultState='ADMISSIONS OPEN FROM ACADEMIC YEAR 2020-21';

export default (state=annoucementReducerDefaultState,action)=>{
    switch(action.type){
        case 'CNG_ANC':
            return action.announcement
        case 'SET_ANC':
            return action.announcement
        default:
            return state
    }
}
