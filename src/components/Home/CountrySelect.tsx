import { useState } from 'react'
import { shallowEqual, useSelector } from "react-redux"
import arrowdown from './../../icons/arrowdown.svg'
import arrowdownwhite from './../../icons/arrowdownwhite.svg'

type Props = {
    filterList: (region: string) => void
}

export const CountrySelect = ({ filterList }: Props) => {

    const theme: ITheme = useSelector((state: ThemeState) => state.theme, shallowEqual);

    let options = [ "All","Africa","Americas","Asia","Europe","Oceania"]

    const [optionSelected, setOptionSelected] = useState("All")

    const [show, setShow] = useState(false)

    const handleShow = () => { setShow(!show) }

    const handleClick = (option:string)=>{
        filterList(option)
        setOptionSelected(option)
    }
    return (
        <div onClick={handleShow}
            className='dark:text-white lg:w-1/6 py-3 px-5 mb-1 dark:bg-gray-700 bg-zinc-50 text-sm rounded-lg flex relative cursor-pointer'>
            <div className='flex mb-0.5 justify-start w-11/12'>
                <span>
                    Filter by Region:
                </span>
                <span className='font-bold ml-2'>
                    {optionSelected}
                </span>
            </div>
            <div className='flex justify-center items-center'>
                <img src={`${theme.dark ? arrowdownwhite : arrowdown}`} alt={'arrowicon'}/>
            </div>
            {show && (
                <div className='absolute top-14 right-0 w-full flex dark:bg-gray-700 bg-zinc-50 rounded-lg py-3 px-3 flex-col shadow-lg dark:shadow-gray-800'>
                    {options.map((option) => (
                        <button key={option}
                        className='text-left p-2 rounded-lg hover:bg-cyan-600 hover:text-white hover:font-bold'
                            onClick={() => (handleClick(option))}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
