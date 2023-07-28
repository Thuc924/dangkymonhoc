import * as actions from '../../store/actions'
import { compareValues } from '../../ultils/func'
import { linkRoute } from '../../ultils/Common/constant'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ModelNhapDiem } from '../../components'

function LopHocKyHe() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { danhsachs, tokenDK } = useSelector((state) => state.dangkymonhoc)

   const { isLoggedInAdmin } = useSelector((state) => state.auth)

   const { khoas } = useSelector((state) => state.khoa)

   const { monhoctochucs } = useSelector((state) => state.monhoctochuc)

   const { dsdiem, token } = useSelector((state) => state.diem)

   const { hockys } = useSelector((state) => state.hocky)

   const { lops } = useSelector((state) => state.lop)
   const { lophocs } = useSelector((state) => state.lophoc)
   console.log(lophocs)
   const [showModel, setShowModel] = useState(false)

   const [dsmhBykhoa, setDSMHByKhoa] = useState([])

   const [hocky, setHocky] = useState({ mshocky: '' })

   const [khoa, setKhoa] = useState({ mskhoa: '' })

   const [mhByHK, setMHByHK] = useState([])

   const [monhoc, setMonhoc] = useState('')

   const [lophoc, setLophoc] = useState('')

   const [listMonhoc, setListMH] = useState()

   const [diemMh, setDiemMH] = useState()

   useEffect(() => {
      dispatch(actions.getAllDSMHDK())
      dispatch(actions.getListLophoc())
      dispatch(actions.getListKhoa())
      dispatch(actions.getListMonhoctochuc())
      dispatch(actions.getListHocky())
      dispatch(actions.getListLop())
      dispatch(actions.getListHocPhi())
      dispatch(actions.getAllDSDiem())
      // get()
      !isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
   }, [isLoggedInAdmin, danhsachs.length, token, tokenDK])

   const list = dsmhBykhoa?.reduce((acc, item) => {
      const currentItem = acc?.find((ac) => ac.msmh === item.msmh)
      if (!currentItem) acc.push(item)
      return acc
   }, [])
   //    console.log(monhoctochucs)
   const handleChangeHocKy = (e) => {
      const list = monhoctochucs.filter((i) => i.monhocTC?.mshocky == e.target.value)
      setMHByHK(list)
      setHocky({ mshocky: e.target.value })
   }

   const handleChangeKhoa = (e) => {
      console.log(mhByHK)
      const list = mhByHK.filter((i) => i.mskhoa == e.target.value)
      setDSMHByKhoa(list)
      setKhoa({ mskhoa: e.target.value })
   }

   const handleCloseModel = (e) => {
      if (e.keyCode === 27) setShowModel(false)
   }
   const handleRemoveAll = () => {
      const length = dsdiem.filter((i) => i.diemthi && i.mshocky === danhsachs[0].monhocDK.mshocky).length
      if (danhsachs.length === length) {
         danhsachs.map((i) => {
            dispatch(actions.deleteMonHocInDSDKMH(i.msmh))
         })
      } else {
         toast.error('Còn môn học chưa nhập điểm...!')
      }
      // console.log(dsdiem)
   }
   // const handleRemoveMH = (i) => {
   //    dispatch(actions.deleteMonHocInDSDKMH(i.msmh))
   // }
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách sinh viên đã đăng ký môn học</b>
                     </a>
                  </li>
               </ul>
               <div id="clock" />
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <div className="tile-body">
                        <div className="col-sm-2">
                           <a className="btn btn-delete btn-sm" type="button" title="Xóa">
                              <button className="fas fa-trash-alt" onClick={handleRemoveAll}>
                                 {' '}
                                 Xóa tất cả{' '}
                              </button>
                           </a>
                        </div>
                        <div className="flex">
                           <div className="form-group col-md-3">
                              <select
                                 className="form-control"
                                 id="mshocky"
                                 required
                                 onChange={(e) => handleChangeHocKy(e)}
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
                           {/* <div className="form-group col-md-3">
                              {!hocky.mshocky ? (
                                 <select className="form-control" id="mskhoa" required disabled>
                                    <option value={''}>-- Chọn khoa --</option>
                                 </select>
                              ) : (
                                 <select
                                    className="form-control"
                                    id="mskhoa"
                                    required
                                    onChange={(e) => handleChangeKhoa(e)}
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
                              )}
                           </div>
                           <div className="form-group col-md-3">
                              {!khoa.mskhoa ? (
                                 <select disabled className="form-control" id="mskhoa" required>
                                    <option value={''}>-- Chọn môn học --</option>
                                 </select>
                              ) : (
                                 <select
                                    className="form-control"
                                    id="mskhoa"
                                    required
                                    onChange={(e) => setMonhoc(e.target.value)}
                                 >
                                    <option value={''}>-- Chọn môn học --</option>
                                    {danhsachs &&
                                       danhsachs.length > 0 &&
                                       danhsachs
                                          .reduce((acc, item) => {
                                             const currentItem = acc.find((ac) => ac?.msmh === item.msmh)
                                             if (!currentItem) acc.push(item)
                                             return acc
                                          }, [])
                                          .map((item, index) => {
                                             return (
                                                <option key={index} value={item?.monhocDK?.tenmh}>
                                                   {item?.monhocDK?.tenmh} -{item?.msmh}
                                                </option>
                                             )
                                          })}
                                 </select>
                              )}
                           </div>
                           <div className="form-group col-md-3">
                              {!monhoc ? (
                                 <select disabled className="form-control" id="mskhoa" required>
                                    <option value={''}>-- Chọn lớp học --</option>
                                 </select>
                              ) : (
                                 <select
                                    className="form-control"
                                    id="mskhoa"
                                    required
                                    onChange={(e) => setLophoc(e.target.value)}
                                 >
                                    <option value={''}>-- Chọn lớp học --</option>
                                    {lops &&
                                       lops.length > 0 &&
                                       lops.map((item, index) => {
                                          return (
                                             <option key={index} value={item.mslop}>
                                                {item.mslop}
                                             </option>
                                          )
                                       })}
                                 </select>
                              )}
                           </div> */}
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
                                 <th width={10}>STT</th>
                                 <th width={100}>Mã số sinh viên</th>
                                 <th width={120}>Tên sinh viên</th>
                                 <th width={150}>Mã số môn học đã đăng ký</th>
                                 <th width={150}>Tên môn học đã đăng ký</th>
                                 <th width={80}>Lớp</th>
                                 <th width={120}>Điểm</th>
                                 <th>Chức năng</th>
                              </tr>
                           </thead>
                           {monhoc &&
                              !lophoc &&
                              danhsachs &&
                              danhsachs.length > 0 &&
                              danhsachs
                                 .filter((i) => i.monhocDK?.tenmh === monhoc)
                                 .sort(compareValues('mssv', 'desc'))
                                 .map((item, index) => {
                                    return (
                                       <tbody key={index}>
                                          <tr>
                                             <td width={10}>{index + 1}</td>
                                             <td>{item.mssv}</td>
                                             <td>{item.Sinhvien.tensv}</td>
                                             <td>{item.msmh}</td>
                                             <td>{item.monhocDK.tenmh}</td>
                                             <td>{item.mslophoc}</td>
                                             <td>
                                                {dsdiem.find((i) => i.mssv === item.mssv && i.msmh === item.msmh) ? (
                                                   <>
                                                      QT:{' '}
                                                      <span className="font-bold">
                                                         {
                                                            dsdiem.find(
                                                               (i) => i.mssv === item.mssv && i.msmh === item.msmh
                                                            )?.quatrinh
                                                         }
                                                      </span>
                                                      , GK:{' '}
                                                      <span className="font-bold">
                                                         {
                                                            dsdiem.find(
                                                               (i) => i.mssv === item.mssv && i.msmh === item.msmh
                                                            )?.giuaky
                                                         }
                                                      </span>
                                                      , Thi:{' '}
                                                      <span className="font-bold">
                                                         {
                                                            dsdiem.find(
                                                               (i) => i.mssv === item.mssv && i.msmh === item.msmh
                                                            )?.diemthi
                                                         }
                                                      </span>
                                                   </>
                                                ) : (
                                                   'Chưa có điểm'
                                                )}
                                             </td>

                                             <td>
                                                {dsdiem.find((i) => i.msmh === item.msmh && i.mssv === item.mssv) ? (
                                                   <button
                                                      disabled
                                                      className="text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer"
                                                   >
                                                      Đã nhập điểm
                                                   </button>
                                                ) : (
                                                   <button
                                                      onClick={() => {
                                                         setShowModel(true)
                                                         setDiemMH(item)
                                                      }}
                                                      onKeyDown={(e) => handleCloseModel(e)}
                                                      className="text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer hover:border-[#0000008a] hover:text-[#000000ad]"
                                                   >
                                                      Nhập điểm
                                                   </button>
                                                )}
                                             </td>
                                          </tr>
                                       </tbody>
                                    )
                                 })}
                           {lophoc &&
                              monhoc &&
                              danhsachs &&
                              danhsachs.length > 0 &&
                              danhsachs
                                 .filter((i) => i.monhocDK?.tenmh === monhoc && i.mslophoc === lophoc)
                                 .sort(compareValues('mssv', 'desc'))
                                 .map((item, index) => {
                                    return (
                                       <tbody key={index}>
                                          <tr>
                                             <td width={10}>{index + 1}</td>
                                             <td>{item.mssv}</td>
                                             <td>{item.Sinhvien.tensv}</td>
                                             <td>{item.msmh}</td>
                                             <td>{item.monhocDK.tenmh}</td>
                                             <td>{item.mslophoc}</td>
                                             <td>
                                                {dsdiem.find((i) => i.mssv === item.mssv && i.msmh === item.msmh) ? (
                                                   <>
                                                      QT:{' '}
                                                      <span className="font-bold">
                                                         {
                                                            dsdiem.find(
                                                               (i) => i.mssv === item.mssv && i.msmh === item.msmh
                                                            )?.quatrinh
                                                         }
                                                      </span>
                                                      , GK:{' '}
                                                      <span className="font-bold">
                                                         {
                                                            dsdiem.find(
                                                               (i) => i.mssv === item.mssv && i.msmh === item.msmh
                                                            )?.giuaky
                                                         }
                                                      </span>
                                                      , Thi:{' '}
                                                      <span className="font-bold">
                                                         {
                                                            dsdiem.find(
                                                               (i) => i.mssv === item.mssv && i.msmh === item.msmh
                                                            )?.diemthi
                                                         }
                                                      </span>
                                                   </>
                                                ) : (
                                                   'Chưa có điểm'
                                                )}
                                             </td>

                                             <td className="text-center">
                                                {dsdiem.find(
                                                   (i) => i.diemthi && i.msmh === item.msmh && i.mssv === item.mssv
                                                ) ? (
                                                   <button
                                                      disabled
                                                      className="text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer"
                                                   >
                                                      Đã nhập điểm
                                                   </button>
                                                ) : (
                                                   <button
                                                      onClick={() => {
                                                         setShowModel(true)
                                                         setDiemMH(item)
                                                      }}
                                                      onKeyDown={(e) => handleCloseModel(e)}
                                                      className="text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer hover:border-[#0000008a] hover:text-[#000000ad]"
                                                   >
                                                      Nhập điểm
                                                   </button>
                                                )}
                                             </td>
                                          </tr>
                                       </tbody>
                                    )
                                 })}
                           {!lophoc &&
                              !monhoc &&
                              danhsachs &&
                              danhsachs.length > 0 &&
                              danhsachs.sort(compareValues('mssv', 'desc')).map((item, index) => {
                                 return (
                                    <tbody key={index}>
                                       <tr>
                                          <td width={10}>{index + 1}</td>
                                          <td>{item.mssv}</td>
                                          <td>{item.Sinhvien.tensv}</td>
                                          <td>{item.msmh}</td>
                                          <td>{item.monhocDK.tenmh}</td>
                                          <td>{item.mslophoc}</td>
                                          <td>
                                             {dsdiem.find((i) => i.mssv === item.mssv && i.msmh === item.msmh)
                                                ?.diemthi ? (
                                                <>
                                                   QT:{' '}
                                                   <span className="font-bold">
                                                      {
                                                         dsdiem.find(
                                                            (i) => i.mssv === item.mssv && i.msmh === item.msmh
                                                         )?.quatrinh
                                                      }
                                                   </span>
                                                   , GK:{' '}
                                                   <span className="font-bold">
                                                      {
                                                         dsdiem.find(
                                                            (i) => i.mssv === item.mssv && i.msmh === item.msmh
                                                         )?.giuaky
                                                      }
                                                   </span>
                                                   , Thi:{' '}
                                                   <span className="font-bold">
                                                      {
                                                         dsdiem.find(
                                                            (i) => i.mssv === item.mssv && i.msmh === item.msmh
                                                         )?.diemthi
                                                      }
                                                   </span>
                                                </>
                                             ) : (
                                                'Chưa có điểm'
                                             )}
                                          </td>

                                          <td className="text-center">
                                             {dsdiem.find((i) => i.msmh === item.msmh && i.mssv === item.mssv)
                                                ?.diemthi ? (
                                                <>
                                                   <button
                                                      disabled
                                                      className="mx-2 text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer"
                                                   >
                                                      Đã nhập điểm
                                                   </button>
                                                   {/* <button
                                                      onClick={() => handleRemoveMH(item)}
                                                      className="text-center w-[150px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer hover:text-[Navy]"
                                                   >
                                                      Đã hoàn thành (Xóa)
                                                   </button> */}
                                                </>
                                             ) : (
                                                <button
                                                   onClick={() => {
                                                      setShowModel(true)
                                                      setDiemMH(item)
                                                      console.log(item)
                                                   }}
                                                   onKeyDown={(e) => handleCloseModel(e)}
                                                   className="text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer hover:border-[#0000008a] hover:text-[#000000ad]"
                                                >
                                                   Nhập điểm
                                                </button>
                                             )}
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
         {showModel && <ModelNhapDiem monhoc={diemMh} setShowModel={setShowModel} />}
      </div>
   )
}

export default LopHocKyHe
