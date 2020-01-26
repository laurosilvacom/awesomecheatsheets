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
		"tweetText": "Check out the community led cheatsheets for @eggheadio courses! 🤓 https://AwesomeCheatsheets.com by @laurosilvacom",
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
			"/Automate-Daily-Development-Tasks-Bash"
		],
    	"collapsedNav": [
			"/GraphQL-Query-Language",
			"/Composable-Gatsby-Themes",
			"/Automate-Daily-Development-Tasks-Bash"
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
