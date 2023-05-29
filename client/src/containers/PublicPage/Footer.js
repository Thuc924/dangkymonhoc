import { Link } from "react-router-dom"
import { linkRoute } from "../../ultils/Common/constant"

function Footer() {
	return (
		<div className='w-full'>
			<div className='flex justify-between text-[10px] text-[#800000] border-[1px] p-[8px]'>
				<span>
					Copyright ©2009 Trường Đại Học Công Nghệ Sài Gòn. Quản lý bởi
					Phòng Đào Tạo
				</span>
				<Link className='text-[10px] text-[#800000]' to={linkRoute.HOME_SV}>
					Trang chủ
				</Link>
			</div>
			<div className='flex justify-between text-[10px] text-[#800000] p-[8px]'>
				<span> Thiết kế bởi cty Ngô Hồng Thức</span>
				<div className='flex'>
					<span className='mr-[12px]'>Đầu trang</span>
					<span>About</span>
				</div>
			</div>
		</div>
	)
}
export default Footer
