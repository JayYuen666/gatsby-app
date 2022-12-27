import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
	siteMetadata: {
		siteName: `Using TypeScript`,
		sourceUrl: `https://github.com/gatsbyjs/gatsby/tree/master/examples/using-typescript`,
	},
	graphqlTypegen: true,
	plugins: [],
}

export default config
