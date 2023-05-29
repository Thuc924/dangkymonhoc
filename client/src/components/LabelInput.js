function LabelInput({
	label,
	id,
	placeholder,
	type,
	setValue,
	value,
	handleEditPasswordKeyDown,
}) {
	return (
		<>
			<label className='hover:underline italic cursor-pointer' htmlFor={id}>
				{label}
			</label>
			{handleEditPasswordKeyDown ? (
				<input
					className='border-[1px] border-solid rounded-sm p-1 mb-[4px]'
					type={type}
					id={id}
					placeholder={placeholder}
					onKeyDown={(e) => handleEditPasswordKeyDown(e)}
					onChange={(e) => setValue({ [value]: e.target.value })}
				/>
			) : (
				<input
					className='border-[1px] border-solid rounded-sm p-1 mb-[4px]'
					type={type}
					id={id}
					placeholder={placeholder}
					onChange={(e) => setValue({ [value]: e.target.value })}
				/>
			)}
		</>
	)
}
export default LabelInput
