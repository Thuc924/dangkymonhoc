import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import * as actions from '../store/actions'

function ModelAddMHTC({ khoa, mshocky, setShowModel, monhoc, giangviens, mslop }) {
   const dispatch = useDispatch()

   const [mhtcAdd, setMhtcAdd] = useState({
      msmh: monhoc?.msmh,
      mslophoc: [],
      phanTramQT: '',
      phanTramGK: '',
      siso: '',
      thu: '',
      tietbd: '',
      sotiet: '',
      phong: '',
      msgiangvien: '',
      monhoctruoc: '',
      monhocsau: '',
      mota: '',
      songhanh: '',
      ngaybd: '',
      ngaykt: '',
   })
   const { monhocs } = useSelector((state) => state.monhoc)

   const [monHocTruoc, setMonHocTruoc] = useState([])
   const [monHocSau, setMonHocSau] = useState([])
   const [monSongHanh, setMonSongHanh] = useState([])

   useEffect(() => {
      dispatch(actions.getListMonhoctochuc())
      dispatch(actions.getListMonhoc())
      if (khoa === '5' || khoa === null) {
         const listMHS = monhocs.filter(
            (i) => +i.mshocky.slice(2, 3) === +mshocky.slice(2, 3) + 1 && i.msmh.slice(0, 2) === 'CS'
         )
         const listMHT = monhocs.filter(
            (i) => +i.mshocky.slice(2, 3) + 1 === +mshocky.slice(2, 3) && i.msmh.slice(0, 2) === 'CS'
         )
         const listMHSH = monhocs.filter(
            (i) => +i.mshocky.slice(2, 3) === +mshocky.slice(2, 3) && i.msmh.slice(0, 2) === 'CS'
         )
         setMonHocSau(listMHS)
         setMonHocTruoc(listMHT)
         setMonSongHanh(listMHSH)
      }
   }, [])
   console.log(khoa)
   const handleAddMHTC = () => {
      //   if (
      //      !mhtcAdd.msmh ||
      //      !mhtcAdd.mslophoc ||
      //      !mhtcAdd.siso ||
      //      !mhtcAdd.phanTramQT ||
      //      !mhtcAdd.phanTramGK ||
      //      !mhtcAdd.thu ||
      //      !mhtcAdd.tietbd ||
      //      !mhtcAdd.sotiet ||
      //      !mhtcAdd.msgiangvien ||
      //      !mhtcAdd.ngaybd ||
      //      !mhtcAdd.ngaykt
      //   )
      //      return
      for (let i = 0; i < mhtcAdd.mslophoc.length; i++) {
         dispatch(
            actions.addMonhoctochuc({
               ...mhtcAdd,
               mslophoc: mhtcAdd.mslophoc[i],
            })
         )
      }
      toast.success('Thêm thành công...!')
      setShowModel(false)
   }
   const handleAddMsLop = (e) => {
      setMhtcAdd({
         ...mhtcAdd,
         mslophoc: [...mhtcAdd.mslophoc, e.target.value],
      })
   }
   console.log(mhtcAdd)
   return (
      <div className="fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]">
         <div className="fixed z-[1] pt-[60px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]">
            <div className="absolute w-[700px] h-[650px] bg-white left-[50%] right-[50%] translate-x-[-50%] p-[10px] rounded-xl overflow-scroll">
               <div className="text-[14px] font-bold flex justify-end">
                  <p className="text-right p-2 hover:opacity-80 m-0" onClick={() => setShowModel(false)}>
                     <FontAwesomeIcon className="cursor-pointer p-2" icon={faXmark} />
                  </p>
               </div>
               <h2 className="uppercase text-center p-2 text-[32px]">Thêm môn học tổ chức</h2>

               <div className="flex justify-between">
                  <div className="flex flex-col w-[48%]">
                     <label className="italic hover:underline cursor-pointer" htmlFor="msmh">
                        Mã môn học
                     </label>
                     <input
                        disabled
                        id="msmh"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                        value={monhoc.msmh}
                     />
                     <label className="italic hover:underline cursor-pointer" htmlFor="tenmh">
                        Tên môn học
                     </label>
                     <input
                        disabled
                        id="tenmh"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                        value={monhoc.tenmh}
                     />
                     <label className="italic hover:underline cursor-pointer" htmlFor="mshocky">
                        Mã học kỳ
                     </label>
                     <input
                        disabled
                        id="mshocky"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                        value={mshocky}
                     />

                     <label className="italic hover:underline cursor-pointer" htmlFor="mslophoc">
                        Mã lớp học
                     </label>
                     <select
                        className="w-full border-[2px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        id="mskhoa"
                        required
                        onChange={(e) => handleAddMsLop(e)}
                     >
                        <option value={''}>-- Chọn lớp --</option>
                        {mslop &&
                           mslop.length > 0 &&
                           mslop.map((item, index) => {
                              return (
                                 <option key={index} value={item.mslop}>
                                    {item.mslop}
                                 </option>
                              )
                           })}
                     </select>
                     <p>{mhtcAdd.mslophoc}</p>
                     <label className="italic hover:underline cursor-pointer" htmlFor="qt">
                        % Quá trình
                     </label>
                     <input
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              phanTramQT: e.target.value,
                           })
                        }
                        id="qt"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                        value={mhtcAdd.phanTramQT}
                     />
                     <label className="italic hover:underline cursor-pointer" htmlFor="gk">
                        % Giữa kỳ
                     </label>
                     <input
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              phanTramGK: e.target.value,
                           })
                        }
                        id="gk"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                        value={mhtcAdd.phanTramGK}
                     />
                     <label className="italic hover:underline cursor-pointer" htmlFor="siso">
                        Sĩ số
                     </label>
                     <input
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              siso: e.target.value,
                           })
                        }
                        id="siso"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                     />
                  </div>
                  <div className="flex flex-col w-[48%]">
                     <label className="italic hover:underline cursor-pointer" htmlFor="thu">
                        Thứ
                     </label>
                     <input
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              thu: e.target.value,
                           })
                        }
                        id="thu"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                     />
                     <label className="italic hover:underline cursor-pointer" htmlFor="tietbd">
                        Tiết BD
                     </label>
                     <input
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              tietbd: e.target.value,
                           })
                        }
                        id="tietbd"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                     />
                     <label className="italic hover:underline cursor-pointer" htmlFor="sotiet">
                        Số tiết
                     </label>
                     <input
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              sotiet: e.target.value,
                           })
                        }
                        id="sotiet"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                     />
                     <label className="italic hover:underline cursor-pointer" htmlFor="phong">
                        Phòng
                     </label>
                     <input
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              phong: e.target.value,
                           })
                        }
                        id="phong"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'text'}
                     />
                     <p></p>
                     <label className="italic hover:underline cursor-pointer">Giảng viên</label>
                     <select
                        className="w-full border-[2px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        id="mskhoa"
                        required
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              msgiangvien: e.target.value,
                           })
                        }
                     >
                        <option value={''}>-- Chọn giảng viên --</option>
                        {giangviens &&
                           giangviens.length > 0 &&
                           giangviens.map((item, index) => {
                              return (
                                 <option key={index} value={item.msgiangvien}>
                                    {item.tengiangvien} - {item.chucvu}
                                 </option>
                              )
                           })}
                     </select>
                     {khoa === '5' && (
                        <>
                           <select
                              className="w-full border-[2px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                              id="mskhoa"
                              required
                              onChange={(e) =>
                                 setMhtcAdd({
                                    ...mhtcAdd,
                                    monhoctruoc: e.target.value,
                                 })
                              }
                           >
                              <option value={''}>-- Chọn môn học trước --</option>
                              {monHocTruoc.map((item, index) => {
                                 return (
                                    <option key={index} value={item.tenmh}>
                                       {item.tenmh}
                                    </option>
                                 )
                              })}
                           </select>
                           <select
                              className="w-full border-[2px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                              id="mskhoa"
                              required
                              onChange={(e) =>
                                 setMhtcAdd({
                                    ...mhtcAdd,
                                    monhocsau: e.target.value,
                                 })
                              }
                           >
                              <option value={''}>-- Chọn môn học sau --</option>
                              {monHocSau.map((item, index) => {
                                 return (
                                    <option key={index} value={item.tenmh}>
                                       {item.tenmh}
                                    </option>
                                 )
                              })}
                           </select>
                           <select
                              className="w-full border-[2px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                              id="mskhoa"
                              required
                              onChange={(e) =>
                                 setMhtcAdd({
                                    ...mhtcAdd,
                                    songhanh: e.target.value,
                                 })
                              }
                           >
                              <option value={''}>-- Chọn môn song hành --</option>
                              {monSongHanh.map((item, index) => {
                                 return (
                                    <option key={index} value={item.tenmh}>
                                       {item.tenmh}
                                    </option>
                                 )
                              })}
                           </select>
                        </>
                     )}
                     <select
                        className="w-full border-[2px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        id="mskhoa"
                        required
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              mota: e.target.value,
                           })
                        }
                     >
                        <option value={''}>-- Chọn mô tả --</option>
                        <option value={'BB'}>Bắt buộc</option>
                        <option value={'TC'}>Tự chọn</option>
                     </select>
                  </div>
               </div>
               <div className="flex justify-between">
                  <div className="w-[48%]">
                     <label className="italic hover:underline cursor-pointer" htmlFor="ngaybd">
                        Ngày bắt đầu
                     </label>
                     <input
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              ngaybd: e.target.value,
                           })
                        }
                        id="ngaybd"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'date'}
                     />
                  </div>
                  <div className="w-[48%]">
                     <label className="italic hover:underline cursor-pointer" htmlFor="ngaykt">
                        Ngày kết thúc
                     </label>
                     <input
                        onChange={(e) =>
                           setMhtcAdd({
                              ...mhtcAdd,
                              ngaykt: e.target.value,
                           })
                        }
                        id="ngaykt"
                        className="w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring"
                        type={'date'}
                     />
                  </div>
               </div>
               <button
                  onClick={handleAddMHTC}
                  className="w-full border-[1px] border-solid p-2 mt-[16px] rounded-xl order-[#0C3689] text-[#0C3689]"
               >
                  Lưu
               </button>
            </div>
         </div>
      </div>
   )
}
export default ModelAddMHTC
