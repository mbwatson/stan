import React from 'react'
import { Title, Heading, Subheading } from '../components/Typography'
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
                    <ul>{ offices.map((item, i) => <li key={ `offices-${i}` }>{ item }</li> )}</ul>
                </article>
            </section>

            <section id="services">
                <Heading>Service</Heading>

                <article id="board-membership">
                    <Subheading>Boards' Memberships</Subheading>
                    <ul>{ service.boards.map((item, i) => <li key={ `service-${i}` }>{ item }</li> )}</ul>
                </article>

                <article id="committee-membership">
                    <Subheading>Committees' Memberships</Subheading>
                    
                    <h5>Current</h5>
                    <ul>{ service.committees.current.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>

                    <h5>Past</h5>
                    <ul>{ service.committees.past.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>
                </article>

                <article id="chairing">
                    <Subheading>Committee and Conference Chairing, Co-Chairing</Subheading>
                
                    <ul>{ service.chairing.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>
                </article>

                <article id="government-service">
                    <Subheading>Service to the State and Nation</Subheading>

                    <h5>Service to State Institutions</h5>
                    <ul>{ service.government.state.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>

                    <h5>Service to National Institutions</h5>
                    <ul>{ service.government.nation.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>
                </article>

                <article id="university-service">
                    <Subheading>Service to the University</Subheading>
                    
                    <h5>Departmental Committees</h5>
                    <ul>{ service.university.departmental.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>

                    <h5>College or University Committees</h5>
                    <ul>{ service.university.universityWide.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>
                </article>
            </section>

        </div>
    )
}

export default ServiceView