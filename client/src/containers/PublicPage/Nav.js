import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Nav() {
   const { isLoggedIn } = useSelector((state) => state.auth)
   return (
      <div className="h-full p-2 bg-[#dbdbdb] border-t-8 border-[#fe8606] rounded-t m-1 font-bold h-[42px] flex items-center uppercase">
         <Link className="mr-4 text-[10px] text-[#355170] hover:text-[#993333] hover:underline" to="/" exact="true">
            TRANG CHỦ
         </Link>
         {!isLoggedIn ? (
            <>
               <Link className="mr-4 text-[10px] text-[#355170] hover:text-[#993333] hover:underline" to="/">
                  GÓP Ý KIẾN
               </Link>
               <Link className="hover:text-[#993333] text-[10px] text-[#355170] hover:underline" to="/contact">
                  LIÊN HỆ
               </Link>
            </>
         ) : (
            <>
               <Link
                  className="mr-4 text-[10px] text-[#355170] hover:text-[#993333] hover:underline"
                  to="/dangkymonhoc"
               >
                  Đăng ký môn học
               </Link>
               <Link className=" mr-4 hover:text-[#993333] text-[10px] text-[#355170] hover:underline" to="/hocphi">
                  Xem học phí
               </Link>
               <Link className=" mr-4 hover:text-[#993333] text-[10px] text-[#355170] hover:underline" to="/diem">
                  Xem điểm
               </Link>
               <Link
                  className=" mr-4 hover:text-[#993333] text-[10px] text-[#355170] hover:underline"
                  to="/thongtincanhan"
               >
                  Sửa TT cá nhân
               </Link>
            </>
         )}
      </div>
   )
}

export default Nav
