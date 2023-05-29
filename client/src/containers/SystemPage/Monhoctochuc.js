import { compareValues } from "../../ultils/func"
import { linkRoute } from "../../ultils/Common/constant"
import * as actions from "../../store/actions"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Monhoctochuc() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { monhoctochucs, token, msg } = useSelector(
		(state) => state.monhoctochuc
	)
	const { khoas } = useSelector((state) => state.khoa)

	const { hockys } = useSelector((state) => state.hocky)

	const { isLoggedInAdmin } = useSelector((state) => state.auth)

	const [khoa, setKhoa] = useState({ mskhoa: "" })

	const [hocky, setHocky] = useState({ mshocky: "" })

	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)

		dispatch(actions.getListMonhoctochuc())
		dispatch(actions.getListKhoa())
		dispatch(actions.getListHocky())
	}, [isLoggedInAdmin, token, msg, khoa])

	const handleRemoveMHTC = (mh) => {
		if (mh) {
			dispatch(actions.deleteMonhoctochucByMSMH(mh.msmh))
			toast.success("Xoá thành công...!")
		}
	}
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb side'>
						<li className='breadcrumb-item active'>
							<a href='#'>
								<b>Danh sách môn học được tổ chức</b>
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
											to={linkRoute.MHTC_ADD_AD}
											title='Thêm'
										>
											<i className='fas fa-plus' />
											Thêm môn học
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
									<div className='col-sm-8 flex justify-end items-center'>
										<div className='form-group col-md-3'>
											<select
												className='form-control'
												id='mskhoa'
												required
												onChange={(e) =>
													setHocky({
														mshocky: e.target.value,
													})
												}
											>
												<option value={""}>
													-- Chọn học kỳ --
												</option>
												{hockys &&
													hockys.length > 0 &&
													hockys.map((item, index) => {
														return (
															<option
																key={index}
																value={item.mshocky}
															>
																{item.tenhocky}
															</option>
														)
													})}
											</select>
										</div>
										<div className='form-group col-md-3'>
											<select
												className='form-control'
												id='mskhoa'
												required
												onChange={(e) =>
													setKhoa({
														mskhoa: e.target.value,
													})
												}
											>
												<option value={""}>-- Chọn khoa --</option>
												{khoas &&
													khoas.length > 0 &&
													khoas.map((item, index) => {
														return (
															<option
																key={index}
																value={item.mskhoa}
															>
																{item.tenkhoa}
															</option>
														)
													})}
											</select>
										</div>
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
											<th width={50}>Mã số môn học</th>
											<th width={100}>Tên môn học</th>
											<th width={50}>Học kỳ</th>
											<th width={50}>Khoa</th>
											<th width={50}>Tính năng</th>
										</tr>
									</thead>
									{!hocky.mshocky &&
										!khoa.mskhoa &&
										monhoctochucs
											.sort(compareValues("tenmh", "desc"))
											.map((item, index) => {
												return (
													<tbody key={index}>
														<tr>
															<td width={10}>
																<input
																	type='checkbox'
																	name='check1'
																	defaultValue={1}
																/>
															</td>
															<td>{item.msmh}</td>
															<td>{item.monhoc?.tenmh}</td>
															<td>{item.hockies?.tenhocky}</td>
															<td>
																{
																	khoas.find(
																		(i) =>
																			i.mskhoa ===
																			item.monhoc?.mskhoa
																	)?.tenkhoa
																}
															</td>
															<td>
																<button
																	className='btn btn-primary btn-sm trash'
																	type='button'
																	title='Xóa'
																	onClick={() =>
																		handleRemoveMHTC(item)
																	}
																>
																	<i className='fas fa-trash-alt' />
																</button>
															</td>
														</tr>
													</tbody>
												)
											})}
									{hocky.mshocky &&
										!khoa.mskhoa &&
										monhoctochucs
											.filter((i) => i.mshocky === hocky.mshocky)
											.sort(compareValues("tenmh", "desc"))
											.map((mh, index) => {
												return (
													<tbody key={index}>
														<tr>
															<td width={10}>
																<input
																	type='checkbox'
																	name='check1'
																	defaultValue={1}
																/>
															</td>
															<td>{mh.msmh}</td>
															<td>{mh.monhoc?.tenmh}</td>
															<td>{mh.hockies?.tenhocky}</td>
															<td>
																{
																	khoas.find(
																		(i) =>
																			i.mskhoa ===
																			mh.monhoc?.mskhoa
																	)?.tenkhoa
																}
															</td>
															<td>
																<button
																	className='btn btn-primary btn-sm trash'
																	type='button'
																	title='Xóa'
																	onClick={() =>
																		handleRemoveMHTC(mh)
																	}
																>
																	<i className='fas fa-trash-alt' />
																</button>
															</td>
														</tr>
													</tbody>
												)
											})}
									{!hocky.mshocky &&
										khoa.mskhoa &&
										monhoctochucs
											.filter(
												(i) => i.monhoc?.mskhoa === khoa.mskhoa
											)
											.map((mh) => {
												return (
													<tbody key={mh.id}>
														<tr>
															<td width={10}>
																<input
																	type='checkbox'
																	name='check1'
																	defaultValue={1}
																/>
															</td>
															<td>{mh.msmh}</td>
															<td>{mh.monhoc?.tenmh}</td>
															<td>{mh.hockies?.tenhocky}</td>
															<td>
																{
																	khoas.find(
																		(i) =>
																			i.mskhoa ===
																			mh.monhoc?.mskhoa
																	)?.tenkhoa
																}
															</td>
															<td>
																<button
																	className='btn btn-primary btn-sm trash'
																	type='button'
																	title='Xóa'
																	onClick={() =>
																		handleRemoveMHTC(mh)
																	}
																>
																	<i className='fas fa-trash-alt' />
																</button>
															</td>
														</tr>
													</tbody>
												)
											})}

									{hocky.mshocky &&
										khoa.mskhoa &&
										monhoctochucs
											.filter((i) => i.mshocky === hocky.mshocky)
											.filter(
												(i) => i.monhoc?.mskhoa === khoa.mskhoa
											)
											.map((item, index) => {
												return (
													<tbody key={index}>
														<tr>
															<td width={10}>
																<input
																	type='checkbox'
																	name='check1'
																	defaultValue={1}
																/>
															</td>
															<td>{item.msmh}</td>
															<td>{item.monhoc?.tenmh}</td>
															<td>{item.hockies?.tenhocky}</td>
															<td>
																{
																	khoas.find(
																		(i) =>
																			i.mskhoa ===
																			item.monhoc?.mskhoa
																	)?.tenkhoa
																}
															</td>
															<td>
																<button
																	className='btn btn-primary btn-sm trash'
																	type='button'
																	title='Xóa'
																	onClick={() =>
																		handleRemoveMHTC(item)
																	}
																>
																	<i className='fas fa-trash-alt' />
																</button>
															</td>
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

export default Monhoctochuc
