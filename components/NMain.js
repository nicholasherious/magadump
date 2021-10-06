import Link from 'next/link';
import { GetCommentCount } from './GetCommentCount';
import { useState } from 'react';

import ReactTimeAgo from 'react-time-ago';

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';

import { ExtendRead } from './ExtendRead';

function NMain({ post }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='w-full bg-white  shadow-sm overflow-hidden md:max-w-2xl mb-2 py-2'>
      <div className='grid grid-cols-4'>
        <div className='w-full overflow-hidden h-32'>
          <img
            className='object-cover w-full h-full rounded-lg '
            src={post.image}
            alt={post.title}
          />
        </div>
        <div className='w-full col-span-3 '>
          <div className='px-4 mt-2 md:mt-0'>
            <div className='flex tracking-wide text-xs text-gray-400'>
              <span>Posted by: {post.name}</span>
              <span className='bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2 rounded-md ml-1'>
                <svg
                  className='w-3 h-3 mr-1 text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <ReactTimeAgo date={post.createdAt} locale='en-US' />
              </span>
            
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 ml-2'
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
              <p className='px-1'>
                <GetCommentCount countComments={post} />
              </p>
            </div>
            <div>
              <Link href={post._id}>
                <a className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
                  {post.desc ? post.desc : post.title}
                </a>
              </Link>

              <p className='mt-2 text-sm text-gray-500 mb-2'>
                {readMore ? (
                  <ExtendRead readMoreView={post.description} />
                ) : null}
              </p>
            </div>
            <div className='flex items-center'>
              <div className=' border border-gray-200 dark:border-gray-500 rounded-md relative bg-gray-100 dark:bg-gray-700'>
                <button className='inline-flex items-center px-2 py-1 text-xs text-gray-700 dark:text-gray-200 font-semibold'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-600'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' />
                  </svg>
                </button>
              </div>

              <div className='m-1 border border-gray-200 dark:border-gray-500 rounded-md relative bg-gray-100 dark:bg-gray-700'>
                <button className='inline-flex items-center px-2 py-1 text-xs text-gray-700 dark:text-gray-200 font-semibold'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-red-800'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' />
                  </svg>
                </button>
              </div>

              {!readMore ? (
                <div className='flex'>
                  <button
                    onClick={() => setReadMore(!readMore)}
                    className='px-2 py-1 text-xs '
                  >
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
                        d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className='flex'>
                  <button
                    onClick={() => setReadMore(!readMore)}
                    className='px-2 py-1 text-xs '
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
              )}

              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              {/* // Share Buttons */}
              <div className='ml-2'>
                <FacebookShareButton
                  url={`http://localhost:3000/${post._id}`}
                  quote={post.title}
                  className=''
                >
                  <FacebookIcon size={24} round />
                </FacebookShareButton>
              </div>
              <div className='ml-2'>
                <TwitterShareButton
                  url={`http://localhost:3000/${post._id}`}
                  title={post.title}
                  className=''
                >
                  <TwitterIcon size={24} round />
                </TwitterShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NMain;
