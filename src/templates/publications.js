import React from 'react'
import { Publication, Citation, TagChipLink } from '../components/Publication'
import { Title, Paragraph, Footnote } from '../components/Typography'

const PublicationsTemplatePage = ({ pageContext }) => {
    const { allTags, tag, publications, count } = pageContext
    
    const getDisplayName = name => allTags.find(tag => tag.name === name).displayName

    return (
        <div>
            <Paragraph center style={{ marginBottom: '1rem' }}>
                <TagChipLink to="/publications" activeClassName="active">All</TagChipLink>
                {
                    allTags.map(({ name, displayName }) => (
                        <TagChipLink key={ name } to={ `/publications/${ name }` } activeClassName="active">{ displayName }</TagChipLink>
                    ))
                }
            </Paragraph>
            <Title style={{ display: 'flex', justifyContent: 'space-between', margin: 0 }}>
                <span>Publications</span>
                <span>{ tag ? tag.displayName : 'All' } ({ count })</span>
            </Title>
            <Paragraph right>
                <Footnote>† Denotes a student co-author</Footnote>
            </Paragraph>
            <div>
                {
                    publications.map(({ citation, tags }, i) => (
                        <Publication key={ i }>
                            <Citation>
                                { citation }
                            </Citation>
                            <Paragraph right>
                                { tags.map((tag, j) => <TagChipLink key={ j } to={ `/publications/${ tag }` }>{ getDisplayName(tag) }</TagChipLink>) }
                            </Paragraph>
                        </Publication>
                    ))
                }
            </div>
        </div>
    )
}

export default PublicationsTemplatePage
