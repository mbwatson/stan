import styled from 'styled-components'

export const Columns = styled.div`
    // & * { border: 1px solid #f99; }
    width: ${ props => props.width || '100%' };
    margin: 0 ${ props => props.center ? `auto` : null };
    display: flex;
    flex-direction: column;
    @media (min-width: ${ props => props.break }px) {
        flex-direction: row;
    }
    margin-bottom: 2rem;
`

export const Column = styled.div`
    flex: ${ props => props.flex || 1 };
    padding: 1rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    ${ props => props.center ? 'align-items: center' : null };
    ${ props => props.center ? 'text-align: center' : null };
    ${ props => props.left ? 'align-items: flex-start' : null };
    ${ props => props.left ? 'text-align: left' : null };
    ${ props => props.right ? 'align-items: flex-end' : null };
    ${ props => props.right ? 'text-align: right' : null };
`
