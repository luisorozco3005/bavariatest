import { useEffect, useState } from "react";
import { CountryList } from "../components/Home/CountryList";
import { HomeHeader } from "../components/Home/HomeHeader";
import { RootObject } from "../components/Home/HomeInterfaces";
import axios from "axios";

export const Home = () => {
    const [countryList, setCountryList] = useState<RootObject[] | null>(null)
    const [FullList, setFullList] = useState<RootObject[] | null>(null)
    const [inputText, setinputText] = useState("")

    useEffect(() => {
        getInformation()
    }, [])

    const getInformation = async () => {
        const { data } = await axios.get('https://restcountries.com/v3.1/all');
        filterOrderList(data,inputText)

    }

    const getRegion = async (region: string) => {
        const { data } = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
        filterOrderList(data,inputText)
    }

    const filterOrderList = (data: RootObject[] | null, input:string) => {
        if (data) {
            let dataArray = data.sort(function (a: RootObject, b: RootObject) {
                return a.name.common.localeCompare(b.name.common, 'es', { numeric: true })
            });
            setFullList(dataArray)
            if (input.length > 0) {
                console.log("input", input)
                let filterArray = [];
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name.common.toLowerCase().indexOf(input.toLowerCase()) > -1) {
                        filterArray.push(data[i])
                    }
                }
                dataArray=filterArray;
            }
            setCountryList(dataArray)
        }
    }

    const filterList = (region: string) => {
        if (region === "All") {
            getInformation()
        } else {
            getRegion(region)
        }
    }

    const handleInput = (text: string) => {
        setinputText(text)
        filterOrderList(FullList,text)
    }

    return (
        <div className='dark:bg-gray-800 bg-zinc-200 lg:px-20 px-6 py-4 lg:py-10 min-h-screen'>
            <HomeHeader
                filterList={filterList}
                handleInput={handleInput}
            />
            <CountryList countryList={countryList} />
        </div>
    )
}

export default Home;
