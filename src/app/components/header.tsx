import Image from 'next/image'

export default function header()  {
  return (
    <header className="flex p-10 items-center border-b font-bold">
      <div className="flex basis-3/4 items-center mx-20">
        <Image className='mr-28' src="/logo-nbg.png" alt="logo-image" width={200} height={0}/>
        <div>
          <ul className='flex'>
            <li className='mr-14 text-2xl'>日記をつくる</li>
            <li className='mr-14 text-2xl'>日記をかく</li>
            <li className='text-2xl'>日記をよむ</li>
          </ul>
        </div>
      </div>
      {/* <div className="basis-1/4 text-xl">ログイン</div> */}
      <div className="basis-1/4 text-xl flex items-center">
        <div className='mr-4 p-1 border rounded-full border-gray-500'>
          <Image className='' src="/default-icon.png" alt='default icon' width={50} height={0}></Image>
        </div>
        <div className='w-4 h-4 border-t-2 border-r-2 border-solid border-gray-900 rotate-45 '></div>
      </div>

    </header>
  )
}