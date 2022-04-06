const Divider = ({ title }) =>
{
	return (
		<div className="flex-none w-full px-4 flex items-center gap-4">
			<p className="flex-none text-slate-700 font-semibold">{title}</p>
			<div className="w-full h-0.5 rounded-full bg-slate-700" />
		</div>
	)
}

export default Divider;