import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { jsPDF } from 'jspdf'
import $ from 'jquery'
import { linkRoute } from '../../ultils/Common/constant'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { to_vietnamese } from '../../ultils/func'

function Hoadon() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { isLoggedInSinhvien, sinhvien } = useSelector((state) => state.auth)
   const { dshocphi } = useSelector((state) => state.hocphi)
   const { khoas } = useSelector((state) => state.khoa)
   const [chitiet, setChiTiet] = useState()
   useEffect(() => {
      dispatch(actions.getListHocPhi())
      dispatch(actions.getListKhoa())
      !isLoggedInSinhvien && navigate(linkRoute.HOME_SV)
   }, [isLoggedInSinhvien])
   //    function readHTML() {
   //       // get the HTML source file path
   //       var path = document.getElementById('fileUpload').files[0]
   //       var contents
   //       $('#error-message').html('')
   //       $('#fileUpload').css('border', '#a6a6a6 1px solid')
   //       if ($(path).length != 0) {
   //          var r = new FileReader()
   //          r.onload = function (e) {
   //             // read HTML file content
   //             contents = e.target.result
   //             // show JavaScript PDF preview
   //             $('.preview').show()
   //             $('#temp-target').html(contents)

   //             $('.btn-preview').hide()
   //             $('.btn-generate').show()
   //          }
   //          r.readAsText(path)
   //       } else {
   //          $('#error-message').html('required.').show()
   //          $('#fileUpload').css('border', '#d96557 1px solid')
   //       }
   //    }
   const handleConvertPDF = async () => {
      const elementHTML = document.getElementById('pdf')
      console.log(elementHTML)
      var doc = new jsPDF('l', 'mm', [1200, 1210])

      //   var pdfjs = document.querySelector('#temp-target')
      doc.addImage('../../assets/images/Logo_STU.jpg', 'JPEG', 15, 40, 180, 180)
      // Convert HTML to PDF in JavaScript
      doc.html(elementHTML, {
         callback: function (doc) {
            doc.save('output.pdf')
         },
         x: 10,
         y: 10,
      })
   }
   return (
      <main>
         {!chitiet && (
            <>
               <h3 className="uppercase py-2 my-4">Danh sách hóa đơn Online</h3>
               <table>
                  <thead className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
                     <th>STT</th>
                     <th>Mã sinh viên</th>
                     <th>Tên sinh viên</th>
                     <th>Lớp</th>
                     <th>Ngày sinh</th>
                     <th>Số hóa đơn</th>
                     <th>Số tiền</th>
                     <th>Ngày đóng</th>
                     <th>Ngày lập hóa đơn</th>
                     <th>Action</th>
                  </thead>
                  <tbody className="text-[#000080]">
                     {dshocphi
                        .filter((i) => i.mssv === sinhvien?.mssv)
                        .map((item, index) => {
                           return (
                              <tr key={index}>
                                 <td>1</td>
                                 <td>DH52300123</td>
                                 <td>{item.HocPhi_SV?.tensv}</td>
                                 <td>{item.HocPhi_SV?.mslop}</td>
                                 <td>{item.HocPhi_SV?.ngaysinh}</td>
                                 <td>{item.mshp}</td>
                                 <td>{item.hocphi}</td>
                                 <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
                                 <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
                                 <td>
                                    <button onClick={() => setChiTiet(item)}>Xem chi tiết</button>
                                 </td>
                              </tr>
                           )
                        })}
                  </tbody>
               </table>
            </>
         )}
         {chitiet && (
            <>
               <h3 className="uppercase py-2 my-4">Chi tiết hóa đơn 123</h3>

               <button
                  className="border-[1px] border-solid border-black w-[100px] h-[30px] rounded-xl hover:text-[Navy] hover:font-bold hover:border-dashed mx-4"
                  onClick={() => setChiTiet('')}
               >
                  Quay lai
               </button>
               <button
                  className="border-[1px] border-solid border-black w-[100px] h-[30px] rounded-xl hover:text-[Navy] hover:font-bold hover:border-dashed mx-4"
                  onClick={handleConvertPDF}
               >
                  Xuất file PDF
               </button>
               <div
                  id="pdf"
                  className="w-[800px] flex flex-col justify-center items-center text-[#000080] m-auto bg-white"
               >
                  <div className="w-[700px] mt-[60px]">
                     <div className=" flex border-b-[1px] border-solid border-black">
                        <img className="w-[140px] h-[110px]" src={require('../../assets/images/Logo_STU.jpg')} />
                        <div>
                           <div className="flex justify-between">
                              <ul>
                                 <li className="font-bold">TRƯỜNG ĐẠI HỌC CÔNG NGHỆ SÀI GÒN</li>
                                 <li>
                                    MST: <span className="font-bold">0304421881</span>
                                 </li>
                                 <li>
                                    Địa chỉ:{' '}
                                    <span className="font-bold">
                                       180 Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh
                                    </span>
                                 </li>
                              </ul>
                              <ul>
                                 <li>Ký hiệu (Serial):</li>
                                 <li>1C23TST</li>
                                 <li>
                                    Số (No.): <span className="font-bold">0000168</span>
                                 </li>
                              </ul>
                           </div>
                           <div className="w-[400px] flex justify-between">
                              <span>
                                 ĐT: <span className="font-bold">(028) 3850 5520</span>
                              </span>
                              <span>
                                 Fax: <span className="font-bold">(028) 3850 8270</span>
                              </span>
                           </div>
                           <span>
                              Tài khoản:{' '}
                              <span className="font-bold">
                                 8770199 tại Ngân hàng TMCP Á Châu (ACB) - Sở giao dịch TP. Hồ Chí Minh
                              </span>
                           </span>
                        </div>
                     </div>
                     <div className="border-b-[1px] border-solid border-black w-full flex flex-col justify-center items-center py-4">
                        <h2 className="font-bold">HÓA ĐƠN GIÁ TRỊ GIA TĂNG</h2>
                        <h4 className="font-bold">(THU HỌC PHÍ)</h4>
                        <span>Ngày 06 tháng 06 năm 2023</span>
                     </div>
                     <div className="w-full flex pt-4">
                        <div className="w-[70%] flex p-0">
                           <ul>
                              <li>Họ tên người nộp tiền :</li>
                              <li>Địa chỉ :</li>
                           </ul>
                           <ul>
                              <li className="font-bold">{chitiet.HocPhi_SV?.tensv}</li>
                              <li className="font-bold">...</li>
                           </ul>
                        </div>
                        <div className="w-[30%] flex">
                           <ul>
                              <li>Mã số SV :</li>
                              <li>Mã số thuế :</li>
                           </ul>
                           <ul>
                              <li className="font-bold">{chitiet?.mssv}</li>
                              <li className="font-bold">...</li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex">
                        <ul>
                           <li>Khóa :</li>
                           <li>Lý do thu :</li>
                           <li>Số tiền :</li>
                           <li>Thuế Suất :</li>
                           <li>Tổng cộng :</li>
                           <li>Số tiền bằng chữ :</li>
                        </ul>
                        <ul>
                           <li className="font-bold">
                              {`20${chitiet.mssv.slice(3, 5)} ${
                                 khoas.find((i) => i.mskhoa === chitiet.mssv.slice(2, 3))?.tenkhoa
                              } ${chitiet.HocPhi_SV?.mslop}`}{' '}
                           </li>
                           <li className="font-bold">{`Học phí ${chitiet?.mshocky} (${chitiet?.namhoc}) CK 7/8/20 TEC`}</li>
                           <li className="font-bold"> {chitiet.hocphi}</li>
                           <li className="font-bold"> ...</li>
                           <li className="font-bold">{chitiet.hocphi}</li>
                           <li className="font-bold"> {to_vietnamese(chitiet.hocphi)}</li>
                        </ul>
                     </div>
                     <div className="w-[650px] mx-8 justify-between flex">
                        <div className="flex-col text-center">
                           <span className="font-bold">Người nộp tiền</span>
                           <span>Ký,ghi rõ họ,tên</span>
                        </div>
                        <div className="flex-col text-center">
                           <span className="font-bold">Người nộp tiền</span>
                           <span>Ký,ghi rõ họ,tên</span>
                           <img className="w-[250px] text-right" src={require('../../assets/images/chuky.png')} />
                        </div>
                     </div>
                     <div className="w-full border-b-[1px] border-dashed border-black">
                        <span className="text-[12px]">
                           Trang tra cứu:{' '}
                           <a className="font-bold text-[12px]" href="http://0304421881hd.easyinvoice.vn">
                              http://0304421881hd.easyinvoice.vn
                           </a>
                        </span>
                        <span className="text-[12px]"> Mã tra cứu: S6G3c7u30265598709258220</span>
                     </div>
                     <p className="text-[10px] text-center pb-4 text-[#000080]">
                        Đơn vị cung cấp giải pháp: Công ty cổ phần đầu tư công nghệ và thương mại SOFTDREAMS, MST:
                        0105987432, Http://easyinvoice.vn/
                     </p>
                  </div>
               </div>
            </>
         )}
      </main>
   )
}
export default Hoadon
