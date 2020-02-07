const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://awesomecheatsheets.com",
		"gaTrackingId": null
	},
	"header": {
		"logo": "",
		"logoLink": "/",
		"title": "Awesome Cheatsheets",
		"githubUrl": "https://github.com/laurosilvacom/awesomecheatsheets",
		"helpUrl": "https://github.com/laurosilvacom/awesomecheatsheets/issues/new",
		"tweetText": "This is meant to be a community resource, so feel free to contribute by adding your notes/cheatsheets: https://AwesomeCheatsheets.com by @laurosilvacom",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/GraphQL-Query-Language",
			"/Composable-Gatsby-Themes",
			"/Automate-Daily-Development-Tasks-Bash",
			"/Immutable-JavaScript-Data-Structures-with-Immer",
			"/Build-Custom-CLI-Tooling-with-oclif-and-TypeScript"
		],
    	"collapsedNav": [
			"/GraphQL-Query-Language",
			"/Composable-Gatsby-Themes",
			"/Automate-Daily-Development-Tasks-Bash",
			"/Immutable-JavaScript-Data-Structures-with-Immer",
			"/Build-Custom-CLI-Tooling-with-oclif-and-TypeScript"
    	],
		"links": [
			{ "text": "Repo", "link": "https://github.com/laurosilvacom/awesomecheatsheets"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Awesome Cheatsheets",
		"description": "Community led cheatsheets for Egghead courses",
		"ogImage": "https://awesomecheatsheets.com/hero.png",
		"docsLocation": "https://github.com/laurosilvacom/awesomecheatsheets/tree/master/content",
		"favicon": "https://awesomecheatsheets.com/icon.png"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Good Notes Template",
			"short_name": "GoodNotesTemplate",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/icon.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
