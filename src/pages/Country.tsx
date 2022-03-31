import React, { useEffect, useState } from 'react'
import { CountryInformation } from '../components/Country/CountryInformation'
import { useNavigate } from 'react-router-dom';
import arrowback from "./../icons/arrowback.svg"
import arrowbackwhite from "./../icons/arrowbackwhite.svg"
import { shallowEqual, useSelector } from "react-redux"
import { RootObject } from '../components/Home/HomeInterfaces';
import axios from "axios";

export const Country = () => {
    let navigate = useNavigate();
    const theme: ITheme = useSelector((state: ThemeState) => state.theme, shallowEqual);
    const [actualCountry, setActualCountry] = useState<RootObject | null>(null)
    const [bordersCountries, setBordersCountries] = useState<RootObject[] | null>(null)

    useEffect(() => {
        let pathname = window.location.pathname;
        let array = pathname.split("/")
        getCountryInfo(array[2])
    }, [window.location.pathname])

    const getCountryInfo = async (code: string) => {
        const { data } = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
        if (data[0]?.borders) {
            getBorders(data[0].borders)
        }
        setActualCountry(data[0])
        console.log("data", data)
    }

    const getBorders = async (codes: string[]) => {
        const { data } = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${codes.toString()}`);
        if(data){
            let dataArray = data.sort(function (a: RootObject, b: RootObject) {
                return a.name.common.localeCompare(b.name.common, 'es', { numeric: true })
            });
            setBordersCountries(dataArray)
        }
    }

    const goBack = () => {
        navigate(`/home`)
    }

    return (
        <div className='dark:bg-gray-800 bg-zinc-200 lg:px-20 px-6 py-7 lg:py-20 min-h-screen dark:text-white'>
            <div>
                <button onClick={goBack} className='dark:bg-gray-700 bg-zinc-50 rounded-lg flex cursor-pointer shadow-lg dark:shadow-gray-900 lg:w-40 w-20 px-3 py-2 justify-center items-center lg:mb-20 mb-6'>
                    <img src={`${theme.dark ? arrowbackwhite : arrowback}`}
                        className='mr-2'
                    />
                    Back
                </button>

            </div>
            <div className='flex lg:justify-between lg:flex-row flex-col'>
                <div className='lg:w-5/12 mb-4 lg:mb-0'>
                    {actualCountry && (
                        <img src={actualCountry.flags.png}
                            className='w-full'
                        />
                    )}
                </div>
                <div className='lg:w-6/12 flex justify-center flex-col'>
                    <CountryInformation
                        actualCountry={actualCountry}
                        bordersCountries={bordersCountries}
                    />
                </div>
            </div>
        </div>
    )
}

export default Country