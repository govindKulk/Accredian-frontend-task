import React, { useContext } from 'react'
import { AuthContext } from '../context'
import { redirect } from 'react-router-dom';
import useModalStore from '../hooks/useModalStore';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {

    const {user} = useContext(AuthContext);
    const {openModal} = useModalStore()



  return (
    <div>
      <ProfileCard name={user?.name} email={user?.email}/>
    </div>
  )
}

export default Profile
