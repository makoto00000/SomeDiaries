"use client"
import Image from "next/image"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TopPage from "../components/TopPage";
import Article from "../components/Article";


export default function read() {

  const params = useParams();
  const diaryId = params.id;

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

  const [diary, setDiary] = useState<Diary>();
  const [peopleCountLists, setPeopleCountLists] = useState<number[]>();


  useEffect(() => {
    const getDiary = async () => {
      const response = await fetch(`/api/diaries?id=${diaryId}`);
      const diaryData:Diary[] = await response.json();
      setDiary(diaryData[0]);
      
      let list:number[] = [];
      for (let i = 0; i < Number(diaryData[0].peopleCount); i++) {
        list.push(i);
      };
      setPeopleCountLists(list);
    };

      getDiary();

  },[])

  const TopPageProps = {
    diary: diary as Diary,
    peopleCountLists: peopleCountLists as number[],
  }

  const ArticleProps = {
    diaryId: Number(diaryId),
  }

  return (
    <div className="relative h-[800px]">
        <Image className="absolute" src={"/diarybg.png"} alt={""} width={1024} height={500}></Image>

        {/* <TopPage {...TopPageProps} /> */}
        <Article {...ArticleProps} />
  
    </div>
    
    )
  
}