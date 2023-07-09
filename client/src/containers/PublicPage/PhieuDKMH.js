import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { Button, ChitietMonhoc } from "../../components"
import { sumHocPhi, sumSTC } from "../../ultils/func"
import * as actions from "../../store/actions"
import { linkRoute } from "../../ultils/Common/constant"
import { getListHocPhi } from "../../store/actions/hocphi"

function PhieuDKMH() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const date = new Date()
	const year = date.getFullYear().toString()?.slice(2, 4)

	const { monhocs } = useSelector((state) => state.monhoc)

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
	const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)
	const { monhoctochucs } = useSelector((state) => state.monhoctochuc)
	const { dshocphi } = useSelector((state) => state.hocphi)
	const [showDetail, setShowDetail] = useState(false)

	const [detailMH, setDetailMH] = useState()

	// const listMHDK = JSON.parse(localStorage.getItem("mhdk"))
	const [listMH, setListMH] = useState()

	const [dsMHDK, setDSMHDK] = useState([])
	const [ds, setDS] = useState(JSON.parse(localStorage.getItem("mhdk")))
	useEffect(() => {
		dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
		dispatch(actions.getListMonhoctochuc())
		dispatch(getListHocPhi())

		!isLoggedInSinhvien && navigate(linkRoute.HOME_SV)

		const data = ds?.filter((i) => i.mssv === sinhvien.mssv)
		setDSMHDK(data)
		getMHTCC()
		isLoggedInSinhvien &&
			localStorage.setItem("mhdk", JSON.stringify(ds) || [])
	}, [isLoggedInSinhvien, dsMHDK?.length, ds?.length])
	console.log(listMH)
	const getMHTCC = () => {
		const nienKhoa = sinhvien?.mssv?.slice(3, 5)
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
	}
	const handleAddMHVaoDSDKMH = () => {
		let stc = sumSTC(dsMHDK) + sumSTC(danhsachsvdk)
		if (!listMH) {
			console.log(dsMHDK)
			// dsMHDK.map((i) => dispatch(actions.addMonhoc(i)))
			// const arr = ds?.filter((i) => i.mssv !== dsMHDK[0].mssv)
			// setDS(arr)
			// setDSMHDK([])
			// localStorage.setItem("mhdk", JSON.stringify(arr))
			// toast.success("Đã thêm vào cơ sở dữ liệu")
			// return
		} else {
			if (stc < 12) toast.error("Không đủ 12 tín chỉ, vui lòng thêm môn học")
			else if (stc > 20)
				toast.error(" Vượt quá 16 tín chỉ, vui lòng xoá môn học")
			else {
				dsMHDK.map((i) => dispatch(actions.addMonhoc(i)))
				const arr = ds?.filter((i) => i.mssv !== dsMHDK[0].mssv)
				setDS(arr)
				setDSMHDK([])
				localStorage.setItem("mhdk", JSON.stringify(arr))
				toast.success("Đã thêm vào cơ sở dữ liệu")
			}
		}
	}
	const handleRemoveDSDKMH = (mh) => {
		// const exist = listMH.find((i) => i.msmh === mh.msmh)
		// if (exist) {
		// 	toast.error("Đây là môn học bắt buộc, không thể xoá...!")
		// 	return
		// }
		// if(sumSTC(danhsachsvdk <= 12)){
		// 	toast.error()
		// }
		let newDs = dsMHDK?.filter((i) => i.msmh !== mh.msmh)
		let data = []
		for (let i = 0; i < ds.length; i++) {
			if (ds[i].msmh === mh.msmh && ds[i].mssv === sinhvien.mssv) {
				const arr1 = ds.slice(0, i)
				const arr2 = ds.slice(i + 1, ds.length)
				data = arr1.concat(arr2)
			}
		}
		setDS(data)
		// localStorage.setItem("mhdk", JSON.stringify(data) || [])
		setDSMHDK(newDs)
		toast.success("Xoá thành công...!")
	}
	const handleRemoveDSDKMHInCSDL = (mh) => {
		if (mh) {
			dispatch(actions.deleteMonHocInDSDKMH(mh.msmh))
			toast.success("Xoá thành công...!")
		}
	}
	return (
		<main className='min-h-[550px] py-4'>
			<h4 className='text-[32px] uppercase text-center p-2'>
				Thông tin phiếu đăng ký môn học
			</h4>
			<table>
				<thead className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>
					<tr>
						<th>STT</th>
						<th>Mã môn học</th>
						<th>Tên môn học</th>
						<th>Số tín chỉ</th>
						<th>Học phí</th>
						<th>Trạng thái môn học</th>
						<th>Chức năng</th>
					</tr>
				</thead>
				<tbody className='text-[#000080]'>
					{danhsachsvdk.length === 0 &&
						dsMHDK.map((item, index) => {
							return (
								<tr key={index} className='hover:bg-[#00000013]'>
									<td>{index + 1}</td>
									<td>{item.msmh}</td>
									<td>{item.tenmh}</td>
									<td>{item.monhocTC?.sotinchi}</td>
									<td>{item.hocphi}</td>
									<td>Chưa lưu</td>
									<td>
										<FontAwesomeIcon
											className='text-[20px] p-2 cursor-pointer'
											icon={faTrashCan}
											onClick={() => handleRemoveDSDKMH(item)}
										/>
									</td>
								</tr>
							)
						})}
					{!dsMHDK &&
						danhsachsvdk.map((item, index) => {
							return (
								<tr key={index} className='hover:bg-[#00000013]'>
									<td>{index + 1}</td>
									<td>{item.msmh}</td>
									<td>{item.tenmh}</td>
									<td>{item.monhocDK?.sotinchi}</td>
									<td>{item.monhocDK?.sotinchi * 616000}</td>
									<td>
										{danhsachsvdk.find((i) => i.msmh === item.msmh)
											? "Đã lưu"
											: "Chưa lưu"}
									</td>
									<td>
										<FontAwesomeIcon
											className='text-[20px] p-2 cursor-pointer'
											icon={faTrashCan}
											onClick={() => handleRemoveDSDKMHInCSDL(item)}
										/>
									</td>
								</tr>
							)
						})}
					{!danhsachsvdk &&
						dsMHDK.map((item, index) => {
							return (
								<tr key={index} className='hover:bg-[#00000013]'>
									<td>{index + 1}</td>
									<td>{item.msmh}</td>
									<td>{item.tenmh}</td>
									<td>{item.monhocTC?.sotinchi}</td>
									<td>{item.monhocTC?.sotinchi * 616000}</td>
									<td>
										{danhsachsvdk.find((i) => i.msmh === item.msmh)
											? "Đã lưu"
											: "Chưa lưu"}
									</td>
									<td>
										<FontAwesomeIcon
											className='text-[20px] p-2 cursor-pointer'
											icon={faTrashCan}
											onClick={() => handleRemoveDSDKMH(item)}
										/>
									</td>
								</tr>
							)
						})}
					{dsMHDK &&
						danhsachsvdk &&
						danhsachsvdk.map((item, index) => {
							return (
								<tr key={index} className='hover:bg-[#00000013]'>
									<td>{index + 1}</td>
									<td>{item.msmh}</td>
									<td>{item.tenmh}</td>
									<td>{item.monhocDK?.sotinchi}</td>
									<td>{item.hocphi}</td>
									<td>Đã lưu</td>
									<td>
										<FontAwesomeIcon
											className='text-[20px] p-2 cursor-pointer'
											icon={faTrashCan}
											onClick={() => handleRemoveDSDKMHInCSDL(item)}
										/>
									</td>
								</tr>
							)
						})}
					{/* {!!dshocphi.find((i) => i.mssv !== sinhvien?.mssv) && (
						<tr>
							<td>Đã đóng học phí</td>
						</tr>
					)} */}
					{/* {!!dshocphi.find((i) => i.mssv !== sinhvien?.mssv) &&
						!danhsachsvdk &&
						dsMHDK.map((item, index) => {
							return (
								<tr key={index} className='hover:bg-[#00000013]'>
									<td>{index + 1}</td>
									<td>{item.msmh}</td>
									<td>{item.tenmh}</td>
									<td>{item.monhocTC?.sotinchi}</td>
									<td>{item.monhocTC?.sotinchi * 616000}</td>
									<td>
										{danhsachsvdk.find((i) => i.msmh === item.msmh)
											? "Đã lưu"
											: "Chưa lưu"}
									</td>
									<td>
										<FontAwesomeIcon
											className='text-[20px] p-2 cursor-pointer'
											icon={faTrashCan}
											onClick={() => handleRemoveDSDKMH(item)}
										/>
									</td>
								</tr>
							)
						})} */}
					{/* {dsMHDK &&
						!danhsachsvdk &&
						dsMHDK.length > 0 &&
						dsMHDK.map((item, index) => {
							return (
								<tr key={index} className='hover:bg-[#00000013]'>
									<td>{index + 1}</td>
									<td>{item.msmh}</td>
									<td>{item.tenmh}</td>
									<td>{item.monhocTC?.sotinchi}</td>
									<td>{item.monhocTC?.sotinchi * 616000}</td>
									<td>
										{danhsachsvdk.find((i) => i.msmh === item.msmh)
											? "Đã lưu"
											: "Chưa lưu"}
									</td>
									<td>
										<FontAwesomeIcon
											className='text-[20px] p-2 cursor-pointer'
											icon={faTrashCan}
											onClick={() => handleRemoveDSDKMH(item)}
										/>
									</td>
								</tr>
							)
						})}
					{danhsachsvdk &&
						danhsachsvdk.length > 0 &&
						danhsachsvdk.map((item, index) => {
							return (
								<tr key={index} className='hover:bg-[#00000013]'>
									<td>{index + 1}</td>
									<td>{item.msmh}</td>
									<td>{item.tenmh}</td>
									<td>{item.monhocDK?.sotinchi}</td>
									<td>{item.hocphi}</td>
									<td>Đã lưu</td>
									<td>
										<FontAwesomeIcon
											className='text-[20px] p-2 cursor-pointer'
											icon={faTrashCan}
											onClick={() => handleRemoveDSDKMHInCSDL(item)}
										/>
									</td>
								</tr>
							)
						})}
					{dsMHDK.length > 0 &&
						dsMHDK.map((item, index) => {
							return (
								<tr key={index} className='hover:bg-[#00000013]'>
									<td>{index + 1}</td>
									<td>{item.msmh}</td>
									<td>{item.tenmh}</td>
									<td>{item.monhocTC?.sotinchi}</td>
									<td>{item.hocphi}</td>
									<td>
										{danhsachsvdk.find((i) => i.msmh === item.msmh)
											? "Đã lưu"
											: "Chưa lưu"}
									</td>
									<td>
										<FontAwesomeIcon
											className='text-[20px] p-2 cursor-pointer'
											icon={faTrashCan}
											onClick={() => handleRemoveDSDKMH(item)}
										/>
									</td>
								</tr>
							)
						})}
					{!danhsachsvdk && !dsMHDK && (
						<tr>
							<td colSpan={7} className='text-center'>
								Chưa đăng ký môn học. Nhấn{" "}
								<Link
									to={linkRoute.DKMH_SV}
									className='hover:underline cursor-pointer'
								>
									Vào đây
								</Link>{" "}
								để tới trang đăng ký
							</td>
						</tr>
					)} */}

					<tr>
						<td></td>
						<td></td>
						<td></td>

						{dsMHDK?.length > 0 && (
							<>
								<td className='italic text-right'>
									Tổng: {sumSTC(dsMHDK) + sumSTC(danhsachsvdk)} tín chỉ
								</td>
								<td colSpan={3} className='text-right p-2'>
									Tổng học phí:{" "}
									<span className='italic font-bold'>
										{sumHocPhi(dsMHDK) + sumHocPhi(danhsachsvdk)}
									</span>{" "}
									đ
								</td>
							</>
						)}
					</tr>
				</tbody>
				{dsMHDK.length !== 0 ? (
					<tr>
						<td colSpan={13} className='text-right p-2'>
							<Button
								width={"w-[100px]"}
								rounded={"rounded-xl"}
								m={"m-0"}
								textColor={"text-white"}
								onClick={handleAddMHVaoDSDKMH}
								label={"Lưu đăng ký"}
								bg={"bg-gradient-to-r from-sky-500 to-indigo-500"}
							/>
						</td>
					</tr>
				) : (
					""
				)}
				{showDetail && (
					<ChitietMonhoc
						setShowDetail={setShowDetail}
						monhoc={detailMH}
						monhocs={monhocs}
					/>
				)}
			</table>
		</main>
	)
}
export default PhieuDKMH
