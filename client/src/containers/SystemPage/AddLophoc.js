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
	const [lop, setLop] = useState({
		mslop: "",
		mskhoa: "",
	})
	const { khoas } = useSelector((state) => state.khoa)
	const { isLoggedInAdmin } = useSelector((state) => state.auth)

	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
		dispatch(actions.getListKhoa())
	}, [isLoggedInAdmin])
	const [invalidField, setInvalidField] = useState([])
	const handleCreateLophoc = () => {
		let invalids = validate(lop)
		if (invalids === 0) {
			dispatch(actions.createLop(lop))
			toast.success("Thêm thành công...!")
			navigate("/admin/lops")
		}
	}
	const validate = (lop) => {
		let invalids = 0
		let fields = Object.entries(lop)
		fields.forEach((item) => {
			if (item[1] === "") {
				setInvalidField((prev) => [
					...prev,
					{
						name: item[0],
						message: `Bạn không được bỏ trống trường ${item[0]} này...!`,
					},
				])
				invalids++
			}
		})
		return invalids
	}
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb'>
						<li className='breadcrumb-item'>Danh sách lớp</li>
						<li className='breadcrumb-item'>
							<a href='#'>Thêm lớp</a>
						</li>
					</ul>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tile'>
							<h3 className='tile-title'>Tạo mới lớp</h3>
							<div className='tile-body'>
								<form className='row'>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='text'
										labelInput={"Mã lớp"}
										name={"mslop"}
										value={lop.mslop}
										setValue={setLop}
									/>
									<div className='form-group col-md-3'>
										<label className='control-label'>Mã khoa</label>
										<select
											className='form-control'
											id='mskhoa'
											required
											onChange={(e) =>
												setLop({
													...lop,
													mskhoa: e.target.value,
												})
											}
										>
											<option value={""}>-- Chọn khoa --</option>
											{khoas &&
												khoas.length > 0 &&
												khoas.map((item, index) => {
													return (
														<option
															key={index}
															value={item.mskhoa}
														>
															{item.mskhoa}
														</option>
													)
												})}
										</select>
									</div>
								</form>
							</div>
							<button
								className='btn btn-save'
								type='button'
								onClick={handleCreateLophoc}
							>
								Lưu lại
							</button>
							<button className='btn btn-cancel'>Hủy bỏ</button>
							<Link
								className='btn btn-dangerous'
								to={linkRoute.LOP_ADMIN}
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
