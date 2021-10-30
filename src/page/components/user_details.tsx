import axios from 'axios'
import { useEffect, useState } from 'react'
import Avatar from '../../image/avatar.jpg'
import '../../style/user_details.css'

type PropsType = {
    selected: string
}
type UserDetailsType={
    login: string,
    id: number,
    avatar_url: string,
    public_repos: string,
    bio: string,
    followers: number,
    created_at: string
}
export const UserDetailts = (props: PropsType)=>{

    const [userDetails, setUserDetails] = useState< null | UserDetailsType>();

    useEffect(()=>{
        console.log(props.selected)
        if(!!props.selected){
            axios
            .get<UserDetailsType>(`https://api.github.com/users/${props.selected}`)
            .then(res =>{
                setUserDetails(res.data)
            })
        }
    }, [props.selected])

    return <div>
       {userDetails && <div  className='details_block'>
            <div>
                <img src= {userDetails?.avatar_url} alt='User Photo' className='avatar'/>
            </div>
            <div className='details_info_block'>
                <h3>{userDetails?.login}</h3>
                <div>Кількість опублікованих репозиторіїв: {userDetails?.public_repos}</div>
                <div>Кількість фоловерів: {userDetails?.followers}</div>
               {userDetails.bio && <div>Біографія: {userDetails.bio}</div>}
                <div>Дата створення акаунту: {userDetails?.created_at}</div>
            </div>
        </div>   
        }   
    </div>
}