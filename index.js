import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Main from '../components/Main'




const styles = {
   container: 'h-full w-full flex bg-[#ffffff]',
   header: 'h-full w-full '
}

export default function Home() {
  return (
    <div className={styles.header}>
        <Header />        
      <div className={styles.container}>     
        <Sidebar />
        <Main /> 
      </div>
    </div>
  )
}
