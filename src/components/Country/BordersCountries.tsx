import React from 'react'
import { RootObject } from '../Home/HomeInterfaces'
import { useNavigate } from 'react-router-dom';

type Props = {
    bordersCountries: RootObject[] | null
}

export const BordersCountries = ({ bordersCountries }: Props) => {
    let navigate = useNavigate();

    const goToCountryPage = (cioc:string)=>{
      navigate(`/country/${cioc}`)
    }

    return (
        <div className='flex flex-wrap'>
            <span className='font-bold mr-4'> Border Countries: </span>
            {bordersCountries?.map((country) => (
                <button className='mb-2 dark:bg-gray-700 bg-zinc-50 shadow-lg dark:shadow-gray-900 shadow-gray-300 rounded-lg py-0.5 px-6 mr-4 hover:font-bold'
                    key={country.name.common} onClick={()=>(goToCountryPage(country.cioc))}>
                    {country.name.common}
                </button>
            ))}
        </div>
    )
}
