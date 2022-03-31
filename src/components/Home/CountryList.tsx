import React from 'react'
import { CountryCard } from './CountryCard'
import { RootObject } from './HomeInterfaces'

type Props = {
    countryList: RootObject[] | null
}
export const CountryList=({countryList}:Props) => {
    console.log("countryList",countryList)

  return (
    <div>
        {countryList&&(
            <div className='flex flex-wrap justify-between'>
                {countryList.map((country:RootObject,index:number)=>(
                    <CountryCard
                        key={index}
                        country={country}
                    />
                ))}
            </div>
        )}
    </div>
  )
}
