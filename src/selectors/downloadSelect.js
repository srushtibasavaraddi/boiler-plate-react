export default (downloads,sortGrade)=>{
    return downloads.filter(({grade})=>grade===sortGrade);
}