import { useDispatch, useSelector } from 'react-redux'
import { imgs } from '../../assets/images'
import { useEffect } from 'react'
import { getListKhoa, getListMonhocByMSSV } from '../../store/actions'
import { useNavigate } from 'react-router-dom'

function XemHocPhi() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

   const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)

   const { khoas } = useSelector((state) => state.khoa)

   useEffect(() => {
      !isLoggedInSinhvien && navigate('/')
      dispatch(getListMonhocByMSSV(sinhvien?.mssv))
      dispatch(getListKhoa())
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
   console.log(sinhvien)
   return (
      <div className="m-[1px] text-[12px]">
         <div className="flex justify-center">
            <div className="w-[400px] h-[180px] border-8 rounded-md border-[#7fc1ed] my-[32px] flex p-2">
               <ul className="w-[150px]">
                  <li className="py-[4px]">Mã sinh viên</li>
                  <li className="py-[4px]">Tên sinh viên</li>
                  <li className="py-[4px]">Phái</li>
                  <li className="py-[4px]">Nơi sinh</li>
                  <li className="py-[4px]">Lớp</li>
                  <li className="py-[4px]">Ngành</li>
               </ul>
               {sinhvien && (
                  <ul className="">
                     <li className="py-[4px] font-bold">{sinhvien.mssv}</li>
                     <li className="py-[4px] font-bold">{sinhvien.tensv}</li>
                     <li className="py-[4px]">{sinhvien.gioitinh}</li>
                     <li className="py-[4px]">{sinhvien.noisinh}</li>
                     <li className="py-[4px]">
                        {sinhvien?.mssv
                           ? `${sinhvien?.mssv.substring(0, 1)}${sinhvien?.mssv.substring(3, 5)}_${sinhvien.mslop}`
                           : ''}
                     </li>
                     <li className="py-[4px] font-bold">
                        {khoas.find((i) => i.mskhoa === sinhvien?.mssv?.substring(2, 3))?.tenkhoa}
                     </li>
                  </ul>
               )}
            </div>
         </div>
         <div className="m-1">
            <h4 className="text-[Navy]">Học kỳ 1 năm học 2023 - 2024</h4>
            <table>
               <thead className="bg-[#2D8ECE] text-white">
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
                  {danhsachsvdk &&
                     danhsachsvdk.length > 0 &&
                     danhsachsvdk.map((mh, index) => {
                        return (
                           <tr key={mh.id}>
                              <td className="text-center">{index + 1}</td>
                              <td className="text-center">{mh.msmh}</td>
                              <td>{mh.monhocDK?.tenmh}</td>
                              <td className="text-center">{mh.monhocDK?.sotinchi}</td>
                              <td className="text-center">{mh.hocphi}</td>
                              <td className="text-center" width={450}></td>
                           </tr>
                        )
                     })}
                  {danhsachsvdk.length > 0 && (
                     <tr className="font-bold">
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td></td>
                        <td className="text-center italic">{sumSTC(danhsachsvdk)}</td>
                        <td className="text-center italic">{sumHocPhi(danhsachsvdk)}</td>
                        <td className="text-center" width={450}></td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
         <div className="flex">
            <ul className="w-[250px]">
               <li className="py-[4px]">Tổng số tín chỉ đăng ký:</li>
               <li className="py-[4px]">Học phí học kỳ:</li>
            </ul>
            <ul className="font-bold">
               <li className="py-[4px] italic">{sumSTC(danhsachsvdk)}</li>
               <li className="py-[4px] italic">{sumHocPhi(danhsachsvdk)} đ</li>
            </ul>
         </div>
         <div>
            <img src={imgs.ghichuhocphi} className="w-full p-2" />
         </div>
      </div>
   )
}
export default XemHocPhi
