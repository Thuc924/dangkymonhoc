import * as actions from "../../store/actions"
import { linkRoute } from "../../ultils/Common/constant"
import { getListLop } from "../../store/actions/lop"
import InputForm from "../../components/InputForm"

import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { toast } from "react-toastify"

function AddSinhVien() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isLoggedInAdmin } = useSelector((state) => state.auth)

	const { lops } = useSelector((state) => state.lop)
	const [sinhviens, setSinhvien] = useState({
		mssv: "",
		mslop: "",
		tensv: "",
		email: "",
		matkhau: "",
		diachi: "",
		sodienthoai: "",
		ngaysinh: "",
		noisinh: "",
		gioitinh: "",
		avatar: "",
	})
	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
		dispatch(getListLop())
	}, [isLoggedInAdmin])
	const [invalidField, setInvalidField] = useState([])
	const handleAddSinhViens = () => {
		let invalids = validate(sinhviens)
		if (invalids === 0) {
			dispatch(actions.create(sinhviens))
			toast.success("Thêm thành công...!")

			navigate("/admin/sinhviens")
		}
	}
	const validate = (sv) => {
		let invalids = 0
		let fields = Object.entries(sv)
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
		fields.forEach((item) => {
			switch (item[0]) {
				case "matkhau":
					if (item[1].length < 6) {
						setInvalidField((prev) => [
							...prev,
							{
								name: item[0],
								message: "Mật khẩu phải có tối thiểu 6 ký tự...!",
							},
						])
						invalids++
					}
					break
				default:
					break
			}
		})
		return invalids
	}
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb'>
						<li className='breadcrumb-item'>Danh sách sinh viên</li>
						<li className='breadcrumb-item'>
							<a href='#'>Thêm sinh viên</a>
						</li>
					</ul>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tile'>
							<h3 className='tile-title'>Tạo mới sinh viên</h3>
							<div className='tile-body'>
								<form className='row'>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='text'
										labelInput={"Mã số sinh viên"}
										value={sinhviens.mssv}
										setValue={setSinhvien}
										name={"mssv"}
									/>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='text'
										labelInput={"Họ và tên"}
										value={sinhviens.tensv}
										setValue={setSinhvien}
										name={"tensv"}
									/>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='text'
										labelInput={"Địa chỉ email"}
										value={sinhviens.email}
										setValue={setSinhvien}
										name={"email"}
									/>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='password'
										labelInput={"Mật khẩu"}
										value={sinhviens.matkhau}
										setValue={setSinhvien}
										name={"matkhau"}
									/>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='text'
										labelInput={"Địa chỉ thường trú"}
										value={sinhviens.diachi}
										setValue={setSinhvien}
										name={"diachi"}
									/>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='number'
										labelInput={"Số điện thoại"}
										value={sinhviens.sodienthoai}
										setValue={setSinhvien}
										name={"sodienthoai"}
									/>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='date'
										labelInput={"Ngày sinh"}
										value={sinhviens.ngaysinh}
										setValue={setSinhvien}
										name={"ngaysinh"}
									/>
									<InputForm
										setInvalidField={setInvalidField}
										invalidFields={invalidField}
										type='text'
										labelInput={"Nơi sinh"}
										value={sinhviens.noisinh}
										setValue={setSinhvien}
										name={"noisinh"}
									/>
									<div className='form-group col-md-3'>
										<label className='control-label'>Lớp</label>
										<select
											className='form-control'
											id='mslop'
											required
											onChange={(e) =>
												setSinhvien({
													...sinhviens,
													mslop: e.target.value,
												})
											}
										>
											<option value={""}>-- Chọn lớp --</option>
											{lops &&
												lops.length > 0 &&
												lops.map((item, index) => {
													return (
														<option
															key={index}
															value={item.mslop}
														>
															{item.mslop}
														</option>
													)
												})}
										</select>
									</div>
									<div className='form-group col-md-3'>
										<label className='control-label'>Giới tính</label>
										<select
											className='form-control'
											id='gioitinh'
											required
											onChange={(e) =>
												setSinhvien({
													...sinhviens,
													gioitinh:
														e.target.selectedIndex == 1
															? "Nam"
															: "Nữ",
												})
											}
										>
											<option value={""}>
												-- Chọn giới tính --
											</option>
											<option value={"Nam"}>Nam</option>
											<option value={"Nam"}>Nữ</option>
										</select>
									</div>
									<div className='form-group col-md-12'>
										<label className='control-label'>
											Ảnh 3x4 nhân viên
										</label>
										&nbsp;
										<input
											type='file'
											name='ImageUpload'
											onChange={(e) => {
												const { files } = e.target
												setSinhvien({
													...sinhviens,
													avatar: files[0].name,
												})
											}}
										/>
									</div>
								</form>
							</div>
							<button
								className='btn btn-save'
								type='button'
								onClick={handleAddSinhViens}
							>
								Lưu lại
							</button>
							<button
								className='btn btn-cancel'
								onClick={() =>
									setSinhvien({
										mssv: "",
										tensv: "",
										email: "",
										matkhau: "",
										diachi: "",
										sodienthoai: "",
										ngaysinh: "",
										noisinh: "",
										gioitinh: "",
										avatar: "",
									})
								}
							>
								Hủy bỏ
							</button>
							<Link
								className='btn btn-dangerous'
								to={linkRoute.SINHVIEN_AD}
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

export default AddSinhVien
