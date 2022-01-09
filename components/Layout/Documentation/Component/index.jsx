const ComponentLayout = ({title,children}) => {
    return (
        <>
            <h2 className="font-bold text-lg text-slate-600 mb-4">{title}</h2>
            <section className="w-full grid grid-cols-1 gap-6">
                {children}
            </section>
        </>
    )
}

export default ComponentLayout;