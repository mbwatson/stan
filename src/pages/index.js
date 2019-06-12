import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Title } from '../components/Typography'
import { List, ListItem } from '../components/List'
import Img from "gatsby-image/withIEPolyfill"

const ProfileImage = styled(Img)`
    border-radius: 1rem;
    margin-bottom: 2rem;
    -webkit-filter: sepia(50%) opacity(0.9);
    filter: sepia(50%) opacity(0.9) drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
`

const IndexView = props => {
    console.log(props.data.imageSharp)
    return (
        <Fragment>
            <ProfileImage fluid={ props.data.imageSharp.childImageSharp.fluid } />

            <Title>Biography</Title>
            
            <p>
                Stanley C. Ahalt is director of the Renaissance Computing Institute (RENCI), professor of computer science at the University of North Carolina at Chapel Hill, and the head of the Biomedical Informatics Core for the North Carolina Translational and Clinical Sciences Institute (NC TraCS). He is principal investigator for the Water Science Software Institute project, which seeks to build a cyberinfrastructure for managing, sharing and using water science data. As director of RENCI, he was instrumental in launching two major data science initiatives: The National Consortium for Data Science (NCDS), a public-private partnership to address big data challenges and opportunities in research and business; and iRODS, an effort to develop a branch of the popular integrated Rule-Oriented Data System as enterprise-quality software, complete with rigorous testing and a robust, feature-rich code base.
            </p>

            <p>
                Dr. Ahalt serves as a member of the executive board of the <a href="https://irods.org" target="_blank" rel="noopener noreferrer">iRODS Consortium</a>, an international group focused on long-term sustainability of the iRODS data management platform. He is also a co-PI with the DataNet Federation Consortium, a National Science Foundation project to prototype an integrated platform for sharing, using and managing data across distances and scientific fields. Other leadership roles include past chair of the Coalition for Academic Scientific Computing, former co-chair of the Ohio Broadband Council, extramural member of the National Cancer Institute’s Advanced Biomedical Computing Center’s Oversight Committee, and member of the Council on Competitiveness High Performance Computing Advisory Committee. He has authored or co-authored more than 120 technical papers and been principal investigator or co-principal investigator on research grants totaling more than $17 million. His recent research publications have focused on decoupling data through encryption.
            </p>

            <p>
                Before coming to RENCI in 2009, Dr. Ahalt was executive director of the Ohio Supercomputer Center (OSC) from 2003 – 2009 and a professor in the Department of Electrical and Computer Engineering at The Ohio State University for 22 years.  Ahalt launched several model programs at OSC, including Blue Collar Computing, a national program to bring high performance computing to a wide spectrum of industries and applications, and OSCnet, a leading high-speed research network for K-12 schools, higher education and economic development. He holds a Ph.D. in electrical and computer engineering from Clemson University and master’s and bachelor’s degrees in electrical engineering from Virginia Polytechnic Institute and State University.
            </p>

            <Title>Education</Title>

            <List>
                <ListItem>
                    Ph.D. in  Electrical  and Computer Engineering
                    Clemson University (1986)
                </ListItem>
                <ListItem>
                    M.S. in Electrical Engineering
                    Virginia Tech (1980)
                </ListItem>
                <ListItem>
                    B.S. in Electrical Engineering
                    Virginia Tech (1978)
                </ListItem>
            </List>
        </Fragment>
    )
}

export default IndexView

export const imageQuery = graphql`
    query {
        imageSharp: file(relativePath: {eq: "stan.jpg"}) {
            id
            childImageSharp {
                fluid(maxWidth: 900) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                }
            }
        }
    }
`
