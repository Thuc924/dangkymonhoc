import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function HeaderRight({ labelLogin, labelDangnhap, labelHello, labelXinchao }) {
	return (
		<ul className='flex items-end m-0'>
			<li className='px-2 text-[#FF0000]'>{labelHello || labelXinchao}</li>
			<li className='hover:text-[#993333] hover:underline cursor-pointer px-2 font-bold'>
				<Link className='text-[#FF0000]' to='/login'>
					<FontAwesomeIcon icon={faRightFromBracket} className='pr-1' />{" "}
					{labelLogin || labelDangnhap}
				</Link>
			</li>
		</ul>
	)
}
export default HeaderRight
