import Image from "next/image"
import { signIn } from "next-auth/react";
import { SetStateAction, useState } from "react";
import { useEffect } from "react";

type ModalProps = {
  open: boolean
}

export default function LoginModal({open}:ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
    // console.log("open:"+open)
  },[open])
  // console.log("isOpen:"+isOpen)
  
  return (
    <>
      {isOpen && (
      <div className="bg-gray bg-opacity-50 w-full h-full absolute" onClick={()=>{setIsOpen(false)}}>
        <div className="modal animate-fade-in flex items-center justify-center drop-shadow-lg flex-col">
          <h2 className="mb-5">ログインして日記を書こう</h2>
          <div className='flex items-center justify-center flex-col mb-5'>
              <button className=" bg-white p-3 w-64 drop-shadow-lg rounded-2xl flex items-center" onClick={() => signIn("google")}>
                      <Image src={"https://developers.google.com/static/identity/images/g-logo.png?hl=ja" } alt={"google-logo"} width={20} height={20}></Image>
                      <div className="ml-8">Googleでログイン</div>
              </button>
          </div>

          <div className='flex items-center justify-center flex-col mb-5'>
              <button className=" bg-white p-3 w-64 drop-shadow-lg rounded-2xl flex items-center" onClick={() => signIn("google")}>
                      <Image src={"https://developers.google.com/static/identity/images/g-logo.png?hl=ja" } alt={"google-logo"} width={20} height={20}></Image>
                      <div className="ml-8">Googleでログイン</div>
              </button>
          </div>
          
          <div className='flex items-center justify-center flex-col mb-5'>
              <button className=" bg-white p-3 w-64 drop-shadow-lg rounded-2xl flex items-center" onClick={() => signIn("google")}>
                      <Image src={"https://developers.google.com/static/identity/images/g-logo.png?hl=ja" } alt={"google-logo"} width={20} height={20}></Image>
                      <div className="ml-8">Googleでログイン</div>
              </button>
          </div>
        </div>
      </div>
      )}
    </>
  )
}