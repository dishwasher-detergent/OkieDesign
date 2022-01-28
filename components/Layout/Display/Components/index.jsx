import Link from "next/link"

const ComponentDisplay = ({more}) => {
    return (
        <div className="w-full px-4 grid grid-1 md:grid-cols-3 gap-4 z-10">
        <Link href="/Documentation/Alerts">
          <a className="card h-48">
              <div className="h-full flex items-center justify-center p-4">
                <div className="alert warning">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Spring Sale!
                </div>
              </div>
              <div className="px-4 py-2">
                <p className="font-semibold text-purple-600">Alert</p>
              </div>
          </a>
        </Link>
        <Link href="/Documentation/Badges">
          <a className="card h-48">
              <div className="h-full flex items-center gap-2 justify-center p-4">
                <div className="badge success">
                  New!
                </div>
                <div className="badge emergency">
                  Sale
                </div>
              </div>
              <div className="px-4 py-2">
                <p className="font-semibold text-purple-600">Badges</p>
              </div>
          </a>
        </Link>
        <Link href="/Documentation/Breadcrumbs">
          <a className="card h-48">
              <div className="h-full flex items-center gap-2 justify-center p-4">
                <div className="breadcrumb small">
                    <p>Mensware</p>
                    <p>Pants</p>
                </div>    
              </div>
              </div>
              <div className="px-4 py-2">
                <p className="font-semibold text-purple-600">Collapse</p>
              </div>
          </a>
        </Link>
        <Link href="/Documentation/Buttons">
          <a className="card h-48">
              <div className="h-full flex items-center gap-2 justify-center p-4">
                <div className="button">
                  Check Out
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <div className="px-4 py-2">
                <p className="font-semibold text-purple-600">Buttons</p>
              </div>
          </a>
        </Link>
        <Link href="/Documentation/ButtonGroups">
          <a className="card h-48">
              <div className="h-full flex items-center gap-2 justify-center p-4">
                <div className="button_group pill">
                  <button className="button full">
                      Add to Cart
                  </button>
                  <button className="button icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                  </button>
                </div>
              </div>
              <div className="px-4 py-2">
                <p className="font-semibold text-purple-600">Button Groups</p>
              </div>
          </a>
        </Link>
        <Link href="/Documentation/Collapse">
          <a className="card h-48">
              <div className="h-full flex items-center gap-2 justify-center p-4">
              <div className="collapse outline open plus w-full" tabIndex={0}>
                <p className="title">Collapse</p>
                <div className="content">
                  Hidden Content
                </div>
              </div>
              </div>
              <div className="px-4 py-2">
                <p className="font-semibold text-purple-600">Collapse</p>
              </div>
          </a>
        </Link>        
        <Link href="/Documentation/Tooltips">
          <a className="card h-48">
              <div className="h-full flex items-center gap-2 justify-center p-4">
                <div data-content="I'm a tooltip!" className="tooltip top">
                    <button className="button small">Hover Me!</button>
                  </div>
              </div>
              </div>
              <div className="px-4 py-2">
                <p className="font-semibold text-purple-600">Collapse</p>
              </div>
          </a>
        </Link>
        {more ? <div className="h-24 md:h-48 flex items-center justify-center">
          <Link href="/Documentation">
            <a className="button ghost">
              More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </Link>
        </div> : null}
      </div>
    )
}

export default ComponentDisplay
