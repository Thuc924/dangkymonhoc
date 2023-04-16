import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginSinhvien } from '../../store/actions'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function LoginUser() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { isLoggedIn } = useSelector((state) => state.auth)
   const [loginSV, setLoginSV] = useState({
      mssv: '',
      matkhau: '',
   })
   const handleLoginSV = () => {
      dispatch(loginSinhvien(loginSV))
   }
   console.log(loginSV)
   return (
      <div className="bg-[#dbdbdb] flex items-center h-[34px] p-[10px] justify-end">
         <label htmlFor="mssv" className="m-0 text-[10px] bg-[#efefef] px-[8px] py-[5px] ">
            Tên đăng nhập
         </label>
         <input
            type="text"
            className="border-[1px] rounded-r-sm mr-[24px] p-[2px]"
            id="mssv"
            onChange={(e) => setLoginSV({ mssv: e.target.value })}
         />
         <label htmlFor="pass" className="m-0 text-[10px] bg-[#efefef] px-[8px] py-[5px] ">
            Mật khẩu
         </label>
         <input
            type="password"
            className="border-[1px] rounded-r-sm p-[2px]"
            id="pass"
            onChange={(e) => setLoginSV({ ...loginSV, matkhau: e.target.value })}
         />
         <button
            type="submit"
            className="text-[10px] mb-0 ml-[12px] px-[8px] py-[5px] bg-[#efefef] rounded-r-sm hover:text-[#FF0000] hover:underline"
            onClick={handleLoginSV}
         >
            Đăng nhập
         </button>
      </div>
   )
}
export default LoginUser
