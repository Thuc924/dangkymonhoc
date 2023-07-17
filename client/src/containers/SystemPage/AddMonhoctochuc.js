import { compareValues } from '../../ultils/func'
import { linkRoute } from '../../ultils/Common/constant'
import * as actions from '../../store/actions'

import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { ModelAddMHTC } from '../../components'

function AddMonhoctochuc() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { monhocs } = useSelector((state) => state.monhoc)

   const { hockys } = useSelector((state) => state.hocky)

   const { khoas } = useSelector((state) => state.khoa)

   const { isLoggedInAdmin } = useSelector((state) => state.auth)
   const { giangviens } = useSelector((state) => state.giangvien)
   const { lops } = useSelector((state) => state.lop)
   const [mhtc, setMHTC] = useState([])
   const [hocky, setHocky] = useState({ mshocky: '' })
   const [mhByHK, setMHByHK] = useState([])
   const [khoa, setKhoa] = useState({
      mskhoa: '',
   })
   useEffect(() => {
      !isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
      dispatch(actions.getListMonhoc())
      dispatch(actions.getListHocky())
      dispatch(actions.getListKhoa())
      dispatch(actions.getListGiangvien())
      dispatch(actions.getListLop())
   }, [isLoggedInAdmin, khoa.mskhoa, hocky.mshocky])
   // const handleCreateMHTC = () => {
   // 	if (mhtc) {
   // 		mhtc.map((i) => {
   // 			dispatch(actions.addMonhoctochuc(i))
   // 		})
   // 		toast.success("Thêm thành công...!")
   // 		navigate("/admin/monhoctochucs")
   // 	}
   // }

   const handleChaneKhoa = (e) => {
      if (e.target.value === '5') {
         const list = monhocs.filter((i) => i.msmh.slice(0, 2) === 'CS' && i.mshocky === hocky.mshocky)
         console.log(list)
         setMHByHK(list)
         setKhoa({ mskhoa: e.target.value })
      } else if (e.target.value === '0') {
         const list = monhocs.filter((i) => i.msmh.slice(0, 2) === 'GS' && i.mshocky === hocky.mshocky)
         console.log(list)
         setMHByHK(list)
         setKhoa({ mskhoa: e.target.value })
      }
   }
   const [showModel, setShowModel] = useState(false)
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
                                 onChange={(e) => handleChaneKhoa(e)}
                              >
                                 <option value={''}>-- Chọn khoa --</option>
                                 {khoas &&
                                    khoas.length > 0 &&
                                    khoas.map((item, index) => {
                                       return (
                                          <option key={index} value={item.mskhoa}>
                                             {item.tenkhoa}
                                          </option>
                                       )
                                    })}
                              </select>
                           ) : (
                              <select className="form-control" id="mskhoa" disabled>
                                 <option value={''}>-- Chọn khoa --</option>
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
                     <table
                        className="table table-hover table-bordered js-copytextarea"
                        cellPadding={0}
                        cellSpacing={0}
                        border={0}
                        id="sampleTable"
                     >
                        <thead>
                           <tr>
                              <th width={100}>Mã môn học</th>
                              <th width={300}>Tên môn học</th>
                              <th width={100}>Số tín chỉ</th>
                              <th width={100}>Mô tả</th>
                              <th width={100}>Số tiết</th>
                              <th width={100}>Lý thuyết</th>
                              <th width={100}>Thực hành</th>
                              <th width={100}>Tự học</th>
                              <th width={150}>Học kỳ</th>
                              <th width={150}>Khoa</th>
                              {khoa.mskhoa && <th>Action</th>}
                           </tr>
                        </thead>
                        {!khoa.tenkhoa &&
                           !hocky.mshocky &&
                           monhocs &&
                           monhocs.length > 0 &&
                           monhocs.sort(compareValues('mskhoa', 'desc')).map((mh) => {
                              return (
                                 <tbody key={mh.id}>
                                    <tr>
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
                                          {mh.msmh.slice(0, 2) === 'GS'
                                             ? 'Công nghệ thông tin'
                                             : mh.msmh.slice(0, 2) === 'CS'
                                             ? 'Toàn khoa'
                                             : ''}
                                       </td>
                                    </tr>
                                 </tbody>
                              )
                           })}
                        {mhByHK.length > 0
                           ? mhByHK.map((mh) => {
                                return (
                                   <tbody key={mh.id}>
                                      <tr>
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
                                            {mh.msmh.slice(0, 2) === 'GS'
                                               ? 'Công nghệ thông tin'
                                               : mh.msmh.slice(0, 2) === 'CS'
                                               ? 'Toàn khoa'
                                               : ''}
                                         </td>
                                         <td width={200}>
                                            <button
                                               onClick={() => {
                                                  setMHTC(mh)
                                                  setShowModel(true)
                                               }}
                                               className="mx-1 text-center border-[1px] border-solid border-[#0C3689] text-[#0C3689] bg-white rounded-3xl p-2 cursor-pointer"
                                            >
                                               Thêm môn học tổ chức
                                            </button>
                                         </td>
                                      </tr>
                                   </tbody>
                                )
                             })
                           : monhocs
                                .filter((i) => i.mshocky === hocky.mshocky)
                                .map((mh) => {
                                   return (
                                      <tbody key={mh.id}>
                                         <tr>
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
                                               {mh.msmh.slice(0, 2) === 'GS'
                                                  ? 'Công nghệ thông tin'
                                                  : mh.msmh.slice(0, 2) === 'CS'
                                                  ? 'Toàn khoa'
                                                  : ''}
                                            </td>
                                            <td width={200}>
                                               <button
                                                  onClick={() => {
                                                     setMHTC(mh)
                                                     setShowModel(true)
                                                  }}
                                                  className="mx-1 text-center border-[1px] border-solid border-[#0C3689] text-[#0C3689] bg-white rounded-3xl p-2 cursor-pointer"
                                               >
                                                  Thêm môn học tổ chức
                                               </button>
                                            </td>
                                         </tr>
                                      </tbody>
                                   )
                                })}
                     </table>
                     {/* <button
								className='btn btn-save'
								type='button'
								onClick={handleCreateMHTC}
							>
								Lưu lại
							</button>
							<button className='btn btn-cancel'>Hủy bỏ</button> */}
                     <Link
                        className="text-[16px] border-[1px] border-solid p-2 rounded-sm border-black"
                        to={linkRoute.MHTC_ADMIN}
                     >
                        Thoát
                     </Link>
                  </div>
               </div>
            </div>
         </main>
         {showModel && (
            <ModelAddMHTC
               mslop={lops}
               mshocky={hocky.mshocky}
               setShowModel={setShowModel}
               monhoc={mhtc}
               giangviens={giangviens}
               khoa={khoa.mskhoa}
            />
         )}
      </div>
   )
}

export default AddMonhoctochuc
