import React from 'react'
import Featured from '../components/Featured'
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Main from '../components/Main'

const Collections = () => {

  const styles = {
    container: 'h-full w-full flex bg-[#ffffff]',
    header: 'h-full w-full '
 }
  return (
    <div className={styles.header}>
        <Header />        
      <div className={styles.container}>     
        <Sidebar />
        
        <Featured />
      </div>
    </div>
  )
}

export default Collections