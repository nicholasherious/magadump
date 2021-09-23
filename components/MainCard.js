import Image from 'next/image';

function MainCard({post}) {
    console.log(post)
  return (
      <div className="mb-4">
    <div className='rounded overflow-hidden shadow-lg'>
      <div className='relative h-96'>
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt='Mountain'
          layout='fill'
        />
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{post.title}</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #photography
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #travel
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #winter
        </span>
      </div>
    </div>
    </div>
  );
}

export default MainCard;
