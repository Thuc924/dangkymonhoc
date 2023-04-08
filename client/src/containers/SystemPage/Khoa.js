import { Link } from 'react-router-dom'
import { linkRoute } from '../../ultils/Common/constant'
import { useDispatch, useSelector } from 'react-redux'
import { deleteKhoaByMskhoa, getListKhoa } from '../../store/actions/khoa'
import { useEffect } from 'react'

function Monhoc() {
   const dispatch = useDispatch()
   const { khoas, token, msg } = useSelector((state) => state.khoa)
   useEffect(() => {
      dispatch(getListKhoa())
   }, [token, msg])
   const handleRemoveKhoa = (khoa) => {
      console.log(khoa)
      dispatch(deleteKhoaByMskhoa(khoa.mskhoa))
   }
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách khoa</b>
                     </a>
                  </li>
               </ul>
               <div id="clock" />
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="tile">
                     <div className="tile-body">
                        <div className="row element-button">
                           <div className="col-sm-2">
                              <Link
                                 className="btn btn-add btn-sm"
                                 to={linkRoute.KHOA_ADD}
                                 title="Thêm"
                              >
                                 <i className="fas fa-plus" />
                                 Thêm khoa
                              </Link>
                           </div>

                           <div className="col-sm-2">
                              <a
                                 className="btn btn-delete btn-sm"
                                 type="button"
                                 title="Xóa"
                              >
                                 <i className="fas fa-trash-alt" /> Xóa tất cả{' '}
                              </a>
                           </div>
                        </div>
                        <table
                           className="table table-hover table-bordered js-copytextarea"
                           cellPadding={0}
                           cellSpacing={0}
                           border={0}
                           id="sampleTable"
                        >
                           <thead>
                              <tr>
                                 <th width={10}>
                                    <input type="checkbox" id="all" />
                                 </th>
                                 <th width={150}>Mã số khoa</th>
                                 <th width={150}>Tên khoa</th>
                                 <th width={100}>Tính năng</th>
                              </tr>
                           </thead>
                           {khoas &&
                              khoas.length > 0 &&
                              khoas.map((khoa) => {
                                 return (
                                    <tbody key={khoa.id}>
                                       <tr>
                                          <td width={10}>
                                             <input
                                                type="checkbox"
                                                name="check1"
                                                defaultValue={1}
                                             />
                                          </td>
                                          <td>{khoa.mskhoa}</td>
                                          <td>{khoa.tenkhoa}</td>
                                          <td>
                                             <button
                                                className="btn btn-primary btn-sm trash"
                                                type="button"
                                                title="Xóa"
                                                onClick={() =>
                                                   handleRemoveKhoa(khoa)
                                                }
                                             >
                                                <i className="fas fa-trash-alt" />
                                             </button>
                                             <button
                                                className="btn btn-primary btn-sm edit"
                                                type="button"
                                                title="Sửa"
                                                id="show-emp"
                                                data-toggle="modal"
                                                data-target="#ModalUP"
                                             >
                                                <i className="fas fa-edit" />
                                             </button>
                                          </td>
                                       </tr>
                                    </tbody>
                                 )
                              })}
                        </table>
                     </div>
                  </div>
                  {/* <Pagination number={params.get('page')} /> */}
               </div>
            </div>
         </main>
      </div>
   )
}

export default Monhoc
