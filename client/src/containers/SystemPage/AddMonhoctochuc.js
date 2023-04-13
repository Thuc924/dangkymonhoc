import { Link, useNavigate } from 'react-router-dom'

import { linkRoute } from '../../ultils/Common/constant'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { toast } from 'react-toastify'
import { addMonhoctochuc } from '../../store/actions/monhoctochuc'

function AddMonhoctochuc() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [monhoctochuc, setMonhoctochuc] = useState([{ msmh: '' }, { mshocky: '' }])
   const { monhocs } = useSelector((state) => state.monhoc)
   const { hockys } = useSelector((state) => state.hocky)
   const { khoas } = useSelector((state) => state.khoa)
   const [mhtc, setMHTC] = useState([])
   const [hocky, setHocky] = useState({ mshocky: '' })
   const [khoa, setKhoa] = useState({
      mskhoa: '',
   })
   useEffect(() => {
      dispatch(actions.getListMonhoc())
      dispatch(actions.getListHocky())
      dispatch(actions.getListKhoa())
   }, [])
   const handleCreateMHTC = () => {
      if (mhtc) {
         mhtc.map((i) => {
            dispatch(addMonhoctochuc(i))
         })
         toast.success('Thêm thành công...!')
         navigate('/admin/monhoctochucs')
      }
   }
   console.log(hocky)
   function compareValues(key, order = 'asc') {
      return function (a, b) {
         if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // nếu không tồn tại
            return 0
         }

         const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
         const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

         let comparison = 0
         if (varA > varB) {
            comparison = 1
         } else if (varA < varB) {
            comparison = -1
         }
         return order == 'desc' ? comparison * -1 : comparison
      }
   }
   const handleAddMHTC = (mh) => {
      mhtc.push({ ...mhtc.msmh, msmh: mh.msmh, mshocky: hocky.mshocky })
   }
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb">
                  <li className="breadcrumb-item">Danh sách môn học được tổ chức</li>
                  <li className="breadcrumb-item">
                     <a href="#">Thêm môn học tổ chức</a>
                  </li>
               </ul>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <div className="flex">
                        <div className="form-group col-md-3">
                           {hocky.mshocky !== '' ? (
                              <select
                                 className="form-control"
                                 id="mskhoa"
                                 required
                                 onChange={(e) =>
                                    setKhoa({
                                       tenkhoa: e.target.value,
                                    })
                                 }
                              >
                                 <option value={''}>-- Chọn khoa --</option>
                                 {khoas &&
                                    khoas.length > 0 &&
                                    khoas.map((item) => {
                                       return (
                                          <>
                                             <option value={item.tenkhoa}>{item.tenkhoa}</option>
                                          </>
                                       )
                                    })}
                              </select>
                           ) : (
                              <select
                                 className="form-control"
                                 id="mskhoa"
                                 required
                                 onChange={(e) =>
                                    setKhoa({
                                       tenkhoa: e.target.value,
                                    })
                                 }
                                 disabled
                              >
                                 <option value={''}>-- Chọn khoa --</option>
                                 {khoas &&
                                    khoas.length > 0 &&
                                    khoas.map((item) => {
                                       return (
                                          <>
                                             <option value={item.tenkhoa}>{item.tenkhoa}</option>
                                          </>
                                       )
                                    })}
                              </select>
                           )}
                        </div>
                        <div className="form-group col-md-3">
                           <select
                              className="form-control"
                              id="mshocky"
                              required
                              onChange={(e) => setHocky({ mshocky: e.target.value })}
                           >
                              <option value={''}>-- Chọn học kỳ --</option>
                              {hockys &&
                                 hockys.length > 0 &&
                                 hockys.map((item) => {
                                    return (
                                       <>
                                          <option value={item.mshocky}>{item.tenhocky}</option>
                                       </>
                                    )
                                 })}
                           </select>
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
                              <th width={100}>Mã số môn học</th>
                              <th width={300}>Tên môn học</th>
                              <th width={100}>Số tín chỉ</th>
                              <th width={100}>Mô tả</th>
                              <th width={100}>Số tiết</th>
                              <th width={200}>Khoa</th>
                           </tr>
                        </thead>
                        {!khoa.tenkhoa
                           ? monhocs &&
                             monhocs.length > 0 &&
                             monhocs.sort(compareValues('mskhoa', 'desc')).map((mh) => {
                                return (
                                   <tbody key={mh.id}>
                                      <tr>
                                         <td width={10}>
                                            {hocky.mshocky !== '' ? (
                                               <input
                                                  type="checkbox"
                                                  name="check1"
                                                  defaultValue={1}
                                                  onClick={() => handleAddMHTC(mh)}
                                               />
                                            ) : (
                                               <input type="checkbox" name="check1" defaultValue={1} disabled />
                                            )}
                                         </td>
                                         <td>{mh.msmh}</td>
                                         <td>{mh.tenmh}</td>
                                         <td>{mh.sotinchi}</td>
                                         <td>{mh.mota}</td>
                                         <td>{mh.sotiet}</td>
                                         <td>{mh.khoaMH?.tenkhoa}</td>
                                      </tr>
                                   </tbody>
                                )
                             })
                           : monhocs
                                .filter((i) => i.khoaMH?.tenkhoa === khoa.tenkhoa)
                                .map((mh) => {
                                   return (
                                      <tbody key={mh.id}>
                                         <tr>
                                            <td width={10}>
                                               <input
                                                  type="checkbox"
                                                  name="check1"
                                                  defaultValue={1}
                                                  onClick={() => handleAddMHTC(mh)}
                                               />
                                            </td>
                                            <td>{mh.msmh}</td>
                                            <td>{mh.tenmh}</td>
                                            <td>{mh.sotinchi}</td>
                                            <td>{mh.mota}</td>
                                            <td>{mh.sotiet}</td>
                                            <td>{mh.khoaMH?.tenkhoa}</td>
                                         </tr>
                                      </tbody>
                                   )
                                })}
                     </table>
                     <button className="btn btn-save" type="button" onClick={handleCreateMHTC}>
                        Lưu lại
                     </button>
                     <button className="btn btn-cancel">Hủy bỏ</button>
                     <Link className="btn btn-dangerous" to={linkRoute.MHTC_ADMIN}>
                        Thoát
                     </Link>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}

export default AddMonhoctochuc
