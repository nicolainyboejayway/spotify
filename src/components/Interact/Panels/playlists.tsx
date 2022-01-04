import React, { useEffect } from 'react'
import * as S from '../Panels/playlist.styled'
import { PlaylistContext, MainContext } from '../../../context'

export const PlaylistRenderer = () => {
    const { setPlaylistID } = React.useContext(PlaylistContext)
    const { setMainWindow } = React.useContext(MainContext)

    useEffect(() => {
        setPlaylistID('Liked Songs')
    }, [setPlaylistID])

    let fictionalPlaylists = [
        'MusicForStudying',
        'Ambient',
        'Chill',
        'Soundtracks',
        'Another Time',
        'Sunshine',
        'LETS GO',
        'WOOP',
        'Electronic',
        'New Years',
        'Christmas',
        'Techno',
    ]
    const ChoosePlaylist = (id: string) => {
        setPlaylistID(id)
        setMainWindow(false)
    }
    const playlists = fictionalPlaylists.map((item) => (
        <S.PlaylistDiv key={item}>
            <S.PlaylistName onClick={() => ChoosePlaylist(item)}>
                {item}
            </S.PlaylistName>
        </S.PlaylistDiv>
    ))

    return (
        <S.MainDiv>
            <S.LineDiv></S.LineDiv>
            <S.PlaylistContainer>{playlists}</S.PlaylistContainer>
        </S.MainDiv>
    )
}
