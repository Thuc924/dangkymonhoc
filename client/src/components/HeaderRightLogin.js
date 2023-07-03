import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import { linkRoute } from "../ultils/Common/constant"
import CartInfo from "./CartInfo"

function HeaderRightLogin({ list, currentSinhvien, labelChaoban, labelHello }) {
	return (
		<>
			<div className='mr-[8px]'>
				<Link className='cart text-[12px]' to={linkRoute.CARTUNSAVE_SV}>
					<FontAwesomeIcon
						className='cursor-pointer px-[4px] hover:opacity-80'
						icon={faCartShopping}
					></FontAwesomeIcon>
					<span className='number-info'>{list.length}</span>
					<CartInfo list={list} />
				</Link>
			</div>
			<span className='text-red-500 mr-2'>
				{labelChaoban || labelHello} &nbsp;
				<span className='font-bold italic'>
					{currentSinhvien?.tensv} ({currentSinhvien?.mssv})
				</span>
			</span>
		</>
	)
}
export default HeaderRightLogin
