import { Button, LabelInput } from "../../components"
import * as actions from "../../store/actions"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import bcryptjs from "bcryptjs"
import { toast } from "react-toastify"

function SuaMatkhau() {
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const [oldPass, setOldPass] = useState("")

	const [newPass, setNewPass] = useState("")

	const [confirmPass, setConfirmPass] = useState("")

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

	useEffect(() => {
		!isLoggedInSinhvien && navigate("/")
	}, [isLoggedInSinhvien])

	const handleEditPassword = () => {
		if (!oldPass.oldPass && !newPass.newPass && !confirmPass.confirmPass)
			return
		else if (!bcryptjs.compareSync(oldPass.oldPass, sinhvien.matkhau)) {
			toast.error("Mật khẩu cũ không đúng...!")
		} else if (!newPass.newPass || !confirmPass.confirmPass)
			toast.error("Vui lòng nhập đầy đủ thông tin...!")
		else if (newPass.newPass === oldPass.oldPass)
			toast.error("Mật khẩu mới phải khác mật khẩu cũ...!")
		else if (newPass.newPass.length < 6)
			toast.error("Mật khẩu phải có ít nhất 6 ký tự...!")
		else if (newPass.newPass !== confirmPass.confirmPass)
			toast.error("Mật khẩu xác nhận không trùng khớp")
		else {
			dispatch(actions.editPasswordSinhvien(newPass))
			toast.success("Cập nhật thành công...!")
			dispatch(actions.logoutSinhvien())
		}
	}
	const handleEditPasswordKeyDown = (e) => {
		if (e.keyCode === 13) {
			if (!oldPass.oldPass) toast.error("Vui lòng nhập mật khẩu cũ...!")
			else if (!bcryptjs.compareSync(oldPass.oldPass, sinhvien.matkhau)) {
				toast.error("Mật khẩu cũ không đúng...!")
			} else if (!newPass.newPass || !confirmPass.confirmPass) {
				toast.error("Vui lòng nhập đầy đủ thông tin...!")
			} else if (newPass.newPass !== confirmPass.confirmPass)
				toast.error("Mật khẩu xác nhận không trùng khớp")
			else {
				dispatch(actions.editPasswordSinhvien(newPass))
				toast.success("Cập nhật thành công...!")
				dispatch(actions.logoutSinhvien())
			}
		}
	}

	return (
		<main className='min-h-[500px]'>
			<h4 className='text-center my-4 uppercase'>
				Cập nhật mật khẩu của bạn
			</h4>
			<div className='flex flex-col justify-center w-[400px] m-auto border-[1px] border-solid p-4 rounded-xl'>
				<LabelInput
					label={"Mật khẩu cũ"}
					type={"password"}
					id={"oldPass"}
					placeholder={"Nhập mật khẩu cũ của bạn"}
					setValue={setOldPass}
					value={"oldPass"}
				/>
				<LabelInput
					label={"Mật khẩu mới"}
					type={"password"}
					id={"newPass"}
					placeholder={"Nhập mật khẩu mới của bạn"}
					setValue={setNewPass}
					value={"newPass"}
				/>
				<LabelInput
					label={"Xác nhận mật khẩu mới"}
					type={"password"}
					id={"confirmPass"}
					placeholder={"Xác nhận mật khẩu mới của bạn"}
					setValue={setConfirmPass}
					value={"confirmPass"}
					handleEditPasswordKeyDown={handleEditPasswordKeyDown}
				/>
			</div>
			<div className='flex justify-center'>
				<Button
					onClick={handleEditPassword}
					rounded={"rounded-sm"}
					m={"mt-2"}
					textColor={"text-[#80BFCD]"}
					label={"Lưu thay đổi"}
				/>
			</div>
		</main>
	)
}
export default SuaMatkhau
