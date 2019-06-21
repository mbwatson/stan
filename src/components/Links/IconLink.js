import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { PhoneIcon } from '../Icons'

const Link = styled.a`
    display: block;
`

export const PhoneLink = ({ number, tag }) => <Link href={ href }>{ number } { tag }</Link>

PhoneLink.propTypes = {
    address: PropTypes.string.isRequired,
}