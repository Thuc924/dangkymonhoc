import { useSelector } from 'react-redux'
import { PageNumbersMH } from '../../components'
import { useEffect, useState } from 'react'

function PaginationMH({ number }) {
   const { count, monhocs } = useSelector((state) => state.monhoc)
   const [arrPage, setArrPage] = useState([])
   const [currentPage, setcurrentPage] = useState(+number)
   const [isHideEnd, setIsHideEnd] = useState(false)
   const [isHideStart, setIsHideStart] = useState(false)
   const handlePageNumber = () => {
      let max = Math.floor(count / monhocs.length)
      let arrayNumber = []

      for (let i = 1; i <= max; i++) {
         arrayNumber.push(i)
      }

      return arrayNumber.length > 3
         ? arrayNumber.filter((i) => i < 4)
         : arrayNumber
   }
   useEffect(() => {
      let maxPage = Math.floor(+count / +monhocs.length)
      let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1
      let start = currentPage - 1 <= 0 ? 1 : currentPage - 1
      let temp = []
      for (let i = start; i <= end; i++) temp.push(i)

      setArrPage(temp)

      currentPage >= maxPage - 1 ? setIsHideEnd(true) : setIsHideEnd(false)

      currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false)
   }, [count, monhocs, currentPage])
   return (
      <div className="flex items-center justify-center gap-2">
         {!isHideStart && (
            <PageNumbersMH
               icon={'< <'}
               text={1}
               setcurrentPage={setcurrentPage}
               type="start"
            />
         )}
         {!isHideStart && <PageNumbersMH text={'...'} />}
         {arrPage.length > 0 &&
            arrPage.map((p) => {
               return (
                  <PageNumbersMH
                     key={p}
                     text={p}
                     setcurrentPage={setcurrentPage}
                     currentPage={currentPage}
                  />
               )
            })}
         {!isHideEnd && <PageNumbersMH text={'...'} />}
         {!isHideEnd && (
            <PageNumbersMH
               icon={'> >'}
               type="end"
               text={Math.floor(+count / +monhocs.length)}
               setcurrentPage={setcurrentPage}
            />
         )}
      </div>
   )
}
export default PaginationMH
