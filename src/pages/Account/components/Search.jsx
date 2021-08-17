import React , {useState , useEffect} from 'react'

import searchSVG from '../../../assets/img/search.svg'

const Search = ({ setDialogItemsList }) => {

    const [searchValue , setSearchValue] = useState('')

    const onChangeHadler = (e) => {  
        setSearchValue(e.target.value)
        setDialogItemsList(e.target.value)
    }

    return(
        <>
            <div className="account_search">
                <input value={searchValue} onChange={onChangeHadler} type='text' placeholder="search ..." className='search_input' />
                <img src={searchSVG} alt="Icon!" />
            </div>
        </>
    )
}

export default Search;