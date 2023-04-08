import { Link } from 'react-router-dom'
import { linkRoute } from '../../ultils/Common/constant'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListMonhoc } from '../../store/actions/monhoc'

function Monhoc() {
   const dispatch = useDispatch()

   const { monhocs, token } = useSelector((state) => state.monhoc)
   useEffect(() => {
      dispatch(getListMonhoc())
   }, [token])
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách môn học</b>
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
                                 to={linkRoute.MONHOC_ADD}
                                 title="Thêm"
                              >
                                 <i className="fas fa-plus" />
                                 Thêm môn học
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
                                 <th width={150}>Mã số môn học</th>
                                 <th width={150}>Tên môn học</th>
                                 <th width={50}>Số tín chỉ</th>
                                 <th width={200}>Khoa</th>
                                 <th width={100}>Tính năng</th>
                              </tr>
                           </thead>
                           {monhocs &&
                              monhocs.length > 0 &&
                              monhocs.map((mh) => {
                                 return (
                                    <tbody key={mh.id}>
                                       <tr>
                                          <td width={10}>
                                             <input
                                                type="checkbox"
                                                name="check1"
                                                defaultValue={1}
                                             />
                                          </td>
                                          <td>{mh.msmh}</td>
                                          <td>{mh.tenmh}</td>
                                          <td>{mh.sotinchi}</td>
                                          <td>{mh.mskhoa}</td>
                                          <td>
                                             <button
                                                className="btn btn-primary btn-sm trash"
                                                type="button"
                                                title="Xóa"
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
