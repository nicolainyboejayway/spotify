import styled from 'styled-components'
import { ReactComponent as playiconsvg } from '../svgs/playbutton.svg'

export const container = styled.div`
    width: 18rem;
    height: 4rem;
    padding: 2rem;
    /* background-color: floralwhite; */
    justify-content: center;
    align-items: center;

    border-radius: 1rem;
`
export const box = styled.div`
    display: flex;
    width: 20rem;
    height: 6rem;
    border-radius: 1rem;
    background-color: rgba(24, 23, 23, 0.8);
    overflow: hidden;
    transition: all 0.2s ease-out;
    &:hover {
        background-color: rgba(112, 112, 112, 0.8);
    }
`
export const imagebox = styled.div`
    width: 6rem;
    height: 6rem;
`
export const image = styled.img`
    width: 6rem;
    height: 6rem;
    margin: auto;
    overflow: hidden;
`
export const text = styled.h1`
    font-size: 1.2rem;
    font-weight: bolder;
    padding-left: 1.2rem;
    color: white;
    line-height: 6rem;
`
export const play = styled.div`
    /* display: none; */
    width: 2.8em;
    height: 2.8rem;
    border-radius: 50%;
    background-color: #1db954;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-out;
    display: flex;
    margin: auto;
    opacity: 0;

    ${box}:hover & {
        opacity: 1;
        width: 3rem;
        height: 3rem;
        &:hover {
            width: 3.1rem;
            height: 3.1rem;
        }
    }
`
export const playicon = styled(playiconsvg)``
