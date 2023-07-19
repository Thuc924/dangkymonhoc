import * as actions from '../../store/actions'
import { imgs } from '../../assets/images'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { linkRoute } from '../../ultils/Common/constant'
import { getListHocPhi } from '../../store/actions/hocphi'

function XemHocPhi() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
   const { currentSinhvien } = useSelector((state) => state.sinhvien)

   const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)
   const { dshocphi } = useSelector((state) => state.hocphi)
   console.log(dshocphi)
   const { khoas } = useSelector((state) => state.khoa)

   useEffect(() => {
      !isLoggedInSinhvien && navigate('/')
      dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
      dispatch(actions.getSinhvienByMSSV())
      dispatch(getListHocPhi())
      // dispatch(actions())

      dispatch(actions.getListKhoa())
   }, [isLoggedInSinhvien])

   const sumSTC = (a) => {
      let kq = 0
      for (let i = 0; i < a.length; i++) {
         kq = kq + +a[i].monhocDK?.sotinchi
      }
      return kq
   }

   const sumHocPhi = (a) => {
      let kq = 0
      for (let i = 0; i < a.length; i++) {
         kq = +kq + +a[i].hocphi
      }
      return kq
   }
   return (
      <main className="text-[12px]">
         <div className="flex justify-center">
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-[400px] h-[180px] border-8 rounded-md border-[#7fc1ed] my-[32px] flex p-2">
               <ul className="w-[150px]">
                  <li className="py-[4px]">Mã sinh viên</li>
                  <li className="py-[4px]">Tên sinh viên</li>
                  <li className="py-[4px]">Phái</li>
                  <li className="py-[4px]">Nơi sinh</li>
                  <li className="py-[4px]">Lớp</li>
                  <li className="py-[4px]">Ngành</li>
               </ul>
               {currentSinhvien && (
                  <ul className="">
                     <li className="py-[4px] font-bold">{currentSinhvien.mssv}</li>
                     <li className="py-[4px] font-bold">{currentSinhvien.tensv}</li>
                     <li className="py-[4px]">{currentSinhvien.gioitinh}</li>
                     <li className="py-[4px]">{currentSinhvien.noisinh}</li>
                     <li className="py-[4px]">{sinhvien.mslop}</li>
                     <li className="py-[4px] font-bold">
                        {khoas.find((i) => i.mskhoa === currentSinhvien?.mssv?.substring(2, 3))?.tenkhoa}
                     </li>
                  </ul>
               )}
            </div>
         </div>
         <div>
            <h4 className="text-[Navy]">Học kỳ 1 năm học 2023 - 2024</h4>
            <table>
               <thead className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
                  <tr>
                     <th className="text-center">STT</th>
                     <th className="text-center">Mã môn học</th>
                     <th className="text-center">Tên môn học</th>
                     <th className="text-center">Số tín chỉ</th>
                     <th className="text-center">Số tiền</th>
                     <th className="text-center">Ghi chú</th>
                  </tr>
               </thead>
               <tbody className="text-[Navy]">
                  {danhsachsvdk.map((mh, index) => {
                     return (
                        <tr key={mh.id}>
                           <td className="text-center">{index + 1}</td>
                           <td className="text-center">{mh.msmh}</td>
                           <td>{mh.monhocDK?.tenmh}</td>
                           <td className="text-center">{mh.monhocDK?.sotinchi}</td>
                           <td className="text-center">
                              {Intl.NumberFormat('VI', {
                                 style: 'currency',
                                 currency: 'VND',
                              }).format(mh.hocphi)}
                           </td>
                           <td className="text-center" width={450}></td>
                        </tr>
                     )
                  })}
                  {danhsachsvdk.length === 0 && (
                     <tr>
                        <td colSpan={6} className="text-center italic text-[16px]">
                           Chưa đăng ký môn học nhấn{' '}
                           <Link to={linkRoute.DKMH_SV} className="text-[16px] underline hover:font-bold">
                              Vào đây
                           </Link>{' '}
                           để tới trang đăng ký môn học
                        </td>
                     </tr>
                  )}

                  <tr className="font-bold">
                     <td></td>
                     <td></td>
                     <td></td>
                     <td className="text-center italic">{sumSTC(danhsachsvdk)}</td>
                     <td className="text-center italic">
                        {Intl.NumberFormat('VI', {
                           style: 'currency',
                           currency: 'VND',
                        }).format(sumHocPhi(danhsachsvdk))}
                     </td>
                     <td className="text-center" width={450}></td>
                  </tr>
                  {dshocphi.find((i) => i.mssv === sinhvien?.mssv) && danhsachsvdk.length === 0 && (
                     <tr>
                        <td colSpan={6} className="text-center italic text-[16px]">
                           Chưa đăng ký môn học nhấn{' '}
                           <Link to={linkRoute.DKMH_SV} className="text-[16px] underline hover:font-bold">
                              Vào đây
                           </Link>{' '}
                           để tới trang đăng ký môn học
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
         <div className="flex p-2">
            <ul className="w-[250px]">
               <li className="py-[4px]">Tổng số tín chỉ đăng ký:</li>
               <li className="py-[4px]">Học phí học kỳ:</li>
               <li className="py-[4px]">Đã đóng:</li>
               <li className="py-[4px]">Nợ:</li>
            </ul>
            <ul className="font-bold">
               <li className="py-[4px] italic">{sumSTC(danhsachsvdk)}</li>
               <li className="py-[4px] italic">
                  {Intl.NumberFormat('VI', {
                     style: 'currency',
                     currency: 'VND',
                  }).format(sumHocPhi(danhsachsvdk))}
               </li>
               <li className="py-[4px] italic">
                  {Intl.NumberFormat('VI', {
                     style: 'currency',
                     currency: 'VND',
                  }).format(dshocphi.find((i) => i.mssv === sinhvien?.mssv)?.hocphi || 0)}
               </li>{' '}
               <li className="py-[4px] italic">
                  {+sumHocPhi(danhsachsvdk) - +dshocphi.find((i) => i.mssv === sinhvien?.mssv)?.hocphi === 0
                     ? Intl.NumberFormat('VI', {
                          style: 'currency',
                          currency: 'VND',
                       }).format(0)
                     : Intl.NumberFormat('VI', {
                          style: 'currency',
                          currency: 'VND',
                       }).format(
                          +sumHocPhi(danhsachsvdk) - +dshocphi.find((i) => i.mssv === sinhvien?.mssv)?.hocphi ||
                             sumHocPhi(danhsachsvdk)
                       )}
               </li>
            </ul>
         </div>

         <div>
            <img src={imgs.ghichuhocphi} className="w-full p-2" />
         </div>
      </main>
   )
}
export default XemHocPhi
