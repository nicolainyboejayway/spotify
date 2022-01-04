import styled from 'styled-components'

import { ReactComponent as spotifylogosvg } from '../svgs/spotifylogo.svg'
import { ReactComponent as homesvg } from '../svgs/home.svg'
import { ReactComponent as searchsvg } from '../svgs/search.svg'
import { ReactComponent as yourlibrarysvg } from '../svgs/yourlibrary.svg'
import { ReactComponent as newplaylistsvg } from '../svgs/newplaylist.svg'
import { ReactComponent as likedsongs } from '../svgs/likedsongs.svg'

export const MainInfoNavDiv = styled.div`
    background-color: #000;
    color: white;
    position: absolute;
    display: table;
    width: 15rem;
    height: 20rem;
`

export const LogoButton = styled(spotifylogosvg)`
    padding-left: 1.7rem;
    padding-top: 1.2rem;
    width: 50%;
    height: 20%;
`

export const Infobox = styled.div`
    display: table;
    padding-left: 0.5rem;
`

export const Text = styled.h2`
    display: inline-block;
    vertical-align: middle;
    font-size: 0.8rem;
    padding-left: 1.5rem;
    padding-bottom: 0.8rem;
    margin: auto;
    color: #b3b3b3;
    font-weight: 700;
    cursor: pointer;
    ${Infobox}:hover & {
        color: white;
    }
`

export const Text2 = styled.h2`
    display: inline-block;
    vertical-align: middle;
    font-size: 0.8rem;
    font-size: 1rem;
    padding-left: 2.2rem;
    color: #b3b3b3;
`

export const HomeButton = styled(homesvg)`
    align-self: center;
    justify-self: center;
    padding-left: 1.2rem;
    ${Infobox}:hover & {
        stroke: white;
    }
`

export const SearchButton = styled(searchsvg)`
    align-self: center;
    justify-self: center;
    padding-left: 1.2rem;
    ${Infobox}:hover & {
        stroke: white;
    }
`

export const YourLibraryButton = styled(yourlibrarysvg)`
    align-self: center;
    justify-self: center;
    padding-left: 1.2rem;
    ${Infobox}:hover & {
        stroke: white;
    }
`

export const SpacingDiv = styled.div``

export const NewPlaylistDiv = styled.div`
    padding-top: 1rem;
    display: flex;
    flex-shrink: 0;
    padding-left: 1.1rem;
    align-items: center;

    position: relative;
    width: 100%;
`
export const NewPlaylistButton = styled(newplaylistsvg)`
    align-self: center;
    justify-self: center;

    ${NewPlaylistDiv}:hover & {
        width: 1rem;
        height: 1rem;
    }
`
export const LikedSongs = styled.div`
    display: flex;
    flex-shrink: 0;
    padding-top: 2rem;
    padding-left: 1.1rem;
    align-items: center;

    position: relative;
    width: 100%;
`
export const LikedSongsButton = styled(likedsongs)`
    align-self: center;
    justify-self: center;
    fill: green;
    ${LikedSongs}:hover & {
        width: 1rem;
        height: 1rem;
    }
`

export const square1 = styled.div`
    align-items: center;
    background: white;
    color: #000;
    display: flex;
    height: 2rem;
    justify-content: center;
    position: absolute;
    width: 2rem;
`

export const square2 = styled.div`
    align-items: center;
    background: blue;
    color: #000;
    display: flex;
    height: 2rem;
    justify-content: center;
    position: absolute;
    width: 2rem;
    ${LikedSongs}:hover & {
        background: green;
    }
`

export const MySpanPlaylist = styled.h2`
    display: inline-block;
    vertical-align: middle;
    color: #b3b3b3;
    font-size: 0.8rem;
    font-weight: 700;
    padding-left: 3rem;
    cursor: pointer;
    ${NewPlaylistDiv}:hover & {
        color: white;
    }
`
export const MySpanLiked = styled.h2`
    display: inline-block;
    vertical-align: middle;
    color: #b3b3b3;
    font-size: 0.8rem;
    padding-left: 3rem;
    cursor: pointer;
    ${LikedSongs}:hover & {
        color: white;
    }
`
