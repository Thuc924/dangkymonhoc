import { useDispatch, useSelector } from 'react-redux'
import InputForm from '../../components/InputForm'
import { linkRoute } from '../../ultils/Common/constant'

import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as actions from '../../store/actions'
import { toast } from 'react-toastify'

function AddLophoc() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [giangvien, setGiangvien] = useState({
      msgiangvien: '',
      tengiangvien: '',
      chucvu: '',
      mskhoa: '',
   })
   const { isLoggedInAdmin } = useSelector((state) => state.auth)
   const { khoas, token } = useSelector((state) => state.khoa)
   console.log(khoas)
   useEffect(() => {
      !isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
      dispatch(actions.getListKhoa())
   }, [isLoggedInAdmin, token])
   const handleCreateGiangvien = () => {
      if (!giangvien.msgiangvien || !giangvien.tengiangvien || !giangvien.chucvu || !giangvien.mskhoa) return
      else {
         dispatch(actions.createGiangvien(giangvien))
         toast.success('Thêm giảng viên thành công...!')
         navigate(linkRoute.GV_ADMIN)
      }
   }
   const handleAddGVKeyDown = (e) => {
      if (e.keyCode === 13) {
         if (!giangvien.msgiangvien || !giangvien.tengiangvien || !giangvien.chucvu || !giangvien.mskhoa) return
         else {
            dispatch(actions.createGiangvien(giangvien))
            toast.success('Thêm giảng viên thành công...!')
            navigate(linkRoute.GV_ADMIN)
         }
      }
   }
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb">
                  <li className="breadcrumb-item">Danh sách giảng viên</li>
                  <li className="breadcrumb-item">
                     <a href="#">Thêm giảng viên</a>
                  </li>
               </ul>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <h3 className="tile-title">Tạo mới giảng viên</h3>
                     <div className="tile-body">
                        <form className="row">
                           <div className="form-group col-md-4">
                              <label className="control-label">Mã giảng viên</label>
                              <input
                                 className="form-control border-[1px]"
                                 type={'text'}
                                 onChange={(e) =>
                                    setGiangvien({
                                       ...giangvien,
                                       msgiangvien: e.target.value,
                                    })
                                 }
                              />
                              <label className="control-label">Tên giảng viên</label>
                              <input
                                 className="form-control border-[1px]"
                                 type={'text'}
                                 onChange={(e) =>
                                    setGiangvien({
                                       ...giangvien,
                                       tengiangvien: e.target.value,
                                    })
                                 }
                              />
                           </div>
                        </form>
                        <form className="row">
                           <div className="form-group col-md-4">
                              <label className="control-label">Chức vụ</label>
                              <select
                                 className="form-control"
                                 id="mslop"
                                 required
                                 onChange={(e) =>
                                    setGiangvien({
                                       ...giangvien,
                                       chucvu: e.target.value,
                                    })
                                 }
                              >
                                 <option value={''}>-- Chọn chức vụ --</option>
                                 <option value="Giảng Viên">Giảng Viên</option>
                                 <option value="Nhân Viên">Nhân Viên</option>
                                 <option value="Phó Trưởng Khoa">Phó Trưởng Khoa</option>
                                 <option value="Trưởng Khoa">Trưởng Khoa</option>
                                 <option value="Trưởng Trung Tâm Máy Tính">Trưởng Trung Tâm Máy Tính</option>
                                 <option value="Trợ Lý Khoa">Trợ Lý Khoa</option>
                                 <option value="Thư Ký Khoa">Thư Ký Khoa</option>
                              </select>
                              <label className="control-label">Khoa</label>
                              <select
                                 onKeyDown={(e) => handleAddGVKeyDown(e)}
                                 className="form-control"
                                 id="mslop"
                                 required
                                 onChange={(e) =>
                                    setGiangvien({
                                       ...giangvien,
                                       mskhoa: e.target.value,
                                    })
                                 }
                              >
                                 <option value={''}>-- Chọn khoa --</option>
                                 {khoas &&
                                    khoas.length > 0 &&
                                    khoas
                                       .filter((i) => i.mskhoa !== '0')
                                       .map((i, index) => {
                                          return (
                                             <option value={i.mskhoa} key={index}>
                                                {i.tenkhoa}
                                             </option>
                                          )
                                       })}
                              </select>
                           </div>
                        </form>
                     </div>
                     <button className="btn btn-save" type="button" onClick={handleCreateGiangvien}>
                        Lưu lại
                     </button>
                     <button className="btn btn-cancel">Hủy bỏ</button>
                     <Link className="btn btn-dangerous" to={linkRoute.GV_ADMIN}>
                        Thoát
                     </Link>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}

export default AddLophoc
