import styled from 'styled-components'

export const CardHeader = styled.div`
    padding: 0.5rem 1rem;
    background-color: var(--color-black);
    color: var(--color-white);
    border-bottom: 1px solid var(--color-grey);
`

export const CardBody = styled.div`
    padding: 1rem;
`

export const CardFooter = styled.div`
    padding: 0.5rem 1rem;
    background-color: var(--color-black);
    color: var(--color-white);
    border-top: 1px solid var(--color-grey);
    font-size: 80%;
`

export const Card = styled.div`
    overflow: hidden;
    border-radius: 0.5rem;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);
`