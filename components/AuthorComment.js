export const AuthorComment = ({ author }) => {
    return (
        <div className="p-6 overflow-hidden shadow bg-coolGray-50 text-coolGray-800">
	<article>
		<h2 className="text-xl font-bold">{author.name} Says...</h2>
		<p className="mt-4 text-coolGray-600">Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet libero. Fusce faucibus porttitor lacus, at blandit mauris blandit eget. Donec facilisis lorem et risus commodo, quis auctor nulla varius. Pellentesque facilisis feugiat turpis, id molestie augue semper quis. Nunc ornare eget est sit amet elementum.</p>
		<div className="flex items-center mt-8 space-x-4">
			<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full bg-coolGray-500" />
			<div>
				<h3 className="text-sm font-medium">Leroy Jenkins</h3>
				<time datetime="2021-02-18" className="text-sm text-coolGray-600">Feb 18th 2021</time>
			</div>
		</div>
	</article>
</div>
    )
}
