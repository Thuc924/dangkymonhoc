import { memo } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

const notActive = 'px-[18px] py-[15px] rounded-md border-2 m-[0.5px]'
const active =
   'px-[18px] py-[15px] bg-[#E13427] text-white rounded-md border-2 m-[0.5px]'

function PageNumbers({ text, currentPage, icon, setcurrentPage, type }) {
   const navigate = useNavigate()

   const handleChangePage = () => {
      !(text === '...') && setcurrentPage(+text)

      navigate({
         pathname: '/admin/sinhviens',
         search: createSearchParams({
            page: text,
         }).toString(),
      })
   }

   return (
      <div
         className={
            +text === +currentPage
               ? active
               : `${notActive} ${
                    text === '...'
                       ? 'cursor-text'
                       : 'cursor-pointer hover:bg-gray-300'
                 }`
         }
         onClick={handleChangePage}
      >
         {icon || text}
      </div>
   )
}

export default memo(PageNumbers)
