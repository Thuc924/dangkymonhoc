import hay from '../assets/images/hay.jpg'
import * as action from '../store/actions'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { linkRoute } from '../ultils/Common/constant'
import { useEffect, useState } from 'react'

function SidebarAdmin() {
   const [admins, setAdmins] = useState({})
   const dispatch = useDispatch()
   const { admin } = useSelector((state) => state.auth)
   useEffect(() => {
      const getAdmin = () => {
         setAdmins(admin)
      }
      getAdmin()
   }, [])
   return (
      <div>
         {/* Navbar*/}
         <header className="app-header">
            {/* Sidebar toggle button*/}
            <a className="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar" />
            {/* Navbar Right Menu*/}
            <ul className="app-nav">
               {/* User Menu*/}
               <li>
                  <button
                     className="app-nav__item"
                     onClick={() => {
                        dispatch(action.logoutAdmin())
                     }}
                  >
                     <i className="bx bx-log-out bx-rotate-180" />{' '}
                  </button>
               </li>
            </ul>
         </header>
         {/* Sidebar menu*/}
         <div className="app-sidebar__overlay" data-toggle="sidebar" />
         <aside className="app-sidebar">
            <div className="app-sidebar__user">
               <div>
                  <p className="app-sidebar__user-name"></p>
                  <p className="app-sidebar__user-designation text-white">
                     Chào mừng {' - '}
                     <Link className="text-red-500 font-bold hover:underline cursor-pointer" to={linkRoute.TT_ADMIN}>
                        {admins.tenqtv}
                     </Link>
                  </p>
               </div>
            </div>
            <hr />
            <ul className="app-menu">
               <li>
                  <Link className="app-menu__item" to={linkRoute.HOME_ADMIN}>
                     <i className="app-menu__icon bx bx-home" />
                     <span className="app-menu__label">Trang chủ</span>
                  </Link>
               </li>
               <li>
                  <Link className="app-menu__item" to={linkRoute.SINHVIEN}>
                     <i className="app-menu__icon bx bx-id-card" />
                     <span className="app-menu__label">Quản lý sinh viên</span>
                  </Link>
               </li>
               <li>
                  <Link className="app-menu__item" to={linkRoute.MONHOC_ADMIN}>
                     <i className="app-menu__icon bx bx-purchase-tag-alt" />
                     <span className="app-menu__label">Quản lý môn học</span>
                  </Link>
               </li>
               <li>
                  <Link className="app-menu__item" to={linkRoute.KHOA_ADMIN}>
                     <i className="app-menu__icon bx bx-task" />
                     <span className="app-menu__label">Quản lý khoa</span>
                  </Link>
               </li>
               <li>
                  <Link className="app-menu__item" to={linkRoute.LOP_ADMIN}>
                     <i className="app-menu__icon bx bx-task" />
                     <span className="app-menu__label">Quản lý lớp</span>
                  </Link>
               </li>
               <li>
                  <Link className="app-menu__item" to={linkRoute.MHTC_ADMIN}>
                     <i className="app-menu__icon bx bx-task" />
                     <span className="app-menu__label">Quản lý môn học tổ chức</span>
                  </Link>
               </li>
               <li>
                  <Link className="app-menu__item" to={linkRoute.HOCKY_ADMIN}>
                     <i className="app-menu__icon bx bx-task" />
                     <span className="app-menu__label">Quản lý học kỳ</span>
                  </Link>
               </li>
               <li>
                  <Link className="app-menu__item" to={linkRoute.DS_SV}>
                     <i className="app-menu__icon bx bx-task" />
                     <span className="app-menu__label">DSSV đăng ký môn học</span>
                  </Link>
               </li>
            </ul>
         </aside>
      </div>
   )
}
export default SidebarAdmin
