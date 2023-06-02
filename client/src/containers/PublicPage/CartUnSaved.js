import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { Button, Cart, ChitietMonhoc } from "../../components"
import { sumHocPhi } from "../../ultils/func"
import * as actions from "../../store/actions"

function CartUnSaved() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { monhocs } = useSelector((state) => state.monhoc)

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

	const [showDetail, setShowDetail] = useState(false)

	const [detailMH, setDetailMH] = useState()

	// const listMHDK = JSON.parse(localStorage.getItem("mhdk"))

	const [dsMHDK, setDSMHDK] = useState([])
	const [ds, setDS] = useState(JSON.parse(localStorage.getItem("mhdk")))
	useEffect(() => {
		dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
		!isLoggedInSinhvien && navigate("/")

		const data = ds?.filter((i) => i.mssv === sinhvien.mssv)
		setDSMHDK(data)
		isLoggedInSinhvien &&
			localStorage.setItem("mhdk", JSON.stringify(ds) || [])
	}, [isLoggedInSinhvien, dsMHDK?.length, ds?.length])
	const handleAddMHVaoDSDKMH = () => {
		dsMHDK.map((i) =>
			dispatch(
				actions.addMonhoc({
					mssv: sinhvien.mssv,
					msmh: i.msmh,
					hocphi: i.hocphi ? i.hocphi : "0",
				})
			)
		)
		const arr = ds?.filter((i) => i.mssv !== dsMHDK[0].mssv)
		setDS(arr)
		setDSMHDK([])
		localStorage.setItem("mhdk", JSON.stringify(arr))
		toast.success("Đã thêm vào cơ sở dữ liệu")
	}

	const handleRemoveDSDKMH = (mh) => {
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
	}
	const showDetailMonhoc = (mh) => {
		setDetailMH(mh)
		setShowDetail(true)
	}
	return (
		<main className='min-h-[550px]'>
			<h4 className='uppercase text-center p-2'>
				Thông tin môn học đã thêm
			</h4>
			<Cart />
			<table>
				<thead className='bg-[#2D8ECE] text-white'>
					<tr>
						<th width={150}>Mã môn học</th>
						<th>Tên môn học</th>
						<th width={150}>Số tín chỉ</th>
						<th>Học phí</th>
						<th width={150}>Tính năng</th>
					</tr>
				</thead>
				{dsMHDK && dsMHDK.length > 0 ? (
					dsMHDK.map((item, index) => {
						return (
							<tbody key={index} className='text-[#000080]'>
								<tr className='hover:bg-[#00000013]'>
									<td
										className='hover:underline cursor-pointer'
										onClick={() => showDetailMonhoc(item)}
									>
										{item.msmh}
									</td>
									<td>{item.tenmh}</td>
									<td>{item.sotinchi}</td>
									<td>{item.sotinchi * 612000} đ</td>
									<td>
										<FontAwesomeIcon
											className='text-[20px] p-2 cursor-pointer'
											icon={faTrashCan}
											onClick={() => handleRemoveDSDKMH(item)}
										/>
									</td>
								</tr>
							</tbody>
						)
					})
				) : (
					<tbody className='text-[#000080]'>
						<tr>
							<td colSpan={5} className='text-center'>
								Chưa đăng ký môn học
							</td>
						</tr>
					</tbody>
				)}
				{dsMHDK.length > 0 && (
					<tbody className='text-[#000080]'>
						<tr>
							<td colSpan={6} className='text-right p-2'>
								Tổng học phí:{" "}
								<span className='italic font-bold'>
									{sumHocPhi(dsMHDK)}
								</span>{" "}
								đ
							</td>
						</tr>
						{dsMHDK.length !== 0 ? (
							<tr>
								<td colSpan={6} className='text-right p-2'>
									<Button
										width={"w-[80px]"}
										rounded={"rounded-sm"}
										m={"m-0"}
										textColor={"text-white"}
										onClick={handleAddMHVaoDSDKMH}
										label={"Lưu lại"}
										bg={"bg-[#355170]"}
									/>
								</td>
							</tr>
						) : (
							""
						)}
					</tbody>
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
export default CartUnSaved
