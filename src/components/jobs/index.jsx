import {useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import { JOBS } from '../../modules/api/endpoints';

const Jobs = () => {
    const {response, performFetch} = useFetch(JOBS)
    
    useEffect(async ()=>{
        performFetch()
    },[performFetch])
    console.log(response)
    return (
        <div>
            Jobs
        </div>
    );
};

export default Jobs;