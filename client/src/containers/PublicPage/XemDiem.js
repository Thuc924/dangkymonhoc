import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as actions from "../../store/actions"
import { linkRoute } from "../../ultils/Common/constant"
function XemDiem() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { dshocphi } = useSelector((state) => state.hocphi)
	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
	const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)
	const { listDiemMh } = useSelector((state) => state.diem)
	console.log(listDiemMh)
	useEffect(() => {
		dispatch(actions.getSinhvienByMSSV())
		!isLoggedInSinhvien && navigate(linkRoute.HOME_SV)
		dispatch(actions.getListHocPhi())
		dispatch(actions.getListDiem(sinhvien?.mssv))
		dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
	}, [])
	return (
		<main className='p-2'>
			<div className=''>
				<table>
					<thead>
						<tr className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>
							<th>STT</th>
							<th>Mã môn học</th>
							<th>Tên môn học</th>
							<th>STC</th>
							<th>%QT</th>
							<th>%GK</th>
							<th>QT</th>
							<th>GK</th>
							<th>Điểm thi</th>
							<th>Điểm TK1</th>
							<th>Điểm TK</th>
							<th>Kết quả</th>
						</tr>
					</thead>
					<tbody className='text-[Navy]'>
						{danhsachsvdk &&
							danhsachsvdk.length > 0 &&
							danhsachsvdk.map((item, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td className='font-bold'>{item.msmh}</td>
										<td>{item.tenmh}</td>
										<td className='text-center'>
											{item.monhocDK?.sotinchi}
										</td>
										<td className='text-center'>{item.phanTramQT}</td>
										<td className='text-center'>{item.phanTramGK}</td>
										{listDiemMh?.map((i, index) => {
											return (
												i.msmh === item.msmh && (
													<>
														<td className='text-center'>
															{i.quatrinh}
														</td>
														<td className='text-center'>
															{i.giuaky}
														</td>
														<td className='text-center'>
															{i.diemthi}
														</td>
														<td className='text-center'>
															{(item.phanTramQT * i.quatrinh +
																item.phanTramGK * i.giuaky +
																(100 -
																	(+item.phanTramGK +
																		+item.phanTramQT)) *
																	i.diemthi) /
																100}
														</td>
														<td className='text-center'>
															{Math.round(
																(item.phanTramQT * i.quatrinh +
																	item.phanTramGK * i.giuaky +
																	(100 -
																		(+item.phanTramGK +
																			+item.phanTramQT)) *
																		i.diemthi) /
																	100
															)}
														</td>
														<td className='text-center font-bold'>
															{(item.phanTramQT * i.quatrinh +
																item.phanTramGK * i.giuaky +
																(100 -
																	(+item.phanTramGK +
																		+item.phanTramQT)) *
																	i.diemthi) /
																100 >=
															5
																? "Đạt"
																: "X"}
														</td>
													</>
												)
											)
										})}
									</tr>
								)
							})}
					</tbody>
				</table>
			</div>
		</main>
	)
}

export default XemDiem
