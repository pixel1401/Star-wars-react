import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc/withErrorApi';
import PersonInfo from './PersonInfo';
import { getImgPerson } from '@service/getPeopleData';

import s from './PersonPage.module.scss';
import PersonFilm from './PersonFIlm/PersonFilm';


const PersonPage = ({ setError }) => {


    let [person, setPerson] = useState(null);
    let [personName , setPersonName] = useState(null);
    let [personImg , setPersonImg] = useState(null);
    let [personFilm , setPersonFilm] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const res = await getApiResource(API_PERSON + `/${id}`);

            if (res) {
                setPerson([
                    { title: 'birth_year', data: res.birth_year },
                    { title: 'gender', data: res.gender },
                    { title: 'height', data: res.height },
                    { title: 'mass', data: res.mass },
                    { title: 'skin_color', data: res.skin_color },
                    { title: 'eye_color', data: res.eye_color }
                ]);

                setPersonName(res.name)
                setPersonImg(getImgPerson(id))
                setPersonFilm(res.films);
                setError(false)
            } else {
                setError(true)
            }

        })()
    }, [])


    return (
        <>
            <h2 className='header__title'>Person</h2>
            {person && (<PersonInfo 
                person={person} 
                name={personName}
                img={personImg}
            />)}

            {(personFilm.length) &&  <PersonFilm films={personFilm} />}
            
        </>
    );
}




export default withErrorApi(PersonPage);