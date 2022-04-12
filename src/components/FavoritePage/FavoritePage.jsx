import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from '../PeoplePage/People.module.scss'

const FavoritePage = () => {
    const persons = useSelector(state => state.favoriteReducer.persons);
    return (
        <div className={s.people}>
            {(persons.length !== 0) && 
                persons.map((e)=> {
                    return (
                        <Link to={e.path} key={e.name} className={s.item}>
                            <img src={e.img} alt={e.name} className={s.img}/>
                            <div className={s.name} >{e.name}</div>
                        </Link>                           
                    )
                })
            }
        </div>
    );
}


export default FavoritePage;