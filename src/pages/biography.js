import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
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
                Dr. Stan Ahalt is the Director of the <a href="https://renci.org" target="_blank" rel="noopener noreferrer">Renaissance Computing Institute</a> (RENCI) at UNC-Chapel Hill. As Director, he leads a team of research scientists, software and network engineers, data science specialists, and visualization experts who work closely with faculty research teams at UNC, Duke, and NC State as well as with partners across the country. RENCI’s role is to provide enabling cyberinfrastructure to these research collaborations, which entails working on the challenges of data management, sharing, integration, and security. Dr. Ahalt is also a Professor in the UNC Computer Science Department and the Associate Director of Informatics and Data Science (IDSci) in the North Carolina Translational and Clinical Sciences Institute (NC TraCS), UNC’s CTSA award; in this role, Dr. Ahalt leverages the expertise and resources of RENCI to foster clinical and translational research across the UNC campus. Dr. Ahalt earned his Ph.D. in Electrical and Computer Engineering from Clemson University and has over 30 years of experience in data science, signal and image processing, and pattern recognition/ML.
            </p>
            
            <p>
                As director of RENCI, he was instrumental in launching two major data science initiatives: The National Consortium for Data Science (NCDS), a public-private partnership to address big data challenges and opportunities in research and business; and iRODS, an effort to develop a branch of the popular integrated Rule-Oriented Data System as enterprise-quality software, complete with rigorous testing and a robust, feature-rich code base. Dr. Ahalt serves as a member of the executive board of the iRODS Consortium, an international group focused on long-term sustainability of the iRODS data management platform. 
            </p>

            <p>
                Dr. Ahalt is PI for the NHLBI BioData Catalyst Coordinating Center, which manages and unifies the diverse teams working on DataSTAGE. Furthermore, in his co-PI role on the NCATS Biomedical Data Translator project, he leads the Green Team to best leverage RENCI’s, TraCS’, and UNC’s resources and expertise toward completion of the goal to build architecture and test the feasibility of the Translator. Dr. Ahalt is also PI for NSF’s South Big Data Innovation Hub, which accelerates partnerships among people in business, academia, and government who apply data science and analytics to help solve regional and national challenges.
            </p>

            <p>
                Other leadership roles include past chair of the Coalition for Academic Scientific Computing, former co-chair of the Ohio Broadband Council, extramural member of the National Cancer Institute’s Advanced Biomedical Computing Center’s Oversight Committee, and member of the Council on Competitiveness High Performance Computing Advisory Committee. He has authored or co-authored more than 120 technical papers and been principal investigator or co-principal investigator on research grants totaling more than $17 million. His recent research publications have focused on decoupling data through encryption. Before coming to RENCI in 2009, Dr. Ahalt was executive director of the Ohio Supercomputer Center (OSC) from 2003 – 2009 and a professor in the Department of Electrical and Computer Engineering at The Ohio State University for 22 years. Ahalt launched several model programs at OSC, including Blue Collar Computing, a national program to bring high performance computing to a wide spectrum of industries and applications, and OSCnet, a leading high-speed research network for K-12 schools, higher education and economic development.
            </p>
        </section>

        <Title>Education</Title>
        
        <section>
            <List>
                <ListItem>
                    Ph.D. in Electrical and Computer Engineering
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
