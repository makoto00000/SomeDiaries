"use client"

import Header from "../components/Header"
import Form from "./components/Form"
import Footer from "../components/Footer"
import Image from "next/image"
import Button from "../components/Button"
import Comfirm from "./components/Comfirm"


export default function create() {

  return (
    <div className='text-fontColor flex justify-center bg-mainColor w-screen'>
      <div className='max-w-7xl w-full'>
        <Header />
        {/* <Form /> */}
        <Comfirm />
        <Footer />
      </div>
    </div>
  )
}