import React from 'react'
import { RootObject } from './HomeInterfaces'
import { useNavigate } from 'react-router-dom';

type Props = {
  country: RootObject
}

export const CountryCard = ({ country }: Props) => {

  let navigate = useNavigate();

  const goToCountryPage = ()=>{
    navigate(`/country/${country.cca3}`)
  }

  return (
    <div className='lg:w-[21%] w-[47%] dark:bg-gray-700 bg-zinc-50 rounded-lg lg:mb-14 mb-8 dark:text-white cursor-pointer shadow-lg	' onClick={goToCountryPage}>
      <img src={country.flags.png}
        className='w-full lg:max-h-44 lg:min-h-[11rem] max-h-32 min-h-[8rem] rounded-t-lg shadow-md dark:shadow-gray-900 shadow-gray-300' />
      <div className='flex-col flex lg:px-6 lg:py-7 px-3 p-4'>
        <label className='pb-2 text-lg font-bold'>
          {country.name.common}
        </label>
        <label className='text-sm pb-1'>
          <span className='font-medium'>Population: {Intl.NumberFormat().format(country.population)}</span>
        </label>
        <label className='text-sm pb-1'>
          <span className='font-medium'>Region: {country.region}</span>
        </label>
        <label className='text-sm lg:pb-5 pb-1'>
          <span className='font-medium'>Capital: {country.capital}</span>
        </label>
      </div>
    </div>
  )
}
