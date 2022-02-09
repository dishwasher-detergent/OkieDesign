import Link from "next/link"
const config = require('okiedesign/package.json');

const DefaultLayout = ({children}) => {
    return (
        <div className="flex flex-col w-full min-h-screen relative">
            <div className="flex-1">
                <header>
                    <nav className="w-full h-16 px-4 md:px-8 flex items-center gap-4">
                        <Link href="/">
                            <a className="Carena flex-none text-xl text-purple-600 font-bold">Okie.Design</a>
                        </Link>
                        <div className="w-full h-0.5 rounded-full bg-purple-600" />
                        <div className="badge xs">v{config.version}</div>
                        <Link href="https://www.github.com" target="_blank">
                            <a className="button icon lg ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-block w-6 h-6 fill-current"><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path></svg>
                            </a>
                        </Link>
                    </nav>
                </header>
                <main className="relative">
                    <section className="z-20 relative max-w-6xl mx-auto py-12 md:py-24 px-6">
                        <h1 className="Carena font-bold text-4xl lg:text-6xl lg:leading-tight text-gray-900 lg:text-center 2xl:px-30 mb-4 lg:mb-8">Create the beautiful website you&apos;ve always wanted.</h1>
                        <p className="text-gray-600 md:text-xl md:text-center">Responsive CSS components made with TailwindCSS and Love.</p>
                        <div className="flex items-center justify-center flex-wrap gap-2 py-8">
                                <input value="npm i okiedesign" readOnly className="h-12 w-48 text-center border border-gray-300 px-4 rounded-md shadow-lg"/>
                                <Link href="/Documentation">
                                    <a className="button lg shadow-lg shadow-purple-300">Get Started</a>
                                </Link>
                        </div>
                    </section>
                    <section className="z-20 relative max-w-6xl w-full h-full mx-auto px-6">
                        {children}
                    </section>
                </main>
            </div>
            <footer className="w-full h-48 mt-6 flex flex-col relative">
                <section className="absolute bottom-0 h-24 w-full px-4 md:px-8 flex items-center justify-center z-10">
                    <p className="font-semibold text-purple-900">© 2022 Okie Design. All Rights Reserved.</p>
                </section>
                <div className="z-0 absolute bottom-0 w-full h-full bg-gradient-to-t from-purple-300 to-white" />
            </footer>
        </div>
    )
}

export default DefaultLayout;
