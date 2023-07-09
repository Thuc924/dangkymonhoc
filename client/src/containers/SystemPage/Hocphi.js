import { linkRoute } from "../../ultils/Common/constant"
import * as actions from "../../store/actions"

import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { createHocphi, getListHocPhi } from "../../store/actions/hocphi"
import moment from "moment"

function Hocphi() {
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { isLoggedInAdmin } = useSelector((state) => state.auth)
	const { danhsachs } = useSelector((state) => state.dangkymonhoc)
	const { dshocphi } = useSelector((state) => state.hocphi)

	const [list, setList] = useState()

	console.log(dshocphi)
	useEffect(() => {
		dispatch(actions.getAllDSMHDK())
		dispatch(getListHocPhi())
		get()
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
	}, [isLoggedInAdmin])
	const get = () => {
		const list = danhsachs.reduce((acc, item) => {
			const currentItem = acc?.find((ac) => ac.mssv === item.mssv)
			if (!currentItem) {
				acc.push(item)
			} else {
				currentItem.hocphi = +currentItem.hocphi + +item.hocphi
			}
			return acc
		}, [])
		setList(list)
	}
	const handleSubmitHocphi = (i) => {
		// const list = danhsachs.filter((x) => x.mssv === i.mssv)
		// list.map((i) => {
		dispatch(createHocphi(i))
		// })
		toast.success("Thành công...!")
	}
	return (
		<div className='app sidebar-minj rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb side'>
						<li className='breadcrumb-item active'>
							<a href='#'>
								<b>Danh sách học phí</b>
							</a>
						</li>
					</ul>
					<div id='clock' />
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tile'>
							<div className='tile-body'>
								<table
									className='table table-hover table-bordered js-copytextarea'
									cellPadding={0}
									cellSpacing={0}
									border={0}
									id='sampleTable'
								>
									<thead>
										<tr>
											<th>Mã số sinh viên</th>
											<th>Tên sinh viên</th>
											<th>Học phí</th>
											<th>Action</th>
											<th>Thời gian</th>
										</tr>
									</thead>
									{list &&
										list.length > 0 &&
										list.map((item) => {
											return (
												<tbody key={item.id}>
													<tr>
														<td>{item.mssv}</td>
														<td>{item.Sinhvien?.tensv}</td>
														<td>{item.hocphi} đ</td>
														{dshocphi.find(
															(i) => i.mssv === item.mssv
														) ? (
															<>
																<td>
																	<button
																		disabled
																		className='text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2'
																	>
																		Đã đóng
																	</button>
																</td>
																<td>
																	{moment(
																		item.createdAt
																	).format("DD/MM/YYYY")}
																</td>
															</>
														) : (
															<td>
																<button
																	onClick={() =>
																		handleSubmitHocphi(item)
																	}
																	className='text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer hover:border-[#0000008a] hover:text-[#000000ad]'
																>
																	Xác nhận đã đóng
																</button>
															</td>
														)}
													</tr>
												</tbody>
											)
										})}
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Hocphi
