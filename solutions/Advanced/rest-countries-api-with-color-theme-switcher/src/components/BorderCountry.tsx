import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {fetchCountryName} from '../axios/axios';

interface BorderCountryProps {
    name: string
}

const BorderCountry: React.FC<BorderCountryProps> = ({name}) => {
    const { data, isFetching } = useQuery(['fetchCountryName', name], async() => await fetchCountryName(name))
    if(data && !isFetching) return (
        <Link to={`/country/${data}`} >
            <div className='borders-name' >{data}</div>
        </Link>
        );
    else return (
        <div className='borders-name' >Loading...</div>
    )
}


export default BorderCountry