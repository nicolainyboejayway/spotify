import React, { useEffect, useState } from 'react'
import * as S from './SongControls.styles'
import InformationBox from './InformationBox'
import Controlsright from './controlsright'

import data from '../../music-player/test.json'
import PanelBar from './PanelBar'
import {
    NewSoundContext,
    IsPlayingContext,
    PlaylistContext,
} from '../../../context'

export interface SongInfo {
    title: any | null
    artist: any | null
}

export default function SongControls({ title, artist }: SongInfo) {
    // console.log(title, artist)
    const { isPlaying, setisPlaying } = React.useContext(IsPlayingContext)
    const { newsound } = React.useContext(NewSoundContext)
    const { playlistID } = React.useContext(PlaylistContext)
    const [titleID, settitleID] = useState(title)
    const [artistID, setartistID] = useState(artist)

    useEffect(() => {
        //remember to test when this is called
        settitleID(title)
        setartistID(artist)
        return () => {
            settitleID(title)
            setartistID(artist)
        }
    }, [title, artist])

    const handleClick = () => {
        console.log(isPlaying)
        if (isPlaying === false) {
            setisPlaying(true)
            newsound.play()
        } else if (isPlaying === true) {
            newsound.pause()
            setisPlaying(false)
        }
    }

    const handleNextSong = () => {
        const currentTrack = newsound.currentID()
        let i = data.playlists.findIndex((x) => x.name === playlistID)
        if (i === -1) {
            i = 0
        }

        let index = data.playlists[i].items
            .map((item) => item.id)
            .indexOf(currentTrack)

        let length = data.playlists[i].items.length

        let newsong = [data.playlists[i].items[index + 1]]

        if (index < length - 1) {
            let mycurrentsong = newsong.find((x) => x.id)

            newsound.set(
                mycurrentsong?.id,
                mycurrentsong?.title,
                mycurrentsong?.artist
            )
            settitleID(mycurrentsong?.title)
            setartistID(mycurrentsong?.artist)
            setisPlaying(true)
            newsound.play()
        }
    }

    const handlePreviousSong = () => {
        console.log('I clicked prev')
        const currentTrack = newsound.currentID()

        let i = data.playlists.findIndex((x) => x.name === playlistID)
        if (i === -1) {
            i = 0
        }

        let index = data.playlists[i].items
            .map((item) => item.id)
            .indexOf(currentTrack)

        let newsong = [data.playlists[i].items[index - 1]]

        if (index > 0) {
            let mycurrentsong = newsong.find((x) => x.id)
            newsound.set(
                mycurrentsong?.id,
                mycurrentsong?.title,
                mycurrentsong?.artist
            )
            settitleID(mycurrentsong?.title)
            setartistID(mycurrentsong?.artist)
            setisPlaying(true)
            newsound.play()
        }
    }

    const handleShuffle = () => {
        console.log('I want to shuffle')
    }
    const handleLoop = () => {
        console.log('I want to loop')
    }
    return (
        <S.masterDiv>
            <InformationBox title={titleID} artist={artistID}></InformationBox>
            <S.panel>
                <PanelBar
                    prevButton={handlePreviousSong}
                    shuffleButton={handleShuffle}
                    pauseplayButton={handleClick}
                    nextButton={handleNextSong}
                    loopButton={handleLoop}
                />
            </S.panel>
            <Controlsright></Controlsright>
        </S.masterDiv>
    )
}
