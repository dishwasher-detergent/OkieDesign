import DefaultLayout from "../components/Layout"

export default function Home() {
  return (
    <DefaultLayout>
    <div className="alert">Classes in <span className="badge emergency">red</span> are required and give the regular options, classes in blue <span className="badge info">modify</span> the defauly styling.</div>
      <div className="w-full h-full grid gap-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div className="card full fit">
          <figure className="p-2">
            <h3 className="font-semibold text-xl">Sizes</h3>
            <div className="list horizontal mt-2">
                <button className="button extra_small">Extra Small</button>
                <button className="button small">Small</button>
                <button className="button">Regular</button>
                <button className="button large">Large</button>
                <button className="button extra_large">Extra Large</button>
            </div>
          </figure>
          <figcaption>
            <h4 className="text-sm font-semibold text-slate-600">Classes</h4>
            <div className="list horizontal mt-2">
              <div className="badge emergency">
                button
              </div>
              <p>+</p>
              <div className="badge info">
                extra_small
              </div>
              <div className="badge info">
                small
              </div>
              <div className="badge info">
                large
              </div>
              <div className="badge info">
                extra_large
              </div>
            </div>
          </figcaption>
        </div>
        <div className="card full fit">
          <figure className="p-2">
          <h3 className="font-semibold text-xl">Full Width</h3>
            <div className="list mt-2">
                <button className="button extra_small full">Extra Small</button>
                <button className="button small full">Small</button>
                <button className="button full">Regular</button>
                <button className="button large full">Large</button>
                <button className="button extra_large full">Extra Large</button>
            </div>
          </figure>
          <figcaption>
            <h4 className="text-sm font-semibold text-slate-600">Classes</h4>
            <div className="list horizontal mt-2">
              <div className="badge emergency">
                button
              </div>
              <p>+</p>
              <div className="badge info">
                full
              </div>
            </div>
          </figcaption>
        </div>
        <div className="card full fit">
          <figure className="p-2">
            <h3 className="font-semibold text-xl">Styles</h3>
            <div className="list horizontal mt-2">
                <button className="button">Regular</button>
                <button className="button secondary">Secondary</button>
                <button className="button success">Success</button>
                <button className="button warning">Warning</button>
                <button className="button emergency">Emergency</button>
                <button className="button ghost">Ghost</button>
                <button className="button round">Round</button>
                <button className="button outline">Outline</button>
            </div>
          </figure>
          <figcaption>
            <h4 className="text-sm font-semibold text-slate-600">Classes</h4>
            <div className="list horizontal mt-2">
              <div className="badge emergency">
                button
              </div>
              <p>+</p>
              <div className="badge info">
                secondary
              </div>
              <div className="badge info">
                success
              </div>
              <div className="badge info">
                warning
              </div>
              <div className="badge info">
                emergency
              </div>
              <div className="badge info">
                ghost
              </div>
              <div className="badge info">
                round
              </div>
              <div className="badge info">
                outline
              </div>
            </div>
          </figcaption>
        </div>
        <div className="card full fit">
          <figure className="p-2">
            <h3 className="font-semibold text-xl">Icons</h3>
            <div className="list horizontal mt-2">
                <button className="button icon extra_small">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                </button>
                <button className="button icon small">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                </button>
                <button className="button icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                </button>
                <button className="button icon large">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                </button>
                <button className="button icon extra_large">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                </button>
            </div>
          </figure>
          <figcaption>
            <h4 className="text-sm font-semibold text-slate-600">Classes</h4>
            <div className="list horizontal mt-2">
              <div className="badge emergency">
                button
              </div>
              <p>+</p>
              <div className="badge info">
                icon
              </div>
            </div>
          </figcaption>
        </div>
        <div className="card full fit">
          <figure className="p-2">
            <h3 className="font-semibold text-xl">Text and Icons</h3>
            <div className="list horizontal mt-2">
                <button className="button">
                    After
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
                <button className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Before
                </button>
            </div>
          </figure>
          <figcaption>
            <h4 className="text-sm font-semibold text-slate-600">Classes</h4>
            <div className="list horizontal mt-2">
              <div className="badge emergency">
                button
              </div>
            </div>
          </figcaption>
        </div>
        <div className="card full fit">
          <figure className="p-2">
            <h3 className="font-semibold text-xl">Styles</h3>
            <div className="list horizontal mt-2">
                <button disabled className="button">Regular</button>
                <button disabled className="button ghost">Ghost</button>
                <button disabled className="button outline">Outline</button>
                <button disabled className="button round">Outline</button>
                <button disabled className="button">
                    After
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                </button>
                <button disabled className="button icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                </button>
            </div>
          </figure>
          <figcaption>
            <h4 className="text-sm font-semibold text-slate-600">Classes</h4>
            <div className="list horizontal mt-2">
              <div className="badge emergency">
                button
              </div>
              <p>+</p>
              <div className="badge info">
                secondary
              </div>
              <div className="badge info">
                success
              </div>
              <div className="badge info">
                warning
              </div>
              <div className="badge info">
                emergency
              </div>
              <div className="badge info">
                ghost
              </div>
              <div className="badge info">
                round
              </div>
              <div className="badge info">
                outline
              </div>
            </div>
          </figcaption>
        </div>
      </div>
    </DefaultLayout>
  )
}
