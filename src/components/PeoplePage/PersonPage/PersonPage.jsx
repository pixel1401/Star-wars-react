import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import UiBack from '@components/Ui/UiBack/UiBack';
import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc/withErrorApi';
import PersonInfo from './PersonInfo';
import { getImgPerson } from '@service/getPeopleData';

import s from './PersonPage.module.scss';
import PersonFilm from './PersonFIlm/PersonFilm';


const PersonPage = ({ setError }) => {


    let [person, setPerson] = useState(null);
    let [personName, setPersonName] = useState(null);
    let [personImg, setPersonImg] = useState(null);
    let [personFilm, setPersonFilm] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const res = await getApiResource(API_PERSON + `/${id}`);

            if (res) {
                setPerson([
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color }
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
            <UiBack />
            <div className={s.container}>
                {person && (<PersonInfo
                    person={person}
                    name={personName}
                    img={personImg}
                />)}

                {(personFilm.length) && <PersonFilm films={personFilm} />}

            </div>
        </>

    );
}




export default withErrorApi(PersonPage);