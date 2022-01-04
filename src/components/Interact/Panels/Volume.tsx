import React from 'react'
import * as S from './Volume.styled'
import { NewSoundContext } from '../../../context'
export default function Volume() {
    const { newsound } = React.useContext(NewSoundContext)
    return (
        <S.VolumeInput
            type="range"
            value={newsound.getVolume()}
            step="0.01"
            min="0"
            max="1"
            onChange={(e) => {
                newsound.controlVolume(e.target.value)
            }}
        />
    )
}
