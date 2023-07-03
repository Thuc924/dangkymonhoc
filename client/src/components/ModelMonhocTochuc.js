import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../store/actions"

function ModelMonhocTochuc({ setShowModelMonhocTochuc, mskhoa, khoas }) {
	const dispatch = useDispatch()

	const { monhocs } = useSelector((state) => state.monhoc)
	const { monhoctochucs } = useSelector((state) => state.monhoctochuc)
	// console.log(monhoctochucs)
	const [listMH, setListMH] = useState([])
	const [listMHTC, setListMHTC] = useState([])
	useEffect(() => {
		dispatch(actions.getListMonhoctochuc())
		const data1 = monhocs.filter((i) => i.mskhoa === mskhoa)
		const data2 = monhocs.filter((i) => i.mskhoa === "0")
		const dataMH = data1.concat(data2)
		setListMH(dataMH)
		const data3 = monhoctochucs.filter((i) => i.monhoc?.mskhoa === mskhoa)
		const data4 = monhoctochucs.filter((i) => i.monhoc?.mskhoa === "0")
		const dataMHTC = data3.concat(data4)
		setListMHTC(dataMHTC)
	}, [])
	console.log(listMHTC)
	return (
		<div className='fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]'>
			<div className='fixed z-[1] pt-[60px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]'>
				<div className='absolute w-[1000px] h-[670px] bg-gradient-to-r from-sky-500 to-indigo-500 text-white left-[50%] right-[50%] translate-x-[-50%] p-[10px] rounded-xl overflow-scroll'>
					<div className='text-[14px] font-bold flex justify-end'>
						<p
							className='text-right p-2 hover:opacity-80 m-0'
							onClick={() => setShowModelMonhocTochuc(false)}
						>
							<FontAwesomeIcon
								className='cursor-pointer p-2'
								icon={faXmark}
							/>
						</p>
					</div>
					<div className='row'>
						<div className='form-group col-md-12'>
							<span className='thong-tin-thanh-toan'>
								<h5 className='text-center uppercase pt-0'>
									Danh sách môn học tổ chức
								</h5>
							</span>
							<p className='m-0'>
								KHOA: &nbsp;
								<span className='font-bold italic'>
									{khoas.find((i) => i.mskhoa === mskhoa)?.tenkhoa}
								</span>
							</p>
						</div>
					</div>
					<div>
						<div className='mt-2'>
							<table>
								<thead>
									<tr className='font-bold text-black'>
										<th>STT</th>
										<th>Mã môn học</th>
										<th>Tên môn học</th>
										<th>Số tín chỉ</th>
										<th>Học phí</th>
									</tr>
								</thead>
								<tbody>
									{listMHTC &&
										listMHTC.length > 0 &&
										listMHTC.map((i, index) => {
											return (
												<tr key={index}>
													<td>{index + 1}</td>
													<td className='italic'>{i.msmh}</td>
													<td>{i.monhoc?.tenmh}</td>
													<td>{i.monhoc?.sotinchi}</td>
													<td>{i.monhoc?.sotinchi * 613000}</td>
												</tr>
											)
										})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ModelMonhocTochuc
