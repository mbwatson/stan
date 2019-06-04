import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Page } from '../components/Layout'
import { Publication, Citation, TagChipLink } from '../components/Publication'
import { ChipTray, Chip } from '../components/Chip'

const PublicationsTemplatePage = ({ pageContext }) => {
    const { allTags, tag, publications, count } = pageContext
    
    const getDisplayName = name => allTags.find(tag => tag.name === name).displayName

    return (
        <Page>
            <ChipTray center style={{ marginBottom: '1rem' }}>
                <TagChipLink to="/publications" activeClassName="active">All</TagChipLink>
                {
                    allTags.map(({ name, displayName }) => (
                        <TagChipLink key={ name } to={ `/publications/${ name }` } activeClassName="active">{ displayName }</TagChipLink>
                    ))
                }
            </ChipTray>
            <h1>Publications</h1>
            { <h2>{ tag && tag.displayName || 'All' } ({ count })</h2> }
            <div>
                {
                    publications.map(({ citation, tags }, i) => (
                        <Publication key={ i }>
                            <Citation>
                                { citation }
                            </Citation>
                            <ChipTray right>
                                { tags.map((tag, j) => <TagChipLink key={ j } to={ `/publications/${ tag }` }>{ getDisplayName(tag) }</TagChipLink>) }
                            </ChipTray>
                        </Publication>
                    ))
                }
            </div>
        </Page>
    )
}

export default PublicationsTemplatePage
