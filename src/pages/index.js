import Head from 'next/head'
import Curve from '@/components/Layout/Curve'
import Inner from '@/components/Layout/Inner'
import Stairs from '@/components/Layout/Stairs'

export default function Home() {
  return (
    <>
   
      <Curve backgroundColor={"#B0AD98"}>
        <h1>Home</h1>
        <div className='body'>
            u can change pages transition wrap imports (Stairs,Inner,Curve) to see other Transitions .Curve transition is the default one
        </div>
      </Curve>
    </>
  )
}