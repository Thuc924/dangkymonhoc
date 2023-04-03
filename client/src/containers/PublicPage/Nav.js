import { Link } from 'react-router-dom'

function Nav() {
   return (
      <div className="h-full text-[12px] text-[#355170] p-4 bg-[#dbdbdb] border-t-8 border-[#fe8606] rounded-t m-1 font-bold h-[42px] flex items-center">
         <Link className="mr-4 hover:text-[#993333] hover:underline" to="/" exact="true">
            TRANG CHỦ
         </Link>
         <Link className="mr-4 hover:text-[#993333] hover:underline" to="/">
            GÓP Ý KIẾN
         </Link>
         <Link className="hover:text-[#993333] hover:underline" to="/contact">
            LIÊN HỆ
         </Link>
      </div>
   )
}

export default Nav
