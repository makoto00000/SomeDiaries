"use client"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type query = {
  title: string, 
  diaryNum: number,
  diarySource: string, 
  people: number, 
  rule: string
}

export default function Form() {

  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.has("title")) {
      const requery:query = {
        title: String(searchParams.get("title")), 
        diaryNum: Number(searchParams.get("diaryNum")),
        diarySource: String(searchParams.get("diarySource")), 
        people: Number(searchParams.get("people")), 
        rule: String(searchParams.get("rule"))
      }
      setTitle(String(requery.title));
      const list:number[] = [];
      for (let i = 0; i < requery.people; i++) {
        list.push(i);    
      }
      setList(list);
      setPeopleNum(requery.people);
      let newPeopleBtns = {...peopleBtns};
      newPeopleBtns[requery.people-2].active = true;
      setPeopleBtns(newPeopleBtns);
      let newDiaries = {...diaries};
      newDiaries[Number(requery.diaryNum)].active = true;
      setDiaries(newDiaries);
      setDiary(String(requery.diarySource));
      setRule(String(requery.rule));
    }
  },[])

  const[title,setTitle] = useState<string>("");
  const [lists,setList] = useState<number[]>([]);

  const[peopleNum,setPeopleNum] = useState<number>(0);

  const[peopleBtns,setPeopleBtns] = useState([
    {value:2, text:"2人", active:false},
    {value:3, text:"3人", active:false},
    {value:4, text:"4人", active:false},
    {value:5, text:"5人", active:false},
    {value:6, text:"6人", active:false},
    {value:7, text:"7人", active:false},
    {value:8, text:"8人", active:false},
  ])
  const[diaryNum,setDiaryNum] = useState<number>();
  const[diary,setDiary] = useState<string>("");
  const[diaries,setDiaries] = useState([
    {index:1,source:"/diary_1.png",width:150,height:150, active:false},
    {index:2,source:"/diary_2.png",width:150,height:150, active:false},
    {index:3,source:"/diary_3.png",width:150,height:150, active:false},
    {index:4,source:"/diary_4.png",width:150,height:150, active:false},
    {index:5,source:"/diary_5.png",width:150,height:150, active:false},
    {index:6,source:"/diary_6.png",width:150,height:150, active:false},
    {index:7,source:"/diary_7.png",width:150,height:150, active:false},
    {index:8,source:"/diary_8.png",width:150,height:150, active:false},
    {index:9,source:"/diary_9.png",width:150,height:150, active:false},
    {index:10,source:"/diary_10.png",width:150,height:150, active:false},
  ]);
  const[rule, setRule] = useState<string>("");

  const changeTitle=(e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }

  const diaryClick=(e:React.MouseEvent<HTMLButtonElement>) => {
    let index = Number(e.currentTarget.value);
    let newDiaries = {...diaries};
    for(let i = 0; i < Object.values(newDiaries).length; i++) {
      newDiaries[i].active = false;
    }
    newDiaries[index-1].active = true;
    setDiaries(newDiaries);
    setDiary(newDiaries[index-1].source);
    setDiaryNum(index);
  }

  const peopleNumClick=(e: React.MouseEvent<HTMLButtonElement>) => {
    let count = Number(e.currentTarget.value);
    let newLists = [];
    let newPeopleBtns = {...peopleBtns};

    for (let i = 0; i < count; i++) {
      newLists.push(i);
    }
    setList(newLists);

    for (let i = 0; i < Object.values(newPeopleBtns).length; i++) {
      newPeopleBtns[i].active = false;
    }
    newPeopleBtns[count-2].active = true;
    setPeopleBtns(newPeopleBtns);
    setPeopleNum(newPeopleBtns[count-2].value);
  }

  const changeRule=(e:React.ChangeEvent<HTMLInputElement>) => {
    setRule(e.currentTarget.value);
  }

  let query = {
    title: title, 
    diaryNum: diaryNum,
    diarySource: diary, 
    people: peopleNum, 
    rule: rule
  }
  
  // const parentMethodHundle = (e:React.MouseEvent<HTMLButtonElement>) => {
  //   let value = Boolean(e.currentTarget.value);
  //   parentVisibleMethod.comfilmVisibleChange(value);
  //   parentQueryMethod.queryChange(query);
  // }

  return (

    <main className="flex justify-center">
      <form action="" method="post">
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-5">1.タイトルを決める</h2>
          <input value={title} className="w-full p-3 rounded-xl" type="text" onChange={changeTitle} />
        </div>
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-5">2.デザインを決める</h2>
          <div className="grid grid-cols-4 gap-10">
            {Object.values(diaries).map((diary) => {
              return(
                <button key={diary.index} value={diary.index} className={diary.active ? "bg-accentColor rounded-3xl" : ""} type="button"  onClick={diaryClick}>
                  <Image className="hover" src={diary.source} alt="diary image" width={diary.width} height={diary.height} priority={true}></Image>
                </button>
              )
            })}
          </div>
        </div>
        <div className="mb-20">
          <div className="flex">
              <h2 className="text-2xl font-bold mb-5 mr-3">3.参加人数を決める</h2>
              <div className="flex">
              {lists.map((list) => (
                <div key={list}>
                  <Image className="" src="/default-icon.png" alt="diary image" width={30} height={30}></Image>
                </div>
              ))}
              </div>
          </div>

          <div className="flex justify-between">
            {Object.values(peopleBtns).map((btn) => {
              return(
                <button key={btn.value} onClick={peopleNumClick} value={btn.value} type="button" className={btn.active ? "button mr-5 bg-accentColor" : "button mr-5 bg-white"}>{btn.text}</button>
              )
            })}
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-5">4.ルールを決める</h2>
          <input value={rule} className="w-full h-72 align-top p-3 rounded-xl" type="text" onChange={changeRule}/>
        </div>
          {/* <Button /> */}
        <div className="flex justify-center mb-20">
          <button type="button" className="button mr-20 bg-gray w-40"><Link className="block" href={{ pathname: '/'}}>キャンセル</Link></button>
          <button type="button" className="button bg-white w-40 "><Link className="block" href={{ pathname: '/create/comfirm', query: query}}>確認</Link></button>
          {/* <button type="button" value="true" className="button bg-white w-40">確認</button> */}
        </div>

      </form>
    </main>

  )
}