import hay from '../assets/images/hay.jpg'
import * as action from '../store/actions'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

function SidebarAdmin() {
   const dispatch = useDispatch()
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
                        dispatch(action.logout())
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
               <img className="app-sidebar__user-avatar m-auto" src={hay} width="50px" alt="User Image" />
               <div>
                  <p className="app-sidebar__user-name"></p>
                  <p className="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
               </div>
            </div>
            <hr />
            <ul className="app-menu">
               <li>
                  <Link lassName="app-menu__item " to="/sinhviens">
                     <i className="app-menu__icon bx bx-id-card" /> <span className="app-menu__label">Quản lý sinh viên</span>
                  </Link>
               </li>
               <li>
                  <a className="app-menu__item" href="table-data-product.html">
                     <i className="app-menu__icon bx bx-purchase-tag-alt" />
                     <span className="app-menu__label">Quản lý sản phẩm</span>
                  </a>
               </li>
               <li>
                  <a className="app-menu__item" href="table-data-oder.html">
                     <i className="app-menu__icon bx bx-task" />
                     <span className="app-menu__label">Quản lý đơn hàng</span>
                  </a>
               </li>
            </ul>
         </aside>
      </div>
   )
}
export default SidebarAdmin
