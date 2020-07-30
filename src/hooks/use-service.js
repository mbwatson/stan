import { graphql, useStaticQuery } from 'gatsby'

const serviceQuery = graphql`{
    service: allServiceJson {
        edges {
            node {
                offices
                service {
                    boards
                    committees {
                        current
                        past
                    }
                    chairing
                    government {
                        state
                        nation
                    }
                    university {
                        departmental
                        universityWide
                    }
                }
            }
        }
    }
}`

export const useService = () => {
    const { service } = useStaticQuery(serviceQuery)
    return service.edges.map(({ node }) => node)[0]
}
