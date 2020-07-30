import React from 'react'
import { Title } from '../components/Typography'
import { List, ListItem } from '../components/List'
import { useHonors } from '../hooks'

const HonorsView = () => {
    const honors = useHonors()

    return (
        <div>
            <Title>Honors & Awards</Title>

            <List>
                { honors.map(({ year, title }) => <ListItem>{ year } - { title }</ListItem>) }
            </List>
        </div>
    )
}

export default HonorsView
