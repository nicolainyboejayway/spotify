import styled from 'styled-components'
import { ReactComponent as clock } from '../svgs/clock.svg'

export const TrackInfoBar = styled.div`
    background-color: #121212;
    font-size: 0.8rem;
    height: 3rem;
    line-height: 4rem;
    border-bottom: 0.2px solid rgba(216, 216, 216, 0.2);
    position: sticky;
    color: #b3b3b3;
    top: 0px;
    display: flexbox;
    text-align: center;
    width: 100rem;
`

export const Hashtag = styled.span``

export const TrackInfoTitle = styled.span`
    padding-left: 1rem;
`

export const TrackInfoArtist = styled.span`
    padding-left: 24rem;
`

export const ReleaseDate = styled.span`
    padding-left: 8rem;
`

export const TrackDuration = styled.span``

export const Clocksvg = styled(clock)`
    padding-left: 10rem;
    display: inline-block;
    vertical-align: middle;
    margin: auto;
`
