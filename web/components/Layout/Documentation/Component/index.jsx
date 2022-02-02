const ComponentLayout = ({title,children}) => {
    return (
        <>
            <div className="w-full h-16 px-8 flex items-center gap-4">
                <p className="flex-none text-gray-500 font-semibold">{title}</p>
                <div className="w-full h-0.5 rounded-full bg-gray-500" />
            </div>
            <section className="w-full grid grid-cols-1 gap-6">
                {children}
            </section>
        </>
    )
}

export default ComponentLayout;
