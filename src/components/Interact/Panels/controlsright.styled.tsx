import styled from 'styled-components'

import { ReactComponent as lyricssvg } from '../svgs/microphone.svg'
import { ReactComponent as audiosourcesvg } from '../svgs/audiosource.svg'
import { ReactComponent as playlistsvg } from '../svgs/que.svg'
import { ReactComponent as volumesvg } from '../svgs/volume.svg'
import { ReactComponent as maximizesvg } from '../svgs/maximize.svg'

export const controlsrightdiv = styled.div`
    position: relative;
    top: -45%;
    display: inline-flex;
    vertical-align: middle;
    float: right;
`

export const lyricsbutton = styled(lyricssvg)`
    padding-right: 1rem;
    @media (max-width: 900px) {
        display: none;
    }
`

export const audiosourcebutton = styled(audiosourcesvg)`
    padding-right: 1rem;
    @media (max-width: 900px) {
        display: none;
    }
`

export const playlistbutton = styled(playlistsvg)`
    padding-right: 1rem;
`

export const volumebutton = styled(volumesvg)`
    padding-right: 1rem;
`

export const maximizebutton = styled(maximizesvg)`
    padding-right: 1rem;
    @media (max-width: 900px) {
        display: none;
    }
`

export const volumeslider = styled.input``
