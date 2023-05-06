import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDSMH, getListHocky, getListKhoa, getListMonhoc, getListMonhoctochuc } from '../../store/actions'
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
   const { monhoctochucs } = useSelector((state) => state.monhoctochuc)
   const { hockys } = useSelector((state) => state.hocky)

   const [dsmhBykhoa, setDSMHByKhoa] = useState([])
   const [hocky, setHocky] = useState({ mshocky: '' })
   const [khoa, setKhoa] = useState({ mskhoa: '' })
   const [mhByHK, setMHByHK] = useState([])
   const [monhoc, setMonhoc] = useState('')

   useEffect(() => {
      dispatch(getAllDSMH())
      dispatch(getListMonhoc())
      dispatch(getListKhoa())
      dispatch(getListMonhoctochuc())
      dispatch(getListHocky())
      !isLoggedInAdmin && navigate('/login')
   }, [isLoggedInAdmin])
   const groupByCategory = danhsachs.reduce((group, monhoc) => {
      const { mssv } = monhoc
      group[mssv] = group[mssv] ?? []
      group[mssv].push(monhoc)
      return group
   }, {})

   const handleChangeHocKy = (e) => {
      const list = monhoctochucs.filter((i) => i.mshocky == e.target.value)
      setMHByHK(list)
      setHocky({ mshocky: e.target.value })
   }
   const handleChangeKhoa = (e) => {
      const list = mhByHK.filter((i) => i.monhoc?.mskhoa == e.target.value)
      setDSMHByKhoa(list)
      setKhoa({ mskhoa: e.target.value })
   }

   console.log(dsmhBykhoa)
   console.log(danhsachs)
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
                                 id="mshocky"
                                 required
                                 onChange={(e) => handleChangeHocKy(e)}
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
                           <div className="form-group col-md-3">
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
                                             <>
                                                <option key={index} value={item.mskhoa}>
                                                   {item.tenkhoa}
                                                </option>
                                             </>
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
                                    {dsmhBykhoa &&
                                       dsmhBykhoa.length > 0 &&
                                       dsmhBykhoa.map((item, index) => {
                                          return (
                                             <>
                                                <option key={index} value={item.msmh}>
                                                   {item.monhoc?.tenmh}
                                                </option>
                                             </>
                                          )
                                       })}
                                 </select>
                              )}
                           </div>
                        </div>
                        <div className="italic p-2 text-[16px]">
                           <span>
                              Tổng số sinh viên đăng ký môn <span className="font-bold">{monhoc}</span>:{' '}
                              {danhsachs.filter((i) => i.msmh === monhoc).length}
                           </span>
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
