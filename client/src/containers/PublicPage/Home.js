import { useSelector } from 'react-redux'
import { Gioithieu } from '../../components'
import { Thongbao } from '../PublicPage'
import LoginUser from './LoginUser'

function Home() {
   const { isLoggedInSinhvien } = useSelector((state) => state.auth)
   return (
      <div className="h-full">
         <div className="m-1">
            {!isLoggedInSinhvien && <LoginUser />}
            <div className="rounded h-[30px] bg-[#83bfcd] flex items-center">
               <span className="p-2 uppercase font-bold text-[12px]">Thông báo</span>
            </div>
            <div>
               <Gioithieu />
               <Thongbao />
            </div>
         </div>
      </div>
   )
}

export default Home
