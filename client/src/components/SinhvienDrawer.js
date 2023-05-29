import {
	faCartShopping,
	faGear,
	faRightFromBracket,
	faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { logoutSinhvien } from "../store/actions"
import { linkRoute } from "../ultils/Common/constant"

import "../assets/css/main.css"

function SinhvienDrawer({
	danhsachsvdk,
	currentSinhvien,
	labelDangxuat,
	labelThongtintaikhoan,
	labelCapnhattaikhoan,
	labelXemmonhocdangky,
	labelInfoAccount,
	labelUpdateAccount,
	labelMHDK,
	labelLogout,
}) {
	const dispatch = useDispatch()
	return (
		<div className='sinhvien'>
			<img
				className='avatar-sinhvien'
				src={
					currentSinhvien?.avatar
						? require(`../assets/images/${currentSinhvien?.avatar}`)
						: ""
				}
			/>
			<div className='info-sinhvien text-[12px] z-10'>
				<ul>
					<li className='hover:font-bold cursor-pointer my-2'>
						<NavLink
							style={({ isActive, isPending }) => {
								return {
									fontWeight: isActive ? "bold" : "",
									color: isPending ? "red" : "black",
								}
							}}
							className='text-[12px]'
							to={linkRoute.THONGTIN_SV}
						>
							<FontAwesomeIcon className='px-2' icon={faUser} />
							{labelThongtintaikhoan || labelInfoAccount}
						</NavLink>
					</li>
					<li className='hover:font-bold cursor-pointer my-2'>
						<NavLink
							style={({ isActive, isPending }) => {
								return {
									fontWeight: isActive ? "bold" : "",
									color: isPending ? "red" : "black",
								}
							}}
							className='text-[12px]'
							to={linkRoute.CAPNHAT_SV}
						>
							<FontAwesomeIcon className='px-2' icon={faGear} />
							{labelCapnhattaikhoan || labelUpdateAccount}
						</NavLink>
					</li>
					<li className='hover:font-bold cursor-pointer my-2'>
						<NavLink
							style={({ isActive, isPending }) => {
								return {
									fontWeight: isActive ? "bold" : "",
									color: isPending ? "red" : "black",
								}
							}}
							className='text-[12px]'
							to={linkRoute.CARTSAVED_SV}
						>
							<FontAwesomeIcon className='px-2' icon={faCartShopping} />
							{labelXemmonhocdangky || labelMHDK}
							<span className='number'>{danhsachsvdk?.length}</span>
						</NavLink>
					</li>
					<li className='hover:font-bold cursor-pointer my-2'>
						<button
							onClick={() => dispatch(logoutSinhvien())}
							className='m-0'
						>
							<FontAwesomeIcon
								className='px-2'
								icon={faRightFromBracket}
							/>
							{labelDangxuat || labelLogout}
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
export default SinhvienDrawer
