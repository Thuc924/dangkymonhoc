import { Link, useNavigate } from 'react-router-dom'

import InputForm from '../../components/InputForm'
import { linkRoute } from '../../ultils/Common/constant'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import { toast } from 'react-toastify'

function AddHocky() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [hocky, setHocky] = useState({
      mshocky: '',
      tenhocky: '',
   })
   const [invalidField, setInvalidField] = useState([])
   const handleCreatehocky = () => {
      let invalids = validate(hocky)
      if (invalids === 0) {
         dispatch(actions.createHocky(hocky))
         toast.success('Thêm thành công...!')
         navigate('/admin/hockies')
      }
   }
   console.log(hocky)
   const validate = (hocky) => {
      let invalids = 0
      let fields = Object.entries(hocky)
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
      return invalids
   }
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb">
                  <li className="breadcrumb-item">Danh sách học kỳ</li>
                  <li className="breadcrumb-item">
                     <a href="#">Thêm học kỳ</a>
                  </li>
               </ul>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <h3 className="tile-title">Tạo mới học kỳ</h3>
                     <div className="tile-body">
                        <form className="row">
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="text"
                              labelInput={'Mã học kỳ'}
                              name={'mshocky'}
                              value={hocky.mshocky}
                              setValue={setHocky}
                           />
                           <InputForm
                              setInvalidField={setInvalidField}
                              invalidFields={invalidField}
                              type="text"
                              labelInput={'Tên học kỳ'}
                              name={'tenhocky'}
                              value={hocky.tenhocky}
                              setValue={setHocky}
                           />
                        </form>
                     </div>
                     <button className="btn btn-save" type="button" onClick={handleCreatehocky}>
                        Lưu lại
                     </button>
                     <button className="btn btn-cancel">Hủy bỏ</button>
                     <Link className="btn btn-dangerous" to={linkRoute.HOCKY_ADMIN}>
                        Thoát
                     </Link>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}

export default AddHocky
