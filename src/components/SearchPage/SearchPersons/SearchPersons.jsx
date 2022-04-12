import cn from 'classnames'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { API_PEOPLE, API_PERSON, PEOPLE } from '../../../constants/api';
import s from '../../PeoplePage/People.module.scss';




const SearchPersons = ({ persons }) => {
    return (
        <div className={s.people}>
            {(persons) ? (
                persons.map(({ name, id, img }) => {
                    return (
                        <Link to={`/${PEOPLE + '/' + id}`} className={s.item}  key={name}>
                            <img src={img} className={s.img} alt={name} />
                            <h3 className={s.name} >{name}</h3>
                        </Link>)
                }))
                : (<div>Not Found</div>)
            }
        </div>
    );
}


export default SearchPersons;   