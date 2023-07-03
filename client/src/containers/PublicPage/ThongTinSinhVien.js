import * as actions from "../../store/actions"
import { linkRoute } from "../../ultils/Common/constant"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
function ThongTinSinhVien() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
	const { currentSinhvien } = useSelector((state) => state.sinhvien)

	const [showBtnInEmail, setShowBtnInEmail] = useState(false)
	const [showBtnInNumber, setShowBtnInNumber] = useState(false)
	const [enableInputEmail, setEnableInputEmail] = useState(false)
	const [enableInputSodienthoai, setEnableInputSodienthoai] = useState(false)

	const [updateAccount, setUpdateAccount] = useState(currentSinhvien)
	useEffect(() => {
		!isLoggedInSinhvien && navigate(linkRoute.LOGIN_SV)
		dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
		dispatch(actions.getSinhvienByMSSV())
	}, [isLoggedInSinhvien])
	const handleShowBtnInEmail = () => {
		setShowBtnInEmail(true)
		setEnableInputEmail(true)
	}
	const handleHiddenBtnInEmail = () => {
		setShowBtnInEmail(false)
		setEnableInputEmail(false)
	}
	const handleShowBtnInNumber = () => {
		setShowBtnInNumber(true)
		setEnableInputSodienthoai(true)
	}
	const handleHiddenBtnInNumber = () => {
		setShowBtnInNumber(false)
		setEnableInputSodienthoai(false)
	}

	const handleUpdateAccount = () => {
		dispatch(actions.updateSinhvien(updateAccount))
		toast.success("Cập nhật thành công...!")
		setShowBtnInNumber(false)
		setShowBtnInEmail(false)
		setEnableInputEmail(false)
		setEnableInputSodienthoai(false)
	}

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
						<Link
							to={linkRoute.SUA_MK}
							className='hover:underline text-[Navy] font-bold'
						>
							Thay đổi mật khẩu
						</Link>
					</div>
					<div className='w-full p-4'>
						<p className='border-b-2 border-solid w-[80%] text-[26px] py-[10px] text-[#333333] uppercase'>
							Thông tin cá nhân
						</p>
						<div className='flex flex-col w-[60%] text-[16px] pt-[16px] pb-[20px]'>
							<label className='font-bold'>Họ và tên</label>
							<input
								disabled
								className='w-full py-[4px] bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-solid border-[#0000000d]'
								type={"text"}
								value={currentSinhvien?.tensv}
							/>
						</div>
						<div className='flex flex-col w-[60%] text-[16px] pt-[16px] pb-[20px]'>
							<label className='font-bold'>Lớp</label>
							<input
								disabled
								className='w-full py-[4px] bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-solid border-[#0000000d]'
								type={"text"}
								value={sinhvien.mslop}
							/>
						</div>
						<div className='flex flex-col w-[80%] text-[16px] my-4'>
							<label className='font-bold'>Email</label>
							<div className='flex w-full'>
								{!enableInputEmail ? (
									<input
										disabled
										className='w-[75%] py-[4px] bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-solid border-[#0000000d]'
										type={"text"}
										value={updateAccount?.email}
									/>
								) : (
									<input
										onChange={(e) => {
											setUpdateAccount({
												...updateAccount,
												email: e.target.value,
											})
										}}
										className='w-[75%] py-[4px] bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-solid border-[#0000000d]'
										type={"text"}
										value={updateAccount?.email}
									/>
								)}
								{showBtnInEmail ? (
									<>
										<button
											onClick={handleUpdateAccount}
											className='mx-1 text-center w-[70px] border-[1px] border-solid border-[#0C3689] rounded-3xl p-2 cursor-pointer text-black bg-[red] hover:bg-black hover:text-[red]'
										>
											Lưu
										</button>
										<button
											onClick={handleHiddenBtnInEmail}
											className='mx-1 text-center w-[70px] border-[1px] border-solid border-[#000000d] rounded-3xl p-2 cursor-pointer hover:border-[#0000008a] text-black bg-[gray] hover:bg-black hover:text-[gray]'
										>
											Huỷ
										</button>
									</>
								) : (
									<button
										onClick={handleShowBtnInEmail}
										className='text-center w-[110px] border-[1px] border-solid border-[#000000d] rounded-3xl p-2 cursor-pointer text-[white] bg-[Navy] hover:bg-white hover:text-[Navy]'
									>
										Chỉnh sửa
									</button>
								)}
							</div>
						</div>
						<div className='flex flex-col w-[80%] text-[16px] my-4'>
							<label className='font-bold'>Số điện thoại</label>
							<div className='flex w-full'>
								{!enableInputSodienthoai ? (
									<input
										disabled
										className='w-[75%] py-[4px] bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-solid border-[#0000000d]'
										type={"text"}
										value={updateAccount?.sodienthoai}
									/>
								) : (
									<input
										onChange={(e) => {
											setUpdateAccount({
												...updateAccount,
												sodienthoai: e.target.value,
											})
										}}
										className='w-[75%] py-[4px] bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 border-solid border-[#0000000d]'
										type={"number"}
										value={updateAccount?.sodienthoai}
									/>
								)}
								{showBtnInNumber ? (
									<>
										<button
											onClick={handleUpdateAccount}
											className='mx-1 text-center w-[70px] border-[1px] border-solid border-[#0C3689] rounded-3xl p-2 cursor-pointer text-black bg-[red] hover:bg-black hover:text-[red]'
										>
											Lưu
										</button>
										<button
											onClick={handleHiddenBtnInNumber}
											className='mx-1 text-center w-[70px] border-[1px] border-solid border-[#000000d] rounded-3xl p-2 cursor-pointer hover:border-[#0000008a] text-black bg-[gray] hover:bg-black hover:text-[gray]'
										>
											Huỷ
										</button>
									</>
								) : (
									<button
										onClick={handleShowBtnInNumber}
										className='text-center w-[110px] border-[1px] border-solid border-[#000000d] rounded-3xl p-2 cursor-pointer text-[white] bg-[Navy] hover:bg-white hover:text-[Navy]'
									>
										Chỉnh sửa
									</button>
								)}
							</div>
						</div>
						<div className='border-b-2 border-solid border-[#0000000d] flex flex-col w-[60%] text-[16px] pt-[16px] pb-[20px]'>
							<label className='font-bold'>Địa chỉ</label>
							<input
								disabled
								className='w-full py-[4px] bg-transparent'
								type={"text"}
								value={sinhvien?.diachi}
							/>
						</div>
					</div>
				</>
			)}
		</main>
	)
}
export default ThongTinSinhVien
