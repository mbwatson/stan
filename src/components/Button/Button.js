import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Button = styled.button`
    background-color: ${ props => props.primary ? 'var(--color-primary)' : 'var(--color-white)' };
    color: ${ props => props.primary ? 'var(--color-white)' : 'var(--color-primary)' };
    & svg {
        fill: ${ props => props.primary ? 'var(--color-white)' : 'var(--color-primary)' };
    }
    border-radius: ${ props => props.round ? '3px' : 0 };
    outline: none;
    border: 0;
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 250ms;
    &:hover {
        filter: brightness(0.7);
    }
`

Button.propTypes = {
    round: PropTypes.bool.isRequired,
    primary: PropTypes.bool.isRequired,
    secondary: PropTypes.bool.isRequired,
}

Button.defaultProps = {
    round: false,
    primary: false,
    secondary: false,
}

