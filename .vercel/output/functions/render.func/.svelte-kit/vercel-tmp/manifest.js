export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["2.png","3.jpg","4.png","5.png","aboutus.png","aboutus.webp","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","arrow.png","arrow.svg","bgfooter.webp","cbse logo.jpg","cbse logo.webp","cbse-main-logo.svg","cbse.jpg","cbse.png","college.jpg","events/1.png","events/2.png","events/3.png","events/4.png","events/5.png","events/6.png","events/7.png","events/8.png","facebook.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","fish.webp","font/font1.ttf","gallery/img (0).jpeg","gallery/img (1).jpeg","gallery/img (10).jpeg","gallery/img (11).jpeg","gallery/img (12).jpeg","gallery/img (13).jpeg","gallery/img (14).jpeg","gallery/img (15).jpeg","gallery/img (16).jpeg","gallery/img (17).jpeg","gallery/img (18).jpeg","gallery/img (19).jpeg","gallery/img (2).jpeg","gallery/img (20).jpeg","gallery/img (21).jpeg","gallery/img (22).jpeg","gallery/img (23).jpeg","gallery/img (24).jpeg","gallery/img (25).jpeg","gallery/img (3).jpeg","gallery/img (4).jpeg","gallery/img (5).jpeg","gallery/img (6).jpeg","gallery/img (7).jpeg","gallery/img (8).jpeg","gallery/img (9).jpeg","GT-AmericaExtendedRegular.ttf","herobg.png","instagram.svg","lab.jpg","library.jpg","linkedin.svg","logo.png","management.jpg","md/academiccalender.pdf","md/building_safety.pdf","md/fee.pdf","md/fire.pdf","md/land_certificate.pdf","md/md.pdf","md/noc.pdf","md/pta.pdf","md/recognitio.pdf","md/sanitary.pdf","md/selfaffidavit.pdf","md/smc.pdf","md/society.pdf","md/staff_list.pdf","md/structural.pdf","menu.svg","playground.jpg","site.webmanifest","step1.svg","step2.svg","step3.svg","top-1.jpg","top-2.jpg","twitter.svg","values.png","vision .jpg","water.jpeg","youtube.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon",".ttf":"font/ttf",".jpeg":"image/jpeg",".pdf":"application/pdf",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-895d48cf.js","imports":["_app/immutable/start-895d48cf.js","_app/immutable/chunks/index-d163e564.js","_app/immutable/chunks/singletons-f526a056.js","_app/immutable/chunks/index-4d71d29f.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/aboutus",
				pattern: /^\/aboutus\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contactus",
				pattern: /^\/contactus\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/curriculum",
				pattern: /^\/curriculum\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/infra",
				pattern: /^\/infra\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/md",
				pattern: /^\/md\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
