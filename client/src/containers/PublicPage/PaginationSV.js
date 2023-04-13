import { useSelector } from 'react-redux'
import { PageNumbersSV } from '../../components'
import { useEffect, useState } from 'react'

function PaginationSV({ number }) {
   const { count, sinhviens } = useSelector((state) => state.sinhvien)
   const [arrPage, setArrPage] = useState([])
   const [currentPage, setcurrentPage] = useState(+number)
   const [isHideEnd, setIsHideEnd] = useState(false)
   const [isHideStart, setIsHideStart] = useState(false)
   const handlePageNumber = () => {
      let max = Math.floor(count / sinhviens.length)
      let arrayNumber = []

      for (let i = 1; i <= max; i++) {
         arrayNumber.push(i)
      }

      return arrayNumber.length > 3
         ? arrayNumber.filter((i) => i < 4)
         : arrayNumber
   }
   useEffect(() => {
      let maxPage = Math.floor(+count / +sinhviens.length)
      let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1
      let start = currentPage - 1 <= 0 ? 1 : currentPage - 1
      let temp = []
      for (let i = start; i <= end; i++) temp.push(i)

      setArrPage(temp)

      currentPage >= maxPage - 1 ? setIsHideEnd(true) : setIsHideEnd(false)

      currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false)
   }, [count, sinhviens, currentPage])
   return (
      <div className="flex items-center justify-center gap-2">
         {!isHideStart && (
            <PageNumbersSV
               icon={'< <'}
               text={1}
               setcurrentPage={setcurrentPage}
               type="start"
            />
         )}
         {!isHideStart && <PageNumbersSV text={'...'} />}
         {arrPage.length > 0 &&
            arrPage.map((p) => {
               return (
                  <PageNumbersSV
                     key={p}
                     text={p}
                     setcurrentPage={setcurrentPage}
                     currentPage={currentPage}
                  />
               )
            })}
         {!isHideEnd && <PageNumbersSV text={'...'} />}
         {!isHideEnd && (
            <PageNumbersSV
               icon={'> >'}
               type="end"
               text={Math.floor(+count / +sinhviens.length)}
               setcurrentPage={setcurrentPage}
            />
         )}
      </div>
   )
}
export default PaginationSV
