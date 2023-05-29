import "../../assets/css/main.css"
import * as actions from "../../store/actions"
import { linkRoute } from "../../ultils/Common/constant"
import { languageContext } from "../layouts/DefaultLayout"
import { Button } from "../../components"

import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import bcryptjs from "bcryptjs"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faCircleQuestion,
	faEye,
	faEyeSlash,
} from "@fortawesome/free-solid-svg-icons"

function LoginUser() {
	const navigate = useNavigate()

	const language = useContext(languageContext)

	const dispatch = useDispatch()
	const { sinhviens } = useSelector((state) => state.sinhvien)
	const { isLoggedInSinhvien } = useSelector((state) => state.auth)
	const [loginSV, setLoginSV] = useState({
		mssv: "",
		matkhau: "",
	})
	const [showIcon, setShowIcon] = useState(false)
	console.log(loginSV)
	useEffect(() => {
		dispatch(actions.getListSinhvien())
		isLoggedInSinhvien && navigate(linkRoute.HOME_SV)
		// isLoggedInSinhvien &&
		// 	navigate(`${linkRoute.LOGIN_SV}${linkRoute.PAGE_NOT_FOUND}`)
		// isLoggedInSinhvien && alert("Bạn đã đăng nhập...!")
	}, [isLoggedInSinhvien])

	const handleLoginSVKeyDown = (e) => {
		if (e.keyCode === 13) {
			if (!loginSV.mssv || !loginSV.matkhau) {
				toast.error("Vui lòng nhập đầy đủ tài khoản và mật khẩu...!")
			} else {
				const findSV = sinhviens.find((i) => i.mssv === loginSV.mssv)
				console.log(findSV.matkhau)
				console.log(loginSV.matkhau)
				if (!findSV) {
					toast.error("Không tìm thấy sinh viên...!")
				} else if (bcryptjs.compareSync(loginSV.matkhau, findSV.matkhau)) {
					dispatch(actions.loginSinhvien(loginSV))
					toast.success("Đăng nhập thành công...!")
				} else toast.error("Mật khẩu không khớp...!")
			}
		}
	}
	const handleLoginSVClick = () => {
		if (!loginSV.mssv || !loginSV.matkhau) {
			toast.error("Vui lòng nhập đầy đủ tài khoản và mật khẩu...!")
		} else {
			const findSV = sinhviens.find((i) => i.mssv === loginSV.mssv)
			if (!findSV) {
				toast.error("Không tìm thấy sinh viên...!")
			} else if (bcryptjs.compareSync(loginSV.matkhau, findSV.matkhau)) {
				dispatch(actions.loginSinhvien(loginSV))
				toast.success("Đăng nhập thành công...!")
			} else toast.error("Mật khẩu không khớp...!")
		}
	}
	function showPassword() {
		var x = document.getElementById("password-field")
		if (x.type === "password") x.type = "text"
		setShowIcon(true)
	}
	function hiddenPassword() {
		var x = document.getElementById("password-field")
		if (x.type === "text") x.type = "password"

		setShowIcon(false)
	}
	return (
		<div className='flex justify-center items-center min-h-[500px]'>
			{language === "VI" ? (
				<div className='w-[400px] border-[1px] border-solid p-3 rounded-xl'>
					<h4 className='uppercase text-center'>Đăng nhập</h4>
					<div className='flex flex-col justify-start'>
						<label
							className='italic m-0 cursor-pointer hover:underline'
							htmlFor='mssv'
						>
							Mã số sinh viên
						</label>
						<input
							className='border-[1px] border-solid rounded-md p-2 my-2 focus:outline-none focus:border-sky-500 focus:ring-1 text-pink-600 focus:text-pink-600'
							type='text'
							placeholder='Nhập mã số sinh viên'
							id='mssv'
							onChange={(e) =>
								setLoginSV({ ...loginSV, mssv: e.target.value })
							}
						/>
						<label
							className='italic m-0 cursor-pointer hover:underline'
							htmlFor='password-field'
						>
							Mật khẩu
						</label>
						<div className='relative w-full'>
							<input
								className='w-full border-[1px] border-solid rounded-md p-2 my-2 focus:outline-none focus:border-sky-500 focus:ring-1 text-pink-600 focus:text-pink-600'
								type='password'
								placeholder='Nhập mật khẩu'
								id='password-field'
								onKeyDown={(e) => handleLoginSVKeyDown(e)}
								onChange={(e) =>
									setLoginSV({ ...loginSV, matkhau: e.target.value })
								}
							/>
							{showIcon ? (
								<FontAwesomeIcon
									className='p-2 icon-show-hidden-pass'
									icon={faEye}
									onClick={hiddenPassword}
								/>
							) : (
								<FontAwesomeIcon
									className='p-2 icon-show-hidden-pass'
									icon={faEyeSlash}
									onClick={showPassword}
								/>
							)}
						</div>
					</div>
					<div className='m-0 text-right p-2 underline italic'>
						<Link to={linkRoute.QUEN_MK}>
							<span className='cursor-pointer hover:text-[#80BFCD]'>
								Quên mật khẩu
								<FontAwesomeIcon
									className='px-2'
									icon={faCircleQuestion}
								/>
							</span>
						</Link>
					</div>
					<Button
						onClick={handleLoginSVClick}
						width={"w-full"}
						bg={"bg-[#355170]"}
						rounded={"rounded-sm"}
						label={"Đăng nhập"}
						textColor={"text-white"}
					/>
				</div>
			) : (
				<div className='w-[400px] border-[1px] border-solid p-4 rounded-sm'>
					<h4 className='uppercase text-center'>Login</h4>
					<div className='flex flex-col justify-start'>
						<label
							className='italic m-0 cursor-pointer hover:underline'
							htmlFor='mssv'
						>
							Username
						</label>
						<input
							className='border-[1px] border-solid rounded-md p-2 my-2'
							type='text'
							placeholder='Enter student code'
							id='mssv'
							onChange={(e) =>
								setLoginSV({ ...loginSV, mssv: e.target.value })
							}
						/>

						<label
							className='italic m-0 cursor-pointer hover:underline'
							htmlFor='matkhau'
						>
							Password
						</label>
						<div className='relative w-full'>
							<input
								className='border-[1px] w-full border-solid rounded-md p-2 my-2'
								type='password'
								placeholder='Nhập mật khẩu'
								id='password-field'
								onKeyDown={(e) => handleLoginSVKeyDown(e)}
								onChange={(e) =>
									setLoginSV({ ...loginSV, matkhau: e.target.value })
								}
							/>
							{showIcon ? (
								<FontAwesomeIcon
									className='p-2 icon-show-hidden-pass'
									icon={faEye}
									onClick={hiddenPassword}
								/>
							) : (
								<FontAwesomeIcon
									className='p-2 icon-show-hidden-pass'
									icon={faEyeSlash}
									onClick={showPassword}
								/>
							)}
						</div>
					</div>
					<div className='m-0 text-right p-2 underline italic'>
						<Link to={linkRoute.QUEN_MK}>
							<span className='cursor-pointer hover:text-[#80BFCD]'>
								Forgot password
								<FontAwesomeIcon
									className='px-2'
									icon={faCircleQuestion}
								/>
							</span>
						</Link>
					</div>
					<div className='flex justify-end'>
						<button
							className='w-[150px] border-[1px] border-solid rounded-sm bg-[#355170] text-white p-2 items-right hover:underline'
							onClick={handleLoginSVClick}
						>
							Login
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
export default LoginUser
