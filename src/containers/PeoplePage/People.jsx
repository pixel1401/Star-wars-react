import { useEffect, useState } from 'react';
import { API_PEOPLE } from '../../constants/api';
import { getImgPeople, getPeopleId } from '../../service/getPeopleData';
import { getApiResource } from '../../utils/network';
import s from './People.module.scss';
import PeopleList from './PeopleList/PeopleList';


const People = () => {

    let [people, setPeople] = useState(null);

    const getResource = async (url) => {
        const res = await getApiResource(url);

        let body = res.results.map(({ name, url }) => {

            let id = getPeopleId(url);
            let img = getImgPeople(id);
            return {
                name,
                img,
                id
            }
        })

        setPeople(body);
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])


    return (
        <div className={s.people}>
            {(people) && <PeopleList people={people} />}
        </div>
    );
}

export default People;