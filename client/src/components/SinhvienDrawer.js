import { linkRoute } from "../ultils/Common/constant"
import "../assets/css/main.css"
import * as actions from "../store/actions"

import {
	faCartShopping,
	faGear,
	faRightFromBracket,
	faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

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
					<li className='draw-sv-item hover:underline cursor-pointer my-2 text-[#355170]'>
						<NavLink
							style={({ isActive, isPending }) => {
								return {
									fontWeight: isActive ? "bold" : "",
									color: isActive ? "#2d8ece" : "",
								}
							}}
							className='text-[12px] text-[#355170] hover:text-[#2d8ece]'
							to={linkRoute.THONGTIN_SV}
						>
							<FontAwesomeIcon className='px-2' icon={faUser} />
							{labelThongtintaikhoan || labelInfoAccount}
						</NavLink>
					</li>

					<li className='draw-sv-item cursor-pointer my-2 text-[#355170] hover:underline'>
						<NavLink
							style={({ isActive, isPending }) => {
								return {
									fontWeight: isActive ? "bold" : "",
									color: isActive ? "#2d8ece" : "",
								}
							}}
							className='text-[12px] text-[#355170] hover:text-[#2d8ece]'
							to={linkRoute.CARTSAVED_SV}
						>
							<FontAwesomeIcon className='px-2' icon={faCartShopping} />
							{labelXemmonhocdangky || labelMHDK}
							<span className='number'>{danhsachsvdk?.length}</span>
						</NavLink>
					</li>
					<li className='cursor-pointer my-2 text-[#355170]'>
						<button
							onClick={() => dispatch(actions.logoutSinhvien())}
							className='m-0 hover:underline hover:text-[#2d8ece]'
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
