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
                <h3>Offices</h3>
                <ul>
                    { offices.map((item, i) => <li key={ `offices-${i}` }>{ item }</li> )}
                </ul>
            </section>

            <section id="services">
                <h3>Service</h3>
                <ul>
                    { service.boards.map((item, i) => <li key={ `service-${i}` }>{ item }</li> )}
                </ul>

                <h4>Boards' Memberships</h4>
                <ul>
                    { service.boards.map((item, i) => <li key={ `service-${i}` }>{ item }</li> )}
                </ul>

                <h4>Committees' Memberships</h4>

                <h4>Boards' Memberships</h4>

                <h5>Current</h5>
                <ul>
                    { service.committees.current.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}
                </ul>

                <h5>Past</h5>
                <ul>
                    { service.committees.past.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}
                </ul>

                <h4>Committee and Conference Chairing, Co-Chairing</h4>

                <ul>
                    { service.chairing.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}
                </ul>

                <h4>Service to the State and Nation</h4>

                <h5>Service to State Institutions</h5>
                <ul>
                    { service.government.state.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}
                </ul>

                <h5>Service to National Institutions</h5>
                <ul>
                    { service.government.nation.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}
                </ul>

                <h4>Service to the University</h4>
                
                <h5>Departmental Committees</h5>
                <ul>
                    { service.university.departmental.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}
                </ul>

                <h5>College or University Committees</h5>
                <ul>
                    { service.university.universityWide.map((item, i) => <li key={ `current-committees-${i}` }>{ item }</li> )}
                </ul>
            </section>
            
        </div>
    )
}

export default ServiceView