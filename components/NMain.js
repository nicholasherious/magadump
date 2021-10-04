import Link from 'next/link';
import { GetCommentCount } from './GetCommentCount';
import { useState } from 'react'

import Truncate from 'react-truncate';
import { ExtendRead } from './ExtendRead';

function NMain({ post }) {
    const [readMore, setReadMore] = useState(false)
   
  return (
    <div className='w-full bg-white  shadow-sm overflow-hidden md:max-w-2xl mb-2 py-2'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <img
            className='h-70 md:h-30 w-full rounded-lg relative shadow-xl md:w-40'
            src={post.image}
            alt={post.title}
          />
        </div>
        <div className='px-4 mt-2 md:mt-0'>
          <div className='flex tracking-wide text-xs text-gray-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
              />
            </svg>
            <p className='px-1'>209 Shares</p>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
              />
            </svg>
            <p className="px-1"><GetCommentCount countComments={post}/></p>
          </div>
          <div>
            <Link
              href={post._id}
            
            >
              <a className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
              
                {post.title}
            
              </a>
            </Link>

            <p className='mt-2 text-sm text-gray-500 mb-2'>
            {readMore ?  <ExtendRead readMoreView={post.description} /> : null}
                
            
            </p>
          </div>
          <div className='flex items-center'>
          <div className="m-2 border border-gray-400 dark:border-gray-500 rounded-md relative bg-gray-200 dark:bg-gray-700">
          <div className="inline-flex items-center px-2 py-1 text-xs text-gray-700 dark:text-gray-200 font-semibold"  >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
</svg>
            Boost
          </div>
        </div>

        <div className="m-2 border border-blue-400 dark:border-blue-500 rounded-md relative bg-blue-200 dark:bg-blue-700">
          <div className="px-2 py-1 text-xs text-blue-700 dark:text-blue-200 font-semibold">
            Dump
          </div>
        </div>

 {!readMore ? 
        <div className="flex">
          <button onClick={() => setReadMore(!readMore)} className="px-2 py-1 text-xs ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
</svg>
          </button>
        </div> :
        <div className="flex">
          <button onClick={() => setReadMore(!readMore)} className="px-2 py-1 text-xs ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
</svg>
          </button>
        </div> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default NMain;
