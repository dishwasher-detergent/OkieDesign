import Link from "next/link"

const DefaultLayout = ({children}) => {
    return (
        <div>
            <nav className="w-full h-16 flex justify-center items-center">
                <div className="w-full max-w-6xl h-full flex items-center justify-between px-4 border-b border-slate-300">
                    <Link href="/">
                        <a className="hairage text-xl">Okie.Design</a>
                    </Link>
                    <div className="flex gap-2">
                        <Link href="/Documentation">
                            <a className="button link">Documentation</a>
                        </Link>
                        <a href="Github.com" target="_blank" className="button link">
                            GitHub
                        </a>
                    </div>
                </div>
            </nav>
            <section className="w-full flex justify-center py-4">
                <div className="w-full max-w-6xl px-4">
                    {children}
                </div>
            </section>
        </div>
    )
}

export default DefaultLayout;