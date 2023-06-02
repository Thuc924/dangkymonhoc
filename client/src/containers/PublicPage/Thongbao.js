import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { ModelMonhoc } from "../../components"
import * as actions from "../../store/actions"

function Thongbao() {
	const dispatch = useDispatch()
	const { khoas } = useSelector((state) => state.khoa)

	const [showModel, setShowModel] = useState(false)

	const [mskhoa, setMskhoa] = useState()
	useEffect(() => {}, [])
	const handleShowModel = (khoa) => {
		setMskhoa(khoa.mskhoa)
		setShowModel(true)
	}
	return (
		<div className='text-[12px]'>
			<div className='p-2 uppercase text-white font-bold rounded h-[30px] bg-[#2D8ECE] flex items-center'>
				Đăng ký môn học và tổ chức lớp
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
								<li
									key={index}
									className='text-[#000080] uppercase'
									onClick={() => handleShowModel(item)}
								>
									<span className='hover:underline cursor-pointer'>
										{index}. {item.tenkhoa}
									</span>
								</li>
							)
						})}
				</ul>
			</div>
			{showModel && (
				<ModelMonhoc
					setShowModel={setShowModel}
					mskhoa={mskhoa}
					khoas={khoas}
				/>
			)}
		</div>
	)
}
export default Thongbao
