import { Button, LabelInput } from "../../components"
import * as actions from "../../store/actions"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import bcryptjs from "bcryptjs"
import { toast } from "react-toastify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Tippy from "@tippyjs/react"
import { linkRoute } from "../../ultils/Common/constant"

function SuaMatkhau() {
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const [editPass, setEditPass] = useState({
		oldPass: "",
		newPass: "",
		confirmPass: "",
	})

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

	useEffect(() => {
		!isLoggedInSinhvien && navigate("/")
		dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
	}, [isLoggedInSinhvien])

	const handleEditPassword = () => {
		if (!editPass.oldPass && !editPass.newPass && !editPass.confirmPass)
			return
		else if (editPass.oldPass !== sinhvien.matkhau) {
			toast.error("Mật khẩu cũ không đúng...!")
		} else if (!editPass.newPass || !editPass.confirmPass)
			toast.error("Vui lòng nhập đầy đủ thông tin...!")
		else if (editPass.newPass === editPass.oldPass)
			toast.error("Mật khẩu mới phải khác mật khẩu cũ...!")
		else if (editPass.newPass.length < 6)
			toast.error("Mật khẩu phải có ít nhất 6 ký tự...!")
		else if (editPass.newPass !== editPass.confirmPass)
			toast.error("Mật khẩu xác nhận không trùng khớp")
		else {
			dispatch(actions.editPasswordSinhvien(editPass))
			toast.success("Cập nhật thành công...!")
			dispatch(actions.logoutSinhvien())
		}
	}
	const handleEditPasswordKeyDown = (e) => {
		if (e.keyCode === 13) {
			if (!editPass.oldPass) toast.error("Vui lòng nhập mật khẩu cũ...!")
			else if (editPass.oldPass !== sinhvien.matkhau) {
				toast.error("Mật khẩu cũ không đúng...!")
			} else if (!editPass.newPass || !editPass.confirmPass) {
				toast.error("Vui lòng nhập đầy đủ thông tin...!")
			} else if (editPass.newPass !== editPass.confirmPass)
				toast.error("Mật khẩu xác nhận không trùng khớp")
			else {
				dispatch(actions.editPasswordSinhvien(editPass))
				toast.success("Cập nhật thành công...!")
				dispatch(actions.logoutSinhvien())
			}
		}
	}
	const handleRemoveText = () => {
		setEditPass({
			oldPass: "",
			newPass: "",
			confirmPass: "",
		})
	}
	console.log(editPass.oldPass)
	return (
		<main className='w-full px-4 flex'>
			{sinhvien && (
				<>
					<div className='w-[30%] my-4 border-solid border-r-2 border-black text-center'>
						<img
							className='rounded-full w-[200px] h-[200px] m-auto'
							src={
								sinhvien?.avatar &&
								require(`../../assets/images/${sinhvien?.avatar}`)
							}
						/>
						<p className='my-3 text-[22px] font-bold'>{sinhvien?.mssv}</p>
					</div>
					<div className='w-full p-4'>
						<p className='border-b-2 border-solid w-[80%] text-[26px] py-[10px] text-[#333333] uppercase'>
							Cập nhật mật khẩu
						</p>
						<div className='flex flex-col w-[60%] text-[16px] pt-[16px] pb-[20px]'>
							<label
								className='font-bold cursor-pointer'
								htmlFor='old-pass'
							>
								Mật khẩu củ
							</label>
							<input
								onChange={(e) =>
									setEditPass({ ...editPass, oldPass: e.target.value })
								}
								value={editPass.oldPass}
								id='old-pass'
								className='w-full py-[4px] bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-solid border-[#0000000d]'
								type={"text"}
							/>
						</div>
						<div className='flex flex-col w-[60%] text-[16px] pt-[16px] pb-[20px]'>
							<label
								className='font-bold cursor-pointer'
								htmlFor='new-pass'
							>
								Mật khẩu mới
							</label>
							<input
								onChange={(e) =>
									setEditPass({ ...editPass, newPass: e.target.value })
								}
								value={editPass.newPass}
								id='new-pass'
								className='w-full py-[4px] bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-solid border-[#0000000d]'
								type={"text"}
							/>
						</div>

						<div className='border-b-2 border-solid border-[#0000000d] flex flex-col w-[60%] text-[16px] pt-[16px] pb-[20px]'>
							<label
								className='font-bold cursor-pointer'
								htmlFor='confirm-newPass'
							>
								Xác nhận mật khẩu mới
							</label>
							<input
								onKeyDown={(e) => handleEditPasswordKeyDown(e)}
								onChange={(e) =>
									setEditPass({
										...editPass,
										confirmPass: e.target.value,
									})
								}
								value={editPass.confirmPass}
								id='confirm-newPass'
								className='w-full py-[4px] bg-transparent'
								type={"text"}
							/>
						</div>
						<div className='my-2'>
							<button
								onClick={handleEditPassword}
								className='border-[1px] border-solid p-2 mx-2 rounded-xl border-[#000000d] text-[white] bg-[Navy] hover:bg-white hover:text-[Navy]'
							>
								Lưu thay đổi
							</button>
							<button
								onClick={handleRemoveText}
								className='border-[1px] border-solid p-2 mx-2 rounded-xl border-[#000000d] text-black bg-[red] hover:bg-black hover:text-[red]'
							>
								Huỷ bỏ
							</button>
							<Link
								to={linkRoute.THONGTIN_SV}
								className='border-[1px] border-solid border-[#5b5c5c] mx-2 p-[7px] rounded-xl text-black bg-[gray] hover:bg-black hover:text-[gray]'
								// className=' border-[1px] border-solid border-[#000000d] py-2 px-4 mx-2 rounded-xl  text-[#0000008a] hover:border-[#0000008a] hover:text-[#000000ad]'
							>
								Quay lại
							</Link>
						</div>
					</div>
				</>
			)}
		</main>
	)
}
export default SuaMatkhau
