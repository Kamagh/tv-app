'use client';

// Load Hooks
import { useState } from 'react';

// Load Components
import Link from 'next/link';
import Image from 'next/image';

// Load Constants
import { NAV_LINKS, NAV_OPTIONS } from '../constants';

const Navbar = () => {
  const width = 17;
  const height = 17;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <aside
        id='default-sidebar'
        className='fixed h-screen'
        aria-label='Sidenav'
      >
        <div
          className='menu w-16 h-full overflow-hidden'
          onMouseEnter={() => setIsHovered(true)}
        >
          {isHovered ? (
            <>
              <div className='menuitem pt-5 flex mb-20 items-center transition ease-in-out delay-150 duration-300'>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                  <Image
                    src='/assets/profile_pic.jpg'
                    alt='User Profile Image'
                    width={20}
                    height={20}
                    className='object-cover w-full h-full'
                  />
                </div>
                <div className='text-lg font-bold text-gray-800 whitespace-nowrap'>
                  <span className='ml-3 text-gray-10'>John Doe</span>
                </div>
              </div>
            </>) : (
            <div className='w-12 h-12 mb-20 pt-5' />
          )}
          <nav className='flexBetween'>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.key} className='menuitem'>
                  <Link key={link.key} href={link.href}>
                    <div className='flex items-center'>
                      <div className='w-12 h-12 flex items-center
                      justify-center transition-all duration-300'>
                        <Image
                          src={`/assets/icons/${link.icon}`}
                          alt={link.label}
                          width={width}
                          height={height}
                        />
                      </div>
                      <div className='whitespace-nowrap'>
                        <span className='ml-3 text-gray-10'>{link.label}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {isHovered && (
            <div className='menuitem absolute bottom-0 whitespace-nowrap'>
              {NAV_OPTIONS.map((option) => (
                <Link key={option.key} href={option.href}>
                  <div className='menuitem flex flex-col transition-all ease-in-out delay-150 duration-300'>
                    <a className='ml-3 mb-4 text-gray-10'><span>{option.label}</span></a>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};


export default Navbar;
