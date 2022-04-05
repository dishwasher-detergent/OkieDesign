import ComponentLayout from '../Layout/Documentation/Component';
import ComponentDocs from '../Layout/Display/Components/Component';
import { Disclosure } from '@headlessui/react'
import Link from 'next/link';

const Collapse = ({title}) => {
    return (
      <ComponentLayout title={title} docNav={true}>
        <div className='notification'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
            These examples utilize <Link target="_blank" href="https://headlessui.dev/react/disclosure"><a className='button sm'>HeadlessUI</a></Link>.
        </div>
        <ComponentDocs classes="list" title="Sizes">
          <div className='collapse xs w-60'>
            <Disclosure>
              <Disclosure.Button className="title">
                Extra Small
              </Disclosure.Button>
              <Disclosure.Panel className="content">
                Content
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className='collapse sm w-60'>
            <Disclosure>
              <Disclosure.Button className="title">
                Small
              </Disclosure.Button>
              <Disclosure.Panel className="content">
                Content
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className='collapse w-60'>
            <Disclosure>
              <Disclosure.Button className="title">
                Standard
              </Disclosure.Button>
              <Disclosure.Panel className="content">
                Content
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className='collapse lg w-60'>
            <Disclosure>
              <Disclosure.Button className="title">
                Large
              </Disclosure.Button>
              <Disclosure.Panel className="content">
              Content
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className='collapse xl w-60'>
            <Disclosure>
              <Disclosure.Button className="title">
                Extra Large
              </Disclosure.Button>
              <Disclosure.Panel className="content">
                Content
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
          <div className='collapse plus w-60'>
            <Disclosure>
              <Disclosure.Button className="title">
                Plus
              </Disclosure.Button>
              <Disclosure.Panel className="content">
              Content
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className='collapse arrow w-60'>
            <Disclosure>
              <Disclosure.Button className="title">
                Arrow
              </Disclosure.Button>
              <Disclosure.Panel className="content">
                Content
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Collapse

export const CollapseSample = () => {
  return (
    <div className='collapse w-60 outline'>
      <Disclosure>
        <Disclosure.Button className="title">
          Outlined
        </Disclosure.Button>
        <Disclosure.Panel className="content">
          Content
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}