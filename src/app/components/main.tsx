import Image from "next/image"

export default function Main () {
  return (
    <main className="flex justify-center flex-col"> 
      <Image className="" src="/eyecatch.png" alt="eyecatch" width={1440} height={0}></Image>
      <div className="p-20">
        <h2 className="text-4xl mb-8 font-bold">交換待ち日記</h2>
        <div  className="grid grid-cols-4 gap-10">
          <div className="hover">
            <Image className="mb-8" src="/diary_1.png" alt="diary image" width={300} height={300}></Image>
            <p className="">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
          </div>
          <div className="hover">
            <Image className="mb-8" src="/diary_2.png" alt="diary image" width={300} height={300}></Image>
            <p>タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
          </div>
          <div className="hover">
            <Image className="mb-8" src="/diary_3.png" alt="diary image" width={300} height={300}></Image>
            <p>タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
          </div>
          <div className="hover">
            <Image className="mb-8" src="/diary_4.png" alt="diary image" width={300} height={300}></Image>
            <p>タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
          </div>
          <div className="hover">
            <Image className="mb-8" src="/diary_5.png" alt="diary image" width={300} height={300}></Image>
            <p>タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
          </div>
        </div>
      </div>
    </main>
  )
}