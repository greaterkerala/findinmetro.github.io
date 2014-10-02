{
	"topscrollmodules":
	[

	],
	"leftpanemodules" : 
	[
	{"type":"weather", "Title": "Current Weather", "Data": {"height": "400px", "lat": "9.7415985", "lon":"76.5302717"}}, 				 
	{"type":"dynamicyoutube", "Title": "Latest Videos", "Data": {"height": "300px", "url":"https://gdata.youtube.com/feeds/api/videos?q=kerala%20landscape&orderby=viewCount&max-results=10&alt=json"}}, 
	{"type":"staticyoutube", "Title": "Editor Picks", "Data": {"url":"data/kerala/gallery/video/home-videos.js"}}
	],
	"contentpanemodules" : 
	[
	{"type":"rss",  "Title": "News Headlines",   "Data": "http://feeds.feedburner.com/mathrubhumi"}
	],
	"rightpanemodules":
	[
	{"type":"flickr", "Title": "New Photos", "Data": {"url":"https://api.flickr.com/services/feeds/photos_public.gne?tags=kerala landscape", "limit":"20"}}
	],

	"bottomscrollmodules":
	[	
	{"type":"html", "Title": "Keralam", "Data": "data/kerala/about/about.html"}
	]

}
