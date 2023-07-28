// import { PaginationMH } from '../PublicPage'
import Modal from '../../components/Modal'
import { compareValues } from '../../ultils/func'
import { linkRoute } from '../../ultils/Common/constant'
import * as actions from '../../store/actions'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Monhoc() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   // const [params] = useSearchParams()

   const [showMH, setShowMH] = useState(false)

   const [monhoc, setMonhoc] = useState([])
   const { monhocs, token, msg } = useSelector((state) => state.monhoc)
   const { hockys } = useSelector((state) => state.hocky)
   const { isLoggedInAdmin } = useSelector((state) => state.auth)
   const [hocky, setHocKy] = useState('')
   useEffect(() => {
      !isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
      // let offset = params.get('pageMH') ? +params.get('pageMH') - 1 : 0
      dispatch(actions.getListMonhoc())
      dispatch(actions.getListKhoa())
      // for a4 size paper width and height
   }, [isLoggedInAdmin, token, msg, hocky])
   const handleRemoveMonHoc = (mh) => {
      dispatch(actions.deleteMonhocByMSMH(mh.msmh))
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
                              <Link className="btn btn-add btn-sm" to={linkRoute.MONHOC_ADD_AD} title="Thêm">
                                 <i className="fas fa-plus" />
                                 Thêm môn học
                              </Link>
                           </div>

                           <div className="col-sm-2">
                              <a className="btn btn-delete btn-sm" type="button" title="Xóa">
                                 <i className="fas fa-trash-alt" /> Xóa tất cả{' '}
                              </a>
                           </div>
                           <div className="col-sm-2">
                              <a className="btn btn-delete btn-sm" type="button" title="PDF"></a>
                           </div>
                           <div className="col-sm-8 flex justify-end items-center">
                              <div className="form-group col-md-3">
                                 <select
                                    className="form-control"
                                    id="mskhoa"
                                    required
                                    onChange={(e) => setHocKy(e.target.value)}
                                 >
                                    <option value={''}>-- Chọn học kỳ --</option>
                                    {hockys &&
                                       hockys.length > 0 &&
                                       hockys.map((item, index) => {
                                          return (
                                             <option key={index} value={item.mshocky}>
                                                {item.tenhocky}
                                             </option>
                                          )
                                       })}
                                 </select>
                              </div>
                           </div>
                        </div>
                        <table
                           style={{ width: 100 + '%' }}
                           id="form"
                           className="table table-hover table-bordered js-copytextarea w-full"
                           cellPadding={0}
                           cellSpacing={0}
                           border={0}
                        >
                           <thead>
                              <tr>
                                 <th width={20}>STT</th>
                                 <th width={80}>Mã số môn học</th>
                                 <th width={100}>Tên môn học</th>
                                 <th width={50}>Số tín chỉ</th>
                                 <th width={50}>Mô tả</th>
                                 <th width={50}>Số tiết</th>
                                 <th width={50}>Lý thuyết</th>
                                 <th width={60}>Thực hành</th>
                                 <th width={50}>Tự học</th>
                                 <th width={50}>Học kỳ</th>
                                 <th width={50}>Tính năng</th>
                              </tr>
                           </thead>
                           <tbody>
                              {!hocky ? (
                                 monhocs &&
                                 monhocs.length > 0 &&
                                 monhocs.sort(compareValues('msmh', 'asc')).map((mh, index) => {
                                    return (
                                       <tr key={index}>
                                          <td>{index + 1}</td>
                                          <td>{mh.msmh}</td>
                                          <td>{mh.tenmh}</td>
                                          <td>{mh.sotinchi}</td>
                                          <td>{mh.mota}</td>
                                          <td>{mh.sotiet}</td>
                                          <td>{mh.lythuyet}</td>
                                          <td>{mh.thuchanh}</td>
                                          <td>{mh.tuhoc}</td>
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
                                    )
                                 })
                              ) : monhocs.filter((i) => i.mshocky === hocky).length > 0 ? (
                                 monhocs
                                    .filter((i) => i.mshocky === hocky)
                                    .map((mh, index) => {
                                       return (
                                          <tr key={index}>
                                             <td width={20}>{index + 1}</td>
                                             <td>{mh.msmh}</td>
                                             <td>{mh.tenmh}</td>
                                             <td>{mh.sotinchi}</td>
                                             <td>{mh.mota}</td>
                                             <td>{mh.sotiet}</td>
                                             <td>{mh.lythuyet}</td>
                                             <td>{mh.thuchanh}</td>
                                             <td>{mh.tuhoc}</td>
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
                                       )
                                    })
                              ) : (
                                 <tr>
                                    <td colSpan={10} className="text-center italic font-bold uppercase">
                                       Chưa nhập dữ liệu môn học cho học kỳ {hocky}
                                    </td>
                                 </tr>
                              )}
                           </tbody>
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
