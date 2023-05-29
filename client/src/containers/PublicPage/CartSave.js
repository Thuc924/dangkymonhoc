import { sumHocPhi } from "../../ultils/func"
import ChitietMonhoc from "../../components/ChitietMonhoc"
import { Cart } from "../../components"
import * as actions from "../../store/actions"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import moment from "moment"

function CartSave() {
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const [showDetail, setShowDetail] = useState(false)

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

	const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)
	const { monhocs } = useSelector((state) => state.monhoc)

	const [detailMH, setDetailMH] = useState()

	useEffect(() => {
		dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
		!isLoggedInSinhvien && navigate("/")
	}, [isLoggedInSinhvien])

	const showDetailMonhoc = (mh) => {
		setDetailMH(mh)
		setShowDetail(true)
	}
	return (
		<div className='min-h-[550px]'>
			<h4 className='uppercase text-center p-2'>Thông tin môn học đã lưu</h4>
			<Cart />
			<div>
				<table>
					<thead className='bg-[#2D8ECE] text-white'>
						<tr>
							<th width={70}>Mã môn học</th>
							<th width={150}>Tên môn học</th>
							<th width={50}>Số tín chỉ</th>
							<th width={50}>Học phí</th>
							<th width={70}>Ngày đăng ký</th>
						</tr>
					</thead>
					<tbody className='text-[#000080]'>
						{danhsachsvdk && danhsachsvdk.length > 0 ? (
							danhsachsvdk.map((item, index) => {
								return (
									<tr key={index} className='hover:bg-[#00000013]'>
										<td
											className='hover:underline cursor-pointer'
											onClick={() => showDetailMonhoc(item)}
										>
											{item.msmh}
										</td>
										<td width={100}>{item.monhocDK?.tenmh}</td>
										<td>{item.monhocDK?.sotinchi}</td>
										<td>{item.monhocDK?.sotinchi * 612000} đ</td>
										<td>
											{moment(item.createdAt).format("DD-MMM-YYYY")}
										</td>
									</tr>
								)
							})
						) : (
							<tr>
								<td colSpan={5} className='text-center'>
									Chưa có môn học trong CSDL
								</td>
							</tr>
						)}
						{danhsachsvdk.length > 0 && (
							<tr>
								<td colSpan={6} className='text-right p-2'>
									Tổng học phí:{" "}
									<span className='italic font-bold'>
										{sumHocPhi(danhsachsvdk)}
									</span>{" "}
									đ
								</td>
							</tr>
						)}
					</tbody>
					{showDetail && detailMH && (
						<ChitietMonhoc
							setShowDetail={setShowDetail}
							monhoc={detailMH}
							monhocs={monhocs}
						/>
					)}
				</table>
			</div>
		</div>
	)
}
export default CartSave
