import InputForm from './InputForm'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSinhvien } from '../store/actions/sinhvien'
import { getListLop } from '../store/actions/lop'
import { getListHocky, getListKhoa, updateMonhoc } from '../store/actions'
import { toast } from 'react-toastify'

function Modal({ setShow, sinhvien, monhoc, title }) {
   const dispatch = useDispatch()
   const [editSV, setEditSV] = useState({
      mssv: sinhvien ? sinhvien.mssv : '',
      tensv: sinhvien ? sinhvien.tensv : '',
      email: sinhvien ? sinhvien.email : '',
      sodienthoai: sinhvien ? sinhvien.sodienthoai : '',
      matkhau: sinhvien ? sinhvien.matkhau : '',
      ngaysinh: sinhvien ? sinhvien.ngaysinh : '',
      noisinh: sinhvien ? sinhvien.noisinh : '',
      gioitinh: sinhvien ? sinhvien.gioitinh : '',
      mslop: sinhvien ? sinhvien.mslop : '',
      diachi: sinhvien ? sinhvien.diachi : '',
   })

   const [editMH, setEditMH] = useState({
      msmh: monhoc.msmh || '',
      tenmh: monhoc.tenmh || '',
      sotinchi: monhoc.sotinchi || '',
      mota: monhoc.mota || '',
      mshocky: monhoc.mshocky || '',
      sotiet: monhoc.sotiet || '',
      lythuyet: monhoc.lythuyet || '',
      thuchanh: monhoc.thuchanh || '',
      tuhoc: monhoc.tuhoc || '',
   })

   const { lops } = useSelector((state) => state.lop)

   const { khoas } = useSelector((state) => state.khoa)

   const { hockys } = useSelector((state) => state.hocky)

   useEffect(() => {
      dispatch(getListLop())

      dispatch(getListKhoa())

      dispatch(getListHocky())
   }, [])

   const handleShowModal = () => {
      setShow(false)
   }

   const handleSaveChangeSV = () => {
      dispatch(updateSinhvien(editSV))
      toast.success('Cập nhật thành công...!')
      setShow(false)
   }

   const handleSaveChangeMH = () => {
      dispatch(updateMonhoc(editMH))
      toast.success('Cập nhật thành công...!')
      setShow(false)
   }

   return (
      <div className="fixed pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]">
         <div className="z-10 absolute w-[800px] h-[500px] bg-white left-[50%] right-[50%] translate-x-[-50%] p-[10px] rounded-xl">
            <div className="row">
               <div className="form-group  col-md-12">
                  <span className="thong-tin-thanh-toan">
                     <h5 className="text-center">{title}</h5>
                  </span>
               </div>
            </div>
            {sinhvien && (
               <div className="row">
                  <InputForm
                     labelInput={'Mã số sinh viên'}
                     type={'text'}
                     value={editSV.mssv}
                     setValue={setEditSV}
                     disable
                     name={'mssv'}
                  />
                  <InputForm
                     labelInput={'Tên sinh viên'}
                     type={'text'}
                     value={editSV.tensv}
                     setValue={setEditSV}
                     name={'tensv'}
                  />
                  <InputForm
                     labelInput={'Địa chỉ'}
                     type={'text'}
                     value={editSV.diachi}
                     setValue={setEditSV}
                     name={'diachi'}
                  />
                  <InputForm
                     labelInput={'Địa chỉ email'}
                     type={'text'}
                     value={editSV.email}
                     setValue={setEditSV}
                     name={'email'}
                  />
                  <InputForm
                     labelInput={'Số điện thoại'}
                     type={'number'}
                     value={editSV.sodienthoai}
                     setValue={setEditSV}
                     name={'sodienthoai'}
                  />
                  <InputForm
                     labelInput={'Mật khẩu'}
                     type={'text'}
                     value={editSV.matkhau}
                     setValue={setEditSV}
                     name={'matkhau'}
                  />
                  <InputForm
                     labelInput={'Ngày sinh'}
                     type={'date'}
                     value={editSV.ngaysinh}
                     setValue={setEditSV}
                     name={'ngaysinh'}
                  />
                  <InputForm
                     labelInput={'Nơi sinh'}
                     type={'text'}
                     value={editSV.noisinh}
                     setValue={setEditSV}
                     name={'noisinh'}
                  />
                  <InputForm
                     labelInput={'Giới tính'}
                     type={'text'}
                     value={editSV.gioitinh}
                     setValue={setEditSV}
                     name={'gioitinh'}
                  />

                  <div className="form-group col-md-3">
                     <label className="control-label">Lớp</label>
                     <select
                        className="form-control"
                        id="mslop"
                        required
                        onChange={(e) =>
                           setEditSV({
                              ...editSV,
                              mslop: e.target.value,
                           })
                        }
                        value={editSV.mslop}
                     >
                        {/* <option value={""}>-- Chọn lớp --</option> */}
                        {lops &&
                           lops.length > 0 &&
                           lops.map((item, index) => {
                              return (
                                 <option key={index} value={item.mslop}>
                                    {item.mslop}
                                 </option>
                              )
                           })}
                     </select>
                  </div>
               </div>
            )}
            {monhoc && (
               <div className="row">
                  <InputForm
                     labelInput={'Mã số môn học'}
                     type={'text'}
                     value={editMH.msmh}
                     setValue={setEditMH}
                     name={'msmh'}
                  />
                  <InputForm
                     labelInput={'Tên môn học'}
                     type={'text'}
                     value={editMH.tenmh}
                     setValue={setEditMH}
                     name={'tenmh'}
                  />
                  <InputForm
                     labelInput={'Số tín chỉ'}
                     type={'text'}
                     value={editMH.sotinchi}
                     setValue={setEditMH}
                     name={'sotinchi'}
                  />
                  <InputForm
                     labelInput={'Số tiết'}
                     type={'number'}
                     value={editMH.sotiet}
                     setValue={setEditMH}
                     name={'sotiet'}
                  />
                  <InputForm
                     labelInput={'Lý thuyết'}
                     type={'number'}
                     value={editMH.lythuyet}
                     setValue={setEditSV}
                     name={'lythuyet'}
                  />
                  <InputForm
                     labelInput={'Thực hành'}
                     type={'number'}
                     value={editMH.thuchanh}
                     setValue={setEditSV}
                     name={'thuchanh'}
                  />
                  <InputForm
                     labelInput={'Tự học'}
                     type={'number'}
                     value={editMH.tuhoc}
                     setValue={setEditSV}
                     name={'tuhoc'}
                  />
                  <div className="form-group col-md-3">
                     <label className="control-label">Học kỳ</label>

                     <select
                        className="form-control"
                        id="mshocky"
                        required
                        onChange={(e) =>
                           setEditMH({
                              ...editMH,
                              mshocky: e.target.value,
                           })
                        }
                        value={editMH.mshocky}
                     >
                        <option value={''}>-- Chọn học kỳ --</option>
                        {hockys &&
                           hockys.length > 0 &&
                           hockys.map((item, index) => {
                              return (
                                 <option key={index} value={item.mshocky}>
                                    {item.tenhocky}
                                 </option>
                              )
                           })}
                     </select>
                  </div>
               </div>
            )}
            {editSV.mssv && (
               <button className="btn btn-save mr-[4px]" type="button" onClick={handleSaveChangeSV}>
                  Lưu lại
               </button>
            )}
            {editMH.msmh && (
               <button className="btn btn-save mr-[4px]" type="button" onClick={handleSaveChangeMH}>
                  Lưu lại
               </button>
            )}
            <button className="btn btn-cancel" onClick={handleShowModal}>
               Hủy bỏ
            </button>
         </div>
      </div>
   )
}
export default Modal
