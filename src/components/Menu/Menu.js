import styled from 'styled-components'

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    border-width: 0 1px 0 0;
    border-style: solid;
    border-image: 
        linear-gradient(
            to bottom,
            var(--color-white) 0%,
            var(--color-grey) 15%,
            var(--color-grey) 85%,
            var(--color-white) 100%
        ) 1 100%;
    background-color: transparent;
    transition: padding-top 250ms;
    padding: ${ props => props.compact ? '1rem' : '3rem' } 0;
    width: ${ props => props.width }px;
    position: absolute;
    top: 0;
    left: -${ props => props.width }px;
    min-height: 60vh;
 `
