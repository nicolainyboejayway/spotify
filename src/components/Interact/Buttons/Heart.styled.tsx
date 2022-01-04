import styled from 'styled-components'

import { ReactComponent as like } from '../svgs/heart.svg'

export interface HeartProps {
    fill: string
}

export const heartButton = styled(like)<HeartProps>`
    position: relative;
    width: 2rem;
    height: 1rem;
    justify-items: center;

    color: ${(props) => props.fill};
    top: 1.2rem;
    padding-left: 1rem;

    &:hover {
    }
`
