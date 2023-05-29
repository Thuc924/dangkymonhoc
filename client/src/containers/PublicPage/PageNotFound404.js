import { imgs } from "../../assets/images"

function PageNotFound404() {
	return (
		<div className='m-1 w-full'>
			<img className='w-full h-[600px] contain' src={imgs.notfound} />
		</div>
	)
}

export default PageNotFound404
