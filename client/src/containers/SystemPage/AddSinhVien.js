import { Link, useNavigate } from 'react-router-dom'

import InputForm from '../../components/InputForm'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as actions from '../../store/actions'
import { linkRoute } from '../../ultils/Common/constant'

function AddSinhVien() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [sinhviens, setSinhvien] = useState({
      mssv: '',
      tensv: '',
      email: '',
      matkhau: '',
      diachi: '',
      sodienthoai: '',
      ngaysinh: '',
      noisinh: '',
      gioitinh: '',
      avatar: '',
   })
   const [invalidField, setInvalidField] = useState([])
   const handleAddSinhViens = () => {
      let invalids = validate(sinhviens)
      if (invalids === 0) {
         dispatch(actions.create(sinhviens))
         alert('Add successfully')
         navigate('/admin/sinhviens')
      }
   }
   const validate = (sv) => {
      let invalids = 0
      let fields = Object.entries(sv)
      fields.forEach((item) => {
         if (item[1] === '') {
            setInvalidField((prev) => [
               ...prev,
               {
                  name: item[0],
                  message: `Bạn không được bỏ trống trường ${item[0]} này...!`,
               },
            ])
            invalids++
         }
      })
      fields.forEach((item) => {
         switch (item[0]) {
            case 'matkhau':
               if (item[1].length < 6) {
                  setInvalidField((prev) => [
                     ...prev,
                     {
                        name: item[0],
                        message: 'Mật khẩu phải có tối thiểu 6 ký tự...!',
                     },
                  ])
                  invalids++
               }
               break
            case 'sodienthoai':
               if (!+item[1]) {
                  setInvalidField((prev) => [
                     ...prev,
                     {
                        name: item[0],
                        message: 'Số điện thoại không được chứa ký tự chữ...!',
                     },
                  ])
                  invalids++
               }
               break
            default:
               break
         }
      })
      return invalids
   }
   return (
      <div className="app sidebar-mini rtl">
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
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="text"
                              label={'Mã số sinh viên'}
                              value={sinhviens.mssv}
                              setValue={setSinhvien}
                              name={'mssv'}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="text"
                              label={'Họ và tên'}
                              value={sinhviens.tensv}
                              setValue={setSinhvien}
                              name={'tensv'}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="text"
                              label={'Địa chỉ email'}
                              value={sinhviens.email}
                              setValue={setSinhvien}
                              name={'email'}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="password"
                              label={'Mật khẩu'}
                              value={sinhviens.matkhau}
                              setValue={setSinhvien}
                              name={'matkhau'}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="text"
                              label={'Địa chỉ thường trú'}
                              value={sinhviens.diachi}
                              setValue={setSinhvien}
                              name={'diachi'}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="number"
                              label={'Số điện thoại'}
                              value={sinhviens.sodienthoai}
                              setValue={setSinhvien}
                              name={'sodienthoai'}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="date"
                              label={'Ngày sinh'}
                              value={sinhviens.ngaysinh}
                              setValue={setSinhvien}
                              name={'ngaysinh'}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="text"
                              label={'Nơi sinh'}
                              value={sinhviens.noisinh}
                              setValue={setSinhvien}
                              name={'noisinh'}
                           />
                           <div className="form-group col-md-3">
                              <label className="control-label">Giới tính</label>
                              <select
                                 className="form-control"
                                 id="gioitinh"
                                 required
                                 onChange={(e) =>
                                    setSinhvien({
                                       ...sinhviens,
                                       gioitinh:
                                          e.target.selectedIndex == 1
                                             ? 'Nam'
                                             : 'Nữ',
                                    })
                                 }
                              >
                                 <option value={''}>
                                    -- Chọn giới tính --
                                 </option>
                                 <option value={'Nam'}>Nam</option>
                                 <option value={'Nam'}>Nữ</option>
                              </select>
                           </div>
                           <div className="form-group col-md-12">
                              <label className="control-label">
                                 Ảnh 3x4 nhân viên
                              </label>
                              &nbsp;
                              <input
                                 type="file"
                                 name="ImageUpload"
                                 onChange={(e) => {
                                    const { files } = e.target
                                    setSinhvien({
                                       ...sinhviens,
                                       avatar: files[0].name,
                                    })
                                 }}
                              />
                           </div>
                        </form>
                     </div>
                     <button
                        className="btn btn-save"
                        type="button"
                        onClick={handleAddSinhViens}
                     >
                        Lưu lại
                     </button>
                     <button
                        className="btn btn-cancel"
                        onClick={() =>
                           setSinhvien({
                              mssv: '',
                              tensv: '',
                              email: '',
                              matkhau: '',
                              diachi: '',
                              sodienthoai: '',
                              ngaysinh: '',
                              noisinh: '',
                              gioitinh: '',
                              avatar: '',
                           })
                        }
                     >
                        Hủy bỏ
                     </button>
                     <Link
                        className="btn btn-dangerous"
                        to={linkRoute.SINHVIEN}
                     >
                        Thoát
                     </Link>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}

export default AddSinhVien
