import Curve from '@/components/Layout/Curve'
import Inner from '@/components/Layout/Inner'
import Stairs from '@/components/Layout/Stairs'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Curve backgroundColor={"#BCF366"}>
        <h1>About</h1>
        <div className='body'>
            u can change pages transition wrap imports (Stairs,Inner,Curve) to see other Transitions .Curve transition is the default one
        </div>
      </Curve>
    </>
  )
}