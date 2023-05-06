import { Link } from 'react-router-dom'
import { linkRoute } from '../../ultils/Common/constant'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListMonhoc, getListMonhocLimit } from '../../store/actions/monhoc'
import { deleteMonhocByMSMH, getListKhoa } from '../../store/actions'
import { PaginationMH } from '../PublicPage'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Modal from '../../components/Modal'
import { compareValues } from '../../ultils/func'

function Monhoc() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [params] = useSearchParams()

   const [showMH, setShowMH] = useState(false)

   const [monhoc, setMonhoc] = useState([])
   const { monhocs, token, msg } = useSelector((state) => state.monhoc)
   const { khoas } = useSelector((state) => state.khoa)
   const { isLoggedInAdmin } = useSelector((state) => state.auth)
   const [khoa, setKhoa] = useState({
      tenkhoa: '',
   })
   useEffect(() => {
      !isLoggedInAdmin && navigate('/login')

      let offset = params.get('pageMH') ? +params.get('pageMH') - 1 : 0

      dispatch(getListMonhoc())
      dispatch(getListKhoa())
   }, [isLoggedInAdmin, token, msg, khoa])

   const handleRemoveMonHoc = (mh) => {
      dispatch(deleteMonhocByMSMH(mh.msmh))
      toast.success('Xoá thành công...!')
   }

   const handleShowUpdateMonhoc = (mh) => {
      setShowMH(true)
      setMonhoc(mh)
      console.log('Mon hoc: ', mh)
   }
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách môn học</b>
                     </a>
                  </li>
               </ul>
               <div id="clock" />
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <div className="tile-body">
                        <div className="row element-button flex items-center">
                           <div className="col-sm-2">
                              <Link className="btn btn-add btn-sm" to={linkRoute.MONHOC_ADD} title="Thêm">
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
                                 <th width={100}>Mã số môn học</th>
                                 <th width={100}>Tên môn học</th>
                                 <th width={60}>Số tín chỉ</th>
                                 <th width={50}>Mô tả</th>
                                 <th width={50}>Số tiết</th>
                                 <th width={130}>Khoa</th>
                                 <th width={100}>Được tổ chức</th>
                                 <th width={100}>Tính năng</th>
                              </tr>
                           </thead>
                           {!khoa.tenkhoa
                              ? monhocs &&
                                monhocs.length > 0 &&
                                monhocs.sort(compareValues('msmh', 'desc')).map((mh) => {
                                   return (
                                      <tbody key={mh.id}>
                                         <tr>
                                            <td width={10}>
                                               <input type="checkbox" name="check1" defaultValue={1} />
                                            </td>
                                            <td>{mh.msmh}</td>
                                            <td>{mh.tenmh}</td>
                                            <td>{mh.sotinchi}</td>
                                            <td>
                                               {mh.mota == 'BB'
                                                  ? 'Bắc buộc'
                                                  : mh.mota == 'TC'
                                                  ? 'Tự chọn'
                                                  : 'Tốt nghiệp'}
                                            </td>
                                            <td>{mh.sotiet}</td>
                                            <td>{mh.khoaMH?.tenkhoa}</td>
                                            <td>{mh.mshocky}</td>
                                            <td>
                                               <button
                                                  className="btn btn-primary btn-sm trash"
                                                  type="button"
                                                  title="Xóa"
                                                  onClick={() => handleRemoveMonHoc(mh)}
                                               >
                                                  <i className="fas fa-trash-alt" />
                                               </button>
                                               <button
                                                  className="btn btn-primary btn-sm edit"
                                                  type="button"
                                                  title="Sửa"
                                                  onClick={() => handleShowUpdateMonhoc(mh)}
                                               >
                                                  <i className="fas fa-edit" />
                                               </button>
                                            </td>
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
                                                  <input type="checkbox" name="check1" defaultValue={1} />
                                               </td>
                                               <td>{mh.msmh}</td>
                                               <td>{mh.tenmh}</td>
                                               <td>{mh.sotinchi}</td>
                                               <td>
                                                  {mh.mota == 'BB'
                                                     ? 'Bắc buộc'
                                                     : mh.mota == 'TC'
                                                     ? 'Tự chọn'
                                                     : 'Tốt nghiệp'}
                                               </td>
                                               <td>{mh.sotiet}</td>
                                               <td>{mh.khoaMH?.tenkhoa}</td>
                                               <td>{mh.mshocky}</td>

                                               <td>
                                                  <button
                                                     className="btn btn-primary btn-sm trash"
                                                     type="button"
                                                     title="Xóa"
                                                     onClick={() => handleRemoveMonHoc(mh)}
                                                  >
                                                     <i className="fas fa-trash-alt" />
                                                  </button>
                                                  <button
                                                     className="btn btn-primary btn-sm edit"
                                                     type="button"
                                                     title="Sửa"
                                                     onClick={() => handleShowUpdateMonhoc(mh)}
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
                  {/* <PaginationMH number={params.get('pageMH')} /> */}
               </div>
            </div>
         </main>
         {showMH && <Modal title={'Chỉnh sửa môn học'} setShow={setShowMH} monhoc={monhoc} />}
      </div>
   )
}

export default Monhoc
