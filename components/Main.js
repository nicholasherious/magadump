import Image from 'next/image'
import Link from 'next/link'

function Main({ post }) {
    return (
        
            <div className="mb-10 ">
    <div className='flex max-w-xl bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
        <div className='flex items-center w-full'>
            <div className='w-full'>
                
                <div className="border-b border-gray-100"></div> 
                <div className='relative text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'><img className="rounded" src={post.featuredImage.node.sourceUrl} />
                <div class="absolute top-0 right-0 -mt-3 mr-3">
                        <div className="flex items-center rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
</svg> <span className="align-middle">FRESH</span></div>
                    </div>
                </div>
                

                
                <div className='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2'><Link href={`/${post.slug}`}><a>{post.title} </a></Link></div>
                <div className='text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
                <div className="flex justify-start mb-4 border-t border-gray-100">
                    <div className="flex w-full mt-1 pt-2 pl-5">
                         <span className="flex h-min w-min space-x-1 items-center rounded-md text-gray-400 hover:text-rose-600 bg-gray-100 hover:bg-rose-50 py-2 px-2 text-xs font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <p className="font-semibold text-xs">10</p>
    </span>
    
                       
                        
                           </div>
                    <div className="flex justify-end w-full mt-1 pt-2 pr-5 space-x-2">
                        
                        <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
        </button>
        <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
        </button>
                    </div>
                </div>
                <div className="flex w-full border-t border-gray-100">
                    <div className="mt-3 mx-5 flex flex-row">
                        
                        <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>Comments:<div className="ml-1 text-gray-400 font-thin text-ms"> 30</div></div>
                        <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>Views: <div className="ml-1 text-gray-400 font-thin text-ms"> 60k</div></div>
                    </div>
                    <div className="mt-3 mx-5 w-full flex justify-end">
                        <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
<p>{new Date().toLocaleString() + ""}</p>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    
</div>
        
    )
}

export default Main
