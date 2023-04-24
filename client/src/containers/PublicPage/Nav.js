import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
   const { isLoggedInSinhvien } = useSelector((state) => state.auth)
   return (
      <div className="h-full p-2 bg-[#dbdbdb] border-t-8 border-[#fe8606] rounded-t m-1 font-bold h-[42px] flex items-center uppercase">
         <NavLink to="/" className="mr-4 text-[10px] text-[#355170] hover:text-[#993333] hover:underline">
            TRANG CHỦ
         </NavLink>
         {!isLoggedInSinhvien ? (
            <>
               <NavLink className="mr-4 text-[10px] text-[#355170] hover:text-[#993333] hover:underline" to="/">
                  GÓP Ý KIẾN
               </NavLink>
               <NavLink className="hover:text-[#993333] text-[10px] text-[#355170] hover:underline" to="/contact">
                  LIÊN HỆ
               </NavLink>
            </>
         ) : (
            <>
               <NavLink
                  className="mr-4 text-[10px] text-[#355170] hover:text-[#993333] hover:underline"
                  to="/dangkymonhoc"
               >
                  Đăng ký môn học
               </NavLink>
               <NavLink className=" mr-4 hover:text-[#993333] text-[10px] text-[#355170] hover:underline" to="/hocphi">
                  Xem học phí
               </NavLink>
               <NavLink className=" mr-4 hover:text-[#993333] text-[10px] text-[#355170] hover:underline" to="/diem">
                  Xem điểm
               </NavLink>
               <NavLink
                  className=" mr-4 hover:text-[#993333] text-[10px] text-[#355170] hover:underline"
                  to="/thongtincanhan"
               >
                  Sửa TT cá nhân
               </NavLink>
            </>
         )}
      </div>
   )
}

export default Nav
