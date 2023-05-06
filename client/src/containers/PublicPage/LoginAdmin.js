import '../../assets/css/main.css'
import '../../assets/css/util.css'
import team from '../../assets/images/team.jpg'

import * as action from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { toast } from 'react-toastify'
function LoginAdmin() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [userLogin, setUserLogin] = useState({
      msqtv: '',
      matkhau: '',
   })
   const { isLoggedInAdmin } = useSelector((state) => state.auth)
   const { admins } = useSelector((state) => state.admin)
   useEffect(() => {
      dispatch(action.getAllADmin())
      isLoggedInAdmin && navigate('/admin')
   }, [isLoggedInAdmin])
   const handleLogin = async () => {
      if (!userLogin.msqtv || !userLogin.matkhau) toast.error('Vui lòng nhập đầy đủ thông tin đăng nhập...!')
      const kq = admins.find((i) => i.msqtv === userLogin.msqtv)
      if (kq) {
         if (userLogin?.matkhau === kq.matkhau) {
            dispatch(action.loginAdmin(userLogin))
            navigate('/admin')
            toast.success('Đăng nhập thành công...!')
         } else toast.error('Mật khẩu không đúng...!')
      } else toast.error('Không tìm thấy quản trị viên...!')
   }
   const validate = (user) => {
      let invalids = 0
      if (!user.msqtv) invalids++
      if (!user.matkhau) invalids++
      return invalids
   }
   function showPassword() {
      var x = document.getElementById('password-field')
      if (x.type === 'password') {
         x.type = 'text'
      } else {
         x.type = 'password'
      }
   }
   return (
      <div className="limiter">
         <div className="container-login100">
            <div className="wrap-login100">
               <div className="login100-pic js-tilt" data-tilt>
                  <img src={team} alt="IMG" />
               </div>
               {/*=====TIÊU ĐỀ======*/}
               <form className="login100-form validate-form">
                  <span className="login100-form-title">
                     <b>ĐĂNG NHẬP HỆ THỐNG POS</b>
                  </span>
                  {/*=====FORM INPUT TÀI KHOẢN VÀ PASSWORD======*/}
                  <div className="wrap-input100 validate-input">
                     <input
                        className="input100"
                        type="text"
                        placeholder="Tài khoản quản trị"
                        name="username"
                        id="username"
                        onChange={(e) => {
                           setUserLogin({
                              ...userLogin,
                              msqtv: e.target.value,
                           })
                        }}
                     />
                     <span className="focus-input100" />
                     <span className="symbol-input100">
                        <i className="bx bx-user" />
                     </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                     <input
                        autoComplete="off"
                        className="input100"
                        type="password"
                        placeholder="Mật khẩu"
                        name="current-password"
                        id="password-field"
                        onChange={(e) => {
                           setUserLogin({
                              ...userLogin,
                              matkhau: e.target.value,
                           })
                        }}
                     />
                     <span
                        onClick={showPassword}
                        toggle="#password-field"
                        className="bx fa-fw bx-hide field-icon click-eye"
                     />
                     <span className="focus-input100" />
                     <span className="symbol-input100">
                        <i className="bx bx-key" />
                     </span>
                  </div>
                  {/*=====ĐĂNG NHẬP======*/}
                  <div className="container-login100-form-btn">
                     <input type="button" defaultValue="Đăng nhập" id="submit" onClick={handleLogin} />
                  </div>
                  {/*=====LINK TÌM MẬT KHẨU======*/}
                  <div className="text-right p-t-12">
                     <a className="txt2" href="/forgot.html">
                        Bạn quên mật khẩu?
                     </a>
                  </div>
               </form>
               {/*=====FOOTER======*/}
               <div className="text-center p-t-70 txt2">
                  Phần mềm quản lý bán hàng <i className="far fa-copyright" aria-hidden="true" />
                  <a className="txt2" href="https://www.facebook.com/truongvo.vd1503/">
                     {' '}
                     Code bởi Trường{' '}
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginAdmin
