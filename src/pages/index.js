import Head from 'next/head'
import Curve from '@/components/Layout/Curve'
import Inner from '@/components/Layout/Inner'
import Stairs from '@/components/Layout/Stairs'

export default function Home() {
  return (
    <>
   
      <Stairs backgroundColor={"#B0AD98"}>
        <h1>Home</h1>
        <div className='body'>
            <p>Lorem ipsum dolor sit amet, consectetur . Aenean mauris ligula, laoreet ut volutpat sit amet, convallis et turpis.</p>
        </div>
      </Stairs>
    </>
  )
}