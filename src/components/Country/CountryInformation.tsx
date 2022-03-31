import React from 'react'
import { RootObject } from '../Home/HomeInterfaces'
import { BordersCountries } from './BordersCountries'

type Props = {
  actualCountry: RootObject | null,
  bordersCountries: RootObject[] | null
}

export const CountryInformation = ({ actualCountry, bordersCountries }: Props) => {

  const getNativeName = () => {
    if (actualCountry) {
      let array = (Object.values(actualCountry.name.nativeName))
      return array[0].official
    }
  }

  const getCurrencies = () => {
    if (actualCountry) {
      let array = (Object.values(actualCountry.currencies))
      return array[0].name
    }
  }

  const getLenguages = ()=>{
    if(actualCountry){
      return (Object.values(actualCountry.languages).toString())
    }
  }

  return (
    <div>
      {(actualCountry) && (
        <>
          <div className='font-bold lg:text-4xl text-2xl mb-4 lg:mb-6'>
            {actualCountry?.name.common}
          </div>
          <div className='flex lg:flex-row flex-col mb-4 lg:mb-10'>
            <section className='flex flex-col pr-4'>
              <label className='font-bold lg:text-lg lg:mb-2'>
                Navite Name:
                <span className='font-normal ml-1'>
                  {getNativeName()}
                </span>
              </label>
              <label className='font-bold lg:text-lg lg:mb-2'>
                Population:
                <span className='font-normal ml-1'>
                  {Intl.NumberFormat().format(actualCountry.population)}
                </span>
              </label>
              <label className='font-bold lg:text-lg lg:mb-2'>
                Region:
                <span className='font-normal ml-1'>
                  {actualCountry.region}
                </span>
              </label>
              <label className='font-bold lg:text-lg lg:mb-2'>
                Sub Region:
                <span className='font-normal ml-1'>
                  {actualCountry.continents[0]}
                </span>
              </label>
              <label className='font-bold lg:text-lg lg:mb-2'>
                Capital:
                <span className='font-normal ml-1'>
                  {actualCountry.capital}
                </span>
              </label>
            </section>
            <section className='flex flex-col'>
            <label className='font-bold lg:text-lg lg:mb-2'>
                Top Level Domain:
                <span className='font-normal ml-1'>
                  {actualCountry.tld.toString()}
                </span>
              </label>
              <label className='font-bold lg:text-lg lg:mb-2'>
                Currencies:
                <span className='font-normal ml-1'>
                  {getCurrencies()}
                </span>
              </label>
              <label className='font-bold lg:text-lg lg:mb-2'>
                Languages:
                <span className='font-normal ml-1'>
                  {getLenguages()}
                </span>
              </label>
            </section>
          </div>
          <div>
          </div>
        </>
      )}
      {(bordersCountries)&&(
        <BordersCountries
          bordersCountries={bordersCountries}
        />
      )}
    </div>
  )
}
