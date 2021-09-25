import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-2 bg-black shadow-md p-1 md:px-2'>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='http://nowaygir.wwwmi3-ls7.a2hosted.com/wp-content/uploads/2021/09/logo.jpg'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle */}
      {/* <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          className='pl-5 bg-transparent outline-none flex-grow text-gray-500'
          type='text'
          placeholder='Start your search'
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div> */}

      {/* Center */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
      
          <GlobeAltIcon className="h-6 cursor-pointer"/>
          <button className="inline-block relative">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
    <span className="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
</button>
          <div className="flex items-center space-x-2 ">
              <MenuIcon className="h-6" />
              <UserCircleIcon className="h-6" />
          </div>
          <button className="hidden md:inline px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
    Add Post
</button>
      </div>
    </header>
  );
}

export default Header;
