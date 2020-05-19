const filterReducerDefaultState={
    sortBy:'date',
    grade:0
};

export default (state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SORT_GRD':
            return {
                ...state,
                sortBy:'grade'
            }
        case 'SORT_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT_GRADE':
            return {
                ...state,
                grade:action.grade
            }
        default:
            return state
    }
}