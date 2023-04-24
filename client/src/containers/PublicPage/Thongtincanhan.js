import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutSinhvien, updateSinhvien } from '../../store/actions'
import { useNavigate } from 'react-router-dom'
import bcryptjs from 'bcryptjs'
import { toast } from 'react-toastify'

function Thongtincanhan() {
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [showResetPass, setShowResetpPass] = useState(false)

   const [disableNumber, setDisableNumber] = useState(true)

   const [disableEmail, setDisableEmail] = useState(true)

   const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

   const [sv, setSV] = useState({
      mssv: sinhvien?.mssv,
      tensv: sinhvien?.tensv,
      email: sinhvien?.email,
      matkhau: sinhvien?.matkhau,
      diachi: sinhvien?.diachi,
      sodienthoai: sinhvien?.sodienthoai,
      ngaysinh: sinhvien?.ngaysinh,
      noisinh: sinhvien?.noisinh,
      gioitinh: sinhvien?.gioitinh,
      mslop: sinhvien?.mslop,
   })

   const [matkhauHienTai, setMatKhauHienTai] = useState('')

   const [xacnhanmatkhau, setXacnhanmatkhau] = useState('')

   useEffect(() => {
      !isLoggedInSinhvien && navigate('/')
   }, [isLoggedInSinhvien])

   const handleEditTT = () => {
      if (!bcryptjs.compareSync(matkhauHienTai, sinhvien.matkhau)) {
         toast.error('Mật khẩu hiện tại không đúng...!')
      } else if (sv.matkhau !== xacnhanmatkhau) toast.error('Mật khẩu xác nhận không trùng khớp')
      else {
         dispatch(updateSinhvien(sv))
         toast.success('Cập nhật thành công...!')
         dispatch(logoutSinhvien())
      }
   }

   return (
      <div className="m-1 text-[10px]">
         <div className="uppercase font-bold bg-[#67b0c1] p-1">Thay đổi thông tin cá nhân</div>
         <div className="border-2 border-black flex flex-col items-center">
            <div className=" w-[635px] p-[4px]">
               <div className=" bg-[#ccccff] pl-[4px] p-[2px] font-bold">Thông tin cá nhân</div>
               <div className="flex justify-center">
                  <ul className="m-0">
                     <li className="p-[3px]">Tài khoản: </li>
                     <li className="p-[3px]">Họ tên: </li>
                     <li className="p-[3px]">Mật khẩu: </li>
                  </ul>
                  <ul className="m-0">
                     <li className="p-[3px] font-bold italic">{sv.mssv}</li>
                     <li className="p-[3px] font-bold italic">{sv.tensv}</li>
                     <button
                        className="p-[3px] text-[#0000ff] hover:underline"
                        onClick={() => setShowResetpPass(!showResetPass)}
                     >
                        Thay đổi mật khẩu
                     </button>
                  </ul>
               </div>
            </div>
            <div className=" w-[635px] p-[4px]">
               <div className="bg-[#ccccff] pl-[4px] p-[2px] font-bold flex justify-between">
                  <span>Điện thoại</span>
                  <button
                     className="font-normal text-[#0000ff] hover:underline m-0"
                     onClick={() => setDisableNumber(false)}
                  >
                     Sửa đổi
                  </button>
               </div>
               <div className="flex justify-center">
                  <ul className="m-0">
                     <li className="p-[3px] w-[120px]">Điện thoại (1): </li>
                     <li className="p-[3px] w-[120px]">Điện thoại (2): </li>
                  </ul>
                  <ul className="m-0">
                     <li className="p-[3px]">
                        <input
                           type="text"
                           disabled={disableNumber}
                           className="border-[1px] w-[240px] border-black border-solid bg-[#efefef4d] rounded-sm italic"
                           value={sv.sodienthoai}
                           onChange={(e) => setSV({ ...sv, sodienthoai: e.target.value })}
                        />
                     </li>
                     <li className="p-[3px]">
                        <input
                           type="text"
                           disabled={disableNumber}
                           className="border-[1px] w-[240px] border-black border-solid bg-[#efefef4d] rounded-sm"
                        />
                     </li>
                  </ul>
               </div>
            </div>
            <div className=" w-[635px] p-[4px]">
               <div className="bg-[#ccccff] pl-[4px] p-[2px] font-bold flex justify-between">
                  <span>Email</span>
                  <button
                     className="font-normal text-[#0000ff] hover:underline m-0"
                     onClick={() => setDisableEmail(false)}
                  >
                     Sửa đổi
                  </button>
               </div>
               <div className="flex justify-center">
                  <ul className="m-0">
                     <li className="p-[3px] w-[120px]">Địa chỉ email (1): </li>
                     <li className="p-[3px] w-[120px]">Địa chỉ email (2): </li>
                  </ul>
                  <ul className="m-0">
                     <li className="p-[3px]">
                        <input
                           type="text"
                           disabled={disableEmail}
                           className="border-[1px] w-[240px] border-black border-solid bg-[#efefef4d] rounded-sm"
                           value={sv.email}
                           onChange={(e) => setSV({ ...sv, email: e.target.value })}
                        />
                     </li>
                     <li className="p-[3px]">
                        <input
                           type="text"
                           disabled={disableEmail}
                           className="border-[1px] w-[240px] border-black border-solid bg-[#efefef4d] rounded-sm"
                        />
                     </li>
                  </ul>
               </div>
            </div>
            {showResetPass && (
               <div className=" w-[635px] p-[4px]">
                  <div className=" bg-[#ccccff] pl-[4px] p-[2px] font-bold">
                     Thay đổi mật khẩu (Lưu ý: mật khẩu cần khác với mật khẩu mặc định ngày sinh )
                  </div>
                  <div className="flex justify-center">
                     <ul className="m-0">
                        <li className="p-[3px] w-[120px]">Nhập mật khẩu hiện tại: </li>
                        <li className="p-[3px] w-[120px]">Nhập mật khẩu mới: </li>
                        <li className="p-[3px] w-[120px]">Xác nhận mật khẩu mới: </li>
                     </ul>
                     <ul className="m-0">
                        <li className="p-[3px]">
                           <input
                              onChange={(e) => setMatKhauHienTai(e.target.value)}
                              type="text"
                              className="border-[1px] w-[240px] border-black border-solid bg-[#efefef4d] rounded-sm w-[240px]"
                           />
                        </li>
                        <li className="p-[3px]">
                           <input
                              onChange={(e) => setSV({ ...sv, matkhau: e.target.value })}
                              type="text"
                              className="border-[1px] w-[240px] border-black border-solid bg-[#efefef4d] rounded-sm"
                           />
                        </li>
                        <li className="p-[3px]">
                           <input
                              onChange={(e) => setXacnhanmatkhau(e.target.value)}
                              type="text"
                              className="border-[1px] w-[240px] border-black border-solid bg-[#efefef4d] rounded-sm"
                           />
                        </li>
                     </ul>
                  </div>
               </div>
            )}
            <div>
               <button
                  className="p-[4px] hover:underline border-[1px] border-black border-solid rounded-sm bg-[#f0f0f0] m-1"
                  onClick={handleEditTT}
               >
                  Lưu lại
               </button>
               <button className="p-[4px] hover:underline border-[1px] border-black border-solid rounded-sm bg-[#f0f0f0] m-1">
                  Huỷ bỏ
               </button>
            </div>
         </div>
      </div>
   )
}
export default Thongtincanhan
