import React from 'react'
import styled from 'styled-components'
import { Chip } from '../Chip'
import { Link } from 'gatsby'

export const TagChipLink = styled(Chip).attrs({ as: Link })`
    transition: background-color 250ms, color 250ms;
    &:hover {
        color: var(--color-white);
        background-color: var(--color-primary);
    }
`
