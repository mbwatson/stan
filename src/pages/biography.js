import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Title } from '../components/Typography'
import { List, ListItem } from '../components/List'
import BackgroundImage from 'gatsby-background-image'

const BioImage = styled.picture`
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    border-radius: 50%;
    margin: 1rem auto;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
    shapeOutside: circle();
    display: block;
    transition: min-width 250ms, min-height 250ms;
    @media (min-width: 480px) {
        float: right;
        margin: 0 0 1rem 1rem;
    }
    @media (min-width: 600px) {
        min-width: 250px;
        min-height: 250px;
    }
`

const ContactView = props => (
    <article>
        <section>
            <Title>Biography</Title>
            <BioImage as={ BackgroundImage } fluid={ props.data.imageSharp.childImageSharp.fluid } />
            <p>
                Stanley C. Ahalt is director of the <a href="https://renci.org" target="_blank" rel="noopener noreferrer">Renaissance Computing Institute (RENCI)</a>, professor of computer science at the University of North Carolina at Chapel Hill, and the head of the Biomedical Informatics Core for the North Carolina Translational and Clinical Sciences Institute (NC TraCS). He is principal investigator for the Water Science Software Institute project, which seeks to build a cyberinfrastructure for managing, sharing and using water science data. As director of RENCI, he was instrumental in launching two major data science initiatives: The National Consortium for Data Science (NCDS), a public-private partnership to address big data challenges and opportunities in research and business; and iRODS, an effort to develop a branch of the popular integrated Rule-Oriented Data System as enterprise-quality software, complete with rigorous testing and a robust, feature-rich code base.
            </p>

            <p>
                Dr. Ahalt serves as a member of the executive board of the <a href="https://irods.org" target="_blank" rel="noopener noreferrer">iRODS Consortium</a>, an international group focused on long-term sustainability of the iRODS data management platform. He is also a co-PI with the DataNet Federation Consortium, a National Science Foundation project to prototype an integrated platform for sharing, using and managing data across distances and scientific fields. Other leadership roles include past chair of the Coalition for Academic Scientific Computing, former co-chair of the Ohio Broadband Council, extramural member of the National Cancer Institute’s Advanced Biomedical Computing Center’s Oversight Committee, and member of the Council on Competitiveness High Performance Computing Advisory Committee. He has authored or co-authored more than 120 technical papers and been principal investigator or co-principal investigator on research grants totaling more than $17 million. His recent research publications have focused on decoupling data through encryption.
            </p>

            <p>
                Before coming to RENCI in 2009, Dr. Ahalt was executive director of the Ohio Supercomputer Center (OSC) from 2003 – 2009 and a professor in the Department of Electrical and Computer Engineering at The Ohio State University for 22 years.  Ahalt launched several model programs at OSC, including Blue Collar Computing, a national program to bring high performance computing to a wide spectrum of industries and applications, and OSCnet, a leading high-speed research network for K-12 schools, higher education and economic development. He holds a Ph.D. in electrical and computer engineering from Clemson University and master’s and bachelor’s degrees in electrical engineering from Virginia Polytechnic Institute and State University.
            </p>
        </section>

        <Title>Education</Title>
        
        <section>
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
        </section>
    </article>
)

export default ContactView

export const imageQuery = graphql`
    query {
        imageSharp: file(relativePath: {eq: "stan-close.jpg"}) {
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
