import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { linkRoute } from "../../ultils/Common/constant"
function ThongTinSinhVien() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { isLoggedInSinhvien } = useSelector((state) => state.auth)
	const { currentSinhvien } = useSelector((state) => state.sinhvien)
	useEffect(() => {
		!isLoggedInSinhvien && navigate("/")
	}, [isLoggedInSinhvien])
	return (
		<main className='m-1 min-h-[500px] bg-[#dbdbdb]'>
			<h4 className='text-center font-bold uppercase pt-4'>
				Thông tin của sinh viên
			</h4>
			<div className='p-4 flex w-full justify-center'>
				<div className='w-[30%] bg-[#888] flex flex-col items-center p-2'>
					<img
						className='w-[100px] h-[150px] rounded-sm'
						src={
							currentSinhvien?.avatar &&
							require(`../../assets/images/${currentSinhvien?.avatar}`)
						}
						alt='Avatar Sinh vien'
					/>
					<p className='m-0 p-1 uppercase font-bold text-[16px]'>
						{currentSinhvien?.tensv}
					</p>
					<p className='m-0 p-1 text-[12px] italic'>
						{currentSinhvien?.mssv}
					</p>
				</div>
				<div className='bg-[#999] p-2'>
					<table border={0}>
						<thead>
							<tr>
								<td width={200} className='font-bold'>
									Nơi sinh
								</td>
								<td width={300} className='italic'>
									{currentSinhvien?.noisinh}
								</td>
							</tr>
							<tr>
								<td width={200} className='font-bold'>
									Địa chỉ hiện tại
								</td>
								<td width={300} className='italic'>
									{currentSinhvien?.diachi}
								</td>
							</tr>
							<tr>
								<td width={200} className='font-bold'>
									Lớp
								</td>
								<td width={300} className='italic'>
									{currentSinhvien?.mslop}
								</td>
							</tr>
							<tr>
								<td width={200} className='font-bold'>
									Ngày sinh
								</td>
								<td width={300} className='italic'>
									{currentSinhvien?.ngaysinh}
								</td>
							</tr>
							<tr>
								<td width={200} className='font-bold'>
									Số điện thoại
								</td>
								<td width={300} className='italic'>
									{currentSinhvien?.sodienthoai}
								</td>
							</tr>
							<tr>
								<td width={200} className='font-bold'>
									Email
								</td>
								<td width={300} className='italic'>
									{currentSinhvien?.email}
								</td>
							</tr>
						</thead>
					</table>
				</div>
			</div>
			<div className='flex justify-center'>
				<Link
					to={linkRoute.CAPNHAT_SV}
					className='p-2 border-[1px] rounded-sm text-white border-black border-solid mx-[4px] bg-[#80BFCD] hover:underline'
				>
					Sửa thông tin cá nhân
				</Link>
				<Link
					to={linkRoute.SUA_MK}
					className='p-2 border-[1px] rounded-sm text-white border-black border-solid mx-[1px] bg-[#FF0000] hover:underline'
				>
					Cập nhật mật khẩu
				</Link>
			</div>
		</main>
	)
}
export default ThongTinSinhVien
