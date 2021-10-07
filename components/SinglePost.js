import Image from 'next/image'
import Link from 'next/link'
import { AuthorComment } from './AuthorComment'
import DisqusComments from './Comments'

function SinglePost({ postSingle }) {
    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
	<article className="space-y-8 bg-coolGray-100 text-coolGray-900">
		<div className="space-y-6">
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{postSingle.title}</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-coolGray-600">
				<div className="flex items-center md:space-x-2">
					<img src={postSingle.authorImg} alt="" className="w-4 h-4 border rounded-full bg-coolGray-500 border-coolGray-300" />
					<p className="text-sm">Posted by: {postSingle.name} • July 19th, 2021</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">Publisher: {postSingle.publisher}</p>
			</div>
		</div>
        <div>
        <img
            className='h-250 w-full object-cover md:w-100'
            src={postSingle.image}
            alt={postSingle.title}
          />
        </div>
		<div className="text-coolGray-800">
			<p>{postSingle.description}</p>
		</div>
        <div className="">
			
			{postSingle.url ?  
        <Link
              href={postSingle.url}
            
            >
              <a className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
                Read More...
              </a>
            </Link> : null}
			
        </div>
        <div>
          
            <AuthorComment author={postSingle}/>
            </div>
        {/* //Comments */}
        <DisqusComments postComment={postSingle}/>
	</article>
	<div>
		<div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-coolGray-600">
			<a href="#" className="px-3 py-1 rounded-sm hover:underline bg-blue-600 text-coolGray-50">#MambaUI</a>
			<a href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-coolGray-50">#TailwindCSS</a>
			<a href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-coolGray-50">#Angular</a>
		</div>
		<div className="space-y-2">
			<h4 className="text-lg font-semibold">Related posts</h4>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<a href="#" className="hover:underline">Nunc id magna mollis</a>
				</li>
				<li>
					<a href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
				</li>
				<li>
					<a href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
				</li>
			</ul>
		</div>
	</div>
</div>
    )
}

export default SinglePost
