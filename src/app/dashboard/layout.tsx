import SideNavbar from '@/components/SideNavbar'
import React from 'react'

const layout = ({children}:any) => {
  return (
    <div className='flex w-full h-screen'>
      <SideNavbar />
      {children} 
    </div>
  )
}

export default layout
