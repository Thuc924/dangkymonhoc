import { Link } from 'react-router-dom'

import '../../assets/css/main2.css'
import a1 from '../../assets/img-anhthe/1.jpg'
import a2 from '../../assets/img-anhthe/2.jpg'
import a3 from '../../assets/img-anhthe/3.jpg'
import a4 from '../../assets/img-anhthe/4.jpg'
import a5 from '../../assets/img-anhthe/5.jpg'
import a6 from '../../assets/img-anhthe/6.jpg'
import a7 from '../../assets/img-anhthe/7.jpg'
function Sinhvien() {
   var modal = document.getElementById('ModalUP')
   console.log(modal)
   return (
      <div className="app sidebar-mini rtl">
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
                              <Link className="btn btn-add btn-sm" to="/sinhviens/add" title="Thêm">
                                 <i className="fas fa-plus" />
                                 Tạo mới nhân viên
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
                                 <th width={300}>Địa chỉ email</th>
                                 <th>Mật khẩu</th>
                                 <th>Ngày sinh</th>
                                 <th>Giới tính</th>
                                 <th>SĐT</th>
                                 <th>Nơi sinh</th>
                                 <th width={100}>Tính năng</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td width={10}>
                                    <input type="checkbox" name="check1" defaultValue={1} />
                                 </td>
                                 <td>#CD12837</td>
                                 <td>Hồ Thị Thanh Ngân</td>
                                 <td>
                                    <img className="img-card-person" src={a1} alt="" />
                                 </td>
                                 <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                                 <td></td>
                                 <td></td>
                                 <td>12/02/1999</td>
                                 <td>Nữ</td>
                                 <td>0926737168</td>
                                 <td>Bán hàng</td>
                                 <td className="table-td-center">
                                    <button
                                       className="btn btn-primary btn-sm trash"
                                       type="button"
                                       title="Xóa"
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
                              <tr>
                                 <td width={10}>
                                    <input type="checkbox" name="check2" defaultValue={2} />
                                 </td>
                                 <td>#SX22837</td>
                                 <td>Trần Khả Ái</td>
                                 <td>
                                    <img className="img-card-person" src={a2} alt="" />
                                 </td>
                                 <td>6 Nguyễn Lương Bằng, Tân Phú, Quận 7, Hồ Chí Minh</td>
                                 <td></td>
                                 <td></td>
                                 <td>22/12/1999</td>
                                 <td>Nữ</td>
                                 <td>0931342432</td>
                                 <td>Bán hàng</td>
                                 <td>
                                    <button
                                       className="btn btn-primary btn-sm trash"
                                       type="button"
                                       title="Xóa"
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
                              <tr>
                                 <td width={10}>
                                    <input type="checkbox" name="check3" defaultValue={3} />
                                 </td>
                                 <td>#LO2871</td>
                                 <td>Phạm Thu Cúc</td>
                                 <td>
                                    <img className="img-card-person" src={a3} alt="" />
                                 </td>
                                 <td>Số 3 Hòa Bình, Phường 3, Quận 11, Hồ Chí Minh </td>
                                 <td></td>
                                 <td></td>
                                 <td>02/06/1998</td>
                                 <td>Nữ</td>
                                 <td>0931491997</td>
                                 <td>Thu ngân</td>
                                 <td>
                                    <button
                                       className="btn btn-primary btn-sm trash"
                                       type="button"
                                       title="Xóa"
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
                              <tr>
                                 <td width={10}>
                                    <input type="checkbox" />
                                 </td>
                                 <td>#SR28746</td>
                                 <td>Trần Anh Khoa</td>
                                 <td>
                                    <img className="img-card-person" src={a4} alt="" />
                                 </td>
                                 <td>19 Đường Nguyễn Hữu Thọ, Tân Hưng, Quận 7, Hồ Chí Minh </td>
                                 <td></td>
                                 <td></td>
                                 <td>18/02/1995</td>
                                 <td>Nam</td>
                                 <td>0916706633</td>
                                 <td>Tư vấn</td>
                                 <td>
                                    <button
                                       className="btn btn-primary btn-sm trash"
                                       type="button"
                                       title="Xóa"
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
                              <tr>
                                 <td width={10}>
                                    <input type="checkbox" />
                                 </td>
                                 <td>#KJS276</td>
                                 <td>Nguyễn Thành Nhân</td>
                                 <td>
                                    <img className="img-card-person" src={a5} alt="" />
                                 </td>
                                 <td>Số 13, Tân Thuận Đông, Quận 7, Hồ Chí Minh </td>
                                 <td></td>
                                 <td></td>
                                 <td>10/03/1996</td>
                                 <td>Nam</td>
                                 <td>0971038066</td>
                                 <td>Bảo trì</td>
                                 <td>
                                    <button
                                       className="btn btn-primary btn-sm trash"
                                       type="button"
                                       title="Xóa"
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
                              <tr>
                                 <td width={10}>
                                    <input type="checkbox" />
                                 </td>
                                 <td>#BS76228</td>
                                 <td>Nguyễn Đặng Trọng Nhân</td>
                                 <td>
                                    <img className="img-card-person" src={a6} alt="" />
                                 </td>
                                 <td>59C Nguyễn Đình Chiểu, Quận 3, Hồ Chí Minh </td>
                                 <td></td>
                                 <td></td>
                                 <td>23/07/1996</td>
                                 <td>Nam</td>
                                 <td>0846881155</td>
                                 <td>Dịch vụ</td>
                                 <td>
                                    <button
                                       className="btn btn-primary btn-sm trash"
                                       type="button"
                                       title="Xóa"
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
                              <tr>
                                 <td width={10}>
                                    <input type="checkbox" />
                                 </td>
                                 <td>#YUI21376</td>
                                 <td>Nguyễn Thị Mai</td>
                                 <td>
                                    <img className="img-card-person" src={a7} alt="" />
                                 </td>
                                 <td>Đường Số 3, Tân Tạo A, Bình Tân, Hồ Chí Minh</td>
                                 <td></td>
                                 <td></td>
                                 <td>09/12/2000</td>
                                 <td>Nữ </td>
                                 <td>0836333037</td>
                                 <td>Tư vấn</td>
                                 <td>
                                    <button className="btn btn-primary btn-sm trash" title="Xóa">
                                       <i className="fas fa-trash-alt" />
                                    </button>
                                    <button
                                       className="btn btn-primary btn-sm edit"
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
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}
export default Sinhvien
