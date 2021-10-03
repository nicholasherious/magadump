import Link from 'next/link';
import { GetCommentCount } from './GetCommentCount';

function NMain({ post }) {
  return (
    <div className='max-w-md mx-auto bg-white rounded-sm shadow-sm overflow-hidden md:max-w-2xl mb-6'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <img
            className='h-40 w-full object-cover md:w-40'
            src={post.image}
            alt={post.title}
          />
        </div>
        <div className='px-4'>
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

            <p className='mt-2 text-sm text-gray-500'>
              {post.description}
            </p>
          </div>
          <div className='flex'>
            <span
              className='tracking-wider text-white bg-red-500 px-4 py-1 text-xs rounded leading-loose font-semibold'
              title=''
            >
               Admin
            </span>

            <span
              className='tracking-wider text-white bg-red-500 px-4 py-1 text-xs rounded leading-loose mx-2 font-semibold'
              title=''
            >
              User
            </span>

            <span
              className='tracking-wider text-white bg-blue-500 px-4 py-1 text-xs rounded leading-loose mx-2 font-semibold'
              title=''
            >
               Winner
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NMain;
