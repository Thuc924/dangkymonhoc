import { Footer, Header, Nav } from "../PublicPage"
import "tippy.js/dist/tippy.css"
import "../../assets/css/main.css"

function DefaultLayout({ children }) {
	return (
		<div className='m-auto m-0 bg-white h-full'>
			<div className='w-full h-full cover relative bottom-0 top-[106px] right-0 left-0 bg-transparent bg-repeat'>
				<img
					className='w-full h-full bg-repeat'
					src={require("../../assets/images/dai-hoc-cong-nghe-sai-gon-1.webp")}
				/>
			</div>
			<div className='min-h-[1000px] absolute z-20 top-0 right-0 left-0 bottom-0'>
				<Header />
				<div className='w-[1200px] m-auto'>
					<Nav />
					<article className='bg-[#dddd] w-[100%] min-h-[742px] '>
						{children}
					</article>
					<Footer />
				</div>
			</div>
		</div>
	)
}
export default DefaultLayout
