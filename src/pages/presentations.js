import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Title } from '../components/Typography'
import { List, ListItem } from '../components/List'

const presentationsQuery = graphql`
    query presentationsQuery {
        presentations: allPresentationsJson {
            edges {
                node {
                    citation
                }
            }
        }
    }`

const presentationsView = () => {
    return (
        <StaticQuery
            query={ presentationsQuery }
            render={ data => {
                const presentations = data.presentations.edges.map(({ node }) => node)
                return (
                    <div>
                        <Title>Presentations</Title>
                        <List>
                            { presentations.map(({ citation }) => <ListItem>{ citation }</ListItem>) }
                        </List>
                    </div>
                )
            } }
        />
    )
}

export default presentationsView
