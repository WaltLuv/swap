import Link from 'next/link'
import Image from 'next/image'
import { ConnectButton, Icon, Select, DatePicker, Input, Button } from "web3uikit";
import logo from '../assets/logo.jpg'







const Home = () => {

    //const [searchInput, setSearchInput] = useState ("");
    //const [startDate, setStartDate] = useState (new Date());
    //const [endDate, setendDate] = useState (new Date());


    //const selectionRange = {
        //startDate:startDate,
        //endDate:endDate,
        //key: 'Selection'
   // }

  

    return (
         
                <div className="container">
                <div className="topBanner">
                    <div className="text-white text-4x1 font-bold">
                    <Image
                    src={logo}
                    height={40}
                    width={40}
                    />        
                    </div>
                    <div className="tabs">
                    <Link href="/">
                        <a className="mr-6 text-white">
                        Buy Crypto
                        </a>
                    </Link>     
                    <Link href="/">
                        <a className="mr-6 text-white">
                        Send Crypto
                        </a>
                    </Link>    
                    <Link href="/">
                        <a className="mr-4 text-white">
                        Buy Assets
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="mr-4 text-white">
                        Rent Assets
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="mr-4 text-white">
                        Sell Assets
                        </a>
                    </Link>
                    <Link href="/swap">
                        <a className="mr-6 text-white">
                        Swap 
                        </a>
                    </Link>
                    </div>
                    <div className="lrContainers">
                    <ConnectButton />
                    </div>
                </div>
                <div className="tabContent">
                    <div className="searchFields">
                    <div className="inputs">
                        <div className="tabs">
                        Location:
                        </div>
                        <Select
                        defaultOptionIndex={0}
                       // onChange={(data) => setDestination(data.label)}
                        options={[
                            {
                            id: "ny",
                            label: "New York",
                            },
                            {
                            id: "la",
                            label: "Los Angeles",
                            },
                            {
                            id: "atl",
                            label: "Atlanta",
                            },
                            {
                            id: "oh",
                            label: "Ohio",
                            },
                            {
                            id: "mia",
                            label: "Miami",
                            },

                        ]}
                        />  
                </div>
                    <div className="vl" />
                    <div className="inputs">
                        <div className="tabs">
                        Start Date:
                        </div>    
                        <DatePicker
                        id="CheckIn"
                        //ranges={[selectionRange]}
                        //onChange={(event) => setStartDate(event.date)}
                        />
                </div> 
                        
                    <div className="vl" />
                    <div className="inputs">
                        <div className="tabs">
                        End Date:
                        </div>
                        <DatePicker
                        id="CheckOut"
                        //ranges={[selectionRange]}
                        //onChange={(event) =>  setCheckOut(event.date)}
                        />
                </div>
                    <div className="vl" />
                    <div className="inputs">
                        <div className="tabs">
                        Bedrooms:
                        </div>
                        <Input
                        value={2}
                        name="AddGuests"
                        type="number"
                        //ranges={[selectionRange]}
                        //onChange={(event) =>  setGuests(Number(event.target.value))}
                        />
                </div>
                    <Link href={'/Rentals'}>
                    <div className="searchButton">
                        <Icon 
                        fill="#ffffff" 
                        size={24} 
                        svg="search" 
                        type="button"
                        //ranges={[selectionRange]} 
                        //onChange={(event) =>  setGuests(Number(event.target.value))}
                        />
                       
                    </div>
                    </Link>
                </div>
                </div>
                <div className="randomLocation">
                    <div className="title">Buy, Sell, Rent, and Swap Assets </div>
                    <div className="text">
                        Discover new places to buy or rent. You can also 
                        sell or swap out your assets for for crypto, and 
                        send money worldwide with low transaction fees
                </div>
                    <Button
                    text="Explore A Location"
                    //onClick={() => console.log(checkOut)}
                    />
                </div>
                </div>           
        
        
              
      );
    };
    

export default Home