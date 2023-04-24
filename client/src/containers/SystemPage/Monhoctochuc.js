import { Link } from 'react-router-dom'
import { linkRoute } from '../../ultils/Common/constant'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteMonhoctochucByMSMH, getListMonhoctochuc } from '../../store/actions/monhoctochuc'
import { getListKhoa } from '../../store/actions'
import { compareValues } from '../../ultils/func'

function Monhoctochuc() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { monhoctochucs, token, msg } = useSelector((state) => state.monhoctochuc)
   const { khoas } = useSelector((state) => state.khoa)
   const { isLoggedInAdmin } = useSelector((state) => state.auth)
   const [khoa, setKhoa] = useState({ mskhoa: '' })
   useEffect(() => {
      !isLoggedInAdmin && navigate('/login')
      dispatch(getListMonhoctochuc())
      dispatch(getListKhoa())
   }, [isLoggedInAdmin, token, msg, khoa])

   const handleRemoveMHTC = (mh) => {
      if (mh) {
         dispatch(deleteMonhoctochucByMSMH(mh.msmh))
         toast.success('Xoá thành công...!')
      }
   }
   console.log(monhoctochucs.filter((i) => i.monhoc?.mskhoa === khoa.mskhoa).map((mh) => mh.monhoc?.tenmh))
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách môn học được tổ chức</b>
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
                              <Link className="btn btn-add btn-sm" to={linkRoute.MHTC_ADD} title="Thêm">
                                 <i className="fas fa-plus" />
                                 Thêm môn học
                              </Link>
                           </div>

                           <div className="col-sm-2">
                              <a className="btn btn-delete btn-sm" type="button" title="Xóa">
                                 <i className="fas fa-trash-alt" /> Xóa tất cả{' '}
                              </a>
                           </div>
                           <div className="col-sm-8 flex justify-end items-center">
                              <div className="form-group col-md-3">
                                 <select
                                    className="form-control"
                                    id="mskhoa"
                                    required
                                    onChange={(e) =>
                                       setKhoa({
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
                                                <option key={item.id} value={item.mskhoa}>
                                                   {item.tenkhoa}
                                                </option>
                                             </>
                                          )
                                       })}
                                 </select>
                              </div>
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
                                 <th width={50}>Mã số môn học</th>
                                 <th width={100}>Tên môn học</th>
                                 <th width={50}>Học kỳ</th>
                                 <th width={50}>Khoa</th>
                                 <th width={50}>Tính năng</th>
                              </tr>
                           </thead>
                           {!khoa.mskhoa
                              ? monhoctochucs &&
                                monhoctochucs.length > 0 &&
                                monhoctochucs.sort(compareValues('tenmh', 'desc')).map((mh, index) => {
                                   return (
                                      <tbody key={index}>
                                         <tr>
                                            <td width={10}>
                                               <input type="checkbox" name="check1" defaultValue={1} />
                                            </td>
                                            <td>{mh.msmh}</td>
                                            <td>{mh.monhoc?.tenmh}</td>
                                            <td>{mh.hockies?.tenhocky}</td>
                                            <td>{khoas.find((i) => i.mskhoa === mh.monhoc?.mskhoa)?.tenkhoa}</td>
                                            <td>
                                               <button
                                                  className="btn btn-primary btn-sm trash"
                                                  type="button"
                                                  title="Xóa"
                                                  onClick={() => handleRemoveMHTC(mh)}
                                               >
                                                  <i className="fas fa-trash-alt" />
                                               </button>
                                            </td>
                                         </tr>
                                      </tbody>
                                   )
                                })
                              : monhoctochucs
                                   .filter((i) => i.monhoc?.mskhoa === khoa.mskhoa)
                                   .map((mh) => {
                                      return (
                                         <tbody key={mh.id}>
                                            <tr>
                                               <td width={10}>
                                                  <input type="checkbox" name="check1" defaultValue={1} />
                                               </td>
                                               <td>{mh.msmh}</td>
                                               <td>{mh.monhoc?.tenmh}</td>
                                               <td>{mh.hockies?.tenhocky}</td>
                                               <td>{khoas.find((i) => i.mskhoa === mh.monhoc?.mskhoa)?.tenkhoa}</td>
                                               <td>
                                                  <button
                                                     className="btn btn-primary btn-sm trash"
                                                     type="button"
                                                     title="Xóa"
                                                     onClick={() => handleRemoveMHTC(mh)}
                                                  >
                                                     <i className="fas fa-trash-alt" />
                                                  </button>
                                               </td>
                                            </tr>
                                         </tbody>
                                      )
                                   })}
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}

export default Monhoctochuc
