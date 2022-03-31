import PropTypes from 'prop-types';
import s from '../People.module.scss';


const PeopleList = ({ people }) => {
    return (
        <>
            {people.map(({ name, img, id }) => {
                return (
                    <div id={id} key={name} className={s.item} >
                        <img src={`${img}`} alt={name} className={s.img} />
                        <h3 className={s.name} >{name}</h3>
                    </div>
                )
            })}
        </>
    );
}


PeopleList.propTypes = {
    people: PropTypes.array,
}

export default PeopleList;