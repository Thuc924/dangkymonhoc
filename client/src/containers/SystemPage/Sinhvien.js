import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'

import * as acions from '../../store/actions'
import '../../assets/css/main2.css'
import { PaginationSV } from '../PublicPage'
import { linkRoute } from '../../ultils/Common/constant'
import Modal from '../../components/Modal'
import { imgs } from '../../assets/images'
import { toast } from 'react-toastify'
function Sinhvien() {
   const navigate = useNavigate()
   const listRef = useRef()
   const dispatch = useDispatch()
   const [params] = useSearchParams()
   const { sinhviens, token } = useSelector((state) => state.sinhvien)
   const { isLoggedInAdmin } = useSelector((state) => state.auth)

   const [showSV, setShowSV] = useState(false)
   const [sinhvien, setSinhvien] = useState([])

   useEffect(() => {
      let offset = params.get('pageSV') ? +params.get('pageSV') - 1 : 0
      dispatch(acions.getListSinhvienLimit(offset))
      listRef.current.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      })
   }, [isLoggedInAdmin, params.get('pageSV'), token])

   const handleRemoveSinhvien = (sv) => {
      dispatch(acions.deleteSinhvienByMSSV(sv.mssv))
      toast.success('Xoá thành công...!')
   }
   const handleShowModal = (sv) => {
      setSinhvien(sv)
      setShowSV(true)
   }

   return (
      <div ref={listRef} className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách sinh viên</b>
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
                              <Link className="btn btn-add btn-sm" to={linkRoute.SINHVIEN_ADD} title="Thêm">
                                 <i className="fas fa-plus" />
                                 Tạo mới sinh viên
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
                                 <th width={150}>Mã số sinh viên</th>
                                 <th width={150}>Họ và tên</th>
                                 <th width={20}>Avatar</th>
                                 <th width={300}>Địa chỉ</th>
                                 <th width={220}>Địa chỉ email</th>
                                 <th>Ngày sinh</th>
                                 <th width={150}>Giới tính</th>
                                 <th>SĐT</th>
                                 <th width={150}>Nơi sinh</th>
                                 <th width={100}>Lớp</th>
                                 <th width={100}>Tính năng</th>
                              </tr>
                           </thead>
                           {sinhviens &&
                              sinhviens.length > 0 &&
                              sinhviens.map((item) => {
                                 return (
                                    <tbody key={item.id}>
                                       <tr>
                                          <td width={10}>
                                             <input type="checkbox" name="check1" defaultValue={1} />
                                          </td>
                                          <td>{item.mssv}</td>
                                          <td>{item.tensv}</td>
                                          <td>
                                             <img
                                                className="img-card-person"
                                                src={item.avatar.slice(0, item.avatar.length - 4)}
                                                alt="Avatar"
                                             />
                                          </td>
                                          <td>{item.diachi} </td>
                                          <td>{item.email}</td>
                                          <td width={150}>{item.ngaysinh}</td>
                                          <td>{item.gioitinh}</td>
                                          <td>{item.sodienthoai}</td>
                                          <td>{item.noisinh}</td>
                                          <td>{`${item.mssv.slice(0, 1)}${item.mssv.slice(3, 5)}_${item.mslop}`}</td>
                                          <td className="table-td-center">
                                             <button
                                                className="btn btn-primary btn-sm trash"
                                                type="button"
                                                title="Xóa"
                                                onClick={() => handleRemoveSinhvien(item)}
                                             >
                                                <i className="fas fa-trash-alt" />
                                             </button>
                                             <button
                                                className="btn btn-primary btn-sm edit"
                                                type="button"
                                                title="Sửa"
                                                onClick={() => {
                                                   handleShowModal(item)
                                                }}
                                             >
                                                <i className="fas fa-edit" />
                                             </button>
                                          </td>
                                       </tr>
                                    </tbody>
                                 )
                              })}
                        </table>
                     </div>
                  </div>
                  <PaginationSV number={params.get('page')} />
               </div>
            </div>
         </main>
         {showSV && <Modal title={'Chỉnh sửa thông tin sinh viên'} setShow={setShowSV} sinhvien={sinhvien} />}
      </div>
   )
}
export default Sinhvien
