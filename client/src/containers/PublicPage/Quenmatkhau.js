import * as actions from "../../store/actions"
import { languageContext } from "../layouts/DefaultLayout"

import { useDispatch } from "react-redux"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
function Quenmatkhau() {
	const navigate = useNavigate()

	const language = useContext(languageContext)

	const dispatch = useDispatch()

	const [emailResetPassword, setEmailResetPassword] = useState()

	const sendEmailResetPassword = () => {
		if (!emailResetPassword) {
			toast.error("Vui lòng nhập email của bạn...!")
		} else {
			dispatch(actions.sendEmail(emailResetPassword))
			toast.success("Đã gửi email cập nhật mật khẩu...!")
		}
	}
	return (
		<div className='flex justify-center items-center m-1 min-h-[550px]'>
			{language === "VI" ? (
				<div className='w-[500px] border-[1px] border-solid p-4 rounded-sm'>
					<h4 className='uppercase text-center'>Quên mật khẩu</h4>
					<div className='flex flex-col justify-start'>
						<label
							className='italic m-0 cursor-pointer hover:underline'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='border-[1px] border-solid rounded-md p-2 my-2'
							type='email'
							placeholder='example@gmail.com'
							id='email'
							onChange={(e) =>
								setEmailResetPassword({ email: e.target.value })
							}
						/>
					</div>

					<div className='flex justify-end'>
						<button
							className='w-[150px] border-[1px] border-solid rounded-sm bg-[#355170] text-white p-2 items-right hover:underline'
							onClick={sendEmailResetPassword}
						>
							Xác nhận
						</button>
					</div>
				</div>
			) : (
				<div className='w-[500px] border-[1px] border-solid p-4 rounded-sm'>
					<h4 className='uppercase text-center'>Forgot password</h4>
					<div className='flex flex-col justify-start'>
						<label
							className='italic m-0 cursor-pointer hover:underline'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='border-[1px] border-solid rounded-md p-2 my-2'
							type='email'
							placeholder='example@gmail.com'
							id='email'
							onChange={(e) =>
								setEmailResetPassword({ email: e.target.value })
							}
						/>
					</div>

					<div className='flex justify-end'>
						<button
							className='w-[150px] border-[1px] border-solid rounded-sm bg-[#355170] text-white p-2 items-right hover:underline'
							onClick={sendEmailResetPassword}
						>
							Submit
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
export default Quenmatkhau
