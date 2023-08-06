
import Button from "@/app/components/Button";
import Image from "next/image"
import { useState } from "react";

export default function Form() {

  let [lists,setList] = useState<number[]>([]);
  const hundleClick=(e: React.MouseEvent<HTMLButtonElement>) => {
      let count = Number(e.currentTarget.value);
      let newList = [];
      for (let i = 0; i < count; i++) {
        newList.push(i);
      }
      setList(newList);
  }

  const BUTTONS = [
    {value:2,text:"2人"},
    {value:3,text:"3人"},
    {value:4,text:"4人"},
    {value:5,text:"5人"},
    {value:6,text:"6人"},
    {value:7,text:"7人"},
    {value:8,text:"8人"},
  ]
  const DIARIES = [
    {index:1,source:"/diary_1.png",width:150,height:150},
    {index:2,source:"/diary_2.png",width:150,height:150},
    {index:3,source:"/diary_3.png",width:150,height:150},
    {index:4,source:"/diary_4.png",width:150,height:150},
    {index:5,source:"/diary_5.png",width:150,height:150},
    {index:6,source:"/diary_6.png",width:150,height:150},
    {index:7,source:"/diary_7.png",width:150,height:150},
    {index:8,source:"/diary_8.png",width:150,height:150},
    {index:9,source:"/diary_9.png",width:150,height:150},
    {index:10,source:"/diary_10.png",width:150,height:150}

  ]
  return (

    <main className="flex justify-center">
      <form action="" method="post">
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-5">1.タイトルを決める</h2>
          <input className="w-full p-3 rounded-xl" type="text" />
        </div>
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-5">2.デザインを決める</h2>
          <div className="grid grid-cols-4 gap-10">
            {DIARIES.map((diary) => {
              return(
                <div key={diary.index}>
                  <Image className="hover" src={diary.source} alt="diary image" width={diary.width} height={diary.height}></Image>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mb-20">
          <div className="flex">
              <h2 className="text-2xl font-bold mb-5 mr-3">3.参加人数を決める</h2>
              <div className="flex">
              {lists.map((index) => (
                <div key={index}>
                  <Image className="" src="/default-icon.png" alt="diary image" width={30} height={30}></Image>
                </div>
              ))}
              </div>
          </div>

          <div className="flex justify-between">
            {BUTTONS.map((button) => {
              return(
                <button onClick={hundleClick} value={button.value} type="button" className="button mr-5 bg-white">{button.text}</button>
              )
            })}
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-5">4.ルールを決める</h2>
          <input className="w-full p-3 rounded-xl" type="text" />
        </div>
          <Button />
      </form>
    </main>

  )
}