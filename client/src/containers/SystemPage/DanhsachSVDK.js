import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDSMH, getListMonhocInDSDKMH } from '../../store/actions'
import { ModalDetailDK, ModalDetailDKMH } from '../../components'

function DanhsachSVDKMH() {
   const dispatch = useDispatch()
   const { danhsachs } = useSelector((state) => state.dangkymonhoc)

   const [show, setShow] = useState(false)

   const [mssv, setMssv] = useState({ mssv: '' })

   useEffect(() => {
      dispatch(getListMonhocInDSDKMH())
      dispatch(getAllDSMH())
   }, [])
   const groupByCategory = danhsachs.reduce((group, monhoc) => {
      const { mssv } = monhoc
      group[mssv] = group[mssv] ?? []
      group[mssv].push(monhoc)
      return group
   }, {})

   const handleViewDetail = (item) => {
      setMssv({ mssv: item })
      setShow(true)
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
                                 <th width={150}>Mã số sinh viên</th>
                                 <th width={150}>Tổng số môn học đăng ký</th>
                                 <th width={100}>Tính năng</th>
                              </tr>
                           </thead>
                           {Object.keys(groupByCategory)
                              .map((i) => groupByCategory[i])
                              .map((a) => a) &&
                              Object.keys(groupByCategory).map((i, index) => {
                                 return (
                                    <tbody key={index}>
                                       <tr>
                                          <td width={10}>
                                             <input type="checkbox" name="check1" defaultValue={1} />
                                          </td>
                                          <td>{i}</td>
                                          <td>{groupByCategory[i]?.map((a) => a).length}</td>
                                          <td>
                                             <button
                                                className="btn btn-primary btn-sm edit"
                                                type="button"
                                                title="Xem chi tiết"
                                                onClick={() => handleViewDetail(i)}
                                             >
                                                Xem chi tiết
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
         {show && <ModalDetailDKMH setShow={setShow} mssv={mssv} />}
      </div>
   )
}

export default DanhsachSVDKMH
