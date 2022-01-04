import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
}
body{
    font-family: -apple-system, sans-serif;
    /* min-height: 100vh; */
    /* display: flex; */
    /* align-items: center;
    justify-content: center; */
    perspective: 1000px;
}
`
export interface DisplayProps {
    show: string
}

export const mainDiv = styled.div`
    width: 100%;
    position: relative;
    background-color: green;
`

export const container = styled.div<DisplayProps>`
    width: 50%;
    display: grid;
    justify-content: center;
    align-items: center;
    display: ${(props) => props.show};
    position: absolute;
    padding-top: 1rem;
    top: 50%;
    left: 25%;
    z-index: 60;
`

export const card = styled.div`
    transform-style: preserve-3d;
    background-color: #121212;
    min-height: 70vh;
    width: 30rem;
    border-radius: 1rem;
    padding: 2rem 2rem;

    box-shadow: 0 0.6rem 1rem rgba(255, 255, 255, 0.2),
        0rem 0rem 1rem rgba(255, 255, 255, 0.1);
`

export const close = styled.div`
    position: absolute;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    /* background-color: forestgreen; */
    opacity: 0.3;
    z-index: 3;
    &:hover {
        opacity: 1;
    }
    &:before,
    &:after {
        position: absolute;
        left: 1rem;
        content: '';
        height: 3.1rem;
        width: 0.1rem;
        background-color: #333;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`

export const imageart = styled.div`
    /* background-color: ghostwhite; */
    width: 30rem;
    transform-style: preserve-3d;
    min-height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const circle = styled.div`
    width: 15rem;
    height: 15rem;
    background: linear-gradient(
        to right,
        rgba(93, 189, 245, 0.75),
        rgba(221, 233, 245, 0.75)
    );
    position: absolute;
    border-radius: 50%;
    z-index: 1;
    transition: all 0.8s ease-out;
`

export const contentimage = styled.img`
    width: 10rem;
    z-index: 2;
    transition: all 0.8s ease-out;
`

export const info = styled.div`
    transform-style: preserve-3d;
    width: 100%;
`

export const title = styled.h1`
    font-size: 2rem;
    color: white;
    transition: all 0.75s ease-out;
`

export const description = styled.h3`
    font-size: 1.1rem;
    padding: 2rem 0rem;
    color: #b3b3b3;
    font-weight: lighter;
    transition: all 0.75s ease-out;
`

export const listen = styled.div`
    margin-top: 3rem;
    width: 50%;
    padding-left: 25%;
    transition: all 0.75s ease-out;
`

export const play = styled.button`
    width: 100%;
    padding: 1rem 1rem;
    background: #1db954;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 2rem;
    font-weight: bolder;
    font-size: 1rem;
    transition: all 0.75s ease-out;
`
