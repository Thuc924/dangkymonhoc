import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import * as actions from "../store/actions"

function ChitietMonhoc({ setShowDetail, monhoc, monhocs }) {
	const dispatch = useDispatch()
	const [detail, setDetail] = useState()
	useEffect(() => {
		dispatch(actions.getListMonhoc())
		const mh = monhocs?.find((i) => i.msmh === monhoc.msmh)
		setDetail(mh)
	}, [])

	return (
		<div className='fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]'>
			<div className='absolute w-[800px] h-[300px] bg-gradient-to-r from-sky-500 to-indigo-500 text-white left-[50%] right-[50%] translate-x-[-50%] p-[10px] rounded-md'>
				<p
					className='text-right p-2 hover:opacity-80 m-0 text-white'
					onClick={() => setShowDetail(false)}
				>
					<FontAwesomeIcon className='cursor-pointer p-2' icon={faXmark} />
				</p>
				<h4 className='text-center uppercase font-bold text-[26px]'>
					Chi tiết môn học
				</h4>
				{detail && (
					<div className='flex justify-evenly'>
						<div className='flex'>
							<ul className='p-1'>
								<li className='p-2'>Mã môn học:</li>
								<li className='p-2'>Tên môn học:</li>
								<li className='p-2'>Số tín chỉ:</li>
								<li className='p-2'>Học phí:</li>
							</ul>
							<ul className='p-1 font-bold italic'>
								<li className='p-2'>{detail?.msmh}</li>
								<li className='p-2'>{detail?.tenmh}</li>
								<li className='p-2'>{detail?.sotinchi}</li>
								<li className='p-2'>{detail?.sotinchi * 616000} đ</li>
							</ul>
						</div>
						<div className='flex'>
							<ul className='p-1'>
								<li className='p-2'>Mô tả:</li>
								<li className='p-2'>Song hành:</li>
								<li className='p-2'>Học kỳ:</li>
							</ul>
							<ul className='p-1 font-bold italic'>
								<li className='p-2'>
									{detail?.mota === "BB"
										? "Bắc buộc"
										: detail?.mota === "TC"
										? "Tự chọn"
										: "Chuyên ngành"}
								</li>
								<li className='p-2'>
									{detail?.songhanh === "1" ? "True" : "False"}
								</li>
								<li className='p-2'>{detail?.mshocky}</li>
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
export default ChitietMonhoc
