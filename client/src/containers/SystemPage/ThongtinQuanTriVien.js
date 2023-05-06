import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import * as acions from '../../store/actions'
import '../../assets/css/main2.css'
import { toast } from 'react-toastify'
import { InputForm } from '../../components'
function ThongtinQTV() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { isLoggedInAdmin, admin } = useSelector((state) => state.auth)
   const { admins } = useSelector((state) => state.admin)
   const [ttAdmin, setTTAdmin] = useState(admins)
   useEffect(() => {
      !isLoggedInAdmin && navigate('/login')
      dispatch(acions.getOneAdmin(admin.msqtv))
   }, [isLoggedInAdmin, ttAdmin])
   const handleUpdateAdmin = () => {
      dispatch(acions.updateAdmin(ttAdmin))
      toast.success('Cập nhật thông tin Quản trị viên thành công...!')
   }
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb">
                  <li className="breadcrumb-item">Danh sách sinh viên</li>
                  <li className="breadcrumb-item">
                     <a href="#">Thêm sinh viên</a>
                  </li>
               </ul>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <h3 className="tile-title">Tạo mới sinh viên</h3>
                     <div className="tile-body">
                        <form>
                           <InputForm
                              type="text"
                              labelInput={'Mã số quản trị viên'}
                              value={ttAdmin.msqtv}
                              setValue={setTTAdmin}
                              name={'msqtv'}
                           />
                           <InputForm
                              type="text"
                              labelInput={'Tên quản trị viên'}
                              value={ttAdmin.tenqtv}
                              setValue={setTTAdmin}
                              name={'tenqtv'}
                           />
                           <InputForm
                              type="text"
                              labelInput={'Email'}
                              value={ttAdmin.email}
                              setValue={setTTAdmin}
                              name={'email'}
                           />
                           <InputForm
                              type="text"
                              labelInput={'Số điện thoại'}
                              value={ttAdmin.sodienthoai}
                              setValue={setTTAdmin}
                              name={'sodienthoai'}
                           />
                           <InputForm
                              type="text"
                              labelInput={'Mật khẩu'}
                              value={ttAdmin.matkhau}
                              setValue={setTTAdmin}
                              name={'matkhau'}
                           />
                           <InputForm
                              type="text"
                              labelInput={'Địa chỉ'}
                              value={ttAdmin.diachi}
                              setValue={setTTAdmin}
                              name={'diachi'}
                           />
                        </form>
                     </div>
                     <button className="btn btn-save" type="button" onClick={handleUpdateAdmin}>
                        Lưu lại
                     </button>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}
export default ThongtinQTV
