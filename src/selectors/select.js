export default (submissions,{sortBy})=>{
    return submissions.sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 :-1;
        }else if(sortBy==='grade'){
            return a.grade > b.grade?1:-1;
        }
    });
   
}