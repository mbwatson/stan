import styled from 'styled-components'

export const Brand = styled.h1`
    padding: ${ props => props.compact ? '1rem 0 0 0' : '2rem 0 0 0' };
    font-size: ${ props => props.compact ? '175%' : '200%' };
    font-weight: 300;
    color: var(--color-primary-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: font-size 250ms, padding 250ms;
`