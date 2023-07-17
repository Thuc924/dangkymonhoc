import { sumHocPhi } from '../../ultils/func'
import ChitietMonhoc from '../../components/ChitietMonhoc'
import { Cart } from '../../components'
import * as actions from '../../store/actions'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { linkRoute } from '../../ultils/Common/constant'

function KetQuaDKMH() {
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

   const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)

   useEffect(() => {
      dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
      !isLoggedInSinhvien && navigate('/')
   }, [isLoggedInSinhvien])

   console.log(danhsachsvdk.map((i) => i.thu.split(', ').map((i) => i)))
   return (
      <main className="min-h-[550px] py-4">
         <h4 className="text-[32px] uppercase text-center p-2"> Kết quả đăng ký môn học</h4>
         <div>
            <table>
               <thead className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
                  <tr>
                     <th>STT</th>
                     <th>Mã môn học</th>
                     <th>Tên môn học</th>
                     <th>Mã lớp</th>
                     <th>Sĩ số</th>
                     <tr>
                        <th width={50}>Thứ</th>
                        <th width={50}>Tiết BD</th>
                        <th width={50}>Số tiết</th>
                        <th width={50}>Phòng</th>
                        <th width={150}>Giáo viên</th>
                        <th width={200}>Thời gian</th>
                     </tr>
                     <td></td>
                  </tr>
               </thead>
               <tbody className="text-[#000080]">
                  {danhsachsvdk && danhsachsvdk.length > 0 ? (
                     danhsachsvdk.map((item, index) => {
                        return (
                           <tr key={index} className="hover:bg-[#00000013]">
                              <td>{index + 1}</td>
                              <td>{item.msmh}</td>
                              <td>{item.monhocDK?.tenmh}</td>
                              <td>{item.mslophoc}</td>
                              <td>{item.siso}</td>
                              {item.thu.split(', ').map((t, index) => {
                                 return (
                                    <tr key={index}>
                                       <td width={52}>
                                          {t === '2'
                                             ? 'Hai'
                                             : t === '3'
                                             ? 'Ba'
                                             : t === '4'
                                             ? 'Tư'
                                             : t === '5'
                                             ? 'Năm'
                                             : t === '6'
                                             ? 'Sáu'
                                             : 'Bảy'}
                                       </td>
                                       <td width={60}>{item.tietbd}</td>
                                       <td width={50}>{item.sotiet}</td>
                                       <td width={55}>{item.phong}</td>
                                       <td width={150}>{item.tengiangvien}</td>
                                       <td width={200}>
                                          {moment(item.ngaybd).format('DD/MM/YYYY')} -{' '}
                                          {moment(item.ngaykt).format('DD/MM/YYYY')}
                                       </td>
                                    </tr>
                                 )
                              })}
                              <td width={240} className="hover:text-[#993333] hover:underline cursor-pointer">
                                 Tài liệu
                              </td>
                           </tr>
                        )
                     })
                  ) : (
                     <tr>
                        <td colSpan={11} className="text-center">
                           Chưa đăng ký hoặc chưa lưu phiếu đăng ký môn học trong CSDL. Nhấn{' '}
                           <Link to={linkRoute.PHIEU_DKMH} className="hover:underline cursor-pointer">
                              Vào đây
                           </Link>{' '}
                           để xem phiếu đăng ký môn học.
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </main>
   )
}
export default KetQuaDKMH
