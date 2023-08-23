
import Image from "next/image"

type Diary = {
  id: number,
  title: string,
  diaryDesignId: number,
  peopleCount: number,
  rule: string,
  isExchange: boolean,
  createdAt: Date,
  updatedAt: Date,
}

type TopPageProps = {
  diary: Diary,
  peopleCountLists: number[],

}

export default function TopPage({diary, peopleCountLists}:TopPageProps) {

  return (
    <div className="w-full">
    <div className="flex w-full px-28 absolute h-full pt-14">
      <div className="mr-10 w-1/2 h-[450px]">
        <div className="mb-10">
          <h2 className="text-3xl mb-5">タイトル</h2>
          <p className="text-xl">{diary && diary.title}</p>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl mb-5">参加者</h2>
          <div className="grid grid-cols-4 gap-4">
          {peopleCountLists?.map((list)=>(
            <div>
              {list==0 ? <span className="block text-center">作成者</span> : <span className="block w-1 h-6"> </span>}
              <div className="border rounded-full border-gray-500 p-1">
                <Image key={list} className="mr-5 border rounded-full border-gray" src="/default-icon.png" alt="diary image" width={60} height={60}></Image>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div className="w-1/2  h-[450px] overflow-y-hidden pl-3 pr-5">
        <div className="h-full">
          <h2 className="text-3xl mb-3">ルール</h2>
          <p className="text-xl break-words whitespace-pre-wrap overflow-y-hidden h-full">{diary && diary.rule}</p>
        </div>
      </div>
    </div>
    <div className="flex mb-20 h-12 absolute top-[480px] left-1/2 -translate-x-1/2 justify-around w-full">
      <div className="flex items-center">
        <span className="block mr-16 text-xl font-bold">1</span>
        <Image className="mr-5" src="/back-btn.png" alt="diary image" width={50} height={50}></Image>
        <Image className="mr-5" src="/one-back-btn.png" alt="diary image" width={50} height={50}></Image>
      </div>
      <div className="flex items-center">
        <Image className="mr-5" src="/one-forward-btn.png" alt="diary image" width={50} height={50}></Image>
        <Image className="mr-5" src="/end-btn.png" alt="diary image" width={50} height={50}></Image>
        <span className="block ml-16 text-xl font-bold">2</span>

      </div>
    </div>
    <div className="flex justify-center mb-20 h-12 absolute top-[680px] left-1/2 -translate-x-1/2">
      <button type="button" value={"false"} className="button mr-20 bg-gray w-40">戻る</button>
      <button type="button" className="button bg-white w-40">日記を書く</button>
    </div>
    </div>
  )
}
