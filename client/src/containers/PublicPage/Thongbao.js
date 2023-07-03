import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { ModelMonhoc, ModelMonhocTochuc } from "../../components"
import * as actions from "../../store/actions"

function Thongbao() {
	const dispatch = useDispatch()
	const { khoas } = useSelector((state) => state.khoa)

	const [showModelMonhoc, setShowModelMonhoc] = useState(false)
	const [showModelMonhocTochuc, setShowModelMonhocTochuc] = useState(false)

	const [mskhoa, setMskhoa] = useState()
	useEffect(() => {
		dispatch(actions.getListKhoa())
	}, [])
	const handleShowModelMonhoc = (khoa) => {
		setMskhoa(khoa.mskhoa)
		setShowModelMonhoc(true)
	}
	const handleShowModelMonhocTochuc = (khoa) => {
		setMskhoa(khoa.mskhoa)
		setShowModelMonhocTochuc(true)
	}
	return (
		<div className='text-[12px]'>
			<div className='bg-gradient-to-r from-sky-500 to-indigo-500 p-2 uppercase text-white font-bold rounded h-[30px] bg-[#2D8ECE] flex items-center'>
				Danh sách môn học và môn học tổ chức
			</div>
			<div className='p-[12px] border-[#ccc] border-[1px] border-solid m-1'>
				<h4 className='text-[12px] uppercase'>Tất cả môn học</h4>
				<ul className='pl-[12px]'>
					{khoas &&
						khoas.length > 0 &&
						khoas.map((item, index) => {
							return item.mskhoa === "0" ? (
								""
							) : (
								<li key={index} className='text-[#000080] uppercase'>
									<span
										className='hover:underline cursor-pointer'
										onClick={() => handleShowModelMonhoc(item)}
									>
										{index}. {item.tenkhoa}
									</span>
								</li>
							)
						})}
				</ul>
			</div>
			<div className='p-[12px] border-[#ccc] border-[1px] border-solid m-1'>
				<h4 className='text-[12px] uppercase'>Danh sách môn học tổ chức</h4>
				<ul className='pl-[12px]'>
					{khoas &&
						khoas.length > 0 &&
						khoas.map((item, index) => {
							return item.mskhoa === "0" ? (
								""
							) : (
								<li key={index} className='text-[#000080] uppercase'>
									<span
										className='hover:underline cursor-pointer'
										onClick={() => handleShowModelMonhocTochuc(item)}
									>
										{index}. {item.tenkhoa}
									</span>
								</li>
							)
						})}
				</ul>
			</div>
			{showModelMonhoc && (
				<ModelMonhoc
					setShowModelMonhoc={setShowModelMonhoc}
					mskhoa={mskhoa}
					khoas={khoas}
				/>
			)}
			{showModelMonhocTochuc && (
				<ModelMonhocTochuc
					setShowModelMonhocTochuc={setShowModelMonhocTochuc}
					mskhoa={mskhoa}
					khoas={khoas}
				/>
			)}
		</div>
	)
}
export default Thongbao
