import Link from 'next/link'
import DefaultLayout from '../../components/Layout'

export default function Home() {
    return (
        <DefaultLayout>
            <div className="w-full h-full grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <Link href='Documentation/Alert'>
                    <a className="card full fit ring-blue-200 hover:ring-2 focus:ring-4">
                        <figure className="p-2">
                            
                        </figure>
                        <figcaption>
                            <h4 className="text-sm font-semibold text-slate-600">Alert</h4>
                        </figcaption>
                    </a>
                </Link>
                <Link href='Documentation/Buttons'>
                    <a className="card full fit ring-blue-200 hover:ring-2 focus:ring-4">
                        <figure className="p-2">
                            
                        </figure>
                        <figcaption>
                            <h4 className="text-sm font-semibold text-slate-600">Buttons</h4>
                        </figcaption>
                    </a>
                </Link>
                <Link href='Documentation/ButtonGroups'>
                    <a className="card full fit ring-blue-200 hover:ring-2 focus:ring-4">
                        <figure className="p-2">
                            
                        </figure>
                        <figcaption>
                            <h4 className="text-sm font-semibold text-slate-600">Button Groups</h4>
                        </figcaption>
                    </a>
                </Link>
            </div>
        </DefaultLayout>
    )
  }