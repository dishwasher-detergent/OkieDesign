import Link from 'next/link'
import DefaultLayout from '../../components/Layout'

export default function Home() {
    return (
        <DefaultLayout>
            <div className="list">
                <Link href='Documentation/Buttons'><a className="button full">Buttons</a></Link>
                <Link href='Documentation/ButtonGroups'><a className="button full">Button Groups</a></Link>
            </div>
        </DefaultLayout>
    )
  }