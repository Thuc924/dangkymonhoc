import { Link } from 'react-router-dom'

import '../../assets/css/main2.css'
import * as acions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { Pagination } from '../PublicPage'
import { linkRoute } from '../../ultils/Common/constant'
import { useSearchParams } from 'react-router-dom'

function Sinhvien() {
   const listRef = useRef()
   const dispatch = useDispatch()
   const [params] = useSearchParams()
   const { token, sinhviens, msg } = useSelector((state) => state.sinhvien)
   useEffect(() => {
      let offset = params.get('page') ? +params.get('page') - 1 : 0
      dispatch(acions.getListSinhvienLimit(offset))
      listRef.current.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      })
   }, [params.get('page'), msg, token])
   const handleRemoveSinhvien = (sv) => {
      console.log(sv.mssv)
      dispatch(acions.deleteSinhvienByMSSV(sv.mssv))
      alert('Delete succes...!')
   }
   console.log(sinhviens.map((a) => a.avatar))
   return (
      <div ref={listRef} className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách nhân viên</b>
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
                              <Link
                                 className="btn btn-add btn-sm"
                                 to={linkRoute.SINHVIEN_ADD}
                                 title="Thêm"
                              >
                                 <i className="fas fa-plus" />
                                 Tạo mới nhân viên
                              </Link>
                           </div>

                           <div className="col-sm-2">
                              <a
                                 className="btn btn-delete btn-sm"
                                 type="button"
                                 title="Xóa"
                              >
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
                                 <th width={100}>Tính năng</th>
                              </tr>
                           </thead>
                           {sinhviens &&
                              sinhviens.length > 0 &&
                              sinhviens.map((sinhvien) => {
                                 return (
                                    <tbody key={sinhvien.id}>
                                       <tr>
                                          <td width={10}>
                                             <input
                                                type="checkbox"
                                                name="check1"
                                                defaultValue={1}
                                             />
                                          </td>
                                          <td>{sinhvien.mssv}</td>
                                          <td>{sinhvien.tensv}</td>
                                          <td>
                                             <img
                                                className="img-card-person"
                                                src={`../../assets/images/${sinhviens.avatar}`}
                                                alt="Avatar"
                                             />
                                          </td>
                                          <td>{sinhvien.diachi} </td>
                                          <td>{sinhvien.email}</td>
                                          <td width={150}>
                                             {sinhvien.ngaysinh}
                                          </td>
                                          <td>{sinhvien.gioitinh}</td>
                                          <td>{sinhvien.sodienthoai}</td>
                                          <td>{sinhvien.noisinh}</td>
                                          <td className="table-td-center">
                                             <button
                                                className="btn btn-primary btn-sm trash"
                                                type="button"
                                                title="Xóa"
                                                onClick={() =>
                                                   handleRemoveSinhvien(
                                                      sinhvien
                                                   )
                                                }
                                             >
                                                <i className="fas fa-trash-alt" />
                                             </button>
                                             <button
                                                className="btn btn-primary btn-sm edit"
                                                type="button"
                                                title="Sửa"
                                                id="show-emp"
                                                data-toggle="modal"
                                                data-target="#ModalUP"
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
                  <Pagination number={params.get('page')} />
               </div>
            </div>
         </main>
      </div>
   )
}
export default Sinhvien
