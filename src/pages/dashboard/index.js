import React from 'react'
import { Dashboard } from '@/components/dashboard/Dashboard'
import Dash from '@/components/dashboard/Dash'
import { Footer } from '@/pages/footer/Footer'


const index = () => {
  return (
    <div>
      <Dash/>
    </div>
  )
}

export default index

index.getLayout=function pageLayout(page){
  return(
      <>
      {page}
      <Footer/>
      </>
  )
}