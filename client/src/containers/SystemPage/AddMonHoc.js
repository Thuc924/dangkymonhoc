import InputForm from "../../components/InputForm"
import { linkRoute } from "../../ultils/Common/constant"
import * as actions from "../../store/actions"
import { Link, useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

function AddMonHoc() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [monhoc, setMonHoc] = useState({
		msmh: "",
		tenmh: "",
		sotinchi: "",
		mskhoa: "",
		mota: "",
		songhanh: "",
		sotiet: "",
	})
	const { khoas } = useSelector((state) => state.khoa)
	const { monhocs } = useSelector((state) => state.monhoc)
	const { hockys } = useSelector((state) => state.hocky)
	const { isLoggedInAdmin } = useSelector((state) => state.auth)

	useEffect(() => {
		!isLoggedInAdmin && navigate(linkRoute.LOGIN_AD)
		dispatch(actions.getListKhoa())
		dispatch(actions.getListMonhoc())
		dispatch(actions.getListHocky())
	}, [isLoggedInAdmin])
	const handleCreateMonhoc = () => {
		const kq = monhocs.find((i) => i.msmh === monhoc.msmh)
		if (!kq) {
			dispatch(actions.createMonhoc(monhoc))
			toast.success("Thêm thành công...!")
			navigate("/admin/monhocs")
		} else toast.error("Đã tồn tại môn học...!")
	}
	return (
		<div className='app sidebar-mini rtl'>
			<main className='app-content'>
				<div className='app-title'>
					<ul className='app-breadcrumb breadcrumb'>
						<li className='breadcrumb-item'>Danh sách môn học</li>
						<li className='breadcrumb-item'>
							<a href='#'>Thêm môn học</a>
						</li>
					</ul>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='tile'>
							<h3 className='tile-title'>Tạo mới môn học</h3>
							<div className='tile-body'>
								<form className='row'>
									<InputForm
										type='text'
										labelInput={"Mã số môn học"}
										name={"msmh"}
										value={monhoc.msmh}
										setValue={setMonHoc}
									/>
									<InputForm
										type='text'
										labelInput={"Tên môn học"}
										name={"tenmh"}
										value={monhoc.tenmh}
										setValue={setMonHoc}
									/>
									<InputForm
										type='number'
										labelInput={"Số tín chỉ"}
										name={"sotinchi"}
										value={monhoc.sotinchi}
										setValue={setMonHoc}
									/>
									<InputForm
										type='number'
										labelInput={"Số tiết"}
										name={"sotiet"}
										value={monhoc.sotiet}
										setValue={setMonHoc}
									/>
									<div className='form-group col-md-3'>
										<label className='control-label'>Mô tả</label>
										<select
											className='form-control'
											id='mskhoa'
											required
											onChange={(e) =>
												setMonHoc({
													...monhoc,
													mota: e.target.value,
												})
											}
										>
											<option value=''>-- Chọn mô tả --</option>

											<option value='BB'>Bắc buộc</option>
											<option value='TC'>Tự chọn</option>
											<option value='TN'>Tốt nghiệp</option>
										</select>
									</div>
									<div className='form-group col-md-3'>
										<label className='control-label'>Song hành</label>
										<select
											className='form-control'
											id='mskhoa'
											required
											onChange={(e) =>
												setMonHoc({
													...monhoc,
													songhanh: e.target.value,
												})
											}
										>
											<option value=''>-- Chọn --</option>
											<option value='0'>Không</option>
											<option value='1'>Có</option>
										</select>
									</div>
									<div className='form-group col-md-3'>
										<label className='control-label'>Mã khoa</label>
										<select
											className='form-control'
											id='mskhoa'
											required
											onChange={(e) =>
												setMonHoc({
													...monhoc,
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
															{item.tenkhoa}
														</option>
													)
												})}
										</select>
									</div>
									<div className='form-group col-md-3'>
										<label className='control-label'>Học kỳ</label>
										<select
											className='form-control'
											id='mskhoa'
											required
											onChange={(e) =>
												setMonHoc({
													...monhoc,
													mshocky: e.target.value,
												})
											}
										>
											<option value={""}>-- Chọn kỳ --</option>
											{hockys &&
												hockys.length > 0 &&
												hockys.map((item, index) => {
													return (
														<option
															key={index}
															value={item.mshocky}
														>
															{item.tenhocky}
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
								onClick={handleCreateMonhoc}
							>
								Lưu lại
							</button>
							<button className='btn btn-cancel'>Hủy bỏ</button>
							<Link
								className='btn btn-dangerous'
								to={linkRoute.MONHOC_ADMIN}
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

export default AddMonHoc
