import { BASE_URL, HTTPS, IMG_EXTENSION, PEOPLE, URL_PEOPLE_IMG } from "@constants/api";

const getId = (url ,category)=> {
    const id = url
        .replace(HTTPS+BASE_URL+category , '')
        .replace(/\//g , '');

    return id;
}


export const getPersonId = url => getId(url , PEOPLE);

export const getImgPerson = id => `${URL_PEOPLE_IMG + id + IMG_EXTENSION}`;



export const getIdUrlPeople = (url)=> {
    let str = url.match(/\d+$/g)[0];
    return str;
} 


export const getPersonFilms = async (films)=> {
    let res = await Promise.all(films.map((e)=> {
        return  fetch(e).then(resp=> resp.json());
    }))

    return res;
}