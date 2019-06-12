import styled from 'styled-components'

export const Chip = styled.div`
    background-color: var(--color-white);
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    &.active {
        background-color: var(--color-primary);
        color: var(--color-white);
        border: 1px solid var(--color-primary);
    }
    display: inline-block;
    padding: 0 0.5rem;
    line-height: 1.75;
    border-radius: 0.2rem;
    margin: 0 0.25rem;
    font-size: 80%;
`
