import { useContext, useEffect, useState } from 'react';

import { API_PEOPLE } from '@constants/api';
import { withErrorApi } from '@hoc/withErrorApi';
import { getImgPerson, getPersonId, getIdUrlPeople } from '@service/getPeopleData';
import { getApiResource, changeHTTP } from '@utils/network';
import s from './People.module.scss';
import PeopleList from './PeopleList/PeopleList';
import { Link } from 'react-router-dom';
import { useQueryParams } from '@hook/useQueryParams';
import PeopleNavigation from './PeopleNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from '../../store/action';



const People = ({ setError }) => {



    let { list: people, currentPage:page } = useSelector(state => state.peopleReducer);

    let dispatchPeople = useDispatch()

    let [nextPage, setNextPage] = useState(null);
    let [prevPage, setPrevPage] = useState(null);
    let [currentPage, setCurrentPage] = useState(null);

    let [loading, setLoading] = useState(false);

    const query = useQueryParams();
    const queryPage = query.get('page');


    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            let body = res.results.map(({ name, url }) => {

                let id = getPersonId(url);
                let img = getImgPerson(id);
                return {
                    name,
                    img,
                    id
                }
            })


            dispatchPeople(getPeople(body))

                setNextPage(changeHTTP(res.next));
                setPrevPage(changeHTTP(res.previous));
                setCurrentPage(getIdUrlPeople(url));

                setLoading(false);
                setError(false);


        } else {
            setError(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE + page);
    }, [page])

    


    return (
        <>  
            <h2 className={`header__title`}>People Page</h2>

            <PeopleNavigation
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                getResource={getResource}
                setLoading={setLoading}
                loading={loading}
            />

            <div className={s.people}>
                {(people) && (
                    <PeopleList people={people} />
                )}
            </div>
        </>

    );
}


export default withErrorApi(People);