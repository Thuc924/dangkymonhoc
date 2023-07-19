import '../../assets/css/main.css'
import * as actions from '../../store/actions'
import { linkRoute } from '../../ultils/Common/constant'
import { Button } from '../../components'

import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import bcryptjs from 'bcryptjs'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircleQuestion, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'

function LoginUser() {
   const navigate = useNavigate()

   const dispatch = useDispatch()
   const { sinhviens } = useSelector((state) => state.sinhvien)
   const { isLoggedInSinhvien } = useSelector((state) => state.auth)
   const [loginSV, setLoginSV] = useState({
      mssv: '',
      matkhau: '',
   })
   const [showIcon, setShowIcon] = useState(false)
   useEffect(() => {
      dispatch(actions.getListSinhvien())
      isLoggedInSinhvien && navigate(linkRoute.HOME_SV)
      // isLoggedInSinhvien &&
      // 	navigate(`${linkRoute.LOGIN_SV}${linkRoute.PAGE_NOT_FOUND}`)
      // isLoggedInSinhvien && alert("Bạn đã đăng nhập...!")
   }, [isLoggedInSinhvien])

   const handleLoginSVKeyDown = (e) => {
      if (e.keyCode === 13) {
         if (!loginSV.mssv || !loginSV.matkhau) {
            toast.error('Vui lòng nhập đầy đủ tài khoản và mật khẩu...!')
         } else {
            const findSV = sinhviens.find((i) => i.mssv === loginSV.mssv)
            if (!findSV) {
               toast.error('Không tìm thấy sinh viên...!')
            } else if (loginSV.matkhau === findSV.matkhau) {
               dispatch(actions.loginSinhvien(loginSV))
               toast.success('Đăng nhập thành công...!')
            } else toast.error('Mật khẩu không khớp...!')
         }
      }
   }
   const handleLoginSVClick = () => {
      if (!loginSV.mssv || !loginSV.matkhau) {
         toast.error('Vui lòng nhập đầy đủ tài khoản và mật khẩu...!')
      } else {
         const findSV = sinhviens.find((i) => i.mssv === loginSV.mssv)
         if (!findSV) {
            toast.error('Không tìm thấy sinh viên...!')
         } else if (bcryptjs.compareSync(loginSV.matkhau, findSV.matkhau)) {
            dispatch(actions.loginSinhvien(loginSV))
            toast.success('Đăng nhập thành công...!')
         } else toast.error('Mật khẩu không khớp...!')
      }
   }
   function showPassword() {
      var x = document.getElementById('password-field')
      if (x.type === 'password') x.type = 'text'
      setShowIcon(true)
   }
   function hiddenPassword() {
      var x = document.getElementById('password-field')
      if (x.type === 'text') x.type = 'password'

      setShowIcon(false)
   }
   console.log(loginSV)
   return (
      <main className="w-full h-full relative">
         <div className="w-full h-full">
            <img className="w-full h-full" src={require('../../assets/images/dai-hoc-cong-nghe-sai-gon-1.webp')} />
         </div>
         <div className="fixed w-[600px] h-[550px] bg-[#dddd] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl py-[43px] px-[16px]">
            <img className="w-[80px] h-[80px] flex m-auto" src={require('../../assets/images/Logo_STU.png')} />
            <h3 className="text-center p-2 text-[32px] uppercase">Đăng nhập vào cổng đào tạo</h3>
            <div className="flex flex-col justify-start text-[18px]">
               <label className="italic m-0 cursor-pointer hover:underline" htmlFor="mssv">
                  Mã số sinh viên
               </label>
               <input
                  className="my-[12px] border-[1px] border-solid rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 text-pink-600 focus:text-pink-600 "
                  type="text"
                  placeholder="Nhập mã số sinh viên"
                  id="mssv"
                  onChange={(e) => setLoginSV({ ...loginSV, mssv: e.target.value.toUpperCase() })}
               />
               <label className="italic m-0 cursor-pointer hover:underline" htmlFor="password-field">
                  Mật khẩu
               </label>
               <div className="relative w-full">
                  <input
                     className="my-[12px] w-full border-[1px] border-solid rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 text-pink-600 focus:text-pink-600"
                     type="password"
                     placeholder="Nhập mật khẩu"
                     id="password-field"
                     onKeyDown={(e) => handleLoginSVKeyDown(e)}
                     onChange={(e) =>
                        setLoginSV({
                           ...loginSV,
                           matkhau: e.target.value,
                        })
                     }
                  />
                  {showIcon ? (
                     <FontAwesomeIcon className="p-2 icon-show-hidden-pass" icon={faEye} onClick={hiddenPassword} />
                  ) : (
                     <FontAwesomeIcon className="p-2 icon-show-hidden-pass" icon={faEyeSlash} onClick={showPassword} />
                  )}
               </div>
            </div>
            <div className="m-0 text-right p-2 underline italic">
               <Link to={linkRoute.QUEN_MK}>
                  <span className="cursor-pointer hover:text-[#80BFCD] text-[16px]">
                     Quên mật khẩu
                     <FontAwesomeIcon className="px-2" icon={faCircleQuestion} />
                  </span>
               </Link>
            </div>
            <Button
               onClick={handleLoginSVClick}
               width={'w-full'}
               bg={'bg-gradient-to-r from-sky-500 to-indigo-500'}
               rounded={'rounded-xl'}
               label={'Đăng nhập'}
               textColor={'text-white'}
            />
         </div>
      </main>
   )
}
export default LoginUser
