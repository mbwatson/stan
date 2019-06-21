import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BlockLink = styled.a`
    display: block;
`

export const PhoneLink = ({ number, tag }) => {
    const numberLink = `tel:1-${ number.replace(/[()]/g, '').replace(/\s+/g, '-') }`
    return (
        <BlockLink href={ numberLink }>{ number } { tag }</BlockLink>
    )
}

PhoneLink.propTypes = {
    address: PropTypes.string.isRequired,
}