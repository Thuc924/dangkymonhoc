import '../../assets/css/main.css'
import '../../assets/css/util.css'
import team from '../../assets/images/team.jpg'

import * as action from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Login() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [userLogin, setUserLogin] = useState({
      msqtv: '',
      matkhau: '',
   })
   const { isLoggedIn } = useSelector((state) => state.auth)
   useEffect(() => {
      isLoggedIn && navigate('/admin')
   }, [isLoggedIn])
   const handleLogin = async () => {
      let invalids = validate(userLogin)
      console.log(invalids)
      if (invalids === 0) {
         dispatch(action.login(userLogin))
         // alert('Đăng nhập thành công...!')
         navigate('/admin')
      }
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
                              msqtv: userLogin.msqtv,
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
                     <input
                        type="button"
                        defaultValue="Đăng nhập"
                        id="submit"
                        onClick={handleLogin}
                     />
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
                  Phần mềm quản lý bán hàng{' '}
                  <i className="far fa-copyright" aria-hidden="true" />
                  <a
                     className="txt2"
                     href="https://www.facebook.com/truongvo.vd1503/"
                  >
                     {' '}
                     Code bởi Trường{' '}
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login
