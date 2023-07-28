import * as actions from '../../store/actions'

import { useDispatch } from 'react-redux'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Tippy from '@tippyjs/react'
import { linkRoute } from '../../ultils/Common/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function Quenmatkhau() {
   const navigate = useNavigate()

   const dispatch = useDispatch()

   const [emailResetPassword, setEmailResetPassword] = useState('')

   const sendEmailResetPassword = () => {
      if (!emailResetPassword) {
         toast.error('Vui lòng nhập email của bạn...!')
      } else {
         dispatch(actions.sendEmail(emailResetPassword))
         toast.success('Đã gửi email cập nhật mật khẩu...!')
         setEmailResetPassword('')
      }
   }
   return (
      <main className="min-h-[750px] relative">
         <div className="w-full h-full">
            <img className="w-full h-full" src={require('../../assets/images/dai-hoc-cong-nghe-sai-gon-1.webp')} />
         </div>

         <div className="fixed w-[600px] bg-[#dddd] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl py-[32px] px-[16px]">
            <Link to={linkRoute.LOGIN_SV} className="fixed top-0 left-0">
               <Tippy content="Quay lại">
                  <FontAwesomeIcon
                     icon={faArrowLeft}
                     className="p-2 text-[24px] cursor-pointer text-black hover:opacity-80"
                  />
               </Tippy>
            </Link>
            <img className="w-[80px] h-[80px] flex m-auto" src={require('../../assets/images/Logo_STU.jpg')} />
            <h4 className="p-2 uppercase text-center text-[32px]">Quên mật khẩu</h4>
            <div className="flex flex-col justify-start">
               <label className="italic m-0 cursor-pointer hover:underline" htmlFor="email">
                  Email
               </label>
               <input
                  className="border-[1px] border-solid rounded-md p-2 my-2 focus:outline-none focus:border-sky-500 focus:ring-1 text-pink-600 focus:text-pink-600"
                  type="email"
                  placeholder="example@gmail.com"
                  id="email"
                  onChange={(e) => setEmailResetPassword({ email: e.target.value })}
               />
            </div>

            <div className="flex justify-end">
               <button
                  className="w-[150px] border-[1px] border-solid rounded-sm bg-[#355170] text-white p-2 items-right hover:underline"
                  onClick={sendEmailResetPassword}
               >
                  Xác nhận
               </button>
            </div>
         </div>
      </main>
   )
}
export default Quenmatkhau
