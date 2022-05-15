import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import React from 'react'


const Header = () => {
    const styles = {
        menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
    }
    
  return (
    <div>
      <nav className="border-b p-2 " style={{backgroundColor:"black"}}>
        <div className="mr-4 text-white">    
        <Image
                    src={logo}
                    height={40}
                    width={40}
                    className={styles.amazonLogo}
                    />                                   
        </div>
        <div className="flex mt-4 justify-center">
          <Link href="/">
            <a className="mr-6 text-white">
              NFTs
            </a>
          </Link>
          <Link href="/">
            <a className="mr-6 text-white">
              Buy Crypto
            </a>
          </Link>
          <Link href="/send">
            <a className="mr-6 text-white">
              Send Crypto
            </a>
          </Link>
          <Link href="/swap"
          >
            <a className="mr-6 text-white">
              Swap 
            </a>
          </Link>
          <Link href="/pool">
            <a className="mr-6 text-white">
              Pool
            </a>
          </Link>
          <Link href="/vote">
            <a className="mr-6 text-white">
              Vote
            </a>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
