import {useEffect} from 'react';
import api from '../../modules/api/api';
import { JOBS } from '../../modules/api/endpoints';

const Jobs = () => {
    useEffect(async ()=>{
        const response = await api.fetch(JOBS)
        console.log(response)
    },[])
    return (
        <div>
            Jobs
        </div>
    );
};

export default Jobs;