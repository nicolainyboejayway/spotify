import styled from 'styled-components'
import { ReactComponent as playsvg } from '../svgs/playbutton.svg'

export const contentDiv = styled.div`
    width: 16rem;
    height: 20rem;

    /* background-color: forestgreen; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
`
export const frameDiv = styled.div`
    width: 12rem;
    height: 16rem;
    border-radius: 4%;
    background-color: rgba(36, 36, 36, 0.6);
    transition: background-color 0.2s ease-out;
    justify-content: center;
    overflow: hidden;
    display: block;
    &:hover {
        background-color: rgba(114, 114, 114, 0.7);
    }
`
export const contentImage = styled.div`
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
`

export const image = styled.img`
    width: 10rem;
    height: 10rem;
    margin: auto;
    box-shadow: 0 0.6rem 1rem rgba(255, 255, 255, 0.2);
`
export const headline = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1rem;
    overflow: hidden;

    color: #fff;
`
export const description = styled.h3`
    font-size: 0.8rem;
    padding-top: 0.2rem;
    font-weight: bold;
    margin-left: 1rem;
    color: #b8b5b5;
`
export const playdiv = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    opacity: 0;
    border-radius: 50%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1db954;
    transition: all 0.5s ease-out;
    ${frameDiv}:hover & {
        width: 2.5rem;
        height: 2.5rem;
        opacity: 1;
    }
`

export const playicon = styled(playsvg)``
