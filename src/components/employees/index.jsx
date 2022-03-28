import React from 'react';

const Employees = () => {
    useEffect(async ()=>{
        const response = await api.fetch(JOBS)
        console.log(response)
    },[])
    return (
        <div>
            Employees
        </div>
    );
};

export default Employees;