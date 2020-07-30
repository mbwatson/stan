import { graphql, useStaticQuery } from 'gatsby'

const presentationsQuery = graphql`{
    presentations: allPresentationsJson {
        edges {
            node {
                citation
            }
        }
    }
}`

export const usePresentations = () => {
    const { presentations } = useStaticQuery(presentationsQuery)
    return presentations.edges.map(({ node }) => node)
}
