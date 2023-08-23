
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { useEffect, useState } from "react"


type Article = {
  id            :number,
  content       :string,
  diaryId       :number,
  userId        :string,
  createdAt     :Date,
  updatedAt     :Date,
  user: {
    name:string,
    image:string,
  },
}

type ArticleProps = {
  diaryId: number;
}

export default function Article({diaryId}:ArticleProps) {
  
  const [articles, setArticles] = useState<Article[]>();
  const [page, setPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>();

  const [loading, setLoading] = useState(true);

  const hundleTopPage = (()=>{setPage(0)});
  const hundlePrevPage = (()=>{setPage((prevPage)=>page-1)});
  const hundleNextPage = (()=>{setPage((prevPage)=>page+1)});
  const hundleLastPage = (()=>{setPage(Number(lastPage))});
  
  const getArticles = (async ()=> {
    const response = await fetch(`/api/articles/?id=${diaryId}`);
    const articles:Article[] = await response.json();
    setArticles(articles);
    const lastPage = Math.floor((articles.length-1)/2);
    setLastPage(lastPage);
  })
  
  useEffect(()=>{
    getArticles();
  },[])

  const dispDate=(createDate:Date)=>{
    const date = new Date(createDate);
    const weekDay: {
      [key: number]: string;
    } = {
      0: '日',
      1: '月',
      2: '火',
      3: '水',
      4: '木',
      5: '金',
      6: '土',
    };
    const newDate:string = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日(${weekDay[Number(date.getDay())]}) ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    return newDate;
  }


  return (
    <div className="w-full h-full">
    <div className="flex w-full px-28 absolute h-[640px] pt-14 pb-24">
      <div className="mr-12 w-1/2">
        <div className="mb-5 flex items-center h-[55px]">
          <div className="flex flex-col mr-3">
            {articles && articles[(page*2)] && <Image className="mx-auto" src={articles[(page*2)].user.image} alt={""} width={40} height={40}></Image>}
            <span className="text-[8px]">{articles && articles[(page*2)] && articles[(page*2)].user.name}</span>
          </div>
          <p className="text-xs">{articles && articles[(page*2)] && dispDate(articles[(page*2)].createdAt)}</p>
        </div>
        <div>
          <p className="text-sm h-[330px]">
            {articles && articles[(page*2)] && articles[(page*2)].content}
          </p>
        </div>
        <div className="flex items-center justify-start mt-8 h-[50px]">
          <span className="block mr-16 text-xl font-bold">{page*2+1}</span>
          {page != 0 &&
            <Image onClick={hundleTopPage} className="mr-5" src="/back-btn.png" alt="back-button" width={50} height={50}></Image>
          }
          {page != 0 &&
            <Image onClick={hundlePrevPage} className="mr-5" src="/one-back-btn.png" alt="one-back-button" width={50} height={50}></Image>
          }
        </div>
      </div>

      <div className="w-1/2">
        <div className="mb-5 flex items-center h-[55px]">
            <div className="flex flex-col mr-3">
              {articles && articles[(page*2)+1] && <Image className="mx-auto" src={articles[(page*2)+1].user.image} alt={""} width={40} height={40}></Image>}
              <span className="text-[8px]">{articles && articles[(page*2)+1] && articles[(page*2)+1].user.name}</span>
            </div>
            <p className="text-xs">{articles && articles[(page*2)+1] && dispDate(articles[(page*2)+1].createdAt)}</p>
          </div>
          <div>
            <p className="text-sm h-[330px]">
              {articles && articles[(page*2)+1] && articles[(page*2)+1].content}
              </p>
          </div>
          <div className="flex items-center justify-end mt-8  h-[50px]">
            {page != lastPage && 
              <Image onClick={hundleNextPage} className="mr-5" src="/one-forward-btn.png" alt="one-forward-button" width={50} height={50}></Image>
            }
            {page != lastPage &&
              <Image onClick={hundleLastPage} className="mr-5" src="/end-btn.png" alt="forward-button" width={50} height={50}></Image>
            }
            <span className="block ml-16 text-xl font-bold">{page*2+2}</span>
          </div>
        </div>

    </div>
    {/* <div className="flex mb-20 h-12 absolute top-[480px] left-1/2 -translate-x-1/2 justify-around w-full">
      <div className="flex items-center">
        <span className="block mr-16 text-xl font-bold">{page*2+1}</span>
        {page != 0 &&
          <Image onClick={hundleTopPage} className="mr-5" src="/back-btn.png" alt="back-button" width={50} height={50}></Image>
        }
        {page != 0 &&
          <Image onClick={hundlePrevPage} className="mr-5" src="/one-back-btn.png" alt="one-back-button" width={50} height={50}></Image>
        }
      </div>
      <div className="flex items-center">
        {page != lastPage && 
          <Image onClick={hundleNextPage} className="mr-5" src="/one-forward-btn.png" alt="one-forward-button" width={50} height={50}></Image>
        }
        {page != lastPage &&
          <Image onClick={hundleLastPage} className="mr-5" src="/end-btn.png" alt="forward-button" width={50} height={50}></Image>
        }
        <span className="block ml-16 text-xl font-bold">{page*2+2}</span>
      </div>
    </div> */}
    <div className="flex justify-center mb-20 h-12 absolute top-[680px] left-1/2 -translate-x-1/2">
      <button type="button" value={"false"} className="button mr-20 bg-gray w-40">戻る</button>
      <button type="button" className="button bg-white w-40">日記を書く</button>
    </div>
    </div>
  )
}
