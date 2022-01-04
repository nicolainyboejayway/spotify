import styled from 'styled-components'

export const MainDiv = styled.div`
    position: absolute;
    background-color: #000;
    width: 15rem;
    height: 18rem;
    top: 20rem;
    overflow-y: scroll;
`
export const LineDiv = styled.div`
    position: absolute;
    left: 1rem;
    /* background-color: grey; */
    width: 85%;
    /* height: 0.1rem; */
    border-bottom: 0.2px solid rgba(236, 236, 236, 0.2);
`
export const PlaylistContainer = styled.div`
    padding-top: 1rem;
    position: absolute;
`
export const PlaylistDiv = styled.div``

export const PlaylistName = styled.span`
    display: inline-block;
    vertical-align: middle;
    font-size: 0.8rem;
    font-weight: 700;
    padding-left: 1rem;
    padding-bottom: 0.8rem;
    color: #b3b3b3;
    cursor: pointer;
    &:hover {
        color: white;
    }
`
