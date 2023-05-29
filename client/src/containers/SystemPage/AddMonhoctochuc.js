import { addMonhoctochuc } from "../../store/actions/monhoctochuc"
import { compareValues } from "../../ultils/func"
import { linkRoute } from "../../ultils/Common/constant"
import * as actions from "../../store/actions"

import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

function AddMonhoctochuc() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { monhocs } = useSelector((state) => state.monhoc)

	const { hockys } = useSelector((state) => state.hocky)

	const { khoas } = useSelector((state) => state.khoa)

	const { monhoctochucs } = useSelector((state) => state.monhoctochuc)

	const { isLoggedInAdmin } = useSelector((state) => state.auth)

	const [mhtc, setMHTC] = useState([])
	const [hocky, setHocky] = useState({ mshocky: "" })
	const [mhByHK, setMHByHK] = useState([])
	const [khoa, setKhoa] = useState({
		tenkhoa: "",
	})
	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
		dispatch(actions.getListMonhoc())
		dispatch(actions.getListHocky())
		dispatch(actions.getListKhoa())
		dispatch(actions.getListMonhoctochuc())
	}, [isLoggedInAdmin])
	const handleCreateMHTC = () => {
		if (mhtc) {
			mhtc.map((i) => {
				dispatch(addMonhoctochuc(i))
			})
			toast.success("Thêm thành công...!")
			navigate("/admin/monhoctochucs")
		}
	}
	const handleAddMHTC = (mh) => {
		const x = monhoctochucs.find((i) => i.msmh === mh.msmh)
		if (!x) {
			mhtc.push({ ...mhtc.msmh, msmh: mh.msmh, mshocky: hocky.mshocky })
		} else toast.error("Đã có môn học trong danh sách...!")
	}

	const handleChangeHocKy = (e) => {
		const list = monhocs.filter((i) => i.mshocky == e.target.value)
		setMHByHK(list)
		setHocky({ mshocky: e.target.value })
	}
	const handleChangeKhoa = (e) => {
		setKhoa({ tenkhoa: e.target.value })
	}
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb'>
						<li className='breadcrumb-item'>
							Danh sách môn học được tổ chức
						</li>
						<li className='breadcrumb-item'>
							<a href='#'>Thêm môn học tổ chức</a>
						</li>
					</ul>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tile'>
							<div className='flex'>
								<div className='form-group col-md-3'>
									{hocky.mshocky !== "" ? (
										<select
											className='form-control'
											id='mskhoa'
											required
											onChange={(e) => handleChangeKhoa(e)}
										>
											<option value={""}>-- Chọn khoa --</option>
											{khoas &&
												khoas.length > 0 &&
												khoas.map((item, index) => {
													return (
														<option
															key={index}
															value={item.tenkhoa}
														>
															{item.tenkhoa}
														</option>
													)
												})}
										</select>
									) : (
										<select
											className='form-control'
											id='mskhoa'
											disabled
										>
											<option value={""}>-- Chọn khoa --</option>
											{khoas &&
												khoas.length > 0 &&
												khoas.map((item, index) => {
													return (
														<option
															key={index}
															value={item.tenkhoa}
														>
															{item.tenkhoa}
														</option>
													)
												})}
										</select>
									)}
								</div>
								<div className='form-group col-md-3'>
									<select
										className='form-control'
										id='mshocky'
										required
										onChange={(e) => handleChangeHocKy(e)}
									>
										<option value={""}>-- Chọn học kỳ --</option>
										{hockys &&
											hockys.length > 0 &&
											hockys.map((item, index) => {
												return (
													<option key={index} value={item.mshocky}>
														{item.tenhocky}
													</option>
												)
											})}
									</select>
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
										<th width={100}>Mã số môn học</th>
										<th width={300}>Tên môn học</th>
										<th width={100}>Số tín chỉ</th>
										<th width={100}>Mô tả</th>
										<th width={100}>Số tiết</th>
										<th width={200}>Khoa</th>
										<th width={150}>Học kỳ</th>
									</tr>
								</thead>
								{!khoa.tenkhoa &&
									!hocky.mshocky &&
									monhocs &&
									monhocs.length > 0 &&
									monhocs
										.sort(compareValues("mskhoa", "desc"))
										.map((mh) => {
											return (
												<tbody key={mh.id}>
													<tr>
														<td width={10}>
															{hocky.mshocky !== "" ? (
																<input
																	type='checkbox'
																	name='check1'
																	defaultValue={1}
																	onClick={() =>
																		handleAddMHTC(mh)
																	}
																/>
															) : (
																<input
																	type='checkbox'
																	name='check1'
																	defaultValue={1}
																	disabled
																/>
															)}
														</td>
														<td>{mh.msmh}</td>
														<td>{mh.tenmh}</td>
														<td>{mh.sotinchi}</td>
														<td>{mh.mota}</td>
														<td>{mh.sotiet}</td>
														<td>{mh.khoaMH?.tenkhoa}</td>
														<td>{mh.mshocky}</td>
													</tr>
												</tbody>
											)
										})}
								{mhByHK.length > 0 && khoa.tenkhoa
									? mhByHK
											.filter(
												(i) => i.khoaMH?.tenkhoa === khoa.tenkhoa
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
																	onClick={() =>
																		handleAddMHTC(mh)
																	}
																/>
															</td>
															<td>{mh.msmh}</td>
															<td>{mh.tenmh}</td>
															<td>{mh.sotinchi}</td>
															<td>{mh.mota}</td>
															<td>{mh.sotiet}</td>
															<td>{mh.khoaMH?.tenkhoa}</td>
															<td>{mh.mshocky}</td>
														</tr>
													</tbody>
												)
											})
									: mhByHK.map((mh) => {
											return (
												<tbody key={mh.id}>
													<tr>
														<td width={10}>
															<input
																type='checkbox'
																name='check1'
																defaultValue={1}
																onClick={() =>
																	handleAddMHTC(mh)
																}
															/>
														</td>
														<td>{mh.msmh}</td>
														<td>{mh.tenmh}</td>
														<td>{mh.sotinchi}</td>
														<td>{mh.mota}</td>
														<td>{mh.sotiet}</td>
														<td>{mh.khoaMH?.tenkhoa}</td>
														<td>{mh.mshocky}</td>
													</tr>
												</tbody>
											)
									  })}
							</table>
							<button
								className='btn btn-save'
								type='button'
								onClick={handleCreateMHTC}
							>
								Lưu lại
							</button>
							<button className='btn btn-cancel'>Hủy bỏ</button>
							<Link
								className='btn btn-dangerous'
								to={linkRoute.MHTC_ADMIN}
							>
								Thoát
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default AddMonhoctochuc
