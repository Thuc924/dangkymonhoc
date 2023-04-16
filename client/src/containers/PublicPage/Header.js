import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import banner from '../../assets/images/BANNER-STU.png'
import { logout } from '../../store/actions'

function Header() {
   const dispatch = useDispatch()
   const { isLoggedIn, sinhvien } = useSelector((state) => state.auth)
   return (
      <div className="text-[12px]">
         <img className="w-full" src={banner} alt="Banner Stu" />
         <div className="mt-2 text-right">
            {isLoggedIn ? (
               <>
                  <span className="mr-4 text-red-500">
                     Chào bạn {sinhvien.tensv} ({sinhvien.mssv})
                  </span>
                  <Link className="mr-4 font-bold text-red-500 text-[12px]" to="/resetPass">
                     Thay đổi mật khẩu
                  </Link>
                  <button className="mb-0 mr-4 font-bold text-red-500" onClick={() => dispatch(logout())}>
                     Thoát
                  </button>
               </>
            ) : (
               <>
                  <span className="mr-4 text-red-500">Chào bạn</span>
                  <Link className="mr-4 font-bold text-red-500" to="/login">
                     Đăng nhập
                  </Link>
               </>
            )}

            <select className="border-2 border-[black]" defaultValue>
               <option value={null}>-- Font --</option>
               <option value="unicode">Font Unicode</option>
               <option value="ABC">Font ABC</option>
               <option value="VI">Font VI</option>
               <option value="text">Text không dấu</option>
            </select>
         </div>
      </div>
   )
}

export default Header
