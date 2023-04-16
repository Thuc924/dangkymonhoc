import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getListMonhocInDSDKMH } from '../store/actions'

function ModalDetailDKMH({ setShow, mssv }) {
   const dispatch = useDispatch()
   const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)
   useEffect(() => {
      dispatch(getListMonhocInDSDKMH(mssv.mssv))
   }, [mssv, danhsachsvdk.length])
   return (
      <div className="fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]">
         <div className="fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]">
            <div className="absolute w-[1000px] h-[500px] bg-white left-[50%] right-[50%] translate-x-[-50%] p-[10px] rounded-xl">
               <div className="row">
                  <div className="form-group  col-md-12">
                     <span className="thong-tin-thanh-toan">
                        <h5 className="text-center">Thông tin chi tiết danh sách mà sinh viên đăng ký</h5>
                     </span>
                  </div>
               </div>
               <div>
                  <span className="mb-[4px]">
                     Thông tin sinh viên:{' '}
                     <span className="font-bold">{danhsachsvdk.find((i) => i.mssv === mssv.mssv)?.Sinhvien.tensv}</span>
                  </span>
                  <div>
                     <table>
                        <thead>
                           <tr>
                              <th>Mã môn học</th>
                              <th>Tên môn học</th>
                              <th>Số tín chỉ</th>
                              <th>Học phí</th>
                           </tr>
                        </thead>
                        <tbody>
                           {danhsachsvdk.map((i) => {
                              return (
                                 <tr key={i.id}>
                                    <td>{i.msmh}</td>
                                    <td>{i?.monhocDK.tenmh}</td>
                                    <td>{i?.monhocDK.sotinchi}</td>
                                    <td>{i.hocphi}</td>
                                 </tr>
                              )
                           })}
                        </tbody>
                     </table>
                  </div>
               </div>
               <button className="btn btn-cancel" onClick={() => setShow(false)}>
                  Đóng
               </button>
            </div>
         </div>
      </div>
   )
}
export default ModalDetailDKMH
