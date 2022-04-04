import { Link } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from '../People.module.scss';
const PeopleNavigation = ({
    nextPage,
    prevPage,
    getResource,
    currentPage,
    setLoading,
    loading
}) => {

    
    let handleChangePage = (e)=> {
        if(e.target.innerHTML === 'Next') {
            getResource(nextPage)
        }else {
            getResource(prevPage)
        }

        setLoading(true)

    }


    return (
        <div className={s.people__navigation}>
            <Link to={`/people?page=${+currentPage - 1}`} className={cn(s.people__prev  , s.people__btn)}>
                <button 
                    onClick={handleChangePage} 
                    disabled={!prevPage || loading}
                    >Previous</button>
            </Link> 
            <Link to={`/people?page=${+currentPage+1}`}  className={cn(s.people__next, s.people__btn)}>
                <button onClick={handleChangePage} disabled={!nextPage || loading} >Next</button>
            </Link>          
        </div>
    );
}

// PeopleNavigation.propTypes = {
//     props: PropTypes.array,
// }

export default PeopleNavigation;