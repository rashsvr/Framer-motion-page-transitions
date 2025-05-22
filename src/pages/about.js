import Curve from '@/components/Layout/Curve'
import Inner from '@/components/Layout/Inner'
import Stairs from '@/components/Layout/Stairs'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Stairs backgroundColor={"#BCF366"}>
        <h1>About</h1>
        <div className='body'>
            <p>Lorem ipsum dolor sit amet, consectetur . Aenean mauris ligula, laoreet ut volutpat sit amet, convallis et turpis.</p>
        </div>
      </Stairs>
    </>
  )
}