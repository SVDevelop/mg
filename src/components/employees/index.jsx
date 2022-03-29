import {useEffect} from 'react';
import useFetch from 'hooks/useFetch';
import {useSelector} from 'react-redux'

import { EMPLOYEES } from 'modules/api/endpoints';

const Employees = () => {
    const {response, performFetch} = useFetch(EMPLOYEES)
    const {data, loading, error} = response
    const filter = useSelector(state=>state.app.selectedJob)
    console.log(filter)
    
    useEffect(async ()=>{
        performFetch()
    },[performFetch])
    // console.log(response)
    return (
        <div>
            {(!loading && data) && (filter ? data.filter(({job})=> job === filter) : data).map(({id, job, name, phone, email, createdAt, companyName, avatar, address, about}) => (
                <div key={id} className="card-job" style={{margin: '5px',border: '1px solid red', borderRadius: '6px'}}>
                    <img src={avatar} />    
                    <div>{name}</div>    
                    <div>{phone}</div>    
                    <div>{email}</div>    
                    <div>{companyName}</div>    
                    <div>{address}</div>    
                    <div>{createdAt}</div>    
                </div>
            ))}
        </div>
    );
};

export default Employees;

/*

about: "bypassing the interface won't do anything, we need to copy the auxiliary IB bus!"
address: "758 Will Passage"
avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg"
companyName: "Hirthe - Bayer"
createdAt: "2020-10-04T08:20:48.508Z"
email: "Breana58@gmail.com"
// id: "1"
job: "Executive"
name: "Aubrey Ratke"
phone
*/