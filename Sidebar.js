import React, { useContext } from 'react'
import { ConnectButton } from 'web3uikit'
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import { FaBox } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineHistory } from 'react-icons/ai'
import Link from 'next/link'
import { AmazonContext } from '../context/AmazonContext'




const Sidebar = () => {
    const styles = {
        container: `h-full w-[300px] flex flex-col bg-[#ffffff] static`,
        profile: ` w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#00ffff] to-[#ff00ff] mt-[40px] mb-[50px] border-2 border-[#000000]`,
        profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
        profilePic: `rounded-3xl object-cover`,
        welcome: ` text-md mb-2 font-bold text-2xl text-white`,
        usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
        username: `flex items-center w-full justify-center`,
        menu: `flex flex-col w-full h-full px-10 gap-10`,
        menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
        amazonLogo: `mr-4 flex object-cover`,
        companyName: `text-lg font-bold flex flex-1 pl-10 items-center mt-[20px]`,
        usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
        username: `flex items-center w-full justify-center`,
        setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,

  }



  const {
    isAuthenticated, 
    nickname, 
    setNickname, 
    username, 
    handleSetUsername,
  } = useContext(AmazonContext)


    

  return (
    <div className={styles.container}>
        <div className={styles.profile}>
            {
                isAuthenticated && (
                <>
                    <div className={styles.profilePicContainer}>
                        <Image
                        src={logo}
                        className={styles.profilePic}
                        height={100}
                        width={100}
                    /> 
                    </div>
                    {!username ? (
                        <>
                            <div className={styles.username}>
                                <input
                                type='text'
                                placeholder='Username....'
                                className={styles.usernameInput}
                                value={nickname}
                                onChange={e => setNickname(e.target.value)}
                                />
                            </div>
                            <button
                            className={styles.setNickname}
                            onClick={handleSetUsername}
                            >

                            Set Nickname
                            </button>
                        </>
                      ) : (
                        <div>
                            <div className={styles.welcome}>Welcome {username}</div>
                        </div>
                    )}
                    </>                   
                )}
                <div className={styles.connectButton}>
                    <ConnectButton />
                </div>
        </div>
        <div className={styles.menu}>
        <Link href='/Hub'>
          <div className={styles.menuItem}>
            <Image
              src={logo}
              alt='logo'
              height={25}
              width={20}
              className={styles.amazonLogo}
            />
          Marketplace
          </div>
        </Link>
        <div className={styles.menuItem}>
          <BsFillPersonFill />
          Profile
        </div>
        <div className={styles.menuItem}>
          <FaBox />
          Dashboard
        </div>
        <Link href='/Collections'>
        <div className={styles.menuItem}>
          <FaBox />
          Collections
        </div>
        </Link>
        <div className={styles.menuItem}>
          <BsFillBookmarkFill />
          Saved
        </div>
        <Link href='/history'>
          <div className={styles.menuItem}>
            <AiOutlineHistory />
          Transaction History
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar