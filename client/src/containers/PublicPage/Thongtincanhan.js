import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { linkRoute } from "../../ultils/Common/constant"
import { Button } from "../../components"
import * as actions from "../../store/actions"

function Thongtincanhan() {
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
	const { currentSinhvien } = useSelector((state) => state.sinhvien)
	const [updateAccount, setUpdateAccount] = useState(currentSinhvien)
	console.log(updateAccount)

	useEffect(() => {
		!isLoggedInSinhvien && navigate("/")

		// setUpdateAccount(currentSinhvien)
	}, [isLoggedInSinhvien, updateAccount])

	const handleUpdateSinhvien = () => {
		// console.log(updateAccount)
		dispatch(actions.updateSinhvien(updateAccount))
		toast.success("Cập nhật thành công...!")
	}
	return (
		<main className='m-1 min-h-[500px]'>
			<div className='p-2'>
				<h4 className='text-center uppercase'>
					Cập nhật thông tin tài khoản
				</h4>
				<div className='flex justify-center'>
					<table className='w-[600px] border-0'>
						<thead></thead>
						<tbody>
							{" "}
							<tr>
								<td>
									<label
										className='m-0 cursor-pointer hover:underline'
										htmlFor='name'
									>
										Họ và tên
									</label>
								</td>
								<td>
									<input
										className='w-full p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
										type='text'
										id='name'
										value={updateAccount.tensv}
										onChange={(e) =>
											setUpdateAccount({
												...updateAccount,
												tensv: e.target.value,
											})
										}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										className='m-0 cursor-pointer hover:underline'
										htmlFor='email'
									>
										Email
									</label>
								</td>
								<td>
									<input
										className='w-full p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
										type='text'
										id='email'
										value={updateAccount.email}
										onChange={(e) =>
											setUpdateAccount({
												...updateAccount,
												email: e.target.value,
											})
										}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										className='m-0 cursor-pointer hover:underline'
										htmlFor='sdt'
									>
										Số điện thoại
									</label>
								</td>

								<td>
									<input
										className='w-full p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
										type='text'
										id='sdt'
										value={updateAccount.sodienthoai}
										onChange={(e) =>
											setUpdateAccount({
												...updateAccount,
												sodienthoai: e.target.value,
											})
										}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										className='m-0 cursor-pointer hover:underline'
										htmlFor='diachi'
									>
										Địa chỉ
									</label>
								</td>
								<td>
									<input
										className='w-full p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
										type='text'
										id='diachi'
										value={updateAccount.diachi}
										onChange={(e) =>
											setUpdateAccount({
												...updateAccount,
												diachi: e.target.value,
											})
										}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										className='m-0 cursor-pointer hover:underline'
										htmlFor='noisinh'
									>
										Nơi sinh
									</label>
								</td>
								<td>
									<input
										className='w-full p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
										type='text'
										id='noisinh'
										value={updateAccount.noisinh}
										onChange={(e) =>
											setUpdateAccount({
												...updateAccount,
												noisinh: e.target.value,
											})
										}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='flex justify-center p-2'>
					<Button
						width={"w-[100px]"}
						textColor={"text-[#80BFCD]"}
						label={"Lưu"}
						m={"m-0"}
						onClick={handleUpdateSinhvien}
					/>
					<Link
						className='justify-center items-center flex w-[130px] rounded-sm text-[#80BFCD] mx-4 p-[8px] border-[1px] border-solid border-[#80BFCD] hover:underline'
						to={linkRoute.SUA_MK}
					>
						Sửa mật khẩu
					</Link>
				</div>
			</div>
		</main>
	)
}
export default Thongtincanhan
