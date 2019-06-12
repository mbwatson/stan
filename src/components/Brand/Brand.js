import styled from 'styled-components'

export const Brand = styled.div`
    font-size: ${ props => props.compact ? '150%' : '200%' }
    padding: ${ props => props.compact ? '1rem' : '2rem' }
    color: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: font-size 250ms, padding 250ms;
`