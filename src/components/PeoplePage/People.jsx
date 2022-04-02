import { useEffect, useState } from 'react';

import { API_PEOPLE } from '@constants/api';
import { withErrorApi } from '@hoc/withErrorApi';
import { getImgPeople, getPeopleId } from '@service/getPeopleData';
import { getApiResource } from '@utils/network';
import s from './People.module.scss';
import PeopleList from './PeopleList/PeopleList';
import { Link } from 'react-router-dom';


const People = ({ setError }) => {

    let [people, setPeople] = useState(null);


    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {
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
            setError(false);
        } else {
            setError(true);
        }


    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])


    return (
        <>
            <h2 className={`header__title`}>People Page</h2>
            <div className={s.people}>
                {(people) && <PeopleList people={people} />}
            </div>
        </>

    );
}


export default withErrorApi(People);