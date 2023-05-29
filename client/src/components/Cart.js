import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
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
				<Link to={linkRoute.CARTSAVED_SV}>
					<Button
						width={"w-[100px]"}
						bg={"bg-[#FF0000]"}
						label={"Đã lưu"}
						rounded={"rounded-md"}
						m={"m-1"}
						textColor={"text-white"}
					/>
				</Link>
				<Link to={linkRoute.CARTUNSAVE_SV}>
					<Button
						width={"w-[100px]"}
						bg={"bg-[#80BFCD]"}
						label={"Chưa lưu"}
						rounded={"rounded-md"}
						m={"m-1"}
						textColor={"text-white"}
					/>
				</Link>
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
