export const Halper=(data,object)=>{
    if(data.type == "text"){
        let result=""
        for(let a=0;a<data.data.lenght;a++){
            result.push(object[data.data])
        }
        
    }
    
}