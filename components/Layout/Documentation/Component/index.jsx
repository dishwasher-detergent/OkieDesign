const ComponentLayout = ({title,children}) => {
    return (
        <>
            <h2 className="inline-block text-2xl font-bold mb-4 rounded-md text-gray-700">{title}</h2>
            <section className="w-full grid grid-cols-1 gap-6">
                {children}
            </section>
        </>
    )
}

export default ComponentLayout;