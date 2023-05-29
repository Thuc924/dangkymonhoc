function Button({
	label,
	onClick,
	item,
	bg,
	textColor,
	width,
	rounded,
	m,
	onKeyDown,
}) {
	return (
		<button
			onKeyDown={onKeyDown}
			onClick={onClick}
			className={`${width} ${m} border-[1px] border-solid p-2 hover:underline ${bg} ${item} ${textColor} ${rounded}`}
		>
			{label}
		</button>
	)
}
export default Button
