import React from 'react'
import Dash from '@/components/dashboard/Dash'
import  Footer  from '@/pages/footer/Footer'


export default function index ()  {
  return (
    <div>
      <Dash/>
    </div>
  )
}


index.getLayout=function pageLayout(page){
  return(
      <>
      {page}
      <Footer/>
      </>
  )
}