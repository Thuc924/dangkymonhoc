import * as actions from "../../store/actions"
import { compareValues } from "../../ultils/func"
import { linkRoute } from "../../ultils/Common/constant"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Lophoc() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isLoggedInAdmin } = useSelector((state) => state.auth)

	const { lophocs } = useSelector((state) => state.lophoc)
	const [danhsachLophoc, setDanhsachLophoc] = useState([])

	const [mslophoc, setMSLH] = useState("")

	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
		dispatch(actions.getListLophoc())
		handleMHNV()
	}, [isLoggedInAdmin, lophocs.length])
	const handleMHNV = () => {
		let data = []
		for (let i = 0; i < lophocs.length; i++) {
			for (let j = i + 1; j < lophocs.length; j++) {
				if (lophocs[i].mslophoc == lophocs[j].mslophoc) {
					let data1 = lophocs.slice(i, j)
					let data2 = lophocs.slice(j + 1, lophocs.length)

					data = data1.concat(data2)
				}
			}
		}
		console.log(data)
		setTimeout(() => {
			setDanhsachLophoc(data)
		}, 1000)
	}
	const handleLapLop = () => {
		const length = lophocs.filter((i) => i.mslophoc === mslophoc).length
		if (length < 3) toast.error("Không đủ sinh viên để lập lớp...!")
		else {
		}
	}
	// console.log(lophocs.map((i) => i).length)
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb side'>
						<li className='breadcrumb-item active'>
							<a href='#'>
								<b>Danh sách lớp học được tổ chức</b>
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
											onChange={(e) => setMSLH(e.target.value)}
											required
										>
											<option value={""}>-- Chọn lớp học --</option>
											{danhsachLophoc.map((item, index) => {
												return (
													<option
														key={index}
														value={item.mslophoc}
													>
														({item.mslophoc}) - {item.tenlophoc}
													</option>
												)
											})}
										</select>
									</div>
								</div>
								<div className='italic p-2 text-[16px] flex justify-between items-center'>
									{mslophoc && (
										<span>
											Tổng số sinh viên của lớp{" "}
											<span className='font-bold'>{mslophoc}</span>:{" "}
											{
												lophocs.filter(
													(i) => i.mslophoc === mslophoc
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
											<th>Mã số lớp</th>
											<th>Tên lớp</th>
											<th>Mã số sinh viên</th>
										</tr>
									</thead>

									{!mslophoc
										? lophocs
												.sort(compareValues("mssv", "desc"))
												.map((item, index) => {
													return (
														<tbody key={index}>
															<tr>
																<td width={10}>{index + 1}</td>
																<td>{item.mslophoc}</td>
																<td>{item.tenlophoc}</td>
																<td>{item.mssv}</td>
															</tr>
														</tbody>
													)
												})
										: lophocs
												.filter((i) => i.mslophoc === mslophoc)
												.sort(compareValues("mssv", "desc"))
												.map((item, index) => {
													return (
														<tbody key={index}>
															<tr>
																<td width={10}>{index + 1}</td>
																<td>{item.mslophoc}</td>
																<td>{item.tenlophoc}</td>
																<td>{item.mssv}</td>
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
			{/* {show && <ModalDetailDKMH setShow={setShow} mssv={mssv} sumHocPhi={sumHocPhi} />} */}
		</div>
	)
}

export default Lophoc
