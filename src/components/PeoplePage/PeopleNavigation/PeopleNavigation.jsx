import { Link } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from '../People.module.scss';
import UiButton from '@components/Ui/UiButton/UiButton';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../store/action';
const PeopleNavigation = ({
    nextPage,
    prevPage,
    getResource,
    currentPage,
    setLoading,
    loading
}) => {

    let dispatchPage = useDispatch(); 



    let handleChangePage = (e)=> {
        if(e.target.innerHTML === 'Next') {
            dispatchPage(setCurrentPage(+currentPage + 1))
        }else {
            dispatchPage(setCurrentPage(+currentPage - 1))
        }

        setLoading(true)
    }


    return (
        <div className={s.people__navigation}>
            <Link to={`/people?page=${+currentPage - 1}`} className={cn(s.people__prev  , s.people__btn)}>
                <UiButton 
                    text={"Previous"}
                    click={handleChangePage}
                    disabled={!prevPage || loading}
                />
            </Link> 
            <Link to={`/people?page=${+currentPage+1}`}  className={cn(s.people__next, s.people__btn)}>

                <UiButton
                    text={"Next"}
                    click={handleChangePage}
                    disabled={!nextPage || loading}
                />
            
            </Link>          
        </div>
    );
}

// PeopleNavigation.propTypes = {
//     props: PropTypes.array,
// }

export default PeopleNavigation;