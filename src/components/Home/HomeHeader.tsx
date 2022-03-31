import { CountrySelect } from "./CountrySelect"
import search from "./../../icons/search.svg"
import searchwhite from "./../../icons/whitesearch.svg"
import { shallowEqual, useSelector } from "react-redux"

type Props = {
  filterList: (region: string) => void
  handleInput: (text: string) => void
}

export const HomeHeader = ({ filterList,handleInput }: Props) => {
  const theme: ITheme = useSelector((state: ThemeState) => state.theme, shallowEqual);

  return (
    <div className="flex justify-between pt-2	pb-12 flex-col lg:flex-row">
      <div className='dark:text-white lg:w-2/6 mb-1 dark:bg-gray-700 bg-zinc-50 text-sm rounded-lg flex relative cursor-pointer'>
        <img src={`${theme.dark ? searchwhite : search}`}
          className='py-4 px-7' alt={'searchicon'}
        />
        <input placeholder='Search for a country...'
        onChange={(e:any)=>(handleInput(e.target.value))} 
        className='w-full	bg-transparent	focus-visible:outline-none'/>
      </div>
      <CountrySelect
        filterList={filterList}
      />
    </div>
  )
}
