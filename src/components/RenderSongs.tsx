import React, { useState } from 'react'

import './doSound.ts'

import * as S from './RenderSongs.styled'
import * as Se from './Interact/Panels/SongControls.styles'

import { IsPlayingContext, NewSoundContext } from '../context'
import Pausebutton from './Interact/Buttons/Pausebutton'
import Playbutton from './Interact/Buttons/Playbutton'
import Heart from './Interact/Buttons/Heart'
import TrackInfoBar from './Interact/Panels/TrackInfoBar'

import data from './music-player/test.json'

import { PlaylistContext } from '../context'

export interface OpenInfo {
    onOpen: () => void
}

export const RenderSongs = ({ onOpen }: OpenInfo) => {
    //Accessing context-values cross Parent & Child components
    const { playlistID } = React.useContext(PlaylistContext)
    const { newsound } = React.useContext(NewSoundContext)
    const { isPlaying, setisPlaying } = React.useContext(IsPlayingContext)

    //Setting trackinfo in sound control bar
    const [trackTitle, setTrackTitle] = useState<any | null>(null)
    const [trackArtist, setTrackArtist] = useState<any | null>(null)

    //Popup Infobox
    const [showStringModal, setShowStringModal] = useState('none')
    const [opacity, setOpacity] = useState(1)

    let i = data.playlists.findIndex((x) => x.name === playlistID)
    if (i === -1) {
        i = 0
    }

    const playlistCovers = [
        '4f38699d-64f6-4b98-b081-3c11019c1754',
        '7aa83ee6-b7da-43de-b3bb-57e38ec774b5',
        '8c2ea8a6-7039-42cb-a070-bdaf4fac0559',
        '9b0fc959-8889-4628-8181-f420de67649a',
        'abd655e4-0de8-4fbb-9107-96d2e265e5f6',
        'c3ba8c45-b97d-43ac-a172-ccb683c6b573',
    ]
    let PictureID = ''

    function RenderImage(pictureid: string) {
        if (playlistCovers[0] === pictureid) {
            PictureID = pictureid
        } else if (playlistCovers[1] === pictureid) {
            PictureID = pictureid
        } else if (playlistCovers[2] === pictureid) {
            PictureID = pictureid
        } else if (playlistCovers[3] === pictureid) {
            PictureID = pictureid
        } else if (playlistCovers[4] === pictureid) {
            PictureID = pictureid
        } else if (playlistCovers[5] === pictureid) {
            PictureID = pictureid
        } else if (playlistCovers[6] === pictureid) {
            PictureID = pictureid
        } else {
            PictureID = '2b0dc0d69cc936b13f2a7cd45f10e7ae'
        }
    }

    function pushSong(id: string, tracktitle: string, trackartist: string) {
        setisPlaying(true)
        newsound.set(id, tracktitle, trackartist)
        setTrackTitle(tracktitle)
        setTrackArtist(trackartist)
    }

    function handleClick() {
        if (isPlaying === false) {
            setisPlaying(true)
            newsound.play()
        } else if (isPlaying === true) {
            newsound.pause()
            setisPlaying(false)
        }
    }

    const songItems = data.playlists[i].items.map((item) => (
        <S.RenderPlaylist key={item.id}>
            <S.songDiv
                onDoubleClick={() => pushSong(item.id, item.title, item.artist)}
            >
                <S.node></S.node>
                {RenderImage(item.id)}
                <S.CoverImage src={require(`./covers/${PictureID}.png`)} />
                <S.textDiv>
                    <S.textTrack>{item.title}</S.textTrack>
                    <S.artist>{item.artist}</S.artist>
                </S.textDiv>
                <S.album>{item.album}</S.album>
                <S.InfoDot onClick={onOpen} />
            </S.songDiv>
        </S.RenderPlaylist>
    ))
    return (
        <>
            <S.OverallDiv opacity={opacity}>
                <S.SectionWrapper>
                    <S.NavDiv>
                        <S.ForwardBackButton>
                            <S.ArrowB />
                        </S.ForwardBackButton>
                        <S.ForwardBackButton>
                            <S.ArrowF />
                        </S.ForwardBackButton>
                        <S.ProfileDiv>ninyy</S.ProfileDiv>
                    </S.NavDiv>
                    <S.PlaylistInfoDiv>
                        <S.PlaylistImage
                            src={require(`./covers/${PictureID}.png`)}
                        />
                        <S.ContentDiv>
                            <S.Type>PLAYLIST</S.Type>
                            <S.PlaylistTitle>{playlistID}</S.PlaylistTitle>
                            <S.UserProfile>Nicolai Nyboe</S.UserProfile>
                            <S.Content>20 songs, about 2 hr</S.Content>
                        </S.ContentDiv>
                    </S.PlaylistInfoDiv>
                    <S.PlaylistSongs>
                        <S.PlayContainer>
                            <Se.pauseplay onClick={handleClick}>
                                {isPlaying ? (
                                    <Pausebutton backgroundColor="#fff" />
                                ) : (
                                    <Playbutton
                                        backgroundColor={'#1db954'}
                                        fill="#fff"
                                    />
                                )}
                            </Se.pauseplay>
                            <Heart fill="green"></Heart>
                        </S.PlayContainer>
                        <TrackInfoBar></TrackInfoBar>
                        {songItems}
                    </S.PlaylistSongs>
                </S.SectionWrapper>
            </S.OverallDiv>
            {/* <SongControls
                title={trackTitle}
                artist={trackArtist}
            ></SongControls> */}
        </>
    )
}
