import { useContext } from "react"
import { useSelector } from "react-redux"
import { NavChild } from "../../components"
import { languageContext } from "../layouts/DefaultLayout"

function Nav() {
	const language = useContext(languageContext)

	const { isLoggedInSinhvien } = useSelector((state) => state.auth)
	return (
		<>
			{language === "VI" ? (
				<div className='h-full p-2 bg-[#dbdbdb] border-t-8 border-[#fe8606] rounded-t font-bold h-[42px] flex items-center uppercase'>
					<NavChild label={"TRANG CHỦ"} to='/' />
					{!isLoggedInSinhvien ? (
						<>
							<NavChild label={"GÓP Ý KIẾN"} to='/gopykien' />
							<NavChild label={"LIÊN HỆ"} to='/contact' />
						</>
					) : (
						<>
							<NavChild label={"ĐĂNG KÝ MÔN HỌC"} to='/dangkymonhoc' />
							<NavChild label={"XEM HỌC PHÍ"} to='/hocphi' />
							<NavChild label={"XEM ĐIỂM"} to='/diem' />
						</>
					)}
				</div>
			) : (
				<div className='h-full p-2 bg-[#dbdbdb] border-t-8 border-[#fe8606] rounded-t font-bold h-[42px] flex items-center uppercase'>
					<NavChild label={"HOME"} to='/' />
					{!isLoggedInSinhvien ? (
						<>
							<NavChild label={"STUDENT COMMENTS"} to='/' />
							<NavChild label={"ABOUT OUR UNIVERSITY"} to='/gioithieu' />
						</>
					) : (
						<>
							<NavChild
								label={"COURSE REGISTRATION"}
								to='/dangkymonhoc'
							/>
							<NavChild label={"SEE LEARNING FEES"} to='/diem' />

							<NavChild label={"TEST SCORE"} to='/hocphi' />
						</>
					)}
				</div>
			)}
		</>
	)
}

export default Nav
