import { useState } from 'react'

export const AuthorComment = ({ author }) => {
	const [firstName, setFirstName] = useState(null && author.name.split(" ")[0])





    return (
        <div className="p-6 overflow-hidden shadow bg-coolGray-50 text-coolGray-800">
	<article>
		<h2 className="text-xl font-bold">{firstName} says...</h2>
		<p className="mt-4 text-coolGray-600">{author.desc}</p>
		<div className="flex items-center mt-8 space-x-4">
			<img src={author.authorImg} alt="" className="w-10 h-10 rounded-full bg-coolGray-500" />
			<div>
				<h3 className="text-sm font-medium">{author.name}</h3>
				<time datetime="2021-02-18" className="text-sm text-coolGray-600">Feb 18th 2021</time>
			</div>
		</div>
	</article>
</div>
    )
}
