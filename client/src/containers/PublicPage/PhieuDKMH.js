import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button, ChitietMonhoc } from '../../components'
import { sumHocPhi, sumSTC } from '../../ultils/func'
import * as actions from '../../store/actions'
import { linkRoute } from '../../ultils/Common/constant'
import { getListHocPhi } from '../../store/actions/hocphi'

function PhieuDKMH() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const date = new Date()
   const year = date.getFullYear().toString()?.slice(2, 4)
   const month = date.getMonth() + 1
   const { monhocs } = useSelector((state) => state.monhoc)

   const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
   const { danhsachsvdk, token } = useSelector((state) => state.dangkymonhoc)
   const { monhoctochucs } = useSelector((state) => state.monhoctochuc)
   const { dshocphi } = useSelector((state) => state.hocphi)
   const [showDetail, setShowDetail] = useState(false)

   const [detailMH, setDetailMH] = useState()
   const [hocky, setHocky] = useState('')
   // const listMHDK = JSON.parse(localStorage.getItem("mhdk"))
   const [listMH, setListMH] = useState()

   const [dsMHDK, setDSMHDK] = useState([])
   const [ds, setDS] = useState(JSON.parse(localStorage.getItem('mhdk')))
   useEffect(() => {
      dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
      dispatch(actions.getListMonhoctochuc())
      dispatch(getListHocPhi())

      !isLoggedInSinhvien && navigate(linkRoute.HOME_SV)

      const data = ds?.filter((i) => i.mssv === sinhvien.mssv)
      setDSMHDK(data)
      getMHTCC()
      isLoggedInSinhvien && localStorage.setItem('mhdk', JSON.stringify(ds) || [])
   }, [isLoggedInSinhvien, dsMHDK?.length, ds?.length, token])
   const getMHTCC = () => {
      const nienKhoa = sinhvien?.mssv?.slice(3, 5)
      if (+nienKhoa === +year) {
         if (month >= 6 && month <= 8) {
            let kq = monhoctochucs?.filter((i) => i.mshocky === 'HK1' && i.mslophoc === sinhvien?.mslop)
            setListMH(kq)
            setHocky('HK1')
         } else if (month >= 1 && month <= 3) {
            let kq = monhoctochucs?.filter((i) => i.mshocky === 'HK2' && i.mslophoc === sinhvien?.mslop)
            setListMH(kq)
            setHocky('HK2')
         }
      } else if (+nienKhoa + 1 === +year) {
         if (month >= 6 && month <= 8) {
            let kq = monhoctochucs?.filter((i) => i.mshocky === 'HK3' && i.mslophoc === sinhvien?.mslop)
            setListMH(kq)
            setHocky('HK3')
         } else if (month >= 1 && month <= 3) {
            let kq = monhoctochucs?.filter((i) => i.mshocky === 'HK4' && i.mslophoc === sinhvien?.mslop)
            setListMH(kq)
            setHocky('HK4')
         }
      } else if (+nienKhoa + 2 === +year) {
         if (month >= 6 && month <= 8) {
            let kq = monhoctochucs?.filter((i) => i.mshocky === 'HK5' && i.mslophoc === sinhvien?.mslop)
            setListMH(kq)
            setHocky('HK5')
         } else if (month >= 1 && month <= 3) {
            let kq = monhoctochucs?.filter((i) => i.mshocky === 'HK6' && i.mslophoc === sinhvien?.mslop)
            setListMH(kq)
            setHocky('HK6')
         }
      } else if (+nienKhoa + 3 === +year) {
         if (month >= 6 && month <= 8) {
            let kq = monhoctochucs?.filter((i) => i.mshocky === 'HK7' && i.mslophoc === sinhvien?.mslop)
            setListMH(kq)
            setHocky('HK7')
         } else if (month >= 1 && month <= 3) {
            let kq = monhoctochucs?.filter((i) => i.mshocky === 'HK8' && i.mslophoc === sinhvien?.mslop)
            setListMH(kq)
            setHocky('HK8')
         }
      }
   }
   console.log(hocky)
   const handleAddMHVaoDSDKMH = () => {
      let stc = sumSTC(dsMHDK) + sumSTC(danhsachsvdk)
      if (!listMH) {
         return
      } else {
         if (stc < 12) toast.error('Không đủ 12 tín chỉ, vui lòng thêm môn học')
         else if (stc > 24) toast.error(' Vượt quá 16 tín chỉ, vui lòng xoá môn học')
         else {
            dsMHDK.map((i) =>
               dispatch(
                  actions.addMonhoc({
                     ...i,
                     mshocky: hocky,
                     tengiangvien: i.GV?.tengiangvien,
                     tenmh: i.monhocTC?.tenmh,
                  })
               )
            )
            dsMHDK.map((i) =>
               dispatch(
                  actions.createDiem({
                     mssv: sinhvien?.mssv,
                     msmh: i.msmh,
                     mshocky: hocky,
                     phanTramQT: i.phanTramQT,
                     phanTramGK: i.phanTramGK,
                     quatrinh: '',
                     giuaky: '',
                     diemthi: '',
                  })
               )
            )
            const arr = ds?.filter((i) => i.mssv !== dsMHDK[0].mssv)
            setDS(arr)
            setDSMHDK([])
            localStorage.setItem('mhdk', JSON.stringify(arr))
            toast.success('Đã thêm vào cơ sở dữ liệu')
         }
      }
   }
   console.log(dsMHDK)
   const handleRemoveDSDKMH = (mh) => {
      let newDs = dsMHDK?.filter((i) => i.msmh !== mh.msmh)
      let data = []
      for (let i = 0; i < ds.length; i++) {
         if (ds[i].msmh === mh.msmh && ds[i].mssv === sinhvien.mssv) {
            const arr1 = ds.slice(0, i)
            const arr2 = ds.slice(i + 1, ds.length)
            data = arr1.concat(arr2)
         }
      }
      setDS(data)
      setDSMHDK(newDs)
      toast.success('Xoá thành công...!')
   }
   const handleRemoveDSDKMHInCSDL = (mh) => {
      if (mh) {
         dispatch(actions.deleteMonHocInDSDKMH(mh.msmh))
         toast.success('Xoá thành công...!')
      }
   }
   return (
      <main className="min-h-[550px] py-4">
         <h4 className="text-[32px] uppercase text-center p-2">Thông tin phiếu đăng ký môn học</h4>
         <table>
            <thead className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
               <tr>
                  <th>Mã môn học</th>
                  <th>Tên môn học</th>
                  <th>Lớp học</th>
                  <th>Số tín chỉ</th>
                  <th>Học phí</th>
                  <th>Trạng thái môn học</th>
                  {dshocphi.find((i) => i.mssv === sinhvien?.mssv) ? '' : <th>Chức năng</th>}
               </tr>
            </thead>
            <tbody className="text-[#000080]">
               {dsMHDK.length > 0 &&
                  dsMHDK.map((item, index) => {
                     return (
                        <tr key={index} className="hover:bg-[#00000013]">
                           <td>{item.msmh}</td>
                           <td>{item.monhocTC?.tenmh}</td>
                           <td>{item.mslophoc}</td>
                           <td>{item.monhocTC?.sotinchi}</td>
                           <td>
                              {Intl.NumberFormat('VI', {
                                 style: 'currency',
                                 currency: 'VND',
                              }).format(item.hocphi)}
                           </td>
                           <td>Chưa lưu</td>
                           <td>
                              <FontAwesomeIcon
                                 className="text-[20px] p-2 cursor-pointer"
                                 icon={faTrashCan}
                                 onClick={() => handleRemoveDSDKMH(item)}
                              />
                           </td>
                        </tr>
                     )
                  })}
               {danhsachsvdk.length > 0 &&
                  danhsachsvdk.map((item, index) => {
                     return (
                        <tr key={index} className="hover:bg-[#00000013]">
                           <td>{item.msmh}</td>
                           <td>{item.monhocDK?.tenmh}</td>
                           <td>{item.mslophoc}</td>
                           <td>{item.monhocDK?.sotinchi}</td>
                           <td>
                              {Intl.NumberFormat('VI', {
                                 style: 'currency',
                                 currency: 'VND',
                              }).format(item.hocphi)}
                           </td>
                           <td>{danhsachsvdk.find((i) => i.msmh === item.msmh) ? 'Đã lưu' : 'Chưa lưu'}</td>
                           <td>
                              {dshocphi.find((i) => i.mssv === sinhvien?.mssv) ? (
                                 ''
                              ) : (
                                 <FontAwesomeIcon
                                    className="text-[20px] p-2 cursor-pointer"
                                    icon={faTrashCan}
                                    onClick={() => handleRemoveDSDKMHInCSDL(item)}
                                 />
                              )}
                           </td>
                        </tr>
                     )
                  })}

               <tr>
                  <td></td>
                  <td></td>
                  <td></td>

                  {dsMHDK?.length > 0 && (
                     <>
                        <td className="italic text-right">Tổng: {sumSTC(dsMHDK) + sumSTC(danhsachsvdk)} tín chỉ</td>
                        <td colSpan={3} className="text-right p-2">
                           Tổng học phí:{' '}
                           <span className="italic font-bold">
                              {new Intl.NumberFormat('VI', {
                                 style: 'currency',
                                 currency: 'VND',
                              }).format(sumHocPhi(dsMHDK) + sumHocPhi(danhsachsvdk))}
                           </span>
                        </td>
                     </>
                  )}
               </tr>
            </tbody>
            {dsMHDK.length !== 0 ? (
               <tr>
                  <td colSpan={13} className="text-right p-2">
                     <Button
                        width={'w-[100px]'}
                        rounded={'rounded-xl'}
                        m={'m-0'}
                        textColor={'text-white'}
                        onClick={handleAddMHVaoDSDKMH}
                        label={'Lưu đăng ký'}
                        bg={'bg-gradient-to-r from-sky-500 to-indigo-500'}
                     />
                  </td>
               </tr>
            ) : (
               ''
            )}
            {showDetail && <ChitietMonhoc setShowDetail={setShowDetail} monhoc={detailMH} monhocs={monhocs} />}
         </table>
      </main>
   )
}
export default PhieuDKMH
