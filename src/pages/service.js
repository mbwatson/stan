import React from 'react'
import { Title } from '../components/Typography'
import { useService } from '../hooks'

const ServiceView = () => {
    const { offices, service } = useService()
    
    console.log(offices, service)

    return (
        <div>
            <Title>Offices & Service</Title>
             
            <section id="offices">
                <article id="offices">
                    <h3>Offices</h3>
                    <ul>{ offices.map((item, i) => <li key={ `offices-${i}` }>{ item }</li> )}</ul>
                </article>
            </section>

            <section id="services">
                <h3>Service</h3>

                <article id="board-membership">
                    <h4>Boards' Memberships</h4>
                    <ul>{ service.boards.map((item, i) => <li key={ `service-${i}` }>{ item }</li> )}</ul>
                </article>

                <article id="committee-membership">
                    <h4>Committees' Memberships</h4>
                    
                    <h5>Current</h5>
                    <ul>{ service.committees.current.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>

                    <h5>Past</h5>
                    <ul>{ service.committees.past.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>
                </article>

                <article id="chairing">
                    <h4>Committee and Conference Chairing, Co-Chairing</h4>
                
                    <ul>{ service.chairing.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>
                </article>

                <article id="government-service">
                    <h4>Service to the State and Nation</h4>

                    <h5>Service to State Institutions</h5>
                    <ul>{ service.government.state.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>

                    <h5>Service to National Institutions</h5>
                    <ul>{ service.government.nation.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}</ul>
                </article>

                <article id="university-service">
                    <h4>Service to the University</h4>
                    
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