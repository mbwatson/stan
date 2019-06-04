import React from 'react'
import styled from 'styled-components'

export const PublicationContainer = styled.div`
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow 0 0 6px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
`

export const Citation = styled.div`
    margin-bottom: 1rem;
    color: var(--color-black);
    line-height: 1.5;
    font-size: 90%;
`

export const Tags = styled.div`
`

export const Publication = ({ children }) => {
    return (
        <PublicationContainer>
            { children }
        </PublicationContainer>
    )
}

