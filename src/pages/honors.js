import React from 'react'

import { Page } from '../components/Layout'
import { List, ListItem } from '../components/List'

const HonorsPage = () => (
    <Page>
        <h1>Honors & Awards</h1>

        <List>
            <ListItem>
                2012 Fellow, Center for Galapagos Studies, UNC-CH, Oct 2012
            </ListItem>
            <ListItem>
                2006 HPCWire’s "2006 Readers' Choice Award - Best HPC Collaboration between Government and Industry:  Blue Collar  Computing Initiative.
            </ListItem>
            <ListItem>
                2006 Nominated Executive of the Year, Columbus Top Cat regional technology awards
            </ListItem>
            <ListItem>
                2005 HPCWire’s "People to Watch"
            </ListItem>
            <ListItem>
                1999 OSU College of Engineering Annual Research Accomplishment Award
            </ListItem>
            <ListItem>
                1997 OSU College of Engineering Lumley Research Award
            </ListItem>
        </List>
    </Page>
)

export default HonorsPage
