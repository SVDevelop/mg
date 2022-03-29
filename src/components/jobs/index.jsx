import {useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import api from '../../modules/api/api';
import { JOBS } from '../../modules/api/endpoints';

const Jobs = () => {
    const {response, performFetch} = useFetch(JOBS)
    
    useEffect(async ()=>{
        // const response = await api.fetch(JOBS)
        // console.log(response)
        performFetch()
    },[performFetch])
    return (
        <div>
            Jobs
        </div>
    );
};

export default Jobs;