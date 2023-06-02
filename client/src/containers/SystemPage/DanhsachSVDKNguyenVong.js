import * as actions from "../../store/actions"
import { compareValues } from "../../ultils/func"
import { linkRoute } from "../../ultils/Common/constant"
import { Button, ModelLophoc } from "../../components"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function DanhSachSVDKNguyenVong() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isLoggedInAdmin } = useSelector((state) => state.auth)

	const { danhsachs } = useSelector((state) => state.monhocnguyenvong)

	const [danhsachMHNV, setDanhSachMHNV] = useState([])

	const [msmh, setMSMH] = useState("")

	const [showModel, setShowModel] = useState(false)

	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
		// dispatch(actions.createLopHoc())
		setTimeout(() => {
			dispatch(actions.getAllDSNguyenVong())
		}, 1000)
		handleMHNV()
	}, [isLoggedInAdmin])
	console.log(danhsachs.filter((i) => i.msmh === msmh).length)
	const handleMHNV = () => {
		let data = []
		for (let i = 0; i < danhsachs.length; i++) {
			for (let j = i + 1; j < danhsachs.length; j++) {
				if (danhsachs[i].msmh == danhsachs[j].msmh) {
					let data1 = danhsachs.slice(i, j)
					let data2 = danhsachs.slice(j + 1, danhsachs.length)

					data = data1.concat(data2)
				}
			}
		}
		setTimeout(() => {
			setDanhSachMHNV(data)
		}, 1000)
	}
	const handleLapLop = () => {
		setShowModel(true)
		const length = danhsachs.filter((i) => i.msmh === msmh).length
		if (length < 3) toast.error("Không đủ sinh viên để lập lớp...!")
		else {
		}
	}
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb side'>
						<li className='breadcrumb-item active'>
							<a href='#'>
								<b>
									Danh sách sinh viên đã đăng ký môn học nguyện vọng
								</b>
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
											id='mskhoa'
											onChange={(e) => setMSMH(e.target.value)}
											required
										>
											<option value={""}>-- Chọn môn học --</option>
											{danhsachMHNV.map((item, index) => {
												return (
													<option key={index} value={item.msmh}>
														({item.msmh}) - {item.monhocDK?.tenmh}
													</option>
												)
											})}
										</select>
									</div>
								</div>
								<div className='italic p-2 text-[16px] flex justify-between items-center'>
									{msmh && (
										<span>
											Tổng số sinh viên đăng ký môn{" "}
											<span className='font-bold'>{msmh}</span>:{" "}
											{
												danhsachs.filter((i) => i.msmh === msmh)
													.length
											}
										</span>
									)}
									{msmh && (
										<Button
											label={"Lập lớp"}
											rounded={"rounded-xl"}
											bg={"bg-black"}
											textColor={"text-white"}
											width={"w-[100px]"}
											onClick={handleLapLop}
										/>
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
											<th width={100}>Học phí</th>
										</tr>
									</thead>

									{msmh
										? danhsachs
												.filter((i) => i.msmh === msmh)
												.sort(compareValues("mssv", "desc"))
												.map((item, index) => {
													return (
														<tbody key={index}>
															<tr>
																<td width={10}>{index + 1}</td>
																<td className='italic'>
																	{item.mssv}
																</td>
																<td>{item.Sinhvien.tensv}</td>
																<td className='italic'>
																	{item.msmh}
																</td>
																<td>{item.monhocDK.tenmh}</td>
																<td className='italic'>
																	{item.hocphi} đ
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
																<td>{item.hocphi}</td>
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
				<ModelLophoc
					setShowModel={setShowModel}
					danhsach={danhsachs.filter((i) => i.msmh === msmh)}
				/>
			)}
			{/* {show && <ModalDetailDKMH setShow={setShow} mssv={mssv} sumHocPhi={sumHocPhi} />} */}
		</div>
	)
}

export default DanhSachSVDKNguyenVong
