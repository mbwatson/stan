import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import { Page } from '../components/Layout'
import { Publication, Citation } from '../components/Publication'
import { ChipTray, Chip } from '../components/Chip'

const publicationsQuery = graphql`
    query PublicationsQuery {
        publications: allPublicationsJson {
            edges {
                node {
                    citation
                    tags
                }
            }
        }
        tags: allPublicationTagsJson {
            edges {
                node {
                    name
                    displayName
                }
            }
        }
    }
`

const PublicationsList = ({ publications }) => (
    <div>
        { publications.map(({ citation, tags }) => (
            <Publication>
                <Citation>
                    { citation }
                </Citation>
                <ChipTray right>
                    { tags.map((tag, i) => <Link key={ i } to={ `/publications/${ tag }` }><Chip>{ tag }</Chip></Link>) }
                </ChipTray>
            </Publication>
        ))}
    </div>
)

const PublicationsPage = () => {
    const [category, setCategory] = useState()

    useEffect(() => {
         
    }, [])

    return (
        <StaticQuery
            query={ publicationsQuery }
            render={ data => {
                const publications = data.publications.edges.map(({ node }) => node)
                const tags = data.tags.edges.map(({ node }) => node)
                return (
                    <Page>
                        <h1>Publications</h1>
                        <ChipTray center style={{ marginBottom: '1rem' }}>
                            {
                                tags.map(({ name, displayName }) => (
                                    <Link key={ name } to={ `/publications/${ name }` }><Chip>{ displayName }</Chip></Link>
                                ))
                            }
                        </ChipTray>
                        <PublicationsList publications={ publications } />
                    </Page>
                )
            } }
        />
    )
}

export default PublicationsPage
