import React from 'react'
import * as S from '../Panels/controlsright.styled'
import Volume from './Volume'

export default function Controlsright() {
    return (
        <S.controlsrightdiv>
            <S.lyricsbutton></S.lyricsbutton>
            <S.playlistbutton></S.playlistbutton>
            <S.audiosourcebutton></S.audiosourcebutton>
            <div>
                <S.volumebutton></S.volumebutton>
                <Volume></Volume>
            </div>
            <S.maximizebutton></S.maximizebutton>
        </S.controlsrightdiv>
    )
}
