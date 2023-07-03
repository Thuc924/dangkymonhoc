import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../store/actions"

function ModelMonhoc({ setShowModelMonhoc, mskhoa, khoas }) {
	const dispatch = useDispatch()

	const { monhocs } = useSelector((state) => state.monhoc)
	const [listMH, setListMH] = useState([])
	useEffect(() => {
		dispatch(actions.getListMonhoc())
		const data1 = monhocs.filter((i) => i.mskhoa === mskhoa)
		const data2 = monhocs.filter((i) => i.mskhoa === "0")
		const data = data1.concat(data2)
		setListMH(data)
	}, [])
	return (
		<div className='fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]'>
			<div className='fixed z-[1] pt-[60px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]'>
				<div className='absolute w-[1000px] h-[670px] bg-gradient-to-r from-sky-500 to-indigo-500 text-white left-[50%] right-[50%] translate-x-[-50%] p-[10px] rounded-xl overflow-scroll'>
					<div className='text-[14px] font-bold flex justify-end'>
						<p
							className='text-right p-2 hover:opacity-80 m-0'
							onClick={() => setShowModelMonhoc(false)}
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
									Danh sách các môn học
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
									<tr className='font-bold'>
										<th>STT</th>
										<th>Mã môn học</th>
										<th>Tên môn học</th>
										<th>Số tín chỉ</th>
										<th>Học phí</th>
									</tr>
								</thead>
								<tbody>
									{listMH &&
										listMH.length > 0 &&
										listMH.map((i, index) => {
											return (
												<tr key={index}>
													<td>{index + 1}</td>
													<td className='italic'>{i.msmh}</td>
													<td>{i.tenmh}</td>
													<td>{i.sotinchi}</td>
													<td>{i.sotinchi * 613000}</td>
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
export default ModelMonhoc
