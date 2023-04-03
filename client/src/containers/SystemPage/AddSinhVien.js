import { Link } from 'react-router-dom'

import SidebarAdmin from '../../components/SidebarAdmin'
import { apiLogin } from '../../services/auth'

function AddSinhVien() {
   return (
      <div className="app sidebar-mini rtl">
         <SidebarAdmin />
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb">
                  <li className="breadcrumb-item">Danh sách nhân viên</li>
                  <li className="breadcrumb-item">
                     <a href="#">Thêm nhân viên</a>
                  </li>
               </ul>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <h3 className="tile-title">Tạo mới nhân viên</h3>
                     <div className="tile-body">
                        <form className="row">
                           <div className="form-group col-md-4">
                              <label className="control-label">Mã số sinh viên</label>
                              <input className="form-control" type="text" />
                           </div>
                           <div className="form-group col-md-4">
                              <label className="control-label">Họ và tên</label>
                              <input className="form-control" type="text" required />
                           </div>
                           <div className="form-group col-md-4">
                              <label className="control-label">Địa chỉ email</label>
                              <input className="form-control" type="text" required />
                           </div>
                           <div className="form-group col-md-4">
                              <label className="control-label">Mật khẩu</label>
                              <input className="form-control" type="password" required />
                           </div>
                           <div className="form-group col-md-4">
                              <label className="control-label">Địa chỉ thường trú</label>
                              <input className="form-control" type="text" required />
                           </div>
                           <div className="form-group  col-md-4">
                              <label className="control-label">Số điện thoại</label>
                              <input className="form-control" type="number" required />
                           </div>
                           <div className="form-group col-md-4">
                              <label className="control-label">Ngày sinh</label>
                              <input className="form-control" type="date" />
                           </div>
                           <div className="form-group  col-md-3">
                              <label className="control-label">Nơi sinh</label>
                              <input className="form-control" type="text" required />
                           </div>
                           <div className="form-group col-md-3">
                              <label className="control-label">Giới tính</label>
                              <select className="form-control" id="exampleSelect2" required>
                                 <option>-- Chọn giới tính --</option>
                                 <option>Nam</option>
                                 <option>Nữ</option>
                              </select>
                           </div>
                           <div className="form-group col-md-12">
                              <label className="control-label">Ảnh 3x4 nhân viên</label>&nbsp;
                              <input type="file" name="ImageUpload" />
                           </div>
                        </form>
                     </div>
                     <button className="btn btn-save" type="button">
                        Lưu lại
                     </button>
                     <Link className="btn btn-cancel" to="/sinhviens">
                        Hủy bỏ
                     </Link>
                  </div>
               </div>
            </div>
         </main>
         {/*
  MODAL
*/}
         <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content">
                  <div className="modal-body">
                     <div className="row">
                        <div className="form-group  col-md-12">
                           <span className="thong-tin-thanh-toan">
                              <h5>Tạo chức vụ mới</h5>
                           </span>
                        </div>
                        <div className="form-group col-md-12">
                           <label className="control-label">Nhập tên chức vụ mới</label>
                           <input className="form-control" type="text" required />
                        </div>
                     </div>
                     <br />
                     <button className="btn btn-save" type="button">
                        Lưu lại
                     </button>
                     <a className="btn btn-cancel" data-dismiss="modal" href="#">
                        Hủy bỏ
                     </a>
                     <br />
                  </div>
                  <div className="modal-footer"></div>
               </div>
            </div>
         </div>
         {/*
  MODAL
*/}
      </div>
   )
}

export default AddSinhVien
