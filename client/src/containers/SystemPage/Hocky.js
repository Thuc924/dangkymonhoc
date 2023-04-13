import { Link, useNavigate } from 'react-router-dom'
import { linkRoute } from '../../ultils/Common/constant'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { deleteHockyByMShocky, getListHocky } from '../../store/actions'

function Hocky() {
   const navigate = useNavigate()

   const dispatch = useDispatch()
   const { hockys, token, msg } = useSelector((state) => state.hocky)
   const { isLoggedIn } = useSelector((state) => state.auth)

   useEffect(() => {
      isLoggedIn === false && navigate('/login')

      dispatch(getListHocky())
   }, [isLoggedIn, token, msg])

   const handleRemoveHocky = (hk) => {
      dispatch(deleteHockyByMShocky(hk.mshocky))
      toast.success('Xoá thành công...!')
   }
   console.log(hockys)
   return (
      <div className="app sidebar-mini rtl">
         <main className="app-content">
            <div className="app-title">
               <ul className="app-breadcrumb breadcrumb side">
                  <li className="breadcrumb-item active">
                     <a href="#">
                        <b>Danh sách học kỳ</b>
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
                              <Link className="btn btn-add btn-sm" to={linkRoute.HOCKY_ADD} title="Thêm">
                                 <i className="fas fa-plus" />
                                 Thêm học kỳ
                              </Link>
                           </div>

                           <div className="col-sm-2">
                              <a className="btn btn-delete btn-sm" type="button" title="Xóa">
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
                                 <th width={150}>Mã số học kỳ</th>
                                 <th width={150}>Tên học kỳ</th>
                                 <th width={100}>Tính năng</th>
                              </tr>
                           </thead>
                           {hockys &&
                              hockys.length > 0 &&
                              hockys.map((hk) => {
                                 return (
                                    <tbody key={hk.id}>
                                       <tr>
                                          <td width={10}>
                                             <input type="checkbox" name="check1" defaultValue={1} />
                                          </td>
                                          <td>{hk.mshocky}</td>
                                          <td>{hk.tenhocky}</td>
                                          <td>
                                             <button
                                                className="btn btn-primary btn-sm trash"
                                                type="button"
                                                title="Xóa"
                                                onClick={() => handleRemoveHocky(hk)}
                                             >
                                                <i className="fas fa-trash-alt" />
                                             </button>
                                             <button className="btn btn-primary btn-sm edit" type="button" title="Sửa">
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

export default Hocky
