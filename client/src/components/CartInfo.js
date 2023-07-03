import { sumHocPhi } from "../ultils/func"

function CartInfo({ list }) {
	console.log(list)
	return (
		<div className='model-cart p-2 rounded-sm'>
			<h4 className='text-center uppercase'>Thông tin môn học đã thêm</h4>
			{list && list.length > 0 ? (
				list.map((item, index) => {
					return (
						<div key={index} className='my-[4px] border-b-2'>
							<div className='flex justify-between'>
								<ul className='p-2 m-0'>
									<li className='italic text-[#888] underline'>
										{item.msmh}
									</li>
									<li className='font-semibold'>{item.tenmh}</li>
								</ul>
								<ul className='p-2 m-0 w-[120px]'>
									<li>
										<span className='italic underline'>
											{item.sotinchi}
										</span>{" "}
										tín chỉ
									</li>
									<li>
										Giá: &nbsp;
										<span className='italic underline'>
											{item.hocphi}
										</span>{" "}
										đ
									</li>
								</ul>
							</div>
						</div>
					)
				})
			) : (
				<div className='italic text-center underline'>
					Chưa thêm môn học
				</div>
			)}

			{list && list.length > 0 && (
				<div className='text-right p-2'>
					Tổng tiền: {sumHocPhi(list)} đ{" "}
				</div>
			)}
		</div>
	)
}
export default CartInfo
