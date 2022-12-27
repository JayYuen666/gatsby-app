import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"

interface IndexPageProps {
	site: {
		siteMetadata: {
			siteName: string
			sourceUrl: string
		}
	}
}
function Index({ data: { site } }: PageProps<IndexPageProps>) {
	return (
		<main>
			<h1>{site.siteMetadata.siteName}</h1>
			<p className="custom-text">This example is hosted on <a href={site.siteMetadata.sourceUrl}>GitHub</a>. Continue reading <a href="https://github.com/JayYuen666/yuen.git">TypeScript and Gatsby documentation</a> to learn more.</p>
		</main>
	)
}

export default Index;

export const Head: HeadFC = () => <title>Home</title>

export const pageQuery = graphql`
	query IndexQuery {
    	site {
			siteMetadata {
        	siteName
        	sourceUrl
		}
	}
}
`
