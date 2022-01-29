import ComponentLayout from '../Layout/Documentation/Component';
import ComponentDocs from '../Layout/Display/Components/Component';

const Buttons = () => {
    return (
      <ComponentLayout title="Buttons">
        <ComponentDocs classes="list" title="Sizes">
          <button className="button extra_small">Extra Small</button>
          <button className="button small">Small</button>
          <button className="button">Regular</button>
          <button className="button large">Large</button>
          <button className="button extra_large">Extra Large</button>
        </ComponentDocs>
        <ComponentDocs classes="list vertical" title="Full Width">
          <button className="button extra_small full">Extra Small</button>
          <button className="button small full">Small</button>
          <button className="button full">Regular</button>
          <button className="button large full">Large</button>
          <button className="button extra_large full">Extra Large</button>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
          <button className="button">Regular</button>
          <button className="button secondary">Secondary</button>
          <button className="button success">Success</button>
          <button className="button warning">Warning</button>
          <button className="button emergency">Emergency</button>
          <button className="button ghost">Ghost</button>
          <button className="button round">Round</button>
          <button className="button outline">Outline</button>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Icon">
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
        </ComponentDocs>
        <ComponentDocs classes="list" title="With Icon">
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
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
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
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Buttons