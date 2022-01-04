import React from 'react'
import * as S from './TrackInforBar.styled'

export default function TrackInfoBar() {
    return (
        <S.TrackInfoBar>
            <S.Hashtag>#</S.Hashtag>
            <S.TrackInfoTitle>TRACK</S.TrackInfoTitle>
            <S.TrackInfoArtist>ALBUM OR PODCAST</S.TrackInfoArtist>
            <S.ReleaseDate>RELEASE DATE</S.ReleaseDate>
            <S.Clocksvg></S.Clocksvg>
        </S.TrackInfoBar>
    )
}
