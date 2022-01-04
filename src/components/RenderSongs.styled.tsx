import styled, { createGlobalStyle } from 'styled-components'
//import { StickyContainer, Sticky } from 'react-sticky'
import { ReactComponent as arrowforward } from './Interact/svgs/arrowforward.svg'
import { ReactComponent as arrowbackwards } from './Interact/svgs/arrowbackwards.svg'
import { ReactComponent as nodesvg } from './Interact/svgs/node.svg'

import { ReactComponent as infosvg } from './Interact/svgs/dot.svg'

export const GlobalStyle = createGlobalStyle`

`
export interface OpacityDiv {
    opacity: number
}
export const OverallDiv = styled.div<OpacityDiv>`
    margin-left: 15rem;
    opacity: ${(props) => props.opacity};
    background-color: #121212;
`

export const SectionWrapper = styled.section``

export const NavDiv = styled.div`
    display: flex;
    width: 100%;
    height: 2rem;
    background-color: rgb(24, 40, 56);

    top: 0px;
    z-index: 2;
`

export const ProfileDiv = styled.div`
    margin: auto;
    font-size: 0.8rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.6);
    margin-right: 5rem;
    margin-top: 1rem;
    text-align: center;
    vertical-align: middle;
    line-height: 2rem;
    width: 5rem;
    height: 2rem;

    background-color: rgba(0, 0, 0, 0.6);
    &:hover {
        color: rgba(255, 255, 255, 0.9);
    }
`

export const ForwardBackButton = styled.div`
    margin: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    width: 2rem;
    height: 2rem;
    display: flex;
    border-radius: 100%;
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`

export const ArrowF = styled(arrowforward)`
    display: block;
    margin: auto;
    width: 1rem;
    height: 1rem;

    /* padding-top: 0.2rem; ; */
`

export const ArrowB = styled(arrowbackwards)`
    display: block;
    margin: auto;
    width: 1rem;
    height: 1rem;
`

export const PlaylistInfoDiv = styled.div`
    display: flex;
    background-image: linear-gradient(rgb(24, 40, 56), #121212);
    /* background: linear-gradient(
            217deg,
            rgba(255, 0, 0, 0.8),
            rgba(255, 0, 0, 0) 70.71%
        ),
        linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
    background-color: rgb(24, 40, 56); */
    height: 30vh;
    max-height: 31rem;
    min-height: 21rem;
`
export const PlaylistImage = styled.img`
    position: relative;
    width: 12rem;
    height: 12rem;
    padding-top: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
`

export const ContentDiv = styled.div`
    padding-top: 5rem;
    left: 10rem;
    width: 100%;
    margin: auto;
`

export const PlaylistTitle = styled.h1`
    color: white;
    margin: auto;
    width: 100%;
    font-size: 5rem;
    @media (max-width: 900px) {
        font-size: 2rem;
    }
`

export const Type = styled.span`
    font-size: 0.9rem;
    color: white;
`

export const UserProfile = styled.span`
    font-size: 0.8rem;
    color: white;
`

export const Content = styled.span`
    color: grey;
    padding-left: 0.5rem;
    font-size: 0.8rem;
`

export const PlaylistSongs = styled.div`
    padding-left: 2rem;
`
export const PlayContainer = styled.div`
    display: flex;
`

export const RenderPlaylist = styled.div`
    position: row;
    display: flexbox;
    height: 4rem;

    background-color: #121212;
    font-size: 0.8rem;

    &:hover {
        background-color: rgba(236, 236, 236, 0.2);
        border-radius: 0.5rem;
    }
`
export const InfoDot = styled(infosvg)`
    padding-left: 10rem;
    padding-right: 1rem;
    display: none;
    vertical-align: middle;
    margin: auto;
    opacity: 0.5;
    z-index: 5;

    ${RenderPlaylist}:hover & {
        display: flex;
    }

    &:hover {
        opacity: 1;
    }
`
RenderPlaylist.defaultProps = {
    onClick: () => {},
}

export const songDiv = styled.div`
    /* text-align: left; */
    display: flex;
    width: 100%;
`

export const node = styled(nodesvg)`
    /* display: inline-block; */
    vertical-align: middle;
    margin-top: 1.5rem;
`

songDiv.defaultProps = {
    key: '',
    onClick: () => {},
}

export const textDiv = styled.div`
    justify-content: center;

    padding-top: 1rem;
    padding-left: 1rem;
    width: 10rem;
`

export const textTrack = styled.div`
    margin: auto;

    font-size: 1rem;
    color: white;
    width: 20rem;
`

export const artist = styled.span`
    color: #b3b3b3;
`

export const mainDiv = styled.div`
    height: 5rem;
    &:hover {
        background-color: green;
    }

    /* z-index: 999; */
`

export const content = styled.div``

export const album = styled.div`
    padding-top: 1.4rem;
    padding-left: 12rem;
    width: 20rem;
    color: #b3b3b3;
`

export const CoverImage = styled.img`
    /* //size: 20%; */
    height: 3.2rem;
    width: 3.2rem;
    padding: 0.5rem;
`

CoverImage.defaultProps = {
    src: '',
}
