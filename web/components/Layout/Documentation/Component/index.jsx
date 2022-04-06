import DocNavigation from "../Navigation";

const ComponentLayout = ({title,docNav = false, children}) => {
    return (
        <>
            <div className="flex-none w-full px-4 flex items-center gap-4">
                <p className="flex-none text-slate-500 font-semibold">{title}</p>
                <div className="w-full h-0.5 rounded-full bg-slate-500" />
            </div>
            <section className="w-full grid grid-cols-1 gap-6">
                {children}
            </section>
            {docNav ? <DocNavigation /> : null }
        </>
    )
}

export default ComponentLayout;
