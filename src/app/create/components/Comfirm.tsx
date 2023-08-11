import Image from "next/image";
import Button from "@/app/components/Button";
import React from "react";

export default function Comfirm() {
  return (
    <div className="bg-diary-bg bg-center bg-contain bg-no-repeat flex justify-center px-5 py-32 max-w-6xl">
    <div className="flex w-full px-24">
      <div className="mr-20 w-1/2">
        <div className="mb-10">
          <h2 className="text-3xl mb-5">タイトル</h2>
          <p>タイトルタイトルタイトルタイトル</p>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl mb-5">デザイン</h2>
          <Image className="" src="/diary_1.png" alt="diary image" width={150} height={150}></Image>

        </div>
        <div className="mb-10">
          <h2 className="text-3xl mb-5">参加人数</h2>
          <div className="flex">
          <Image className="" src="/default-icon.png" alt="diary image" width={50} height={50}></Image>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <h2 className="text-3xl mb-5">ルール</h2>
          <p>・ルール1<br />・ルール2 <br />・ルール3</p>
        </div>
      </div>
    </div>
  </div>


  )
}