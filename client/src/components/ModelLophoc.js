import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import * as actions from "../store/actions"
import Button from "./Button"

function ModelLophoc({ setShowModel, danhsach, danhsachnv }) {
	const dispatch = useDispatch()
	const [lophoc, setLophoc] = useState({
		mslophoc: "",
		tenlophoc: "",
		ngaybd: "",
		ngaykt: "",
	})
	console.log(danhsach)
	const [datanv, setDataNV] = useState([])
	const [data, setData] = useState([])
	useEffect(() => {
		if (danhsachnv?.length > 2) {
			let list1 = danhsachnv.slice(0, 2)
			let list2 = danhsachnv.slice(2, danhsachnv?.length)
			if (list2.length <= 1) setData(list1.concat(list2))
			else setDataNV(list1)
		} else {
			setDataNV(danhsachnv)
		}
		if (danhsach?.length > 2) {
			let list1 = danhsach.slice(0, 2)
			let list2 = danhsach.slice(2, danhsach?.length)
			if (list2.length <= 1) setData(list1.concat(list2))
			else setData(list1)
		} else {
			setData(danhsach)
		}
	}, [])
	const handleCreateLophoc = () => {
		if (
			!lophoc.mslophoc ||
			!lophoc.tenlophoc ||
			!lophoc.ngaybd ||
			!lophoc.ngaykt
		) {
			toast.error("Vui lòng nhập đầy đủ thông tin...!")
		} else {
			danhsachnv?.length > 0 &&
				datanv?.map((i) => {
					dispatch(
						actions.createLopHoc({
							mslophoc: lophoc?.mslophoc,
							tenlophoc: lophoc?.tenlophoc,
							ngaybd: lophoc?.ngaybd,
							ngaykt: lophoc?.ngaykt,
							mssv: i.mssv,
						})
					)
				})
			danhsach?.length > 0 &&
				data?.map((i) => {
					dispatch(
						actions.createLopHoc({
							mslophoc: lophoc?.mslophoc,
							tenlophoc: lophoc?.tenlophoc,
							ngaybd: lophoc?.ngaybd,
							ngaykt: lophoc?.ngaykt,
							mssv: i.mssv,
						})
					)
				})
			toast.success("Lập lớp thành công...!")
			datanv?.map((i) => {
				dispatch(actions.deleteMonHocInDSMHNV(i.mssv))
			})
			data?.map((i) => {
				dispatch(actions.deleteMonHocInDSDKMH(i.mssv))
			})
			setShowModel(false)
		}
	}
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
								onChange={(e) =>
									setLophoc({
										...lophoc,
										mslophoc: e.target.value,
									})
								}
								required
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
								onChange={(e) =>
									setLophoc({
										...lophoc,
										tenlophoc: e.target.value,
									})
								}
								required
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
								onChange={(e) =>
									setLophoc({
										...lophoc,
										ngaybd: e.target.value,
									})
								}
								required
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
								onChange={(e) =>
									setLophoc({
										...lophoc,
										ngaykt: e.target.value,
									})
								}
								required
								id='ngaykt'
								type='date'
								className='w-[80%] p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm'
							/>
						</div>
					</div>
					<div className='flex flex-col items-center'>
						<label>Số lượng sinh viên</label>
						<input
							value={data?.length || datanv.length}
							disabled
							id='ngaykt'
							type='number'
							className='w-[10%] p-1 m-1 border-[1px] border-solid border-slate-400 rounded-sm text-center font-bold text-[red]'
						/>
					</div>
					<div className='w-full flex justify-center'>
						<Button
							onClick={handleCreateLophoc}
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
