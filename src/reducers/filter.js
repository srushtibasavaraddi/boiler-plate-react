const filterReducerDefaultState={
    sortBy:'date'
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
        default:
            return state
    }
}