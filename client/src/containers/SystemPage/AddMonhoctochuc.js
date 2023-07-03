import { compareValues } from "../../ultils/func"
import { linkRoute } from "../../ultils/Common/constant"
import * as actions from "../../store/actions"

import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { ModelAddMHTC } from "../../components"
import Sinhvien from "./Sinhvien"

function AddMonhoctochuc() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { monhocs } = useSelector((state) => state.monhoc)

	const { hockys } = useSelector((state) => state.hocky)

	const { khoas } = useSelector((state) => state.khoa)

	const { isLoggedInAdmin } = useSelector((state) => state.auth)
	const { giangviens } = useSelector((state) => state.giangvien)
	const { lops } = useSelector((state) => state.lop)
	const [mhtc, setMHTC] = useState([])
	const [hocky, setHocky] = useState({ mshocky: "" })
	const [mhByHK, setMHByHK] = useState([])
	const [khoa, setKhoa] = useState({
		mskhoa: "",
	})
	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
		dispatch(actions.getListMonhoc())
		dispatch(actions.getListHocky())
		dispatch(actions.getListKhoa())
		dispatch(actions.getListGiangvien())
		dispatch(actions.getListLop())
	}, [isLoggedInAdmin])
	// const handleCreateMHTC = () => {
	// 	if (mhtc) {
	// 		mhtc.map((i) => {
	// 			dispatch(actions.addMonhoctochuc(i))
	// 		})
	// 		toast.success("Thêm thành công...!")
	// 		navigate("/admin/monhoctochucs")
	// 	}
	// }

	const handleChaneKhoa = (e) => {
		const list = monhocs.filter(
			(i) => i.mskhoa === e.target.value && i.mshocky === hocky.mshocky
		)
		setMHByHK(list)
		setKhoa({ mskhoa: e.target.value })
	}
	const [showModel, setShowModel] = useState(false)
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
											onChange={(e) => handleChaneKhoa(e)}
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
									) : (
										<select
											className='form-control'
											id='mskhoa'
											disabled
										>
											<option value={""}>-- Chọn khoa --</option>
										</select>
									)}
								</div>
								<div className='form-group col-md-3'>
									<select
										className='form-control'
										id='mshocky'
										required
										onChange={(e) =>
											setHocky({ mshocky: e.target.value })
										}
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
										<th width={100}>Mã số môn học</th>
										<th width={300}>Tên môn học</th>
										<th width={100}>Số tín chỉ</th>
										<th width={100}>Mô tả</th>
										<th width={100}>Số tiết</th>
										<th width={200}>Khoa</th>
										<th width={150}>Học kỳ</th>
										{khoa.mskhoa && <th width={150}>Action</th>}
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
								{mhByHK.length > 0
									? mhByHK.map((mh) => {
											return (
												<tbody key={mh.id}>
													<tr>
														<td>{mh.msmh}</td>
														<td>{mh.tenmh}</td>
														<td>{mh.sotinchi}</td>
														<td>{mh.mota}</td>
														<td>{mh.sotiet}</td>
														<td>{mh.khoaMH?.tenkhoa}</td>
														<td>{mh.mshocky}</td>
														<td>
															<button
																onClick={() => {
																	setMHTC(mh)
																	setShowModel(true)
																}}
																className='mx-1 text-center w-[70px] border-[1px] border-solid border-[#0C3689] text-[#0C3689] bg-white rounded-3xl p-2 cursor-pointer'
															>
																Add
															</button>
														</td>
													</tr>
												</tbody>
											)
									  })
									: hocky.mshocky &&
									  monhocs
											.filter((i) => i.mshocky === hocky.mshocky)
											.map((mh) => {
												return (
													<tbody key={mh.id}>
														<tr>
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
							{/* <button
								className='btn btn-save'
								type='button'
								onClick={handleCreateMHTC}
							>
								Lưu lại
							</button>
							<button className='btn btn-cancel'>Hủy bỏ</button> */}
							<Link
								className='text-[16px] border-[1px] border-solid p-2 rounded-sm border-black'
								to={linkRoute.MHTC_ADMIN}
							>
								Thoát
							</Link>
						</div>
					</div>
				</div>
			</main>
			{showModel && (
				<ModelAddMHTC
					mslop={lops}
					mshocky={hocky.mshocky}
					setShowModel={setShowModel}
					monhoc={mhtc}
					giangviens={giangviens}
					khoa={khoa.mskhoa}
				/>
			)}
		</div>
	)
}

export default AddMonhoctochuc
