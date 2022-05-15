import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import logo from '../assets/logo.jpg'
import { useContext } from 'react'
import Link from 'next/link'
import Logo from '../assets/eth.png'
import { ConnectButton } from 'web3uikit'




const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  amazonLogo: `mr-4 flex object-cover`,
  menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
  headerLogo: `flex w-1/8 items-center justify-start`,
  nav: `flex-1 flex justify-start items-center`,
  navItemsContainer: `flex  bg-[#000000] rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#000000] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4cd6dc]`,
}

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
      <Image
                    src={logo}
                    height={80}
                    width={80}
                    /> 
        </div>
      <div className={style.nav}>
              <ConnectButton />
        <div className={style.navItemsContainer}>
          <Link href='/'>
        <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Home
          </div>
        </Link>
        <Link href='/'>
        <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Buy Property
          </div>
        </Link>
        <Link href='/'>
        <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Sell Property
          </div>
        </Link>
        <Link href='/Hub'>
        <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Rent Property
          </div>
        </Link>   
        <Link href='/'>
        <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Buy Crypto
          </div>
        </Link>
        <Link href='/send'>
        <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Send Crypto
          </div>
        </Link>
        <Link href='/swap'>  
        <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Swap Crypto
          </div>
          </Link>
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav === 'pool' && style.activeNavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav('vote')}
            className={`${style.navItem} ${
              selectedNav === 'vote' && style.activeNavItem
            }`}
          >
            Vote
          </div>
            <div className={style.navItem}>
            <FiArrowUpRight />
            </div>
        </div>
        <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
        <div className={style.buttonIconContainer}>
            <Image src={Logo} alt='eth logo' height={20} width={20} />
          </div>
          <div>
            <p>Ethereum</p>
          </div>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        
          <div>
          </div> 
        </div>
      </div>
    </div>
   
  )
}

export default Header