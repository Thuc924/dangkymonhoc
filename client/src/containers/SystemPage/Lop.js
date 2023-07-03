import { linkRoute } from "../../ultils/Common/constant"
import * as actions from "../../store/actions"

import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { toast } from "react-toastify"

function Lop() {
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { lops, token, msg } = useSelector((state) => state.lop)
	const { isLoggedInAdmin } = useSelector((state) => state.auth)
	const { sinhviens } = useSelector((state) => state.sinhvien)
	useEffect(() => {
		dispatch(actions.getListLop())
		dispatch(actions.getListSinhvien())
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
	}, [isLoggedInAdmin, token, msg])
	const handleRemoveLop = (lop) => {
		const kq = sinhviens.find((i) => i.mslop === lop.mslop)
		if (!kq) {
			dispatch(actions.deleteLopByMslop(lop.mslop))
			toast.success("Xoá thành công...!")
		} else toast.error("Lớp đã có sinh viên...!")
	}
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb side'>
						<li className='breadcrumb-item active'>
							<a href='#'>
								<b>Danh sách lớp</b>
							</a>
						</li>
					</ul>
					<div id='clock' />
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tile'>
							<div className='tile-body'>
								<div className='row element-button'>
									<div className='col-sm-2'>
										<Link
											className='btn btn-add btn-sm'
											to={linkRoute.LOP_ADD_AD}
											title='Thêm'
										>
											<i className='fas fa-plus' />
											Thêm lớp
										</Link>
									</div>

									<div className='col-sm-2'>
										<a
											className='btn btn-delete btn-sm'
											type='button'
											title='Xóa'
										>
											<i className='fas fa-trash-alt' /> Xóa tất cả{" "}
										</a>
									</div>
								</div>
								<table
									className='table table-hover table-bordered js-copytextarea'
									cellPadding={0}
									cellSpacing={0}
									border={0}
									id='sampleTable'
								>
									<thead>
										<tr>
											<th width={10}>
												<input type='checkbox' id='all' />
											</th>
											<th width={150}>Mã số lớp</th>
											<th width={150}>Khoa</th>
											<th width={100}>Tính năng</th>
										</tr>
									</thead>
									{lops &&
										lops.length > 0 &&
										lops.map((lop) => {
											return (
												<tbody key={lop.id}>
													<tr>
														<td width={10}>
															<input
																type='checkbox'
																name='check1'
																defaultValue={1}
															/>
														</td>
														<td>{lop.mslop}</td>
														<td>{lop.khoa?.tenkhoa}</td>
														<td>
															<button
																className='btn btn-primary btn-sm trash'
																type='button'
																title='Xóa'
																onClick={() =>
																	handleRemoveLop(lop)
																}
															>
																<i className='fas fa-trash-alt' />
															</button>
															<button
																className='btn btn-primary btn-sm edit'
																type='button'
																title='Sửa'
															>
																<i className='fas fa-edit' />
															</button>
														</td>
													</tr>
												</tbody>
											)
										})}
								</table>
							</div>
						</div>
						{/* <Pagination number={params.get('page')} /> */}
					</div>
				</div>
			</main>
		</div>
	)
}

export default Lop
