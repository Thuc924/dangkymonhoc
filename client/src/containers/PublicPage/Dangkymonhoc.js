import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as actions from "../../store/actions"
import { toast } from "react-toastify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faHandPointDown,
	faHandPointUp,
	faPlus,
} from "@fortawesome/free-solid-svg-icons"
import moment from "moment"

import { compareValues, sumSTC } from "../../ultils/func"
import "../../assets/css/main.css"
function Dangkymonhoc() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const date = new Date()
	const year = date.getFullYear().toString()?.slice(2, 4)
	const month = date.getMonth() + 1
	const day = date.getDate()
	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

	const { monhoctochucs } = useSelector((state) => state.monhoctochuc)

	const { danhsachsvdk, danhsachs } = useSelector(
		(state) => state.dangkymonhoc
	)

	const [msmh, setMSMH] = useState("")

	const [listMH, setListMH] = useState()

	const [monhocSearch, setMonhocSearch] = useState()

	const [msmhNguyevong, setMSMHNguyenvong] = useState()

	const [showInputSearch, setShowInputSearch] = useState(false)

	const [dsMHDK, setDSMHDK] = useState(
		JSON.parse(localStorage.getItem("mhdk")) || []
	)
	useEffect(() => {
		dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
		dispatch(actions.getListMonhoc())
		dispatch(actions.getListMonhoctochuc())
		dispatch(actions.getAllDSMHDK())
		isLoggedInSinhvien &&
			setTimeout(() => {
				dispatch(actions.getSinhvienByMSSV())
			}, 100)
		getMHTCC()
		!msmh && setMonhocSearch()
		isLoggedInSinhvien &&
			localStorage.setItem("mhdk", JSON.stringify(dsMHDK) || [])
		!isLoggedInSinhvien && navigate("/")
	}, [isLoggedInSinhvien, dsMHDK?.length, msmh])
	const getMHTCC = () => {
		const nienKhoa = sinhvien?.mssv?.slice(3, 5)
		console.log(month)
		if (month >= 6 && month <= 8) {
			if (+nienKhoa === +year) {
				let kq = monhoctochucs?.filter(
					(i) => i.mshocky === "HK1" && i.mslophoc === sinhvien?.mslop
				)
				setListMH(kq)
			} else if (+nienKhoa + 1 === +year) {
				let kq = monhoctochucs?.filter(
					(i) => i.mshocky === "HK3" && i.mslophoc === sinhvien?.mslop
				)
				setListMH(kq)
			} else if (+nienKhoa + 2 === +year) {
				let kq = monhoctochucs?.filter(
					(i) => i.mshocky === "HK5" && i.mslophoc === sinhvien?.mslop
				)
				setListMH(kq)
			} else if (+nienKhoa + 3 === +year) {
				let kq = monhoctochucs?.filter(
					(i) => i.mshocky === "HK7" && i.mslophoc === sinhvien?.mslop
				)
				setListMH(kq)
			}
		} else if (month >= 1 && month <= 3) {
			if (+nienKhoa === +year) {
				let kq = monhoctochucs?.filter(
					(i) => i.mshocky === "HK2" && i.mslophoc === sinhvien?.mslop
				)
				setListMH(kq)
			} else if (+nienKhoa + 1 === +year) {
				let kq = monhoctochucs?.filter(
					(i) => i.mshocky === "HK4" && i.mslophoc === sinhvien?.mslop
				)
				setListMH(kq)
			} else if (+nienKhoa + 2 === +year) {
				let kq = monhoctochucs?.filter(
					(i) => i.mshocky === "HK6" && i.mslophoc === sinhvien?.mslop
				)
				setListMH(kq)
			} else if (+nienKhoa + 3 === +year) {
				let kq = monhoctochucs?.filter(
					(i) => i.mshocky === "HK8" && i.mslophoc === sinhvien?.mslop
				)
				setListMH(kq)
			}
		} else {
			alert("Không trong thời gian đăng ký môn học...!")
		}
	}
	const handleAddMHDK = (mh) => {
		const exist = dsMHDK.filter((x) => {
			if (x.mssv === sinhvien?.mssv) {
				if (mh.thu.split(", ").length > x.thu.split(", ").length) {
					for (let i = 0; i < mh.thu.split(", ").length; i++) {
						for (let j = 0; j < x.thu.split(", ").length; j++) {
							if (mh.thu.split(", ")[i] === x.thu.split(", ")[j]) {
								if (x.tietbd === mh.tietbd) {
									return true
								}
								break
							}
						}
					}
				} else {
					for (let j = 0; j < x.thu.split(", ").length; j++) {
						for (let i = 0; i < mh.thu.split(", ").length; i++) {
							if (mh.thu.split(", ")[i] === x.thu.split(", ")[j]) {
								if (x.tietbd === mh.tietbd) {
									return true
								}
								break
							}
						}
					}
				}
			}
		})
		const exist2 = danhsachsvdk.filter((x) => {
			if (mh.thu.split(", ").length > x.thu.split(", ").length) {
				for (let i = 0; i < mh.thu.split(", ").length; i++) {
					for (let j = 0; j < x.thu.split(", ").length; j++) {
						if (mh.thu.split(", ")[i] === x.thu.split(", ")[j]) {
							if (x.tietbd === mh.tietbd) {
								return true
							}
							break
						}
					}
				}
			} else {
				for (let j = 0; j < x.thu.split(", ").length; j++) {
					for (let i = 0; i < mh.thu.split(", ").length; i++) {
						if (mh.thu.split(", ")[i] === x.thu.split(", ")[j]) {
							if (x.tietbd === mh.tietbd) {
								return true
							}
							break
						}
					}
				}
			}
		})
		const search =
			danhsachsvdk?.find((i) => i.msmh === mh?.msmh) ||
			dsMHDK?.find((i) => i.msmh === mh?.msmh && i.mssv === sinhvien?.mssv)
		let stc = sumSTC(dsMHDK) + +mh.monhocTC?.sotinchi

		if (monhocSearch) {
			if (month >= 6 && month <= 8) {
				if (
					!!monhocSearch?.find(
						(i) =>
							i.mshocky === "HK2" ||
							i.mshocky === "HK4" ||
							i.mshocky === "HK6" ||
							i.mshocky === "HK8"
					)
				) {
					toast.error("Môn học không được tổ chức trong học kỳ này...!")
					return
				}
			} else if (month >= 1 && month <= 3) {
				if (
					!!monhocSearch?.find(
						(i) =>
							i.mshocky === "HK1" ||
							i.mshocky === "HK3" ||
							i.mshocky === "HK5" ||
							i.mshocky === "HK7"
					)
				) {
					toast.error("Môn học không được tổ chức trong học kỳ này...!")
					return
				}
			}
		}
		if (stc > 14) {
			toast.error("Đã quá số tín chỉ được đăng ký...!")
		} else if (!!search) {
			toast.error(`Đã có môn ${mh.tenmh} trong danh sách đăng ký...!`)
		} else if (exist[0] || exist2[0]) {
			toast.error(
				`Bị trùng thời khoá biểu với ${
					exist2[0]?.tenmh || exist[0]?.tenmh
				} `
			)
		} else if (!search) {
			setDSMHDK((prev) => [
				...prev,
				{
					...mh,
					hocphi: +mh?.monhocTC?.sotinchi * 616000,
					mssv: sinhvien?.mssv,
				},
			])
			toast.success("Thêm thành công...!")
		}
	}
	// const handleAddMonhocNguyenvong = () => {
	// 	const data = monhocs?.find((i) => i.msmh === msmhNguyevong)
	// 	const a = danhsachs?.find((i) => i.msmh === data?.msmh)
	// 	const b = a?.mssv === sinhvien?.mssv
	// 	if (!msmhNguyevong) toast.error("Bạn chưa nhập mã môn học...!")
	// 	else if (a && b) {
	// 		toast.error("Nguyện vọng đã được thêm...!")
	// 	} else {
	// 		dispatch(
	// 			actions.addMonhocNguyenvong({
	// 				mssv: sinhvien?.mssv,
	// 				msmh: data?.msmh,
	// 				hocphi: +data?.sotinchi * 613000,
	// 			})
	// 		)
	// 		toast.success("Thêm nguyện vọng thành công...!")
	// 	}
	// }
	const handleSearchMonhocKeyDown = (e) => {
		if (e.keyCode === 13) {
			const rp = monhoctochucs.filter((i) => i.msmh === msmh)
			setMonhocSearch(rp)
		}
	}
	return (
		<main className='w-full min-h-[550px] px-2 py-4 flex'>
			<div className='w-[20%] border-r-2 border-solid min-h-[550px] pr-4'>
				<ul>
					<li className='text-[red] py-2'>
						(Sinh viên muốn thêm môn học vượt, học lại môn không đạt, cải
						thiện điểm số môn học, thì có thể tìm kiếm và đăng ký tại đây)
						<FontAwesomeIcon
							className='hand-down'
							icon={faHandPointDown}
						/>
					</li>
					<li
						className='hover:underline cursor-pointer'
						onClick={() => setShowInputSearch(!showInputSearch)}
					>
						Lọc môn học theo mã môn học (Click để hiển thị ô nhập)
					</li>
					<li>
						{showInputSearch && (
							<input
								onKeyDown={(e) => handleSearchMonhocKeyDown(e)}
								onChange={(e) => setMSMH(e.target.value)}
								className='w-full border-[1px] border-solid rounded-sm w-[20%] p-[6px] focus:ring'
								type={"text"}
								placeholder={"Mã môn học"}
							/>
						)}
					</li>
					<li className='text-[red] py-2'>
						Lưu ý: đối với những lớp đã đầy hoặc sinh viên muốn thay đổi
						lớp học, sinh viên vui lòng đăng ký với lớp khác (tìm theo mã
						môn học)
					</li>
				</ul>
			</div>

			<div className='w-full p-4'>
				<h2 className='uppercase py-2'>
					Danh sách các môn học được tổ chức
				</h2>
				<div>
					<table>
						<thead className='border-hidden text-[14px]'>
							<tr>
								<th>Mã môn học</th>
								<th>Tên môn học</th>
								<th>Mã lớp</th>
								<th>Sĩ số</th>
								<th>Còn lại</th>
								<th>Thứ</th>
								<th>Tiết BD</th>
								<th>Số tiết</th>
								<th>Phòng</th>
								<th>Giáo viên</th>
								<th>Thời gian</th>
								<th>Chức năng</th>
							</tr>
						</thead>
						{monhocSearch &&
							monhocSearch.length > 0 &&
							monhocSearch.map((item, index) => {
								return (
									<tbody
										key={index}
										className='border-t-hidden border-l-hidden border-r-hidden'
									>
										<tr className='py-4 hover:bg-[#c7ceda80]'>
											<td>{item.msmh}</td>
											<td>{item.tenmh}</td>
											<td>{item.mslophoc}</td>
											<td>{item.siso}</td>
											<td>
												{+item.siso -
													+danhsachs.filter(
														(i) =>
															i.msmh === item.msmh &&
															i.mslophoc === item.mslophoc
													).length}
											</td>
											<td className='font-bold'>{item.thu}</td>
											<td>{item.tietbd}</td>
											<td>{item.sotiet}</td>
											<td>{item.phong}</td>
											<td>{item.tengiangvien}</td>
											<td width={100}>
												{moment(item.ngaybd).format("DD/MM/YYYY")} -{" "}
												{moment(item.ngaykt).format("DD/MM/YYYY")}
											</td>
											<td className='py-8' width={100}>
												{dsMHDK.find(
													(i) =>
														i.msmh === item.msmh &&
														i.mssv === sinhvien?.mssv &&
														i.thu === item.thu &&
														i.mslophoc === item?.mslophoc
												) ? (
													<button
														disabled
														className='mx-1 text-center w-[100px] border-[1px] border-solid border-[#0C3689] text-[#0C3689] bg-white rounded-3xl p-2 cursor-pointer'
													>
														Đã thêm vào phiếu đăng ký
													</button>
												) : danhsachsvdk?.find(
														(i) =>
															i.msmh === item?.msmh &&
															i.thu === item?.thu
												  ) ? (
													<button
														disabled
														className='mx-1 text-center w-[90px] border-[1px] border-solid border-[#0C3689] text-[#0C3689] bg-white rounded-3xl p-2 cursor-pointer'
													>
														Đã lưu đăng ký
													</button>
												) : (
													<button
														onClick={() => handleAddMHDK(item)}
														className='mx-1 text-center w-[70px] border-[1px] border-solid border-[#0C3689] rounded-3xl p-2 cursor-pointer text-[white] bg-[Navy] hover:bg-white hover:text-[Navy]'
													>
														Thêm
													</button>
												)}
											</td>
										</tr>
									</tbody>
								)
							})}
						<tbody className='border-t-hidden border-l-hidden border-r-hidden'>
							{!monhocSearch &&
								listMH &&
								listMH.length > 0 &&
								listMH
									.sort(compareValues("msmh", "asc"))
									.map((item, index) => {
										return (
											<tr
												key={index}
												className='py-4 hover:bg-[#c7ceda80] h-[100px]'
											>
												<td>{item.msmh}</td>
												<td>{item.tenmh}</td>
												<td>{item.mslophoc}</td>
												<td>{item.siso}</td>
												<td>
													{+item.siso -
														+danhsachs.filter(
															(i) => i.msmh === item.msmh
														).length}
												</td>
												<td className='font-bold'>{item.thu}</td>
												<td>{item.tietbd}</td>
												<td>{item.sotiet}</td>
												<td>{item.phong}</td>
												<td>{item.tengiangvien}</td>
												<td width={100}>
													{moment(item.ngaybd).format(
														"DD/MM/YYYY"
													)}{" "}
													-{" "}
													{moment(item.ngaykt).format(
														"DD/MM/YYYY"
													)}
												</td>
												<td className='py-8' width={125}>
													{dsMHDK.find(
														(i) =>
															i.msmh === item?.msmh &&
															i.mssv === sinhvien?.mssv &&
															i.thu === item.thu
													) ? (
														<button
															disabled
															className='mx-1 text-center w-[100px] border-[1px] border-solid border-[#0C3689] text-[#0C3689] bg-white rounded-3xl p-2 cursor-pointer'
														>
															Đã thêm vào phiếu đăng ký
														</button>
													) : danhsachsvdk?.find(
															(i) =>
																i.msmh === item?.msmh &&
																i.thu === item?.thu
													  ) ? (
														<button
															disabled
															className='mx-1 text-center w-[100px] border-[1px] border-solid border-[#0C3689] text-[#0C3689] bg-white rounded-3xl p-2 cursor-pointer'
														>
															Đã lưu đăng ký
														</button>
													) : (
														<button
															onClick={() => handleAddMHDK(item)}
															className='mx-1 text-center w-[70px] border-[1px] border-solid border-[#0C3689] rounded-3xl p-2 cursor-pointer text-[white] bg-[Navy] hover:bg-white hover:text-[Navy]'
														>
															Thêm
														</button>
													)}
												</td>
											</tr>
										)
									})}{" "}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	)
}
export default Dangkymonhoc
