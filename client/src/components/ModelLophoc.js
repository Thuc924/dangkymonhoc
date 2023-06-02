import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import * as actions from "../store/actions"
import Button from "./Button"

function ModelLophoc({ setShowModel, danhsach }) {
	const dispatch = useDispatch()
	console.log(
		danhsach.map((i) => ({
			mslophoc: "123",
			tenlophoc: "NMLT",
			mssv: i.mssv,
		}))
	)
	return (
		<div className='fixed z-[1] pt-[100px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]'>
			<div className='fixed z-[1] pt-[60px] left-0 top-0 w-[100%] h-[100%] bg-[#0006]'>
				<div className='absolute w-[700px] h-[350px] bg-white left-[50%] right-[50%] translate-x-[-50%] p-[10px] rounded-xl overflow-scroll'>
					<div className='text-[14px] font-bold flex justify-end'>
						<p
							className='text-right p-2 hover:opacity-80 m-0'
							onClick={() => setShowModel(false)}
						>
							<FontAwesomeIcon
								className='cursor-pointer p-2'
								icon={faXmark}
							/>
						</p>
					</div>
					<h3 className='text-center uppercase font-bold'>Lập lớp học</h3>
					<div className='flex justify-between'>
						<div className='w-[50%] flex flex-col items-center'>
							<label
								htmlFor='malop'
								className='m-0 cursor-pointer hover:underline hover:font-bold'
							>
								Mã lớp học
							</label>
							<input
								id='malop'
								type='text'
								className='w-[80%] p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
							/>
						</div>
						<div className='w-[50%] flex flex-col items-center'>
							<label
								htmlFor='tenlop'
								className='m-0 cursor-pointer hover:underline hover:font-bold'
							>
								Tên lớp học
							</label>
							<input
								id='tenlop'
								type='text'
								className='w-[80%] p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
							/>
						</div>
					</div>
					<div className='flex'>
						<div className='w-[50%] flex flex-col items-center'>
							<label
								htmlFor='ngaybd'
								className='m-0 cursor-pointer hover:underline hover:font-bold'
							>
								Ngày bắt đầu
							</label>
							<input
								id='ngaybd'
								type='date'
								className='w-[80%] p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
							/>
						</div>
						<div className='w-[50%] flex flex-col items-center'>
							<label
								htmlFor='ngaykt'
								className='m-0 cursor-pointer hover:underline hover:font-bold'
							>
								Ngày kết thúc
							</label>
							<input
								id='ngaykt'
								type='date'
								className='w-[80%] p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
							/>
						</div>
					</div>
					<div className='flex flex-col items-center'>
						<label>Số lượng sinh viên</label>
						<input
							value={danhsach.length}
							disabled
							id='ngaykt'
							type='number'
							className='w-[10%] p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm text-center font-bold text-[red]'
						/>
					</div>
					<div className='w-full flex justify-center'>
						<Button
							label={"Lập lớp"}
							width={"w-[70%]"}
							m={"m-2"}
							bg={"bg-black"}
							textColor={"text-white"}
							rounded={"rounded-sm"}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ModelLophoc
