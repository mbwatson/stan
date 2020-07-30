import { graphql, useStaticQuery } from 'gatsby'

const publicationsQuery = graphql`{
    publications: allPublicationsJson {
        edges {
            node {
                citation
                tags
            }
        }
    }
}`

export const usePublications = () => {
    const { publications } = useStaticQuery(publicationsQuery)
    return publications.edges.map(({ node }) => node)
}
