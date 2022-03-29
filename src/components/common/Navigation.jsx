import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {filterEmployees} from 'modules/app/actions'
import { selectAppState } from '../../modules/app/selectors';

const Navigation = ({id, jobId, title}) => {
    const dispatch = useDispatch()
    const appState = useSelector(selectAppState)
    const action = useCallback(()=> dispatch(filterEmployees(jobId)), [jobId, dispatch])
    console.log(filterEmployees(jobId))
    const style = () => jobId === appState.selectedJob ? {
            border: '1px solid red'
        } : {border: '1px solid transparent'}
    return (
        <button onClick={action} style={style()}>
            click
        </button>
    );
};

export default Navigation;