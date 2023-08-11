'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { LoginButton, LogoutButton } from '../components/Login';



export interface UserType {
  key: string;
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

  export default function Home() {

  const [usersData, setUsersData] = useState<UserType[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const users:UserType[] = await response.json();
      setUsersData(users);
    };
    fetchUsers();
  }, [usersData]);

  return (

    <main className='text-fontColor flex justify-center bg-mainColor min-w-fit'>
      <div className=' max-w-7xl'>


        {(usersData).map((user) => (
        <div key={user.id}>
          <p>id: {user.id}</p>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </div>
        ))}
        <LoginButton/>
        <LogoutButton/>


      </div>
    </main>
  )
}
