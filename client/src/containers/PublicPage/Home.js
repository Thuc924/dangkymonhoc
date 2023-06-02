import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Gioithieu } from "../../components"
import { linkRoute } from "../../ultils/Common/constant"
import { languageContext } from "../layouts/DefaultLayout"
import { Thongbao } from "../PublicPage"
import * as actions from "../../store/actions"

function Home() {
	const language = useContext(languageContext)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
	useEffect(() => {
		dispatch(actions.getListMonhoctochuc())
		dispatch(actions.getListMonhoc())
		dispatch(actions.getAllDSNguyenVong())
		!isLoggedInSinhvien && navigate(linkRoute.HOME_SV)
	}, [isLoggedInSinhvien])
	return (
		<div className='min-h-[550px]'>
			<div>
				<div className='rounded h-[30px] bg-[#2D8ECE] flex items-center'>
					{language === "VI" ? (
						<span className='p-2 uppercase text-white font-bold text-[12px]'>
							Thông báo
						</span>
					) : (
						<span className='p-2 uppercase text-white font-bold text-[12px]'>
							Notification
						</span>
					)}
				</div>
				<div>
					<Gioithieu />
					<Thongbao />
				</div>
			</div>
		</div>
	)
}

export default Home
