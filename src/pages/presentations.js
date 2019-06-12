import React, { Fragment } from 'react'
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
                    <Fragment>
                        <Title>Presentations</Title>
                        <List>
                            { presentations.map(({ citation }) => <ListItem>{ citation }</ListItem>) }
                        </List>
                    </Fragment>
                )
            } }
        />
    )
}

export default presentationsView
