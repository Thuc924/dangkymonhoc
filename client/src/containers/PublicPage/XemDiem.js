import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import * as actions from '../../store/actions'
import { linkRoute } from '../../ultils/Common/constant'
import { compareValues, sumHocPhi } from '../../ultils/func'
import { hocKyContext } from '../layouts/DefaultLayout'
function XemDiem() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
   const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)
   const { dshocphi } = useSelector((state) => state.hocphi)
   const { listDiemMh } = useSelector((state) => state.diem)
   const { token, msg } = useSelector((state) => state.sinhvien)

   useEffect(() => {
      !isLoggedInSinhvien && navigate(linkRoute.LOGIN_SV)
      dispatch(actions.getSinhvienByMSSV())
      if (msg === 'Hết hạn đăng nhập...!') {
         toast.error(msg)
         dispatch(actions.getSinhvienByMSSV())
      }
      dispatch(actions.getListHocPhi())
      dispatch(actions.getListDiem(sinhvien?.mssv))
      dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
   }, [isLoggedInSinhvien, token, msg])
   // console.log(listDiemMh)
   return (
      <main className="p-2">
         <div className="">
            <table>
               <thead>
                  <tr className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
                     <th>STT</th>
                     <th>Mã môn học</th>
                     <th>Tên môn học</th>
                     <th>STC</th>
                     <th>%QT</th>
                     <th>%GK</th>
                     <th>QT</th>
                     <th>GK</th>
                     <th>Điểm thi</th>
                     <th>Điểm TK1</th>
                     <th>Điểm TK</th>
                     <th>Kết quả</th>
                  </tr>
               </thead>
               <tbody className="text-[Navy]">
                  {listDiemMh.filter((i) => i.mshocky === 'HK1').length > 0 && (
                     <tr>
                        <td colSpan={12}>HK1</td>
                     </tr>
                  )}
                  {listDiemMh
                     .filter((i) => i.mshocky === 'HK1')
                     .map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="font-bold">{item.msmh}</td>
                              <td>{item.Diem_MH?.tenmh}</td>
                              <td className="text-center">{item.Diem_MH?.sotinchi}</td>
                              <td className="text-center">{item.phanTramQT}</td>
                              <td className="text-center">{item.phanTramGK}</td>
                              <td className="text-center">{item.quatrinh}</td>
                              <td className="text-center">{item.giuaky}</td>
                              <td className="text-center">{item.diemthi}</td>
                              <td className="text-center">
                                 {(item.phanTramQT * item.quatrinh +
                                    item.phanTramGK * item.giuaky +
                                    (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                    100 || ''}
                              </td>
                              <td className="text-center">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) || ''}
                              </td>
                              <td className="text-center font-bold">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) >= 5
                                    ? 'Đạt'
                                    : 'X'}
                              </td>
                           </tr>
                        )
                     })}

                  {listDiemMh.filter((i) => i.mshocky === 'HK2').length > 0 && (
                     <tr>
                        <td colSpan={12}>HK2</td>
                     </tr>
                  )}
                  {listDiemMh
                     .filter((i) => i.mshocky === 'HK2')
                     .map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="font-bold">{item.msmh}</td>
                              <td>{item.Diem_MH?.tenmh}</td>
                              <td className="text-center">{item.Diem_MH?.sotinchi}</td>
                              <td className="text-center">{item.phanTramQT}</td>
                              <td className="text-center">{item.phanTramGK}</td>
                              <td className="text-center">{item.quatrinh}</td>
                              <td className="text-center">{item.giuaky}</td>
                              <td className="text-center">{item.diemthi}</td>
                              <td className="text-center">
                                 {(item.phanTramQT * item.quatrinh +
                                    item.phanTramGK * item.giuaky +
                                    (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                    100 || ''}
                              </td>
                              <td className="text-center">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) || ''}
                              </td>
                              <td className="text-center font-bold">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) >= 5
                                    ? 'Đạt'
                                    : 'X'}
                              </td>
                           </tr>
                        )
                     })}
                  {listDiemMh.filter((i) => i.mshocky === 'HK_HE_NAM_1').length > 0 && (
                     <tr>
                        <td colSpan={12}>HK_HE_NAM_1</td>
                     </tr>
                  )}
                  {listDiemMh
                     .filter((i) => i.mshocky === 'HK_HE_NAM_1')
                     .map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="font-bold">{item.msmh}</td>
                              <td>{item.Diem_MH?.tenmh}</td>
                              <td className="text-center">{item.Diem_MH?.sotinchi}</td>
                              <td className="text-center">{item.phanTramQT}</td>
                              <td className="text-center">{item.phanTramGK}</td>
                              <td className="text-center">{item.quatrinh}</td>
                              <td className="text-center">{item.giuaky}</td>
                              <td className="text-center">{item.diemthi}</td>
                              <td className="text-center">
                                 {(item.phanTramQT * item.quatrinh +
                                    item.phanTramGK * item.giuaky +
                                    (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                    100 || ''}
                              </td>
                              <td className="text-center">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) || ''}
                              </td>
                              <td className="text-center font-bold">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) >= 5
                                    ? 'Đạt'
                                    : 'X'}
                              </td>
                           </tr>
                        )
                     })}

                  {listDiemMh.filter((i) => i.mshocky === 'HK3').length > 0 && (
                     <tr>
                        <td colSpan={12}>HK3</td>
                     </tr>
                  )}
                  {listDiemMh
                     .filter((i) => i.mshocky === 'HK3')
                     .map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="font-bold">{item.msmh}</td>
                              <td>{item.Diem_MH?.tenmh}</td>
                              <td className="text-center">{item.Diem_MH?.sotinchi}</td>
                              <td className="text-center">{item.phanTramQT}</td>
                              <td className="text-center">{item.phanTramGK}</td>
                              <td className="text-center">{item.quatrinh}</td>
                              <td className="text-center">{item.giuaky}</td>
                              <td className="text-center">{item.diemthi}</td>
                              <td className="text-center">
                                 {(item.phanTramQT * item.quatrinh +
                                    item.phanTramGK * item.giuaky +
                                    (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                    100 || ''}
                              </td>
                              <td className="text-center">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) || ''}
                              </td>
                              <td className="text-center font-bold">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) >= 5
                                    ? 'Đạt'
                                    : 'X'}
                              </td>
                           </tr>
                        )
                     })}
                  {listDiemMh.filter((i) => i.mshocky === 'HK4').length > 0 && (
                     <tr>
                        <td colSpan={12}>HK4</td>
                     </tr>
                  )}
                  {listDiemMh
                     .filter((i) => i.mshocky === 'HK4')
                     .map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="font-bold">{item.msmh}</td>
                              <td>{item.Diem_MH?.tenmh}</td>
                              <td className="text-center">{item.Diem_MH?.sotinchi}</td>
                              <td className="text-center">{item.phanTramQT}</td>
                              <td className="text-center">{item.phanTramGK}</td>
                              <td className="text-center">{item.quatrinh}</td>
                              <td className="text-center">{item.giuaky}</td>
                              <td className="text-center">{item.diemthi}</td>
                              <td className="text-center">
                                 {(item.phanTramQT * item.quatrinh +
                                    item.phanTramGK * item.giuaky +
                                    (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                    100 || ''}
                              </td>
                              <td className="text-center">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) || ''}
                              </td>
                              <td className="text-center font-bold">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) >= 5
                                    ? 'Đạt'
                                    : 'X'}
                              </td>
                           </tr>
                        )
                     })}

                  {listDiemMh.filter((i) => i.mshocky === 'HK5').length > 0 && (
                     <tr>
                        <td colSpan={12}>HK5</td>
                     </tr>
                  )}
                  {listDiemMh
                     .filter((i) => i.Diem_MH.mshocky === 'HK5')
                     .map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="font-bold">{item.msmh}</td>
                              <td>{item.Diem_MH?.tenmh}</td>
                              <td className="text-center">{item.Diem_MH?.sotinchi}</td>
                              <td className="text-center">{item.phanTramQT}</td>
                              <td className="text-center">{item.phanTramGK}</td>
                              <td className="text-center">{item.quatrinh}</td>
                              <td className="text-center">{item.giuaky}</td>
                              <td className="text-center">{item.diemthi}</td>
                              <td className="text-center">
                                 {(item.phanTramQT * item.quatrinh +
                                    item.phanTramGK * item.giuaky +
                                    (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                    100 || ''}
                              </td>
                              <td className="text-center">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) || ''}
                              </td>
                              <td className="text-center font-bold">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) >= 5
                                    ? 'Đạt'
                                    : 'X'}
                              </td>
                           </tr>
                        )
                     })}

                  {listDiemMh.filter((i) => i.mshocky === 'HK6').length > 0 && (
                     <tr>
                        <td colSpan={12}>HK6</td>
                     </tr>
                  )}
                  {listDiemMh
                     .filter((i) => i.Diem_MH.mshocky === 'HK6')
                     .map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="font-bold">{item.msmh}</td>
                              <td>{item.Diem_MH?.tenmh}</td>
                              <td className="text-center">{item.Diem_MH?.sotinchi}</td>
                              <td className="text-center">{item.phanTramQT}</td>
                              <td className="text-center">{item.phanTramGK}</td>
                              <td className="text-center">{item.quatrinh}</td>
                              <td className="text-center">{item.giuaky}</td>
                              <td className="text-center">{item.diemthi}</td>
                              <td className="text-center">
                                 {(item.phanTramQT * item.quatrinh +
                                    item.phanTramGK * item.giuaky +
                                    (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                    100 || ''}
                              </td>
                              <td className="text-center">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) || ''}
                              </td>
                              <td className="text-center font-bold">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) >= 5
                                    ? 'Đạt'
                                    : 'X'}
                              </td>
                           </tr>
                        )
                     })}

                  {listDiemMh.filter((i) => i.mshocky === 'HK7').length > 0 && (
                     <tr>
                        <td colSpan={12}>HK7</td>
                     </tr>
                  )}
                  {listDiemMh
                     .filter((i) => i.Diem_MH.mshocky === 'HK7')
                     .map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="font-bold">{item.msmh}</td>
                              <td>{item.Diem_MH?.tenmh}</td>
                              <td className="text-center">{item.Diem_MH?.sotinchi}</td>
                              <td className="text-center">{item.phanTramQT}</td>
                              <td className="text-center">{item.phanTramGK}</td>
                              <td className="text-center">{item.quatrinh}</td>
                              <td className="text-center">{item.giuaky}</td>
                              <td className="text-center">{item.diemthi}</td>
                              <td className="text-center">
                                 {(item.phanTramQT * item.quatrinh +
                                    item.phanTramGK * item.giuaky +
                                    (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                    100 || ''}
                              </td>
                              <td className="text-center">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) || ''}
                              </td>
                              <td className="text-center font-bold">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) >= 5
                                    ? 'Đạt'
                                    : 'X'}
                              </td>
                           </tr>
                        )
                     })}

                  {listDiemMh.filter((i) => i.mshocky === 'HK8').length > 0 && (
                     <tr>
                        <td colSpan={12}>HK8</td>
                     </tr>
                  )}
                  {listDiemMh
                     .filter((i) => i.Diem_MH.mshocky === 'HK8')
                     .map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="font-bold">{item.msmh}</td>
                              <td>{item.Diem_MH?.tenmh}</td>
                              <td className="text-center">{item.Diem_MH?.sotinchi}</td>
                              <td className="text-center">{item.phanTramQT}</td>
                              <td className="text-center">{item.phanTramGK}</td>
                              <td className="text-center">{item.quatrinh}</td>
                              <td className="text-center">{item.giuaky}</td>
                              <td className="text-center">{item.diemthi}</td>
                              <td className="text-center">
                                 {(item.phanTramQT * item.quatrinh +
                                    item.phanTramGK * item.giuaky +
                                    (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                    100 || ''}
                              </td>
                              <td className="text-center">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) || ''}
                              </td>
                              <td className="text-center font-bold">
                                 {Math.round(
                                    (item.phanTramQT * item.quatrinh +
                                       item.phanTramGK * item.giuaky +
                                       (100 - (+item.phanTramGK + +item.phanTramQT)) * item.diemthi) /
                                       100
                                 ) >= 5
                                    ? 'Đạt'
                                    : 'X'}
                              </td>
                           </tr>
                        )
                     })}
               </tbody>
            </table>
         </div>
      </main>
   )
}

export default XemDiem
