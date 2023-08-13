"use client"
import { useState } from "react"
import Form from "./components/Form"
import Comfirm from "./components/Comfirm";

export default function create() {
  type query = {
    title: string, 
    diaryNum: number,
    diarySource: string, 
    people: number, 
    rule: string
  }
  const [comfilmVisible, setComfirmVisible] = useState(false);
  const [query, setQuery] = useState<query>({title: "", diaryNum:0, diarySource:"", people:0, rule:""});

  const comfirmVisibleChange = (isVisible:boolean) => {
    setComfirmVisible(isVisible);
  }
  const queryChange = (childQuery:query) => {
    setQuery(childQuery);
  }

  return (
    <main>
      {/* {comfilmVisible ? <Comfirm /> : <Form />} */}
      <Form />
    </main>
  )
}