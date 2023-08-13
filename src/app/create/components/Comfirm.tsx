"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";


export default function Comfirm() {

const searchParams = useSearchParams();

const query = {
  title: String(searchParams.get("title")), 
  diaryNum: Number(searchParams.get("diaryNum")),
  diarySource: String(searchParams.get("diarySource")), 
  people: Number(searchParams.get("people")), 
  rule: String(searchParams.get("rule"))
}

type Data = {
    title: string,
    design: string,
    people: number,
    rule:string,
    isExchange: boolean,
}
const[data,setData] = useState<Data>();

useEffect( () => {
  let newData:Data = {title: query.title, design: query.diarySource, people: query.people, rule: query.rule, isExchange: true};
  setData(newData);
},[])

const hundleSaveClick = async () => {
  await fetch('/api/diary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });
  // const resData = await response.json();
  // setDataSource(notes);

  // setContent('');
  
}

interface ICONS {
  index: number
}
let icons:ICONS[] = [];
const count = query.people;
for (let i = 0; i < count; i++) {
  icons.push({index:i});
}

  // const parentMethodHundle = (e:React.MouseEvent<HTMLButtonElement>) => {
  //   let value = Boolean(e.currentTarget.value);
  //   parentVisibleMethod.comfilmVisibleChange(value);
  //   parentQueryMethod.queryChange(parentQuery);
  // };

  return (
  <div>
    <div className="bg-diary-bg bg-center bg-contain bg-no-repeat flex justify-center px-5 py-32 max-w-6xl">
      <div className="flex w-full px-24">
        <div className="mr-20 w-1/2">
          <div className="mb-10">
            <h2 className="text-3xl mb-5">タイトル</h2>
            <p>{/*parentQuery.title*/}</p>
            <p className="text-xl">{searchParams.get("title")}</p>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl mb-5">デザイン</h2>

              <Image className="" src={searchParams.get("diarySource") as string | StaticImport} alt="diary image" width={120} height={120}></Image>


          </div>
          <div className="mb-10">
            <h2 className="text-3xl mb-5">参加人数</h2>
            <div className="flex">
            {icons.map((icon)=>(
            <Image key={icon.index} className="" src="/default-icon.png" alt="diary image" width={40} height={40}></Image>
            ))}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <h2 className="text-3xl mb-5">ルール</h2>
            <p>{/*parentQuery.rule*/}</p>
            <p className="text-xl">{searchParams.get("rule")}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center mb-20">
      <button type="button" value={"false"} className="button mr-20 bg-gray w-40"><Link className="block" href={{ pathname: '/create', query: query}}>キャンセル</Link></button>
      {/* <button type="button" className="button bg-white w-40 "><Link className="block" href={{ pathname: '/create/comfirm', query: query}}>確認</Link></button> */}
      <button type="button" className="button bg-white w-40" onClick={hundleSaveClick}>確認</button>
    </div>
  </div>
  


  )
}

