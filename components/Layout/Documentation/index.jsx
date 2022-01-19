import Link from "next/link"
import { useRouter } from 'next/router'
import { useState } from 'react'

const DocsLayout = ({children}) => {
    const router = useRouter()

    const { component } = router.query;
    console.log(component)

    const [component_list, setComponent_list] = useState([
        "Alerts",
        "Badges",
        "Buttons",
        "Button Groups",
        "Collapse"
    ]);

    return (
        <main className="w-full min-h-screen overflow-scoll flex flex-col md:flex-row bg-slate-50">
            <nav className="md:hidden h-16 w-full px-4 flex flex-row items-center justify-between bg-white border-b border-slate-300">
                <label htmlFor="sidebar_toggle" className="button ghost icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </label>
                <Link href="/">
                    <a className="Carena text-xl flex flex-row gap-2 items-center">
                        Okie.Design
                        <div className="badge small flex-none">
                            v 1.0.0
                        </div>
                    </a>
                </Link>
                <a href="https://github.com/dishwasher-detergent/OkieDesign" target="_blank" rel="noreferrer" className="button ghost icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor">
                        <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
                    </svg>
                </a>
            </nav>
            <aside className="sidebar">
                <input type="checkbox" className="toggle" id="sidebar_toggle"/>
                <div className="content">
                    <nav className="hidden md:flex w-full h-16 items-center justify-center px-4 gap-4">
                        <Link href="/">
                            <a className="Carena flex-none text-xl text-purple-600 font-bold">Okie.Design</a>
                        </Link>
                        <div className="w-full h-0.5 rounded-full bg-purple-600" />
                        <div className="badge small flex-none">
                            v 1.0.0
                        </div>
                    </nav>
                    <div className="custom_sidebar">
                        <Link href="/Documentation">
                            <a className={"element " + (component == undefined ? 'active' : '')}>
                                <span>Documentation</span>
                                <div className="line" />
                            </a>
                        </Link>
                        <Link href="/Documentation/Samples">
                            <a className={"element " + (component == "Samples" ? 'active' : '')}>
                                <span>Samples</span>
                                <div className="line" />
                            </a>
                        </Link>
                        <h4 className="mt-4">Components</h4>
                        {component_list.map((item, key) => {
                           return (
                           <Link href={"/Documentation/" + item.replace(/\s/g,'')} key={key}>
                                <a className={"element " + (item.replace(/\s/g,'') == component ? 'active' : '')}>
                                    <span>{item}</span>
                                    <div className="line" />
                                </a>
                            </Link>
                            )
                        })}
                    </div>
                </div>
                <label className="deadspace" htmlFor="sidebar_toggle"/>
            </aside>
            <section className="flex-1 px-2 pb-6 md:px-10 md:py-6 overflow-y-auto">
                {children}
            </section>
        </main>
    )
}

export default DocsLayout;