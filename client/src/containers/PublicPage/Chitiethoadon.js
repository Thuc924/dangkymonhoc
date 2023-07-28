function Chitiethoadon() {
   // console.log(chitiet)
   return (
      <main>
         <h3 className="uppercase py-2 my-4">Chi tiết hóa đơn 123</h3>
         <div className="w-[800px] flex flex-col justify-center items-center text-[#000080] m-auto bg-white">
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
                              <span className="font-bold">180 Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh</span>
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
               <div className="border-b-[1px] border-solid border-black w-full flex flex-col justify-center items-center">
                  <h2 className="font-bold">HÓA ĐƠN GIÁ TRỊ GIA TĂNG</h2>
                  <h4 className="font-bold">(THU HỌC PHÍ)</h4>
                  <span>Ngày 06 tháng 06 năm 2023</span>
               </div>
               <div className="w-full flex">
                  <div className="w-[70%] flex">
                     <ul>
                        <li>Họ tên người nộp tiền :</li>
                        <li>Địa chỉ :</li>
                     </ul>
                     <ul>
                        <li className="font-bold">Ngô Hồng Thức</li>
                        <li className="font-bold">...</li>
                     </ul>
                  </div>
                  <div className="w-[30%] flex">
                     <ul>
                        <li>Mã số SV :</li>
                        <li>Mã số thuế :</li>
                     </ul>
                     <ul>
                        <li className="font-bold">DH51700924</li>
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
                     <li className="font-bold">2017 Công nghệ Thông tin D17_TH03</li>
                     <li className="font-bold">Học phí học lại HK3 Hè (2019-2020)CK 7/8/20 TEC</li>
                     <li className="font-bold"> 1.380.000</li>
                     <li className="font-bold"> ...</li>
                     <li className="font-bold">1.380.000</li>
                     <li className="font-bold">Một triệu ba trăm tám mươi nghìn đồng</li>
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
               <p className="text-[10px] text-center  text-[#000080]">
                  Đơn vị cung cấp giải pháp: Công ty cổ phần đầu tư công nghệ và thương mại SOFTDREAMS, MST: 0105987432,
                  Http://easyinvoice.vn/
               </p>
            </div>
         </div>
      </main>
   )
}
export default Chitiethoadon
