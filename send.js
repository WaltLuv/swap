import Forms from '../components/Forms'
import Head from '../components/Head'




const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#030a1a] text-white select-none flex flex-col justify-between bg-[#000000]`,
}

export default function send() {
  return (
    <div className={style.wrapper}>
      <Head />
      <Forms />
      <h2>Transaction History</h2>   
    </div>
  )
}