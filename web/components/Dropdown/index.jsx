import ComponentLayout from '../Layout/Documentation/Component';
import ComponentDocs from '../Layout/Display/Components/Component';
import { Menu } from '@headlessui/react'
import Link from 'next/link';

const Dropdown = () => {
    return (
      <ComponentLayout title="Collapse">
        <div className='notification'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
            These examples utilize <Link target="_blank" href="https://headlessui.dev/react/menu"><a className='button sm'>HeadlessUI</a></Link>.
        </div>
        <ComponentDocs classes="list" title="Sizes">
            <Menu as="div" className="dropdown left">
                <Menu.Button className="button">More</Menu.Button>
                <Menu.Items className="menu w-auto content">
                    <Menu.Item>
                    {({ active }) => (
                    <a className={`${active && 'active'} button ghost`}>
                        Menu Item One
                    </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                    <a className={`${active && 'active'} button ghost`}>
                        Menu Item Two
                    </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
            <Menu as="div" className="dropdown right">
                <Menu.Button className="button">More</Menu.Button>
                <Menu.Items className="menu w-auto content">
                    <Menu.Item>
                    {({ active }) => (
                    <a className={`${active && 'active'} button ghost`}>
                        Menu Item One
                    </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                    <a className={`${active && 'active'} button ghost`}>
                        Menu Item Two
                    </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
            <Menu as="div" className="dropdown top">
                <Menu.Button className="button">More</Menu.Button>
                <Menu.Items className="menu w-auto content">
                    <Menu.Item>
                    {({ active }) => (
                    <a className={`${active && 'active'} button ghost`}>
                        Menu Item One
                    </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                    <a className={`${active && 'active'} button ghost`}>
                        Menu Item Two
                    </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
            <Menu as="div" className="dropdown bottom">
                <Menu.Button className="button">More</Menu.Button>
                <Menu.Items className="menu w-auto content">
                    <Menu.Item>
                    {({ active }) => (
                    <a className={`${active && 'active'} button ghost`}>
                        Menu Item One
                    </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                    <a className={`${active && 'active'} button ghost`}>
                        Menu Item Two
                    </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Dropdown

export const DropdownSample = () => {
    return (
        <Menu as="div" className="dropdown bottom">
            <Menu.Button className="button">More</Menu.Button>
            <Menu.Items className="menu w-auto content">
                <Menu.Item>
                {({ active }) => (
                <a className={`${active && 'active'} button ghost`}>
                    Menu Item One
                </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                <a className={`${active && 'active'} button ghost`}>
                    Menu Item Two
                </a>
                )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
  }