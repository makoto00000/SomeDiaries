import Image from 'next/image'
import Link from 'next/link'

export default function Header()  {
  return (
    <header className="flex p-10 justify-around font-bold">
      <div className="flex items-center basis-3/4">
        <Link href="/">
          <Image className='mr-28 hover' src="/logo-nbg.png" alt="logo-image" width={200} height={0}/>
        </Link>
        <div>
          <ul className='flex'>
            <li className='mr-14 text-2xl hover hover:text-subColor'><Link href="/create">日記をつくる</Link></li>
            <li className='mr-14 text-2xl hover hover:text-subColor'>日記をかく</li>
            <li className='text-2xl hover hover:text-subColor'>日記をよむ</li>
          </ul>
        </div>
      </div>
      {/* <div className="basis-1/4 text-xl">ログイン</div> */}
      <div className="text-xl flex justify-end items-center hover hover:text-subColor">
        <div className='mr-4 p-1 border rounded-full border-gray-500'>
          <Image className='' src="/default-icon.png" alt='default icon' width={50} height={0}></Image>
        </div>
        <div className='w-4 h-4 border-t-2 border-r-2 border-solid border-gray-900 rotate-45 '></div>
      </div>

    </header>
  )
}