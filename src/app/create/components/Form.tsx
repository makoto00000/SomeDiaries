"use client"
import Image from "next/image"
import Link from "next/link";

type Diaries =  {
  index: number;
  source: string;
  width: number;
  height: number;
  active: boolean;
}[]

type PeopleBtns = {
    value: number;
    text: string;
    active: boolean;
}[]

type FormProps = {
  title:string
  diaries:Diaries,
  requiredTitle?: boolean,
  changeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void, 
  requiredDiary?: boolean, 
  diaryClick: (e: React.MouseEvent<HTMLButtonElement>) => void, 
  peopleCountLists: number[], 
  requiredPeopleNum?: boolean, 
  peopleBtns: PeopleBtns, 
  peopleNumClick: (e: React.MouseEvent<HTMLButtonElement>) => void, 
  requiredRule?: boolean, 
  requiredRuleLength?: boolean, 
  ruleLength: number, 
  rule: string, 
  changeRule: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, 
  isSend: boolean,
  hundleComfirm: (e: React.MouseEvent<HTMLButtonElement>) => void, 
}

export default function Form({
    title, 
    requiredTitle, 
    diaries, 
    changeTitle, 
    requiredDiary, 
    diaryClick, 
    peopleCountLists, 
    requiredPeopleNum, 
    peopleBtns, 
    peopleNumClick, 
    requiredRule, 
    requiredRuleLength,
    ruleLength, 
    rule, 
    changeRule, 
    isSend, 
    hundleComfirm
  }:FormProps) {

  return (

    <main className="flex justify-center">
      <form action="" method="post">
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-5">1.タイトルを決める</h2>
          {!requiredTitle && <span className="text-errorColor font-bold mb-5 block">※ タイトルを入力してください</span>}
          <input value={title} className="w-full p-3 rounded-xl" type="text" onChange={changeTitle} />
        </div>
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-5">2.デザインを決める</h2>
          {!requiredDiary && <span className="text-errorColor font-bold mb-5 block">※ デザインを選択してください</span>}

          <div className="grid grid-cols-4 gap-10">
            {Object.values(diaries).map((diary) => {
              return(
                <button key={diary.index} value={diary.index} className={diary.active ? "bg-accentColor rounded-3xl" : ""} type="button"  onClick={diaryClick}>
                  <Image className="hover" src={diary.source} alt="diary image" width={diary.width} height={diary.height}></Image>
                </button>
              )
            })}
          </div>
        </div>
        <div className="mb-20">
          <div className="flex">
              <h2 className="text-2xl font-bold mb-5 mr-3">3.参加人数を決める</h2>
              <div className="flex">
              {peopleCountLists.map((list) => (
                <div key={list}>
                  <Image className="" src="/default-icon.png" alt="diary image" width={30} height={30}></Image>
                </div>
              ))}
              </div>
          </div>
          {!requiredPeopleNum && <span className="text-errorColor font-bold mb-5 block">※ 参加人数を選択してください</span>}
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
          {!requiredRule && <span className="text-errorColor font-bold mb-5 block">※ ルールを入力してください</span>}
          {!requiredRuleLength && <span className="text-errorColor font-bold mb-5 block">※ 400字以内で
          入力してください。</span>}
          <span className={!requiredRuleLength ? "text-errorColor" :""}> {ruleLength}文字</span>
          <textarea value={rule} className="w-full h-72 align-top p-3 rounded-xl" onChange={changeRule}/>
        </div>
        <div className="flex justify-center mb-20">
          <button type="button" className="button mr-20 bg-gray w-40"><Link className="block" href={{ pathname: '/'}}>キャンセル</Link></button>
          <button type="button" onClick={hundleComfirm} className={`w-40 ${isSend ? "button bg-white" : "falseButton bg-gray"}`}>確認</button>
        </div>
      </form>
    </main>

  )
}