import React from 'react'
import * as S from '../Panels/infonavbox.styled'
import { PlaylistContext, MainContext } from '../../../context'
export default function Infonavbox() {
    const { setPlaylistID } = React.useContext(PlaylistContext)
    const { setMainWindow } = React.useContext(MainContext)
    const gospotify = () => {
        console.log('SPOTIFY')
    }

    const ChoosePlaylist = (id: string) => {
        setPlaylistID(id)
        setMainWindow(false)
    }

    const HomeWindow = () => {
        setMainWindow(true)
    }
    return (
        <S.MainInfoNavDiv>
            <S.LogoButton onClick={gospotify}></S.LogoButton>
            <S.Infobox onClick={HomeWindow}>
                <S.HomeButton></S.HomeButton>
                <S.Text>Home</S.Text>
            </S.Infobox>
            <S.Infobox>
                <S.SearchButton></S.SearchButton>
                <S.Text>Search</S.Text>
            </S.Infobox>
            <S.Infobox>
                <S.YourLibraryButton></S.YourLibraryButton>
                <S.Text>Your Library</S.Text>
            </S.Infobox>
            <S.Infobox>
                <S.NewPlaylistDiv>
                    <S.square1>
                        <S.NewPlaylistButton></S.NewPlaylistButton>
                    </S.square1>
                    <S.MySpanPlaylist>Create Playlist</S.MySpanPlaylist>
                </S.NewPlaylistDiv>
            </S.Infobox>

            <S.Infobox>
                <S.LikedSongs onClick={() => ChoosePlaylist('Liked Songs')}>
                    <S.square2>
                        <S.LikedSongsButton></S.LikedSongsButton>
                    </S.square2>
                    <S.MySpanLiked>Liked Songs</S.MySpanLiked>
                </S.LikedSongs>
            </S.Infobox>
        </S.MainInfoNavDiv>
    )
}
