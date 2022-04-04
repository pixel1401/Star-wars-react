import { HTTP , HTTPS } from "@constants/api";

export const changeHTTP = (url)=> {
    let result = url ? url.replace(HTTP , HTTPS) : url;
    return result
}


export const getApiResource = async (url)=> {
    
    
    try{
        let request = await fetch(url);

        if(!request.ok) {
            console.error("could not" , request.message);
            return false;
        }

        return await request.json();

    }catch(error){
        console.error("NOTTT" , error.message);
        return false
    }
}
