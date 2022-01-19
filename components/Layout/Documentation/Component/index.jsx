const ComponentLayout = ({title,children}) => {
    return (
        <>
            <div className="w-full h-16 px-12 flex items-center gap-4">
                <p className="flex-none text-slate-500 font-semibold">{title}</p>
                <div className="w-full h-0.5 rounded-full bg-slate-500" />
            </div>
            <section className="w-full grid grid-cols-1 gap-6">
                {children}
            </section>
        </>
    )
}

export default ComponentLayout;