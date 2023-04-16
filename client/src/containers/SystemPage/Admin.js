import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/css/main2.css'
import { getListKhoa, getListLop, getListSinhvien } from '../../store/actions'
import { getListMonhoc } from '../../store/actions/monhoc'
import { linkRoute } from '../../ultils/Common/constant'

function Admin() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { isLoggedIn } = useSelector((state) => state.auth)
   const { sinhviens } = useSelector((state) => state.sinhvien)
   const { khoas } = useSelector((state) => state.khoa)
   const { monhocs } = useSelector((state) => state.monhoc)
   const { lops } = useSelector((state) => state.lop)
   useEffect(() => {
      isLoggedIn === false && navigate('/login')
      dispatch(getListSinhvien())
      dispatch(getListKhoa())
      dispatch(getListMonhoc())
      dispatch(getListLop())
   }, [isLoggedIn])
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="row">
               <div className="col-md-12">
                  <div className="app-title">
                     <ul className="app-breadcrumb breadcrumb">
                        <li className="breadcrumb-item">
                           <a href="#">
                              <b>Bảng điều khiển</b>
                           </a>
                        </li>
                     </ul>
                     <div id="clock" />
                  </div>
               </div>
            </div>
            <div className="row">
               {/*Left*/}
               <div className="col-md-12 col-lg-6">
                  <div className="row">
                     {/* col-6 */}
                     <div className="col-md-6">
                        <Link className="widget-small primary coloured-icon" to={linkRoute.SINHVIEN}>
                           <i className="icon bx bxs-user-account fa-3x" />
                           <div className="info">
                              <h4>Tổng số sinh viên</h4>
                              <p>
                                 <b>{sinhviens.length} sinh viên</b>
                              </p>
                              <p className="info-tong">Tổng số sinh viên được quản lý.</p>
                           </div>
                        </Link>
                     </div>
                     {/* col-6 */}
                     <div className="col-md-6">
                        <Link className="widget-small info coloured-icon" to={linkRoute.MONHOC_ADMIN}>
                           <i className="icon bx bxs-data fa-3x" />
                           <div className="info">
                              <h4>Tổng số môn học</h4>
                              <p>
                                 <b>{monhocs.length} môn học</b>
                              </p>
                              <p className="info-tong">Tổng số môn học được quản lý.</p>
                           </div>
                        </Link>
                     </div>
                     {/* col-6 */}
                     <div className="col-md-6">
                        <Link className="widget-small warning coloured-icon" to={linkRoute.KHOA_ADMIN}>
                           <i className="icon bx bxs-shopping-bags fa-3x" />
                           <div className="info">
                              <h4>Tổng số khoa</h4>
                              <p>
                                 <b>{khoas.length} khoa</b>
                              </p>
                              <p className="info-tong">Tổng số khoa được quản lý.</p>
                           </div>
                        </Link>
                     </div>
                     {/* col-6 */}
                     <div className="col-md-6">
                        <Link className="widget-small danger coloured-icon" to={linkRoute.LOP_ADMIN}>
                           <i className="icon bx bxs-error-alt fa-3x" />
                           <div className="info">
                              <h4>Tổng số lớp</h4>
                              <p>
                                 <b>{lops.length} lớp</b>
                              </p>
                              <p className="info-tong">Tổng số khoa được quản lý.</p>
                           </div>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}
export default Admin
