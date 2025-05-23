import Curve from '@/components/Layout/Curve'
import Inner from '@/components/Layout/Inner'
import Stairs from '@/components/Layout/Stairs'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Curve backgroundColor="#6E97D0">
        <h1>Contact</h1>
        <div className='body'>
          <p>u can change pages transition wrap imports (Stairs,Inner,Curve) to see other Transitions .Curve transition is the default one</p>
            </div>
      </Curve>
    </>
  )
}