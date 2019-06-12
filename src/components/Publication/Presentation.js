import React from 'react'
import styled from 'styled-components'

export const PresentationContainer = styled.div`
    padding: 1rem;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
`

export const Presentation = ({ children }) => {
    return (
        <PresentationContainer>
            { children }
        </PresentationContainer>
    )
}

