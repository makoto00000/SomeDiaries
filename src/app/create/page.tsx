"use client"
import Form from "./components/Form"
import Comfirm from "./components/Comfirm"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"

type PostData = {
  title: string, 
  diaryDesignId: number,
  peopleCount: number, 
  rule: string,
  diaryUsers:{
    create:{
      userId: string,
    }
  }
}

export default function create() {

  const { data:session } = useSession();
	const user = session?.user

  const [postData, setPostData] = useState<PostData>();

  const[title,setTitle] = useState<string>("");
  const[diaryNum,setDiaryNum] = useState<number>();
  const[diarySource,setDiarySource] = useState<string>("");
  const[diaries,setDiaries] = useState([
    {index:1, source:"/diary_1.png", width:150,height:150, active:false},
    {index:2, source:"/diary_2.png", width:150,height:150, active:false},
    {index:3, source:"/diary_3.png", width:150,height:150, active:false},
    {index:4, source:"/diary_4.png", width:150,height:150, active:false},
    {index:5, source:"/diary_5.png", width:150,height:150, active:false},
    {index:6, source:"/diary_6.png", width:150,height:150, active:false},
    {index:7, source:"/diary_7.png", width:150,height:150, active:false},
    {index:8, source:"/diary_8.png", width:150,height:150, active:false},
    {index:9, source:"/diary_9.png", width:150,height:150, active:false},
  ]);

  const [peopleCountLists,setPeopleCountLists] = useState<number[]>([]);
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
    setDiarySource(newDiaries[index-1].source);
    setDiaryNum(index);
  }

  const peopleNumClick=(e: React.MouseEvent<HTMLButtonElement>) => {
    let count = Number(e.currentTarget.value);
    let newLists = [];
    let newPeopleBtns = {...peopleBtns};

    for (let i = 0; i < count; i++) {
      newLists.push(i);
    }
    setPeopleCountLists(newLists);

    for (let i = 0; i < Object.values(newPeopleBtns).length; i++) {
      newPeopleBtns[i].active = false;
    }
    newPeopleBtns[count-2].active = true;
    setPeopleBtns(newPeopleBtns);
    setPeopleNum(newPeopleBtns[count-2].value);
  }

  const[ruleLength, setRuleLength] = useState<number>(0);
  const changeRule=(e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setRule(e.currentTarget.value);
    setRuleLength(e.currentTarget.textLength);

  }


  const [requiredTitle, setRequiredTitle] = useState<boolean>();
  useEffect(()=> {
    title == "" ? setRequiredTitle(false) : setRequiredTitle(true)
  },[title])
  const [requiredDiary, setRequiredDiary] = useState<boolean>();
  useEffect(()=> {
    diarySource == "" ? setRequiredDiary(false) : setRequiredDiary(true)
  },[diarySource])
  const [requiredPeopleNum, setRequiredPeopleNum] = useState<boolean>();
  useEffect(()=> {
    peopleNum == 0 ? setRequiredPeopleNum(false) : setRequiredPeopleNum(true)
  },[peopleNum])
  const [requiredRule, setRequiredRule] = useState<boolean>();
  useEffect(()=> {
    rule == "" ? setRequiredRule(false) : setRequiredRule(true)
  },[rule])
  const [requiredRuleLength, setRequiredRuleLength] = useState<boolean>();
  useEffect(()=> {
    ruleLength > 400 ? setRequiredRuleLength(false) : setRequiredRuleLength(true)
  },[rule])

  const [isSend, setIsSend] = useState<boolean>(false);
  useEffect(()=> {
    {requiredTitle && requiredDiary && requiredPeopleNum && requiredRule && requiredRuleLength ? setIsSend(true) : setIsSend(false)}
  },[requiredTitle,requiredDiary,requiredPeopleNum,requiredRule,requiredRuleLength])

  const [isComfirm, setIsComfirm] = useState<boolean>(false);
  const hundleComfirm = ()=> {
      if (isSend) {
        const data:PostData = {
          title: title, 
          diaryDesignId: Number(diaryNum),
          peopleCount: peopleNum, 
          rule: rule,
          diaryUsers:{
            create: {
              userId: String(user?.id),
            }
          }
        }
        setPostData(data);
        setIsComfirm(!isComfirm);
      }
    }

  const[isOpen, setIsOpen] = useState<boolean>(false);

  
  const[thisDiaryId, setThisDiaryId] = useState<number>();

  const hundleSaveClick = async () => {
    await fetch('/api/diaries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...postData}),
    })
    .then((response) => response.json())
    .then((data) => setThisDiaryId(data.id))
    await setIsOpen(true);
  }


  const FormProps = {
    title:title,
    requiredTitle: requiredTitle,
    diaries:diaries,
    changeTitle: changeTitle, 
    requiredDiary: requiredDiary, 
    diaryClick: diaryClick, 
    peopleCountLists: peopleCountLists, 
    requiredPeopleNum: requiredPeopleNum, 
    peopleBtns: peopleBtns, 
    peopleNumClick: peopleNumClick, 
    requiredRule: requiredRule, 
    requiredRuleLength: requiredRuleLength, 
    ruleLength: ruleLength, 
    rule: rule, 
    changeRule: changeRule, 
    isSend: isSend,
    hundleComfirm: hundleComfirm,
  }

  const ComfirmProps = {
    title: title,
    diarySource: diarySource,
    peopleCountLists: peopleCountLists,
    rule: rule,
    hundleComfirm: hundleComfirm, 
    hundleSaveClick: hundleSaveClick,
    isOpen: isOpen,
    postData: postData,
    thisDiaryId: Number(thisDiaryId),
  }

  return (
    <main>
      {isComfirm ? <Comfirm {...ComfirmProps} /> : <Form {...FormProps} />}
    </main>
  )
}