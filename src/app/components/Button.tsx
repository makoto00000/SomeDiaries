// export default function Button(backText:string,backLink:string,forwardText:string,forwardLink:string) {
//   return (
//     <div className="flex justify-center mb-20">
//       <button type="button" className="button mr-20 bg-gray w-40">{backText}</button>
//       <button type="submit" className="button bg-white w-40 ">{forwardText}</button>
//     </div>
//   )
// }
export default function Button(backText:string, forwardText:string) {

  // const parentMethodHundle = (e:React.MouseEvent<HTMLButtonElement>) => {
  //   const isVisible = boolean(e.currentTarget.value)
  //   parentMethod.hundleVisible()
  // }
  return (
    <div className="flex justify-center mb-20">
      <button type="button" className="button mr-20 bg-gray w-40">{backText}</button>
      <button type="button" className="button bg-white w-40">{forwardText}</button>
    </div>
  )
}