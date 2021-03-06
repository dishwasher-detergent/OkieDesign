import Link from "next/link"
import { useRouter } from 'next/router'
import { useState } from 'react'
import components from "../../components";

const config = require('okiedesign/package.json');

const DocsLayout = ({children}) => {
    const router = useRouter()
    const { component } = router.query;

    const [sidebarToggle, setSidebarToggle] = useState(false)
    const [search, setSearch] = useState([]);

    const toggleSidebar = () => {
        setSidebarToggle(!sidebarToggle)
    }

    const searchComponents = (e) => {
        if(e.target.value == ""){
            setSearch([])
            return
        }
        let comps = [];
        for(const key in components.content){
            components.content[key].forEach(item => comps.push(item))
        }
        comps = comps.filter(word => word.name.toLowerCase().includes(e.target.value.toLowerCase()));
        console.log(comps)
        setSearch(comps)
    }

    return (
        <main className="h-screen w-full flex flex-col flex-nowrap overflow-hidden">
            <nav className="w-full h-16 px-4 md:px-8 flex items-center gap-2 md:gap-4 border-b border-slate-300">
                <Link href="/">
                    <a className="Carena flex-none md:text-xl text-purple-600 font-bold">Okie.Design</a>
                </Link>
                <div className="w-full h-0.5 rounded-full bg-purple-600" />
                <div className="badge sm">v{config.version}</div>
                <Link href="https://www.github.com" target="_blank">
                    <a className="button icon ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-block w-6 h-6 fill-current"><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path></svg>
                    </a>
                </Link>
                <button className="button ghost icon md:hidden" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </nav>
            <div className="relative h-full w-full flex flex-row flex-nowrap overflow-hidden">
                <aside className={(sidebarToggle ? "block" : "hidden") + " absolute left-0 top-0 md:relative md:block flex-none w-72 h-full overflow-y-hidden border-r border-slate-300 bg-white"}>
                    <div className="absolute top-0 h-8 w-full bg-gradient-to-b from-white"></div>
                        <nav className="h-full pt-2 pb-6 overflow-y-auto custom_sidebar">
                            <ul className="pt-2">
                                <li className="pb-6 relative">
                                    <input type="text" className="input w-full" placeholder="Search" onKeyUp={(e) => searchComponents(e)}/>
                                    {search.length > 0 ? <div className="menu mt-1 w-full absolute">
                                        <ul>
                                            {search.map((item, key) => {
                                            return (
                                                <li key={key} tabIndex={key}>
                                                    <Link href={"/Documentation/" + item.link}>
                                                        <a className="button ghost w-full justify-start">{item.name}</a>
                                                    </Link>
                                                </li>
                                            )})}
                                        </ul>
                                    </div> : null}
                                </li>
                                <li>
                                    <Link href="/Documentation">
                                        <a className={"element " + (component == undefined ? 'active' : '')}>
                                            <span>Documentation</span>
                                            <div className="line" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/Documentation/samples">
                                        <a className={"element " + (component == "samples" ? 'active' : '')}>
                                            <span>Samples</span>
                                            <div className="line" />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <h4 className="mt-4">Components</h4>
                            <ul>
                                {components.content.components.map((item, key) => {
                                return (
                                <li key={key}>
                                    <Link href={"/Documentation/" + item.link} key={key}>
                                        <a className={"element " + (item.link == component ? 'active' : '')}>
                                            <span>{item.name}</span>
                                            <div className="line" />
                                        </a>
                                    </Link>
                                </li>
                                )})}
                            </ul>
                            <h4 className="mt-4">Form Elements</h4>
                            <ul>
                                {components.content.componentsForm.map((item, key) => {
                                return (
                                <li key={key}>
                                    <Link href={"/Documentation/" + item.link} key={key}>
                                        <a className={"element " + (item.link == component ? 'active' : '')}>
                                            <span>{item.name}</span>
                                            <div className="line" />
                                        </a>
                                    </Link>
                                </li>
                                )})}
                            </ul>
                            <h4 className="mt-4">Requires JS</h4>
                            <ul>
                                {components.content.componentsJS.map((item, key) => {
                                return (
                                <li key={key}>
                                    <Link href={"/Documentation/" + item.link} key={key}>
                                        <a className={"element " + (item.link == component ? 'active' : '')}>
                                            <span>{item.name}</span>
                                            <div className="line" />
                                        </a>
                                    </Link>
                                </li>
                                )})}
                            </ul>
                        </nav>
                    <div className="absolute bottom-0 h-8 w-full bg-gradient-to-t from-white"></div>
                </aside>
                <section className="p-6 flex-1 flex flex-col flex-nowrap overflow-y-auto gap-6">
                    {children}
                </section>
            </div>
        </main>
    )
}

export default DocsLayout;