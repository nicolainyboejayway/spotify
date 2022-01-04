import React, { useRef, useState } from 'react'
import { NewSoundContext } from '../../../context'
import * as S from './Duration.styled'

export default function Duration() {
    const { newsound } = React.useContext(NewSoundContext)
    let interval: any = useRef()
    const [playbackPosition, setPlaybackPosition] = useState(0)

    interval = setTimeout(() => {
        setPlaybackPosition(Math.floor(newsound.playbackPosition()))
    }, 1000)

    return (
        <>
            <S.Input
                type="range"
                value={playbackPosition}
                step="1"
                min="0"
                max={newsound.duration()}
                className="progress"
                onChange={(e) => {
                    newsound.setPosition(e.target.value)
                }}
            />
        </>
    )
}
