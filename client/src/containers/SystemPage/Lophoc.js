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

	const { lophocs, token } = useSelector((state) => state.lophoc)
	const [danhsachLophoc, setDanhsachLophoc] = useState([])

	const [tenlophoc, setTenLopHoc] = useState("")
	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
		dispatch(actions.getListLophoc())
		handleMHNV()
	}, [isLoggedInAdmin, lophocs.length, token])
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
		setDanhsachLophoc(data)
	}
	const a = (arr, key) => {
		const init = []
		return arr.reduce((obj, item) => {
			return {
				...obj,
				[item[key]]: [item["mslophoc"]],
			}
		}, init)
	}
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
										{lophocs.length > 0 ? (
											<select
												className='form-control'
												id='mskhoa'
												onChange={(e) =>
													setTenLopHoc(e.target.value)
												}
												required
											>
												<option value={""}>
													-- Chọn lớp học --
												</option>
												{Object.keys(a(lophocs, "tenlophoc")).map(
													(item, index) => {
														return (
															<option key={index} value={item}>
																{item}
															</option>
														)
													}
												)}
											</select>
										) : (
											<select
												className='form-control'
												id='mskhoa'
												required
												disabled
											>
												<option value={""}>
													-- Chọn lớp học --
												</option>
											</select>
										)}
									</div>
								</div>
								<div className='italic p-2 text-[16px] flex justify-between items-center'>
									{tenlophoc && (
										<span>
											Tổng số sinh viên của lớp{" "}
											<span className='font-bold'>{tenlophoc}</span>:{" "}
											{
												lophocs.filter(
													(i) => i.tenlophoc === tenlophoc
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

									{!tenlophoc
										? lophocs
												// .sort(compareValues("tenlophoc", "desc"))
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
												.filter((i) => i.tenlophoc === tenlophoc)
												// .sort(compareValues("tenlophoc", "desc"))
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
