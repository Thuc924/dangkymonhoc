import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListSinhvien, loginSinhvien } from '../../store/actions'
import { toast } from 'react-toastify'
import bcryptjs from 'bcryptjs'
function LoginUser() {
   const dispatch = useDispatch()
   const { sinhviens } = useSelector((state) => state.sinhvien)
   const [loginSV, setLoginSV] = useState({
      mssv: '',
      matkhau: '',
   })
   useEffect(() => {
      dispatch(getListSinhvien())
   }, [])
   const handleLoginSV = () => {
      if (!loginSV.mssv || !loginSV.matkhau) {
         toast.error('Vui lòng nhập đầy đủ tài khoản và mật khẩu...!')
      } else {
         const findSV = sinhviens.find((i) => i.mssv === loginSV.mssv)
         if (!findSV) {
            toast.error('Không tìm thấy sinh viên...!')
         } else if (bcryptjs.compareSync(loginSV.matkhau, findSV.matkhau)) {
            dispatch(loginSinhvien(loginSV))
         } else toast.error('Mật khẩu không khớp...!')
      }
   }
   return (
      <div className="bg-[#dbdbdb] flex items-center h-[34px] p-[10px] justify-end">
         <label htmlFor="mssv" className="m-0 text-[10px] bg-[#efefef] px-[8px] py-[5px] ">
            Tên đăng nhập
         </label>
         <input
            type="text"
            className="border-[1px] rounded-r-sm mr-[24px] p-[2px]"
            id="mssv"
            onChange={(e) => setLoginSV({ ...loginSV, mssv: e.target.value })}
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
