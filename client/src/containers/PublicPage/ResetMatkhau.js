import * as actions from "../../store/actions"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { toast } from "react-toastify"
import { ResetPassWord } from "../../store/actions/auth"
import { Button } from "../../components"

function ResetMatkhau() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [newPass, setNewPass] = useState()
	const [confirmPass, setConfirmPass] = useState()

	const [params] = useSearchParams()
	const [email, setEmail] = useState({ email: params.get("email") })
	console.log(email.email?.slice(0))
	const handleSubmitChangePassword = () => {
		if (!newPass || !confirmPass)
			toast.error("Vui lòng nhập đầy đủ  thông tin...!")
		else if (newPass.newPass.length < 6)
			toast.error("Mật khẩu phải có ít nhất 6 ký tự...!")
		else {
			if (newPass.newPass !== confirmPass.confirmPass)
				toast.error("Mật khẩu không khớp...!")
			else {
				if (
					dispatch(actions.ResetPassWord(email.email?.slice(0), newPass))
				) {
					toast.success("Thay đổi mật khẩu thành công...!")
					setTimeout(() => {
						navigate("/login")
					}, 1000)
				}
			}
		}
	}
	return (
		<main className='h-[755px] flex justify-center items-center'>
			<div className='w-full h-full'>
				<img
					className='w-full h-full'
					src={require("../../assets/images/dai-hoc-cong-nghe-sai-gon-1.webp")}
				/>
			</div>
			<div className='fixed w-[400px] min-h-[300px] bg-[#FFF] border-[#ccc] boder-solid border-[1px] rounded-xl p-4'>
				<img
					className='w-[80px] h-[80px] flex m-auto'
					src={require("../../assets/images/Logo_STU.png")}
				/>
				<h4 className='text-center uppercase text-[32px] p-2'>
					Reset Password
				</h4>
				<div className='flex- flex-col'>
					<label
						htmlFor='old-pass'
						className='text-[#5a53bc] hover:underline cursor-pointer'
					>
						New password
					</label>
					<input
						className='border-[1px] border-solid border-black rounded-xl p-2 my-[4px]'
						type='password'
						id='old-pass'
						onChange={(e) => setNewPass({ newPass: e.target.value })}
					/>
					<label
						htmlFor='new-pass'
						className='text-[#5a53bc] hover:underline cursor-pointer'
					>
						Confirm password
					</label>
					<input
						className='border-[1px] border-solid boder-black rounded-xl p-2 my-[4px]'
						type='password'
						id='new-pass'
						onChange={(e) =>
							setConfirmPass({ confirmPass: e.target.value })
						}
					/>
				</div>
				<Button
					label={"Reset Password"}
					m={"mt-[8px]"}
					bg={"bg-gradient-to-r from-sky-500 to-indigo-500"}
					onClick={handleSubmitChangePassword}
					width={"w-full"}
					rounded={"rounded-sm"}
				/>
			</div>
		</main>
	)
}
export default ResetMatkhau
