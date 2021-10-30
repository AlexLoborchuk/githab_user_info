import { useEffect, useState } from 'react'
import axios from 'axios'


import '../../style/users_list.css'


type PropsType = {
    term: string,
    SelectedUser: (login: string) => void
}

type UsersSearchType={
    login: string,
    id: number
}

type SearchResult = {
    items: UsersSearchType[]
}

export const UsersList = (props: PropsType) =>{

    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [users, setUsers] = useState<UsersSearchType[]>([]);

    useEffect(()=>{
        axios.
             get<SearchResult>('https://api.github.com/search/users?q='+ props.term).then(
                     res =>{
                         setUsers(res.data.items)}
                 )
    },[props.term])

    useEffect(()=>{
        if(!!selectedUser){
            document.title = selectedUser;
        }
    },[selectedUser])

    return <div className='list'>
        {
        users && users.map((user) =>{
                return <div key = {user.id}>
                  <li 
                  onClick = {()=>{
                      setSelectedUser(user.login)
                      props.SelectedUser(user.login)
                }}
                  className={selectedUser === user.login ? 'selected' : ''}>
                      {user.login}
                  </li>
                </div>
            })
        }
    </div>
}