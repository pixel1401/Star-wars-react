import { BASE_URL, HTTPS, IMG_EXTENSION, PEOPLE, URL_PEOPLE_IMG } from "../constants/api";

const getId = (url ,category)=> {
    const id = url
        .replace(HTTPS+BASE_URL+category , '')
        .replace(/\//g , '');

    return id;
}


export const getPeopleId = url => getId(url , PEOPLE);

export const getImgPeople = id => `${URL_PEOPLE_IMG + id + IMG_EXTENSION}`;