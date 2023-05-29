import { NavLink } from "react-router-dom"

import "../assets/css/main.css"

function NavChild({ label, to }) {
	return (
		<nav className='nav-bar'>
			<NavLink
				to={to}
				className='mr-4 text-[10px] text-[#355170] hover:text-[#993333] hover:underline'
			>
				{label}
			</NavLink>
		</nav>
	)
}
export default NavChild
