import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Title = styled.h2`
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Title.propTypes = {
    children: PropTypes.node.isRequired,
}

// 

export const Paragraph = styled.div`
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
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
