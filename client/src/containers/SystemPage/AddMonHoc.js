import { Link, useNavigate } from 'react-router-dom'

import InputForm from '../../components/InputForm'
import { linkRoute } from '../../ultils/Common/constant'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKhoa } from '../../store/actions'
import { createMonhoc } from '../../store/actions/monhoc'

function AddMonHoc() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [monhoc, setMonHoc] = useState({
      msmh: '',
      tenmh: '',
      sotinchi: 0,
      mskhoa: '',
   })
   const { khoas } = useSelector((state) => state.khoa)
   useEffect(() => {
      dispatch(getListKhoa())
   }, [])
   const handleCreateMonhoc = () => {
      dispatch(createMonhoc(monhoc))
      navigate('/admin/monhocs')
   }
   const [invalidField, setInvalidField] = useState([])
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
                  <li className="breadcrumb-item">Danh sách môn học</li>
                  <li className="breadcrumb-item">
                     <a href="#">Thêm môn học</a>
                  </li>
               </ul>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <h3 className="tile-title">Tạo mới môn học</h3>
                     <div className="tile-body">
                        <form className="row">
                           <InputForm
                              setInvalidField={setInvalidField}
                              type="text"
                              label={'Mã số môn học'}
                              name={'msmh'}
                              value={monhoc.msmh}
                              setValue={setMonHoc}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              type="text"
                              label={'Tên môn học'}
                              name={'tenmh'}
                              value={monhoc.tenmh}
                              setValue={setMonHoc}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              type="text"
                              label={'Số tín chỉ'}
                              name={'sotinchi'}
                              value={monhoc.sotinchi}
                              setValue={setMonHoc}
                           />

                           <div className="form-group col-md-3">
                              <label className="control-label">Mã khoa</label>
                              <select
                                 className="form-control"
                                 id="mskhoa"
                                 required
                                 onChange={(e) =>
                                    setMonHoc({
                                       ...monhoc,
                                       mskhoa: e.target.value,
                                    })
                                 }
                              >
                                 <option value={''}>-- Chọn khoa --</option>
                                 {khoas &&
                                    khoas.length > 0 &&
                                    khoas.map((item) => {
                                       return (
                                          <>
                                             <option value={item.tenkhoa}>
                                                {item.tenkhoa}
                                             </option>
                                          </>
                                       )
                                    })}
                              </select>
                           </div>
                        </form>
                     </div>
                     <button
                        className="btn btn-save"
                        type="button"
                        onClick={handleCreateMonhoc}
                     >
                        Lưu lại
                     </button>
                     <button className="btn btn-cancel">Hủy bỏ</button>
                     <Link
                        className="btn btn-dangerous"
                        to={linkRoute.MONHOC_ADMIN}
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

export default AddMonHoc
