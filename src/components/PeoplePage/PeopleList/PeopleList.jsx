import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from '../People.module.scss';


const PeopleList = ({ people }) => {
    return (
        <>
            {people.map(({ name, img, id }) => {
                return (
                    <Link to={`/people/${id}`} id={id} key={name} className={s.item} >
                        <img src={`${img}`} alt={name} className={s.img} />
                        <h3 className={s.name} >{name}</h3>
                    </Link>
                )
            })}
        </>
    );
}


PeopleList.propTypes = {
    people: PropTypes.array,
}

export default PeopleList;