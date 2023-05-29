import "../../assets/css/main.css"

import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getListMonhocByMSSV, getSinhvienByMSSV } from "../../store/actions"
import { useContext, useEffect, useState } from "react"
import { HeadeRright, HeaderRightLogin, SinhvienDrawer } from "../../components"
import { languageContext } from "../layouts/DefaultLayout"
import * as actions from "../../store/actions"
function Header() {
	const language = useContext(languageContext)
	const dispatch = useDispatch()

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

	const { danhsachsvdk } = useSelector((state) => state.dangkymonhoc)

	const { currentSinhvien, token } = useSelector((state) => state.sinhvien)

	const listMH = JSON.parse(localStorage.getItem("mhdk")) || []

	const [list, setList] = useState([])
	useEffect(() => {
		setTimeout(() => {
			dispatch(actions.getSinhvienByMSSV())
		}, 100)

		let data = listMH.filter((i) => i.mssv === sinhvien.mssv)
		setList(data)
	}, [isLoggedInSinhvien, listMH?.length, list?.length, token])

	return (
		<div className='mb-1'>
			{language === "VI" ? (
				<div className='flex justify-between'>
					<Link to='/'>
						<img
							className='w-[150px] h-[100px]'
							src={require("../../assets/images/Logo_STU.png")}
						/>
					</Link>
					{!isLoggedInSinhvien ? (
						<HeadeRright
							labelDangnhap={"Đăng nhập"}
							labelXinchao={"Xin chào"}
						/>
					) : (
						<div className='flex items-end pr-2'>
							<HeaderRightLogin
								list={list.length}
								currentSinhvien={currentSinhvien}
								labelChaoban={"Chào bạn"}
							/>
							<SinhvienDrawer
								currentSinhvien={currentSinhvien}
								danhsachsvdk={danhsachsvdk}
								labelThongtintaikhoan={"Thông tin tài khoản"}
								labelCapnhattaikhoan={"Cập nhật tài khoản"}
								labelXemmonhocdangky={"Xem môn học đã đăng ký"}
								labelDangxuat={"Đăng xuất"}
							/>
						</div>
					)}
				</div>
			) : (
				<div className='flex justify-between'>
					<Link to='/'>
						<img
							className='w-[150px] h-[100px]'
							src={require("../../assets/images/Logo_STU.png")}
						/>
					</Link>
					{!isLoggedInSinhvien ? (
						<HeadeRright labelLogin={"Login"} labelHello={"Hello"} />
					) : (
						<div className='flex items-end px-2'>
							<HeaderRightLogin
								list={list}
								currentSinhvien={sinhvien}
								labelHello={"Hello"}
							/>
							<SinhvienDrawer
								currentSinhvien={sinhvien}
								danhsachsvdk={danhsachsvdk}
								labelInfoAccount={"Info Account"}
								labelUpdateAccount={"Update Account"}
								labelMHDK={"View registered subjects"}
								labelLogout={"Logout"}
							/>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Header
