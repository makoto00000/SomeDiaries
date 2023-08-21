"use client"
import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Modal from "@/app/components/Modal";

type ComfirmProps = {
  title: string,
  diarySource: string,
  peopleCountLists: number[],
  rule: string,
  hundleComfirm: (e: React.MouseEvent<HTMLButtonElement>) => void, 
  hundleSaveClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  isOpen: boolean,
}

export default function Comfirm({
    title, 
    diarySource, 
    peopleCountLists, 
    rule, 
    hundleComfirm, 
    hundleSaveClick, 
    isOpen
  }:ComfirmProps) {

  return (
  <div className="relative h-[800px]">
    {/* <div className="bg-diary-bg bg-center bg-contain bg-no-repeat flex justify-center px-5 max-w-6xl"> */}
      <Image className="absolute" src={"/diarybg.png"} alt={""} width={1024} height={500}></Image>
      <div className="flex w-full px-28 absolute h-full pt-14">
        <div className="mr-10 w-1/2 h-[450px] pl-5">
          <div className="mb-10">
            <h2 className="text-3xl mb-5">タイトル</h2>
            <p className="text-xl">{title}</p>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl mb-5">デザイン</h2>
              <Image className="" src={diarySource as string | StaticImport} alt="diary image" width={120} height={120}></Image>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl mb-5">参加人数</h2>
            <div className="flex">
            {peopleCountLists.map((list)=>(
            <Image key={list} className="" src="/default-icon.png" alt="diary image" width={40} height={40}></Image>
            ))}
            </div>
          </div>
        </div>
        <div className="w-1/2  h-[450px] overflow-y-hidden pl-8 pr-5">
          <div className="h-full">
            <h2 className="text-3xl mb-5">ルール</h2>
            <p className="text-xl break-words whitespace-pre-wrap overflow-y-hidden h-full">{rule}</p>
          </div>
        </div>
        <div className="flex justify-center mb-20 h-12 absolute top-[680px] left-1/2 -translate-x-1/2">
          <button type="button" onClick={hundleComfirm} value={"false"} className="button mr-20 bg-gray w-40">戻る</button>
          <button type="button" className="button bg-white w-40" onClick={hundleSaveClick}>登録</button>
        </div>
      
      </div>

    <Modal open={isOpen} modalText1="新しい日記が作成されました。" modalText2="早速最初の日記を書きましょう。" modalImage={diarySource} link="/" />

  </div>
  
  )
}

