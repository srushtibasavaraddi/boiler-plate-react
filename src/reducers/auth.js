const authReducerDefaultState={
    isAuth:false
};

export default (state=authReducerDefaultState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                isAuth:true
            }
        case 'LOGOUT':
            return {
                isAuth:false
            }
        default:
            return state
    }
}