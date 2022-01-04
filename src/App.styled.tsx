import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    
    margin: 0;
    padding: 0;
    
}
    html,
    body,
    
    body{
        background-color:#121212;
        height:100%;
    }

`
export interface Opacity {
    setOpacity: number
}

export const sitediv = styled.div<Opacity>`
    opacity: ${(props) => props.setOpacity};
`

export const Scrollable = styled.div`
    overflow-y: scroll;
    height: calc(100vh - 6rem);
`
export const NavScrollable = styled.div`
    position: absolute;
    background-color: #000;
    height: calc(100vh - 6rem);
    width: 15rem;
`

export const HomeDiv = styled.div`
    margin-left: 15rem;
    overflow: hidden;
`

export const EveningDiv = styled.div`
    position: relative;
    width: 88vw;
    height: 18rem;
    /* background-color: white; */
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
`
export const TextDiv = styled.div`
    padding-top: 2rem;
    padding-left: 2rem;

    width: 20rem;
    height: 2rem;
    /* background-color: red; */
`
export const Text = styled.h1`
    font-size: 1.5rem;
    color: #b3b3b3;
`

export const ContentDiv = styled.div`
    width: 100vw;
    height: 20rem;
    /* background-color: whitesmoke; */
    position: relative;
    display: flex;
    overflow: hidden;
`
