import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as actions from "../../store/actions"
import { toast } from "react-toastify"
import { Button } from "../../components"

function Dangkymonhoc() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const date = new Date()
	const year = date.getFullYear().toString()?.slice(2, 4)

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

	const { monhoctochucs } = useSelector((state) => state.monhoctochuc)

	const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)

	const { monhocs } = useSelector((state) => state.monhoc)

	const { danhsachs } = useSelector((state) => state.monhocnguyenvong)

	const [listMonhoc, setListMonhoc] = useState([])

	const [msmh, setMSMH] = useState("")

	const [hk, setHK] = useState("")

	const [listMH, setListMH] = useState()

	const [monhocSearch, setMonhocSearch] = useState()

	const [msmhNguyevong, setMSMHNguyenvong] = useState()

	// const [MHNV, setMHNV] = useState()

	const [dsMHDK, setDSMHDK] = useState(
		JSON.parse(localStorage.getItem("mhdk")) || []
	)
	useEffect(() => {
		dispatch(actions.getListMonhocByMSSV(sinhvien?.mssv))
		getMHTCC()
		!msmh && setMonhocSearch()
		isLoggedInSinhvien &&
			localStorage.setItem("mhdk", JSON.stringify(dsMHDK) || [])
		!isLoggedInSinhvien && navigate("/")
	}, [isLoggedInSinhvien, dsMHDK?.length, msmh])
	const getMHTCC = () => {
		const nienKhoa = sinhvien?.mssv?.slice(3, 5)
		if (+nienKhoa === +year) {
			let kq = monhoctochucs?.filter((i) => i.mshocky === "HK1")
			setListMH(kq)
			setHK("Học kỳ I")
		} else if (+nienKhoa + 1 === +year) {
			let kq = monhoctochucs?.filter((i) => i.mshocky === "HK3")
			setListMH(kq)
			setHK("Học kỳ I")
		} else if (+nienKhoa + 2 === +year) {
			let kq = monhoctochucs?.filter((i) => i.mshocky === "HK5")
			setListMH(kq)
			setHK("Học kỳ I")
		} else if (+nienKhoa + 3 === +year) {
			let kq = monhoctochucs?.filter((i) => i.mshocky === "HK7")
			setListMH(kq)
			setHK("Học kỳ I")
		}
	}
	const handleAddMHDK = (mh) => {
		const search =
			danhsachsvdk?.find(
				(i) => i.msmh === mh.msmh && i.mssv === sinhvien.mssv
			) ||
			dsMHDK?.find((i) => i.msmh === mh.msmh && i.mssv === sinhvien.mssv)
		if (!search) {
			setDSMHDK((prev) => [
				...prev,
				{
					mssv: sinhvien.mssv,
					msmh: mh.msmh,
					tenmh: mh.monhoc?.tenmh || mh.tenmh,
					sotinchi: mh.monhoc?.sotinchi || mh.sotinchi,
					hocphi:
						mh.monhoc?.sotinchi * 613000 || mh.sotinchi * 613000 || 0,
				},
			])
			toast.success("Thêm thành công...!")
		} else toast.error("Đã có môn học trong danh sách đăng ký...!")
	}
	const handleSearchMonhoc = () => {
		if (!msmh) {
			toast.error("Bạn chưa nhập mã môn học...!")
			return
		}
		const data = monhocs.filter((i) => i.msmh === msmh)
		setMonhocSearch(data)
	}
	const handleAddMonhocNguyenvong = () => {
		const data = listMonhoc.find((i) => i.msmh === msmhNguyevong)
		const a = danhsachs.find((i) => i.msmh === data.msmh)
		const b = danhsachs.find((i) => i.mssv === sinhvien.mssv)
		if (a && b) {
			toast.error("Nguyện vọng đã được thêm...!")
		} else {
			dispatch(
				actions.addMonhocNguyenvong({
					mssv: sinhvien.mssv,
					msmh: data.msmh,
					hocphi: +data.sotinchi * 613000,
				})
			)
			toast.success("Thêm nguyện vọng thành công...!")
		}
	}
	console.log(listMH)
	console.log(monhocSearch)
	return (
		<div className='min-h-[550px]'>
			<div className='flex justify-between py-2'>
				<h3 className='p-2 uppercase text-[16px] text-[#355170] m-0'>
					Danh sách môn học được tổ chức trong {hk} năm học 20{+year - 1} -{" "}
					20{year}{" "}
				</h3>
				<button className='p-2 border-[1px] border-solid rounded-xl border-[#999] hover:underline bg-[#14539a] text-white'>
					Thêm môn học nguyện vọng
				</button>
			</div>
			<p className='m-0 italic'>
				Lưu ý: những môn học tự chọn thì chỉ chọn 1 hoặc 1 nhóm môn, không
				chọn tất cả
			</p>
			<div className='flex items-center'>
				<label
					htmlFor='ma'
					className='my-0 mx-1 cursor-pointer hover:underline'
				>
					Lọc theo mã môn học
				</label>
				<input
					id='ma'
					type='text'
					className='mx-2 border-[1px] border-solid rounded-md p-1 my-2 focus:outline-none focus:border-sky-500 focus:ring-1 text-pink-600 focus:text-pink-600'
					onChange={(e) => setMSMH(e.target.value)}
				/>
				<Button
					width={"w-[100px]"}
					label={"Lọc"}
					m={"m-0"}
					bg={"bg-[#2D8ECE]"}
					textColor={"text-white"}
					rounded={"rounded-xl"}
					onClick={handleSearchMonhoc}
				/>
			</div>
			<div className='min-h-[400px]'>
				<table>
					<thead className='bg-[#2D8ECE] text-white'>
						<tr>
							<th></th>
							<th className='text-center'>Mã môn học</th>
							<th>Tên môn học</th>
							<th>Số tín chỉ</th>
							<th>Học phí</th>
							<th>Mô tả</th>
							<th>Song hành</th>
						</tr>
					</thead>

					{!listMH &&
						monhocSearch &&
						monhocSearch.map((item, index) => {
							return (
								<tbody key={index} className='text-[#000080]'>
									<tr className='hover-btn odd:bg-white even:bg-slate-50'>
										<td width={10}>
											<input
												className='cursor-pointer'
												type='checkbox'
												onClick={() => handleAddMHDK(item)}
											/>
										</td>
										<td className='text-center italic'>
											{item.msmh}
										</td>
										<td className='font-bold'>{item.tenmh}</td>
										<td>{item.sotinchi}</td>
										<td>{item.sotinchi * 616000}</td>
										<td>
											{item.mota === "BB"
												? "Bắt buộc"
												: item.mota === "TC"
												? "Tự chọn"
												: "Tốt nghiệp"}
										</td>
										<td>
											{item.songhanh === "1"
												? "Đây là môn song hành"
												: ""}
										</td>
									</tr>
								</tbody>
							)
						})}
					{!monhocSearch &&
						listMH?.length > 0 &&
						listMH
							?.filter(
								(i) => i.monhoc?.mskhoa === sinhvien.mssv?.slice(2, 3)
							)
							.concat(listMH?.filter((i) => i.monhoc?.mskhoa === "0"))
							.map((item, index) => {
								return (
									<tbody key={index} className='text-[#000080]'>
										<tr className='hover-btn odd:bg-white even:bg-slate-50'>
											<td width={10}>
												<input
													className='cursor-pointer'
													type='checkbox'
													id='all'
													onClick={() => handleAddMHDK(item)}
												/>
											</td>
											<td className='text-center italic'>
												{item.msmh}
											</td>
											<td className='font-bold'>
												{item.monhoc?.tenmh}
											</td>
											<td>{item.monhoc?.sotinchi}</td>
											<td>{item.monhoc?.sotinchi * 616000}</td>
											<td>
												{item.monhoc?.mota === "BB"
													? "Bắt buộc"
													: item.monhoc?.mota === "TC"
													? "Tự chọn"
													: "Tốt nghiệp"}
											</td>
											<td>
												{item.monhoc?.songhanh === "1"
													? "Đây là môn song hành"
													: ""}
											</td>
										</tr>
									</tbody>
								)
							})}

					{listMH &&
						monhocSearch?.length > 0 &&
						monhocSearch.map((item, index) => {
							return (
								<tbody key={index} className='text-[#000080]'>
									<tr className='hover-btn odd:bg-white even:bg-slate-50'>
										<td width={10}>
											<input
												className='cursor-pointer'
												type='checkbox'
												id='all'
												onClick={() => handleAddMHDK(item)}
											/>
										</td>
										<td className='text-center italic'>
											{item.msmh}
										</td>
										<td className='font-bold'>{item.tenmh}</td>
										<td>{item.sotinchi}</td>
										<td>{item.sotinchi * 616000}</td>
										<td>
											{item.mota === "BB"
												? "Bắt buộc"
												: item.mota === "TC"
												? "Tự chọn"
												: "Tốt nghiệp"}
										</td>
										<td>
											{item.songhanh === "1"
												? "Đây là môn song hành"
												: ""}
										</td>
									</tr>
								</tbody>
							)
						})}
					{/* { !listMH &&
						  monhocSearch &&
						  monhocSearch.map((item, index) => {
								return (
									<tbody key={index} className='text-[#000080]'>
										<tr className='hover-btn odd:bg-white even:bg-slate-50'>
											<td width={10}>
												<input
													className='cursor-pointer'
													type='checkbox'
													id='all'
													onClick={() => handleAddMHDK(item)}
												/>
											</td>
											<td className='text-center italic'>
												{item.msmh}
											</td>
											<td className='font-bold'>{item.tenmh}</td>
											<td>{item.sotinchi}</td>
											<td>{item.sotinchi * 616000}</td>
											<td>
												{item.mota === "BB"
													? "Bắt buộc"
													: item.mota === "TC"
													? "Tự chọn"
													: "Tốt nghiệp"}
											</td>
											<td>
												{item.songhanh === "1"
													? "Đây là môn song hành"
													: ""}
											</td>
										</tr>
									</tbody>
								)
						  })}
					{listMH?.length > 0 &&
						listMH
							?.filter(
								(i) => i.monhoc?.mskhoa === sinhvien?.mssv.slice(2, 3)
							)
							.concat(listMH?.filter((i) => i.monhoc?.mskhoa === "0"))
							.map((item, index) => {
								return (
									<tbody key={index} className='text-[#000080]'>
										<tr className='hover-btn odd:bg-white even:bg-slate-50'>
											<td width={10}>
												<input
													className='cursor-pointer'
													type='checkbox'
													id='all'
													onClick={() => handleAddMHDK(item)}
												/>
											</td>
											<td className='text-center italic'>
												{item.msmh}
											</td>
											<td className='font-bold'>
												{item.monhoc?.tenmh}
											</td>
											<td>{item.monhoc?.sotinchi}</td>
											<td>{item.monhoc?.sotinchi * 616000}</td>
											<td>
												{item.monhoc?.mota === "BB"
													? "Bắt buộc"
													: item.monhoc?.mota === "TC"
													? "Tự chọn"
													: "Tốt nghiệp"}
											</td>
											<td>
												{item.monhoc?.songhanh === "1"
													? "Đây là môn song hành"
													: ""}
											</td>
										</tr>
									</tbody>
								)
							})} */}
				</table>
			</div>
			<div className='flex items-center'>
				<label
					htmlFor='nv'
					className='my-0 mx-1 cursor-pointer hover:underline'
				>
					Thêm môn học nguyện vọng
				</label>
				<input
					onChange={(e) => setMSMHNguyenvong(e.target.value)}
					id='nv'
					type='text'
					className='mx-2 border-[1px] border-solid rounded-md p-1 my-2 focus:outline-none focus:border-sky-500 focus:ring-1 text-pink-600 focus:text-pink-600'
				/>
				<Button
					width={"w-[100px]"}
					label={"Thêm"}
					m={"m-0"}
					bg={"bg-[#2D8ECE]"}
					textColor={"text-white"}
					rounded={"rounded-xl"}
					onClick={handleAddMonhocNguyenvong}
				/>
			</div>
		</div>
	)
}
export default Dangkymonhoc
