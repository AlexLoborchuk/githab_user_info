import { useState } from 'react'
import { Search } from './components/search'
import { UsersList } from './components/users_list'
import { UserDetailts } from './components/user_details'

import '../style/githab_page.css'



export const GitHabPage = () =>{

    const [fixedTerm, setFixedTerm] = useState<string>('it-kamasutra');
    const [selected, setSelected] = useState<string>('');
   
    return <div className='page'>
        <div>
            <Search  onSubmit ={(value) => {setFixedTerm(value)}}/>
            <UsersList term={fixedTerm} SelectedUser = {(value: string) =>{setSelected(value)}}/>
        </div>
        <div>
            <UserDetailts  selected={selected}/>
        </div>
    </div>
}