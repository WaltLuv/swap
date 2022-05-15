import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'


export const AmazonContext = createContext()

export const AmazonProvider = ({ children }) => {
  const  [username, setUsername] = useState('')
  const  [nickname, setNickname] = useState('')
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);



  const {
    authenticate,
    isAuthenticated,
    getBalance,
    enabledWeb3,
    Moralis,
    user,
    isWeb3Enabled,
    currentUser,
    login 
  } = useMoralis()

  useEffect(()=>{
    ;(async() =>{
      if(isAuthenticated) {
        const currentUsername = await user?.get('nickname')
        setUsername(currentUsername)
    }
  })()
  }, [isAuthenticated, user, username])

  const handleSetUsername = () => {
      if(user) {
         if(nickname) {
            user.set('nickname', nickname) 
            user.save()
            setNickname('')
         } else {
           console.log("Can't set empty nickname") 
         }
    } else {
        console.log('No user')
    }
}
    return (
        <AmazonContext.Provider
        value= {{
          authenticate,
          isAuthenticated,
          nickname,
          setNickname,
          username,
          handleSetUsername,
          checkIn,
          setCheckIn,
          checkOut,
          setCheckOut,
          destination,
          setDestination,
          guests,
          setGuests,
          currentUser,
          login,
          Moralis,
          getBalance,
          enabledWeb3,
          isWeb3Enabled
        }}
      >
        {children}
      </AmazonContext.Provider>
    )
}