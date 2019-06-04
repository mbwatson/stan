import styled from 'styled-components'

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    border-width: 0 1px 0 0;
    border-style: solid;
    border-image: 
    linear-gradient(
        to bottom,
        var(--color-grey) 0%,
        var(--color-white) 50%
    ) 1 100%;
    background-color: transparent;
    transition: padding-top 250ms;
    padding-top: ${ props => props.compact ? '1rem' : '3rem' };
    width: ${ props => props.width }px;
    position: absolute;
    top: 0;
    left: -${ props => props.width }px;
    height: 100vh;
`