import Link from 'next/link'

function SinglePost({post}) {
    
    return (
        <div>
            <div className="container w-full md:max-w-3xl mx-auto pt-20">

<div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

    {/* <!--Title--> */}
    <div className="font-sans">
        <p className="text-base md:text-sm text-green-500 font-bold">&lt; <Link href={`/`}><a className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</a></Link></p>
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{post.title}</h1>
                <p className="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>
    </div>


    {/* <!--Post Content--> */}

{/* Setup featured Image */}

    {/* <!--Lead Para--> */}

    {/* Set inner content from wordpress */}

    <div className="py-6" dangerouslySetInnerHTML={{ __html: post.content }} />
    <p className="py-6">
        👋 Welcome fellow <a className="text-green-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a> and miminal monochrome blog fan. This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
    </p>

    <p className="py-6">The basic blog page layout is available and all using the default Tailwind CSS classNamees (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classNamees into components.</p>


    <h1 className="py-2 font-sans">Heading 1</h1>
    <h2 className="py-2 font-sans">Heading 2</h2>
    <h3 className="py-2 font-sans">Heading 3</h3>
    <h4 className="py-2 font-sans">Heading 4</h4>
    <h5 className="py-2 font-sans">Heading 5</h5>
    <h6 className="py-2 font-sans">Heading 6</h6>

    <p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

    <ol>
        <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
        <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
        <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
    </ol>

    <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote>

    <p className="py-6">Example code block:</p>
    <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
&lt;header className="site-header outer"&gt;
&lt;div className="inner"&gt;

&lt;/div&gt;
&lt;/header&gt;
        </code>
    </pre>


    {/* <!--/ Post Content--> */}

</div>

{/* <!--Tags --> */}
<div className="text-base md:text-sm text-gray-500 px-4 py-6">
    Tags: <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a> . <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
</div>

{/* <!--Divider--> */}
<hr className="border-b-2 border-gray-400 mb-8 mx-4" />


{/* <!--Subscribe--> */}
<div className="container px-4">
    <div className="font-sans bg-gradient-to-b from-green-100 to-gray-100 rounded-lg shadow-xl p-4 text-center">
        <h2 className="font-bold break-normal text-xl md:text-3xl">Subscribe to my Newsletter</h2>
        <h3 className="font-bold break-normal text-gray-600 text-sm md:text-base">Get the latest posts delivered right to your inbox</h3>
        <div className="w-full text-center pt-4">
            <form action="#">
                <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                    <input type="email" placeholder="youremail@example.com" className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none" />
                    <button type="submit" className="flex-1 mt-4 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</div>

    )
}

export default SinglePost
