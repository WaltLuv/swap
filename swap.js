import Form from '../components/Form'
import Head from '../components/Head'




const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#030a1a] text-white select-none flex flex-col justify-between bg-[#000000]`,
}


const Swap = () => {

 
  return (
    <div className={style.wrapper}>
      <Head />
      <Form />
      <h2>Transaction History</h2>   
    </div>
  )
}

export default Swap