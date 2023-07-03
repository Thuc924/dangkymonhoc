import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { linkRoute } from "../ultils/Common/constant"
import Button from "./Button"

function Cart() {
	const navigate = useNavigate()

	const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)

	useEffect(() => {
		!isLoggedInSinhvien && navigate("/")
	}, [isLoggedInSinhvien])

	return (
		<div>
			<div className='text-white my-2 flex justify-end'>
				<NavLink
					to={linkRoute.CARTSAVED_SV}
					style={({ isActive, isPending }) => {
						return {
							fontWeight: isActive ? "bold" : "",
							color: isActive ? "#2d8ece" : "",
						}
					}}
				>
					<Button
						width={"w-[100px]"}
						bg={"bg-gradient-to-r from-sky-500 to-indigo-500"}
						label={"Đã lưu"}
						rounded={"rounded-md"}
						m={"m-1"}
						textColor={"text-white"}
					/>
				</NavLink>
				<NavLink
					to={linkRoute.CARTUNSAVE_SV}
					style={({ isActive, isPending }) => {
						return {
							fontWeight: isActive ? "bold" : "",
							color: isActive ? "#2d8ece" : "",
						}
					}}
				>
					<Button
						width={"w-[100px]"}
						bg={"bg-gradient-to-r from-sky-500 to-indigo-500"}
						label={"Chưa lưu"}
						rounded={"rounded-md"}
						m={"m-1"}
						textColor={"text-white"}
					/>
				</NavLink>
			</div>
			{/* {save ? (
				<CartSave
					danhsachsvdk={danhsachsvdk}
					setShowDetail={setShowDetail}
					showDetail={showDetail}
					detailMH={detailMH}
					showDetailMonhoc={showDetailMonhoc}
				/>
			) : (
				<CartUnSaved
					dsMHDK={dsMHDK}
					setShowDetail={setShowDetail}
					showDetail={showDetail}
					detailMH={detailMH}
					showDetailMonhoc={showDetailMonhoc}
					handleRemoveDSDKMH={handleRemoveDSDKMH}
					handleAddMHVaoDSDKMH={handleAddMHVaoDSDKMH}
				/>
			)} */}
		</div>
	)
}
export default Cart
