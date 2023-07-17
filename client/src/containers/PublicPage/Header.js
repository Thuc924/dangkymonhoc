import '../../assets/css/main.css'

import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as actions from '../../store/actions'
import { linkRoute } from '../../ultils/Common/constant'
import { faBookmark, faNoteSticky, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
   const dispatch = useDispatch()
   const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

   const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)

   const listMH = JSON.parse(localStorage.getItem('mhdk')) || []
   const [list, setList] = useState([])
   useEffect(() => {
      isLoggedInSinhvien && dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
      let data = listMH.filter((i) => i.mssv === sinhvien.mssv)
      setList(data)
   }, [isLoggedInSinhvien, listMH?.length, list?.length])

   return (
      <header className="w-full bg-white px-[28px] py-[12px] min-h-[66px] flex justify-between items-center border-b-2 border-solid">
         <div className="flex items-center">
            <Link to={linkRoute.HOME_SV}>
               <img className="w-[450px] h-[70px] rounded-sm p-1" src={require('../../assets/images/logo1.png')} />
            </Link>
         </div>
         <img className="w-[110px] h-[80px]" src={require('../../assets/images/logo2.png')} />
         {/* <p className='m-0 px-2 font-bold text-[32px]'>
				TRƯỜNG ĐẠI HỌC CÔNG NGHỆ SÀI GÒN
			</p> */}
         {isLoggedInSinhvien ? (
            <div className="avatar p-2">
               <img
                  className="w-[45px] h-[45px] rounded-full relative cursor-pointer"
                  src={sinhvien && require(`../../assets/images/${sinhvien?.avatar}`)}
               />
               <ul className="sinhvien-draw text-[Navy]">
                  <div className="py-4">
                     <li className="flex items-center">
                        <img
                           className="w-[40px] h-[40px] rounded-full relative"
                           src={sinhvien && require(`../../assets/images/${sinhvien?.avatar}`)}
                        />
                        <div className="flex flex-col justify-center items-center px-2">
                           <span className="font-bold">{sinhvien.tensv}</span>
                           <span className="text-[#757575]">{sinhvien.mssv}</span>
                        </div>
                     </li>
                     {/* <li>{sinhvien.mssv}</li> */}
                  </div>
                  <div className="text-[Navy]">
                     <NavLink
                        style={({ isActive, isPending }) => {
                           return {
                              fontWeight: isActive ? 'bold' : '',
                              // color: isActive ? "black" : "",
                           }
                        }}
                        to={linkRoute.THONGTIN_SV}
                        className="text-[Navy] text-[14px] py-[10px] border-t-2 border-solid border-[#333] flex items-center hover:font-bold cursor-pointer"
                     >
                        <FontAwesomeIcon icon={faUser} className="p-2" />
                        Thông tin cá nhân
                     </NavLink>
                     <NavLink
                        style={({ isActive, isPending }) => {
                           return {
                              fontWeight: isActive ? 'bold' : '',
                              // color: isActive ? "black" : "",
                           }
                        }}
                        to={linkRoute.PHIEU_DKMH}
                        className="text-[Navy] text-[14px] py-[10px] border-t-2 border-solid border-[#333] flex items-center hover:font-bold cursor-pointer"
                     >
                        <FontAwesomeIcon icon={faNoteSticky} className="p-2" />
                        Phiếu đăng ký môn học
                     </NavLink>
                     <NavLink
                        style={({ isActive, isPending }) => {
                           return {
                              fontWeight: isActive ? 'bold' : '',
                              // color: isActive ? "black" : "",
                           }
                        }}
                        to={linkRoute.KQ_DKMH}
                        className="text-[Navy] text-[14px] py-[10px] border-t-2 border-solid border-[#333] flex items-center hover:font-bold cursor-pointer"
                     >
                        <FontAwesomeIcon icon={faBookmark} className="p-2" />
                        Kết quả đăng ký môn học
                     </NavLink>
                     <li className="text-[Navy] text-[14px] py-[10px] border-t-2 border-solid border-[#333] flex items-center hover:font-bold cursor-pointer">
                        <button onClick={() => dispatch(actions.logoutSinhvien())} className="m-0">
                           <FontAwesomeIcon className="px-2" icon={faRightFromBracket} />
                           Logout
                        </button>
                     </li>
                  </div>
               </ul>
            </div>
         ) : (
            <div className="p-1">
               <span>Xin chào</span>
               <Link to={linkRoute.LOGIN_SV} className="hover:underline mx-2 ">
                  Đăng nhập
               </Link>
            </div>
         )}
      </header>
   )
}

export default Header
