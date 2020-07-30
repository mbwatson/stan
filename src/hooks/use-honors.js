import { graphql, useStaticQuery } from 'gatsby'

const honorsQuery = graphql`{
    honors: allHonorsJson {
        edges {
            node {
                id
                year
                title
            }
        }
    }
}`

export const useHonors = () => {
    const { honors } = useStaticQuery(honorsQuery)
    return honors.edges.map(({ node }) => node)
}
