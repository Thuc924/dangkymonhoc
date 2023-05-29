import { Footer, Header, Nav } from "../PublicPage"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { createContext, useState } from "react"

export const languageContext = createContext()

function DefaultLayout({ children }) {
	const [language, setLanguage] = useState("VI")
	return (
		<languageContext.Provider value={language}>
			<div className='m-auto shadow-xl m-0 w-[1050px] bg-white shadow-yellow-700'>
				<ul className='flex p-2 bg-[#80BFCD] text-white m-0'>
					<li
						className='p-1 cursor-pointer hover:text-[#993333] hover:underline'
						onClick={() => setLanguage("VI")}
					>
						<Tippy content='VI'>
							<img src={require("../../assets/images/VI.gif")} />
						</Tippy>
					</li>
					<li
						className='p-1 cursor-pointer hover:text-[#993333] hover:underline'
						onClick={() => setLanguage("EN")}
					>
						<Tippy content='EN'>
							<img src={require("../../assets/images/US.gif")} />
						</Tippy>
					</li>
				</ul>
				<Header />
				<Nav />
				<div>{children}</div>
				<Footer />
			</div>
		</languageContext.Provider>
	)
}
export default DefaultLayout
