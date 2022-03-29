import {useEffect} from 'react';
import useFetch from 'hooks/useFetch';
import { JOBS } from 'modules/api/endpoints';
import Navigation from 'components/common/Navigation';

const Jobs = () => {
    const {response, performFetch} = useFetch(JOBS)
    const {data, loading, error} = response
    
    useEffect(async ()=>{
        performFetch()
    },[performFetch])
    error && console.log(error)
    return (
        <div>
            {(!loading && data) && data.map(({id, jobId, title}) => (
                <>
                    <div key={id} className="card-job">{title}</div>
                    <Navigation jobId={jobId}/>
                </>
            ))}
        </div>
    );
};

export default Jobs;