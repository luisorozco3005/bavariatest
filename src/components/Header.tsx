import { Dispatch } from "redux"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { updateTheme } from '../store/actionCreators';
import { useState } from 'react';
import emptymoon from './../icons/emptymoon.svg'
import fullmoon from './../icons/fullmoon.svg'

export const Header = () => {

    const theme: ITheme = useSelector((state: ThemeState) => state.theme, shallowEqual);

    const [actualTheme, setActualTheme] = useState(theme)
    const dispatch: Dispatch<any> = useDispatch()

    const updateThemeDark = () => {
        setActualTheme({
            dark: !actualTheme.dark
        })
        handleUpdate()
    }

    const handleUpdate = async () => {
        await dispatch(updateTheme({
            dark: !actualTheme.dark
        }))
    }


    return (
        <div className='flex justify-between h-20 items-center lg:px-20 px-6 dark:bg-gray-700 bg-zinc-50 shadow-lg dark:shadow-gray-900 shadow-gray-300'>
            <label className='lg:text-2xl  text-xl font-semibold dark:text-white'>
                Where in the world?
            </label>
            <button onClick={updateThemeDark} 
            className='text-lg font-semibold dark:text-white flex items-center'>
                <img src={`${theme.dark ? fullmoon:emptymoon}`}
                className='mr-2' alt={'moonicon'}/>
                Dark mode
            </button>
        </div>
    )
}

export default Header;
