import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Title } from '../components/Typography'
import { List, ListItem } from '../components/List'
import { usePresentations } from '../hooks'

const PresentationsView = () => {
    const presentations = usePresentations()

    return (
        <div>
            <Title>Presentations</Title>
            <List>
                { presentations.map(({ citation }) => <ListItem>{ citation }</ListItem>) }
            </List>
        </div>
    )
}

export default PresentationsView
