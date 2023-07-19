import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import * as actions from '../store/actions'

function ModelNhapDiem({ setShowModel, monhoc }) {
   const dispatch = useDispatch()
   const [diem, setDiem] = useState({
      mssv: monhoc?.mssv,
      msmh: monhoc?.msmh,
      mshocky: monhoc.monhocDK?.mshocky,
      phanTramQT: monhoc?.phanTramQT,
      phanTramGK: monhoc?.phanTramGK,
      quatrinh: '',
      giuaky: '',
      diemthi: '',
   })
   console.log(monhoc)
   const { danhsachs } = useSelector((state) => state.dangkymonhoc)

   useEffect(() => {
      dispatch(actions.getAllDSMHDK())
   }, [])

   const handleCreateDiemMH = () => {
      if (!diem.diemthi) {
         return
      } else {
         dispatch(actions.updateDiem(diem))
         toast.success('Cập nhật điểm thành công...!')
         setShowModel(false)
         // dispatch(actions.deleteMonHocInDSDKMH(monhoc?.msmh))
      }
   }
   return (
      <div className="fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]">
         <div className="fixed z-[1] pt-[60px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]">
            <div className="absolute w-[500px] h-[600px] bg-white left-[50%] right-[50%] translate-x-[-50%] p-[10px] rounded-xl overflow-scroll">
               <div className="text-[14px] font-bold flex justify-end">
                  <p className="text-right p-2 hover:opacity-80 m-0" onClick={() => setShowModel(false)}>
                     <FontAwesomeIcon className="cursor-pointer p-2" icon={faXmark} />
                  </p>
               </div>
               <h2 className="uppercase text-center p-2 text-[32px]">Nhập điểm môn học</h2>

               <div className="flex justify-between">
                  <div className="flex justify-center">
                     <div className="mx-2">
                        <label className="italic">Mã số sinh viên</label>
                        <input
                           disabled
                           className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                           type={'text'}
                           value={diem.mssv}
                        />
                        <label className="italic">Mã môn học</label>
                        <input
                           disabled
                           className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                           type={'text'}
                           value={diem.msmh}
                        />
                        <label className="italic">Tên môn học</label>
                        <input
                           disabled
                           className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                           type={'text'}
                           value={monhoc.tenmh}
                        />
                        <label className="italic">Số tín chỉ</label>
                        <input
                           disabled
                           className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                           type={'text'}
                           value={monhoc.monhocDK?.sotinchi}
                        />
                        {danhsachs.find(
                           (i) => i.msmh === monhoc.msmh && i.mssv === monhoc.mssv && i.phanTramQT === '0'
                        ) ? (
                           <>
                              <label className="italic hover:underline cursor-pointer" htmlFor="quatrinh">
                                 Quá trình
                              </label>
                              <input
                                 disabled
                                 id="quatrinh"
                                 className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                                 type={'text'}
                                 placeholder="Không có điểm quá trình"
                              />
                           </>
                        ) : (
                           <>
                              <label className="italic hover:underline cursor-pointer" htmlFor="quatrinh">
                                 Quá trình
                              </label>
                              <input
                                 onChange={(e) =>
                                    setDiem({
                                       ...diem,
                                       quatrinh: e.target.value,
                                    })
                                 }
                                 id="quatrinh"
                                 className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                                 type={'text'}
                                 value={diem.quatrinh}
                              />
                           </>
                        )}
                        {danhsachs.find(
                           (i) => i.msmh === monhoc.msmh && i.mssv === monhoc.mssv && i.phanTramGK === '0'
                        ) ? (
                           <>
                              <label className="italic hover:underline cursor-pointer" htmlFor="gk">
                                 Giữa kỳ
                              </label>
                              <input
                                 disabled
                                 id="gk"
                                 className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                                 type={'text'}
                                 placeholder="Không có điểm giữa kỳ"
                              />
                           </>
                        ) : (
                           <>
                              <label className="italic hover:underline cursor-pointer" htmlFor="gk">
                                 Giữa kỳ
                              </label>
                              <input
                                 onChange={(e) => setDiem({ ...diem, giuaky: e.target.value })}
                                 id="gk"
                                 className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                                 type={'text'}
                                 value={diem.giuaky}
                              />
                           </>
                        )}

                        <label className="italic hover:underline cursor-pointer" htmlFor="diemthi">
                           Điểm thi
                        </label>
                        <input
                           onChange={(e) => setDiem({ ...diem, diemthi: e.target.value })}
                           id="diemthi"
                           className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                           type={'text'}
                           value={diem.diemthi}
                        />
                     </div>
                  </div>
               </div>
               <button
                  onClick={handleCreateDiemMH}
                  className="w-full border-[1px] border-solid p-2 mt-[16px] rounded-xl order-[#0C3689] text-[#0C3689]"
               >
                  Lưu
               </button>
            </div>
         </div>
      </div>
   )
}
export default ModelNhapDiem
