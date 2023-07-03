import * as actions from "../../store/actions"
import { compareValues } from "../../ultils/func"
import { linkRoute } from "../../ultils/Common/constant"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { ModelNhapDiem } from "../../components"

function DanhsachSVDKMH() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { danhsachs } = useSelector((state) => state.dangkymonhoc)

	const { isLoggedInAdmin } = useSelector((state) => state.auth)

	const { khoas } = useSelector((state) => state.khoa)

	const { monhoctochucs } = useSelector((state) => state.monhoctochuc)

	const { dsdiem, token } = useSelector((state) => state.diem)

	const { hockys } = useSelector((state) => state.hocky)

	const { dshocphi } = useSelector((state) => state.hocphi)

	const { lops } = useSelector((state) => state.lop)

	const [showModel, setShowModel] = useState(false)

	const [dsmhBykhoa, setDSMHByKhoa] = useState([])

	const [hocky, setHocky] = useState({ mshocky: "" })

	const [khoa, setKhoa] = useState({ mskhoa: "" })

	const [mhByHK, setMHByHK] = useState([])

	const [monhoc, setMonhoc] = useState("")

	const [lophoc, setLophoc] = useState("")

	const [listMonhoc, setListMH] = useState()

	const [diemMh, setDiemMH] = useState()

	useEffect(() => {
		dispatch(actions.getAllDSMHDK())
		dispatch(actions.getListKhoa())
		dispatch(actions.getListMonhoctochuc())
		dispatch(actions.getListHocky())
		dispatch(actions.getListLop())
		dispatch(actions.getListHocPhi())
		dispatch(actions.getAllDSDiem())
		// get()
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
	}, [isLoggedInAdmin, danhsachs.length, token])

	const list = dsmhBykhoa?.reduce((acc, item) => {
		const currentItem = acc?.find((ac) => ac.msmh === item.msmh)
		if (!currentItem) acc.push(item)
		return acc
	}, [])

	const handleChangeHocKy = (e) => {
		const list = monhoctochucs.filter((i) => i.mshocky == e.target.value)
		setMHByHK(list)
		setHocky({ mshocky: e.target.value })
	}

	const handleChangeKhoa = (e) => {
		const list = mhByHK.filter((i) => i.mskhoa == e.target.value)
		setDSMHByKhoa(list)
		setKhoa({ mskhoa: e.target.value })
	}

	const handleCloseModel = (e) => {
		if (e.keyCode === 27) setShowModel(false)
	}
	console.log(!dshocphi.find((i) => i.mssv === "DH52300123"))
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb side'>
						<li className='breadcrumb-item active'>
							<a href='#'>
								<b>Danh sách sinh viên đã đăng ký môn học</b>
							</a>
						</li>
					</ul>
					<div id='clock' />
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tile'>
							<div className='tile-body'>
								<div className='flex'>
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
										{!hocky.mshocky ? (
											<select
												className='form-control'
												id='mskhoa'
												required
												disabled
											>
												<option value={""}>-- Chọn khoa --</option>
											</select>
										) : (
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
																value={item.mskhoa}
															>
																{item.tenkhoa}
															</option>
														)
													})}
											</select>
										)}
									</div>
									<div className='form-group col-md-3'>
										{!khoa.mskhoa ? (
											<select
												disabled
												className='form-control'
												id='mskhoa'
												required
											>
												<option value={""}>
													-- Chọn môn học --
												</option>
											</select>
										) : (
											<select
												className='form-control'
												id='mskhoa'
												required
												onChange={(e) => setMonhoc(e.target.value)}
											>
												<option value={""}>
													-- Chọn môn học --
												</option>
												{list &&
													list.length > 0 &&
													list.map((item, index) => {
														return (
															<option
																key={index}
																value={item.msmh}
															>
																{item.tenmh}
															</option>
														)
													})}
											</select>
										)}
									</div>
									<div className='form-group col-md-3'>
										{!monhoc ? (
											<select
												disabled
												className='form-control'
												id='mskhoa'
												required
											>
												<option value={""}>
													-- Chọn lớp học --
												</option>
											</select>
										) : (
											<select
												className='form-control'
												id='mskhoa'
												required
												onChange={(e) => setLophoc(e.target.value)}
											>
												<option value={""}>
													-- Chọn môn học --
												</option>
												{lops &&
													lops.length > 0 &&
													lops.map((item, index) => {
														return (
															<option
																key={index}
																value={item.mslop}
															>
																{item.mslop}
															</option>
														)
													})}
											</select>
										)}
									</div>
								</div>
								<div className='italic p-2 text-[16px] flex items-center justify-between'>
									{monhoc && (
										<span>
											Tổng số sinh viên đăng ký môn{" "}
											<span className='font-bold'>{monhoc}</span> của
											lớp <span className='font-bold'>{lophoc}</span>
											:{" "}
											{
												danhsachs.filter(
													(i) =>
														i.msmh === monhoc &&
														i.mslophoc === lophoc
												).length
											}
										</span>
									)}
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
											<th width={10}>STT</th>
											<th width={100}>Mã số sinh viên</th>
											<th width={150}>Tên sinh viên</th>
											<th width={150}>Mã số môn học đã đăng ký</th>
											<th width={150}>Tên môn học đã đăng ký</th>
											<th width={150}>Chức năng</th>
										</tr>
									</thead>
									{lophoc
										? danhsachs &&
										  danhsachs.length > 0 &&
										  danhsachs
												.filter(
													(i) =>
														i.msmh === monhoc &&
														i.mslophoc === lophoc
												)
												.sort(compareValues("mssv", "desc"))
												.map((item, index) => {
													return (
														<tbody key={index}>
															<tr>
																<td width={10}>{index + 1}</td>
																<td>{item.mssv}</td>
																<td>{item.Sinhvien.tensv}</td>
																<td>{item.msmh}</td>
																<td>{item.monhocDK.tenmh}</td>
																<td>
																	{!dshocphi.find(
																		(i) =>
																			i.mssv === item.mssv
																	) ? (
																		<button
																			disabled
																			className='text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer'
																		>
																			Chưa đóng học phí
																		</button>
																	) : dsdiem.find(
																			(i) =>
																				i.msmh ===
																					item.msmh &&
																				i.mssv === item.mssv
																	  ) ? (
																		<button
																			disabled
																			className='text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer'
																		>
																			Đã nhập điểm
																		</button>
																	) : (
																		<button
																			onClick={() => {
																				setShowModel(true)
																				setDiemMH(item)
																			}}
																			onKeyDown={(e) =>
																				handleCloseModel(e)
																			}
																			className='text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer hover:border-[#0000008a] hover:text-[#000000ad]'
																		>
																			Nhập điểm
																		</button>
																	)}
																</td>
															</tr>
														</tbody>
													)
												})
										: danhsachs &&
										  danhsachs.length > 0 &&
										  danhsachs
												.sort(compareValues("mssv", "desc"))
												.map((item, index) => {
													return (
														<tbody key={index}>
															<tr>
																<td width={10}>{index + 1}</td>
																<td>{item.mssv}</td>
																<td>{item.Sinhvien.tensv}</td>
																<td>{item.msmh}</td>
																<td>{item.monhocDK.tenmh}</td>
																<td className='text-center'>
																	{!dshocphi.find(
																		(i) =>
																			i.mssv === item.mssv
																	) ? (
																		<button
																			disabled
																			className='text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer'
																		>
																			Chưa đóng học phí
																		</button>
																	) : dsdiem.find(
																			(i) =>
																				i.msmh ===
																					item.msmh &&
																				i.mssv === item.mssv
																	  ) ? (
																		<button
																			disabled
																			className='text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer'
																		>
																			Đã nhập điểm
																		</button>
																	) : (
																		<button
																			onClick={() => {
																				setShowModel(true)
																				setDiemMH(item)
																			}}
																			onKeyDown={(e) =>
																				handleCloseModel(e)
																			}
																			className='text-center w-[130px] border-[1px] border-solid border-[#000000d] text-[#0000008a] bg-white rounded-3xl p-2 cursor-pointer hover:border-[#0000008a] hover:text-[#000000ad]'
																		>
																			Nhập điểm
																		</button>
																	)}
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
			{showModel && (
				<ModelNhapDiem monhoc={diemMh} setShowModel={setShowModel} />
			)}
		</div>
	)
}

export default DanhsachSVDKMH
