import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDSMH, getListKhoa, getListMonhoc } from '../../store/actions'
import { ModalDetailDK, ModalDetailDKMH } from '../../components'
import { useNavigate } from 'react-router-dom'
import { compareValues } from '../../ultils/func'

function DanhsachSVDKMH() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { danhsachs } = useSelector((state) => state.dangkymonhoc)
   const { isLoggedInAdmin } = useSelector((state) => state.auth)
   const { khoas } = useSelector((state) => state.khoa)
   const { monhocs } = useSelector((state) => state.monhoc)

   const [khoa, setKhoa] = useState('')

   const [monhoc, setMonhoc] = useState('')

   useEffect(() => {
      dispatch(getAllDSMH())
      dispatch(getListMonhoc())
      dispatch(getListKhoa())
      !isLoggedInAdmin && navigate('/login')
   }, [isLoggedInAdmin])
   const groupByCategory = danhsachs.reduce((group, monhoc) => {
      const { mssv } = monhoc
      group[mssv] = group[mssv] ?? []
      group[mssv].push(monhoc)
      return group
   }, {})

   const sumHocPhi = (a) => {
      let kq = 0
      for (let i = 0; i < a.length; i++) {
         kq = +kq + +a[i].hocphi
      }
      return kq
   }
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
                        <div className="flex">
                           <div className="form-group col-md-3">
                              <select
                                 className="form-control"
                                 id="mskhoa"
                                 required
                                 onChange={(e) => setKhoa(e.target.value)}
                              >
                                 <option value={''}>-- Chọn khoa --</option>
                                 {khoas &&
                                    khoas.length > 0 &&
                                    khoas.map((item, index) => {
                                       return (
                                          <>
                                             <option key={index} value={item.mskhoa}>
                                                {item.tenkhoa}
                                             </option>
                                          </>
                                       )
                                    })}
                              </select>
                           </div>
                           <div className="form-group col-md-3">
                              {!khoa ? (
                                 <select
                                    disabled
                                    className="form-control"
                                    id="mskhoa"
                                    required
                                    onChange={(e) => setMonhoc(e.target.value)}
                                 >
                                    <option value={''}>-- Chọn môn học --</option>
                                    {monhocs &&
                                       monhocs.length > 0 &&
                                       monhocs.map((item, index) => {
                                          return (
                                             <>
                                                <option key={index} value={item.msmh}>
                                                   {item.tenmh}
                                                </option>
                                             </>
                                          )
                                       })}
                                 </select>
                              ) : (
                                 <select
                                    className="form-control"
                                    id="mskhoa"
                                    required
                                    onChange={(e) => setMonhoc(e.target.value)}
                                 >
                                    <option value={''}>-- Chọn môn học --</option>
                                    {monhocs &&
                                       monhocs.length > 0 &&
                                       monhocs
                                          .filter((i) => i.mskhoa === khoa)
                                          .map((item, index) => {
                                             return (
                                                <>
                                                   <option key={index} value={item.msmh}>
                                                      {item.tenmh}
                                                   </option>
                                                </>
                                             )
                                          })}
                                 </select>
                              )}
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
                                 <th width={10}>STT</th>
                                 <th width={100}>Mã số sinh viên</th>
                                 <th width={150}>Tên sinh viên</th>
                                 <th width={150}>Mã số môn học đã đăng ký</th>
                                 <th width={150}>Tên môn học đã đăng ký</th>
                                 <th width={100}>Học phí</th>
                              </tr>
                           </thead>
                           {monhoc
                              ? danhsachs &&
                                danhsachs.length > 0 &&
                                danhsachs
                                   .filter((i) => i.msmh === monhoc)
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
                                               <td>{item.hocphi}</td>
                                            </tr>
                                         </tbody>
                                      )
                                   })
                              : danhsachs &&
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
                                            <td>{item.hocphi}</td>
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
         {/* {show && <ModalDetailDKMH setShow={setShow} mssv={mssv} sumHocPhi={sumHocPhi} />} */}
      </div>
   )
}

export default DanhsachSVDKMH
