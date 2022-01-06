import DefaultLayout from "../components/Layout"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="w-full h-full grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card full fit">
          <figure>
            test
          </figure>
          <figcaption>
            <div className="list horizontal">
              <div className="badge info">
                test
              </div>
            </div>
            <div className="button_group full pill">
              <button className="button full">test</button>
              <button className="button icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
              </button>
            </div>
          </figcaption>
        </div>
      </div>
    </DefaultLayout>
  )
}
