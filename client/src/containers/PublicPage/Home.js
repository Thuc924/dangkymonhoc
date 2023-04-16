import { useSelector } from 'react-redux'
import { Gioithieu } from '../../components'
import LoginUser from './LoginUser'

function Home() {
   const { isLoggedIn } = useSelector((state) => state.auth)
   return (
      <div className="h-full">
         <div className="m-1">
            {!isLoggedIn && <LoginUser />}
            <div className="rounded h-[30px] bg-[#83bfcd] flex items-center">
               <span className="p-2 uppercase font-bold text-[12px]">Thông báo</span>
            </div>
            <div>
               <Gioithieu />
            </div>
         </div>
      </div>
   )
}

export default Home
