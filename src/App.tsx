import { Fragment, useState } from 'react'
import React from 'react'
import './App.css'
import { RenderSongs } from './components/RenderSongs'

import { DoSoundNew } from './components/doSoundNew'
import Infonavbox from './components/Interact/Panels/infonavbox'
import { PlaylistRenderer } from './components/Interact/Panels/playlists'
import SongInfo from './components/Interact/Bonus/SongInfo'
import * as S from './App.styled'
import Home from './components/Interact/Bonus/home'

import {
    IsPlayingContext,
    NewSoundContext,
    PlaylistContext,
    TrackContext,
    ArtistContext,
    MainContext,
} from './context'
import SongControls from './components/Interact/Panels/SongControls'

function App() {
    const newsound = DoSoundNew()
    const [isPlaying, setisPlaying] = useState(false)
    const [playlistID, setPlaylistID] = useState('')
    const [trackTitle, setTrackTitle] = useState<any | null>(null)
    const [trackArtist, setTrackArtist] = useState<any | null>(null)
    const [mainWindow, setMainWindow] = useState(false)

    const [showStringModal, setShowStringModal] = useState('none')
    const [opacity, setOpacity] = useState(1)
    return (
        <Fragment>
            <S.GlobalStyle />
            <NewSoundContext.Provider value={{ newsound }}>
                <IsPlayingContext.Provider value={{ isPlaying, setisPlaying }}>
                    <PlaylistContext.Provider
                        value={{ playlistID, setPlaylistID }}
                    >
                        <TrackContext.Provider
                            value={{ trackTitle, setTrackTitle }}
                        >
                            <ArtistContext.Provider
                                value={{ trackArtist, setTrackArtist }}
                            >
                                <MainContext.Provider
                                    value={{ mainWindow, setMainWindow }}
                                >
                                    <div className="App">
                                        <header className="App-header">
                                            <SongInfo
                                                onClose={() => {
                                                    setShowStringModal('none')
                                                    setOpacity(1)
                                                }}
                                                showString={showStringModal}
                                            ></SongInfo>
                                            <S.sitediv setOpacity={opacity}>
                                                <S.NavScrollable>
                                                    <Infonavbox></Infonavbox>
                                                    <PlaylistRenderer></PlaylistRenderer>
                                                </S.NavScrollable>

                                                <S.Scrollable>
                                                    {mainWindow ? (
                                                        <Home></Home>
                                                    ) : (
                                                        <RenderSongs
                                                            onOpen={() => {
                                                                setOpacity(0.2)
                                                                setShowStringModal(
                                                                    'flex'
                                                                )
                                                            }}
                                                        ></RenderSongs>
                                                    )}
                                                </S.Scrollable>
                                                <SongControls
                                                    title={trackTitle}
                                                    artist={trackArtist}
                                                ></SongControls>
                                            </S.sitediv>

                                            {/* <SongControls></SongControls> */}
                                        </header>
                                    </div>
                                </MainContext.Provider>
                            </ArtistContext.Provider>
                        </TrackContext.Provider>
                    </PlaylistContext.Provider>
                </IsPlayingContext.Provider>
            </NewSoundContext.Provider>
        </Fragment>
    )
}
export default App
