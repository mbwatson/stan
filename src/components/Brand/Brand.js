import styled from 'styled-components'

export const Brand = styled.div`
    font-size: ${ props => props.compact ? '100%' : '150%' }
    color: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: font-size 250ms;
    padding: 0;
`