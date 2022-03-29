
const BASE_URL = 'https://swapi.dev/api/';
const PEOPLE = 'people'

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

(async()=> {
    const body = await getApiResource(BASE_URL+PEOPLE);
    return console.log(body);
})();