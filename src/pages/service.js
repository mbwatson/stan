import React from 'react'
import { Title, Heading, Subheading } from '../components/Typography'
import { List, ListItem } from '../components/List'
import { useService } from '../hooks'

const ServiceView = () => {
    const { offices, service } = useService()
    
    console.log(offices, service)

    return (
        <div>
            <Title>Offices & Service</Title>
             
            <section id="offices">
                <article id="offices">
                    <Heading>Offices</Heading>
                    <List bullets>{ offices.map((item, i) => <ListItem key={ `offices-${i}` }>{ item }</ListItem> )}</List>
                </article>
            </section>

            <section id="services">
                <Heading>Service</Heading>

                <article id="board-membership">
                    <Subheading>Boards' Memberships</Subheading>
                    <List bullets>{ service.boards.map((item, i) => <ListItem key={ `service-${i}` }>{ item }</ListItem> )}</List>
                </article>

                <article id="committee-membership">
                    <Subheading>Committees' Memberships</Subheading>
                    
                    <h5>Current</h5>
                    <List bullets>{ service.committees.current.map((item, i) => <ListItem key={ `current-committees-${i}` }>{ item }</ListItem> )}</List>

                    <h5>Past</h5>
                    <List bullets>{ service.committees.past.map((item, i) => <ListItem key={ `current-committees-${i}` }>{ item }</ListItem> )}</List>
                </article>

                <article id="chairing">
                    <Subheading>Committee and Conference Chairing, Co-Chairing</Subheading>
                
                    <List bullets>{ service.chairing.map((item, i) => <ListItem key={ `current-committees-${i}` }>{ item }</ListItem> )}</List>
                </article>

                <article id="government-service">
                    <Subheading>Service to the State and Nation</Subheading>

                    <h5>Service to State Institutions</h5>
                    <List bullets>{ service.government.state.map((item, i) => <ListItem key={ `current-committees-${i}` }>{ item }</ListItem> )}</List>

                    <h5>Service to National Institutions</h5>
                    <List bullets>{ service.government.nation.map((item, i) => <ListItem key={ `current-committees-${i}` }>{ item }</ListItem> )}</List>
                </article>

                <article id="university-service">
                    <Subheading>Service to the University</Subheading>
                    
                    <h5>Departmental Committees</h5>
                    <List bullets>{ service.university.departmental.map((item, i) => <ListItem key={ `current-committees-${i}` }>{ item }</ListItem> )}</List>

                    <h5>College or University Committees</h5>
                    <List bullets>{ service.university.universityWide.map((item, i) => <ListItem key={ `current-committees-${i}` }>{ item }</ListItem> )}</List>
                </article>
            </section>

        </div>
    )
}

export default ServiceView