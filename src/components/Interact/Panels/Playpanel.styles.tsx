import styled from 'styled-components'

import { ReactComponent as playbuttonsvg } from '../svgs/playbutton.svg'
import { ReactComponent as nextbuttonsvg } from '../svgs/nextbutton.svg'
import { ReactComponent as previousbuttonsvg } from '../svgs/previousbutton.svg'
import { ReactComponent as repeatbuttonsvg } from '../svgs/loopbutton.svg'
import { ReactComponent as shufflesvg } from '../svgs/shuffle.svg'
import { ReactComponent as pausebuttonsvg } from '../svgs/pause.svg'

export interface ButtonProps {
    primary?: boolean
    backgroundColor?: string
}

export const Playpausebackground = styled.div<ButtonProps>`
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.backgroundColor};
    border: none;
    border-radius: 120px;
    display: grid;

    &:hover {
        width: 3.2rem;
    }
`
export interface IconProps {
    fill: string
}

export const playbuttonicon = styled(playbuttonsvg)<IconProps>`
    width: 1.5rem;
    height: 1.5rem;
    fill: ${(props) => props.fill};
    align-self: center;
    justify-self: center;
`

export const pausebuttonicon = styled(pausebuttonsvg)`
    width: 1.5rem;
    height: 1.5rem;
    align-self: center;
    justify-self: center;
`

export const NextButton = styled(nextbuttonsvg)`
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    padding-left: 2rem;
    padding-top: 0.8rem;
    &:hover {
        stroke: white;
    }
`

export const PreviousButton = styled(previousbuttonsvg)`
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    padding-right: 2rem;
    padding-top: 0.8rem;
    &:hover {
        stroke: white;
    }
`

export const RepeatButton = styled(repeatbuttonsvg)`
    width: 1rem;
    height: 1rem;
    padding-left: 2rem;
    padding-top: 0.95rem;
    &:hover {
        stroke: grey;
    }
`

export const ShuffleButton = styled(shufflesvg)`
    width: 1rem;
    height: 1rem;
    padding-right: 2rem;
    padding-top: 0.95rem;
    &:hover {
        stroke: grey;
    }
`
