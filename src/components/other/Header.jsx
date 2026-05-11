import React, { useState } from "react"

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const LogOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
   // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello,<br></br><span className='text-3xl font-semibold'>username👋</span></h1>
        <button onClick={LogOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-xl'>LogOut</button>
    </div>
  )
}

export default Header