import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BlockLink = styled.a`
    display: block;
`

export const EmailLink = ({ address }) => <BlockLink href={ `mailto:${ address }` }>{ address }</BlockLink>

EmailLink.propTypes = {
    address: PropTypes.string.isRequired,
}