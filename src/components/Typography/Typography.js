import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Title = styled.h2`
    color: var(--color-dark);
    font-weight: normal;
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Title.propTypes = {
    children: PropTypes.node.isRequired,
}

// 

export const Subtitle = styled.h3`
    color: var(--color-ash);
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
}

// 

export const Heading = styled.h3`
    color: var(--color-primary-dark);
    text-align: left;
    font-weight: normal;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Heading.propTypes = {
    children: PropTypes.node.isRequired,
}

// 

export const Subheading = styled.h4`
    color: var(--color-primary-darker);
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Subheading.propTypes = {
    children: PropTypes.node.isRequired,
}

// 

export const Paragraph = styled.div`
    ${ props => props.center && 'text-align: center;' }
    text-align: left;
    ${ props => props.right && 'text-align: right;' }
`

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
}

// 

export const Footnote = styled.span`
    display: inline-block;
    color: var(--color-black);
    margin-bottom: 1rem;
    opacity: 0.25;
    transition: opacity 250ms;
    &:hover {
        opacity: 1.0;
    }
`

Footnote.propTypes = {
    children: PropTypes.node.isRequired,
}

// 
