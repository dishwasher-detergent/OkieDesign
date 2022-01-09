import Link from 'next/link'
import DocsLayout from '../../components/Layout/Documentation'

export default function Home() {
    return (
        <DocsLayout>
            <h2 className="text-xl font-bold mb-4">Components</h2>
            <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <Link href='Documentation/Alerts'>
                    <a className="card full fit ring-purple-200 hover:ring-2 focus:ring-4">
                        <div className="h-20 p-2 flex items-center justify-center bg-purple-50">
                            <div className="alert success">Free Shipping Site Wide!</div>
                        </div>
                        <div className="p-2">
                            <h4 className="text-sm font-semibold text-slate-600">Alerts</h4>
                        </div>
                    </a>
                </Link>
                <Link href='Documentation/Badges'>
                    <a className="card full fit ring-purple-200 hover:ring-2 focus:ring-4">
                        <div className="h-20 p-2 flex items-center justify-center bg-purple-50">
                            <div className="badge emergency">New!</div>
                        </div>
                        <div className="p-2">
                            <h4 className="text-sm font-semibold text-slate-600">Badges</h4>
                        </div>
                    </a>
                </Link>
                <Link href='Documentation/Buttons'>
                    <a className="card full fit ring-purple-200 hover:ring-2 focus:ring-4">
                        <div className="h-20 flex items-center justify-center bg-purple-50">
                            <button className="button">
                                Buy Now
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-2">
                            <h4 className="text-sm font-semibold text-slate-600">Buttons</h4>
                        </div>
                    </a>
                </Link>
                <Link href='Documentation/ButtonGroups'>
                    <a className="card full fit ring-purple-200 hover:ring-2 focus:ring-4">
                        <div className="h-20 flex items-center justify-center bg-purple-50">
                            <div className="button_group pill small">
                                <button className="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button className="button">1</button>
                                <button className="button">2</button>
                                <button className="button">3</button>
                                <button className="button">4</button>
                                <button className="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="p-2">
                            <h4 className="text-sm font-semibold text-slate-600">Button Groups</h4>
                        </div>
                    </a>
                </Link>
                <Link href='Documentation/Collapse'>
                    <a className="card full fit ring-purple-200 hover:ring-2 focus:ring-4">
                        <div className="h-20 p-2 flex items-center justify-center bg-purple-50">
                            <div className='collapse outline small open plus w-full' tabIndex={0}>
                                <h2>Collapse</h2>
                                <div className="content">
                                    Hidden Content
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <h4 className="text-sm font-semibold text-slate-600">Collapse</h4>
                        </div>
                    </a>
                </Link>
            </div>
        </DocsLayout>
    )
  }