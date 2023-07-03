import { useDispatch, useSelector } from "react-redux"
import InputForm from "../../components/InputForm"
import { linkRoute } from "../../ultils/Common/constant"

import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import * as actions from "../../store/actions"
import { toast } from "react-toastify"

function AddLophoc() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [giangvien, setGiangvien] = useState({
		msgiangvien: "",
		tengiangvien: "",
	})
	const { isLoggedInAdmin } = useSelector((state) => state.auth)
	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
	}, [isLoggedInAdmin])
	const handleCreateGiangvien = () => {
		if (!giangvien.msgiangvien || !giangvien.tengiangvien) return
		dispatch(actions.createGiangvien(giangvien))
		toast.success("Thêm giảng viên thành công...!")
		navigate(linkRoute.GV_ADMIN)
	}
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb'>
						<li className='breadcrumb-item'>Danh sách giảng viên</li>
						<li className='breadcrumb-item'>
							<a href='#'>Thêm giảng viên</a>
						</li>
					</ul>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tile'>
							<h3 className='tile-title'>Tạo mới giảng viên</h3>
							<div className='tile-body'>
								<form className='row'>
									<div className='form-group col-md-4'>
										<label className='control-label'>
											Mã giảng viên
										</label>
										<input
											className='form-control border-[1px]'
											type={"text"}
											onChange={(e) =>
												setGiangvien({
													...giangvien,
													msgiangvien: e.target.value,
												})
											}
										/>
										<label className='control-label'>
											Tên giảng viên
										</label>
										<input
											className='form-control border-[1px]'
											type={"text"}
											onChange={(e) =>
												setGiangvien({
													...giangvien,
													tengiangvien: e.target.value,
												})
											}
										/>
									</div>
								</form>
							</div>
							<button
								className='btn btn-save'
								type='button'
								onClick={handleCreateGiangvien}
							>
								Lưu lại
							</button>
							<button className='btn btn-cancel'>Hủy bỏ</button>
							<Link
								className='btn btn-dangerous'
								to={linkRoute.GV_ADMIN}
							>
								Thoát
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default AddLophoc
