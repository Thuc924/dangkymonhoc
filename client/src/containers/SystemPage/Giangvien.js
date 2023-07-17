import { linkRoute } from '../../ultils/Common/constant'
import * as actions from '../../store/actions'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { compareValues } from '../../ultils/func'

function Giangvien() {
   const navigate = useNavigate()

   const dispatch = useDispatch()
   const { isLoggedInAdmin } = useSelector((state) => state.auth)
   const { giangviens, token, msg } = useSelector((state) => state.giangvien)
   console.log(giangviens)
   useEffect(() => {
      dispatch(actions.getListGiangvien())
      !isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
   }, [isLoggedInAdmin, token, msg])

   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách giảng viên</b>
                     </a>
                  </li>
               </ul>
               <div id="clock" />
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <div className="tile-body">
                        <div className="row element-button">
                           <div className="col-sm-2">
                              <Link className="btn btn-add btn-sm" to={linkRoute.ADD_GV_ADMIN} title="Thêm">
                                 <i className="fas fa-plus" />
                                 Thêm giảng viên
                              </Link>
                           </div>

                           <div className="col-sm-2">
                              <a className="btn btn-delete btn-sm" type="button" title="Xóa">
                                 <i className="fas fa-trash-alt" /> Xóa tất cả{' '}
                              </a>
                           </div>
                        </div>
                        <table
                           className="table table-hover table-bordered js-copytextarea"
                           cellPadding={0}
                           cellSpacing={0}
                           border={0}
                           id="sampleTable"
                        >
                           <thead>
                              <tr>
                                 <th width={10}>
                                    <input type="checkbox" id="all" />
                                 </th>
                                 <th width={150}>Mã số giảng viên</th>
                                 <th width={150}>Tên giảng viên</th>
                                 <th width={150}>Chức vụ</th>
                                 <th width={150}>Khoa</th>
                              </tr>
                           </thead>
                           {giangviens &&
                              giangviens.length > 0 &&
                              giangviens.sort(compareValues('chucvu', 'desc')).map((item) => {
                                 return (
                                    <tbody key={item.id}>
                                       <tr>
                                          <td width={10}>
                                             <input type="checkbox" name="check1" defaultValue={1} />
                                          </td>
                                          <td>{item.msgiangvien}</td>
                                          <td>{item.tengiangvien}</td>
                                          <td>{item.chucvu}</td>
                                          <td>{item.Khoa?.tenkhoa}</td>
                                       </tr>
                                    </tbody>
                                 )
                              })}
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}

export default Giangvien
