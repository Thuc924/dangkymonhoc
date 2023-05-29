import InputForm from "../../components/InputForm"
import { linkRoute } from "../../ultils/Common/constant"
import * as actions from "../../store/actions"

import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

function AddKhoa() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [khoa, setKhoa] = useState({
		mskhoa: "",
		tenkhoa: "",
	})
	const [invalidField, setInvalidField] = useState([])

	const { isLoggedInAdmin } = useSelector((state) => state.auth)

	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
	}, [isLoggedInAdmin])

	const handleCreateKhoa = () => {
		let invalids = validate(khoa)
		if (invalids === 0) {
			dispatch(actions.createKhoa(khoa))
			toast.success("Thêm thành công...!")
			navigate("/admin/khoas")
		}
	}
	const validate = (khoa) => {
		let invalids = 0
		let fields = Object.entries(khoa)
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
						<li className='breadcrumb-item'>Danh sách khoa</li>
						<li className='breadcrumb-item'>
							<a href='#'>Thêm khoa</a>
						</li>
					</ul>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tile'>
							<h3 className='tile-title'>Tạo mới khoa</h3>
							<div className='tile-body'>
								<form className='row'>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='text'
										labelInput={"Mã khoa"}
										name={"mskhoa"}
										value={khoa.mskhoa}
										setValue={setKhoa}
									/>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='text'
										labelInput={"Tên khoa"}
										name={"tenkhoa"}
										value={khoa.tenkhoa}
										setValue={setKhoa}
									/>
								</form>
							</div>
							<button
								className='btn btn-save'
								type='button'
								onClick={handleCreateKhoa}
							>
								Lưu lại
							</button>
							<button className='btn btn-cancel'>Hủy bỏ</button>
							<Link
								className='btn btn-dangerous'
								to={linkRoute.KHOA_ADMIN}
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

export default AddKhoa
