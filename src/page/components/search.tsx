import React, { useState } from 'react'

import '../../style/search.css'

type SearchPropsType ={
    onSubmit: (value: string) => void
}

export const Search: React.FC<SearchPropsType> = (props)=>{

    const [term, setTerm] = useState<string>('it-kamasutra')


    return <div>
        <input placeholder='edit search value' className='input'
            value={term} 
            onChange={(e) =>{
                setTerm(e.currentTarget.value)
        }}/>
        <button className='button'
        onClick={()=>{
          props.onSubmit(term)
        }}>Search</button>
    </div>
}