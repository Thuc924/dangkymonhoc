import { Footer, Header, Nav } from '../PublicPage'
import 'tippy.js/dist/tippy.css'
import '../../assets/css/main.css'
import { createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const hocKyContext = createContext()
function DefaultLayout({ children }) {
   const { sinhvien } = useSelector((state) => state.auth)

   const [hocky, setHocky] = useState('')
   const date = new Date()
   const year = date.getFullYear().toString()?.slice(2, 4)
   const month = date.getMonth() + 1
   const nienKhoa = sinhvien?.mssv?.slice(3, 5)
   useEffect(() => {
      if (+nienKhoa === +year) {
         if (month >= 7 && month <= 12) {
            setHocky('HK1')
         } else if (month >= 1 && month <= 6) {
            setHocky('HK2')
         }
      } else if (+nienKhoa + 1 === +year) {
         if (month >= 7 && month <= 12) {
            setHocky('HK3')
         } else if (month >= 1 && month <= 6) {
            setHocky('HK4')
         }
      } else if (+nienKhoa + 2 === +year) {
         if (month >= 7 && month <= 12) {
            setHocky('HK5')
         } else if (month >= 1 && month <= 6) {
            setHocky('HK6')
         }
      } else if (+nienKhoa + 3 === +year) {
         if (month >= 7 && month <= 12) {
            setHocky('HK7')
         } else if (month >= 1 && month <= 6) {
            setHocky('HK8')
         }
      }
   }, [])
   return (
      <hocKyContext.Provider value={hocky}>
         <div className="m-auto m-0 bg-white h-full">
            {/* <div className='w-full h-full cover relative bottom-0 top-[106px] right-0 left-0 bg-transparent bg-repeat'>
				<img
					className='w-full h-full bg-repeat'
					src={require("../../assets/images/dai-hoc-cong-nghe-sai-gon-1.webp")}
				/>
			</div> */}
            <div className="min-h-[1000px] absolute z-20 top-0 right-0 left-0 bottom-0">
               <Header />
               <div className="w-[1200px] m-auto shadow shadow-black">
                  <Nav />
                  <article className="bg-[#dddd] w-[100%] min-h-[742px] ">{children}</article>
                  <Footer />
               </div>
            </div>
         </div>
      </hocKyContext.Provider>
   )
}
export default DefaultLayout
