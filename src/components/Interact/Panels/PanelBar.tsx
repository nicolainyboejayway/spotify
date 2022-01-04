import React from 'react'
import * as S from './PanelBar.styled'
import Duration from './Duration'
import PreviousButton from '../Buttons/PreviousButton'
import ShuffleButton from '../Buttons/ShuffleButton'
import { IsPlayingContext } from '../../../context'
import Pausebutton from '../Buttons/Pausebutton'
import Playbutton from '../Buttons/Playbutton'
import NextButton from '../Buttons/NextButton'
import { RepeatButton } from './Playpanel.styles'

export interface ButtonInteractions {
    prevButton: () => void
    shuffleButton: () => void
    pauseplayButton: () => void
    nextButton: () => void
    loopButton: () => void
}

export default function PanelBar({
    prevButton,
    shuffleButton,
    pauseplayButton,
    nextButton,
    loopButton,
}: ButtonInteractions) {
    const { isPlaying } = React.useContext(IsPlayingContext)
    return (
        <S.frameDiv>
            <S.buttonsDiv>
                <S.shuffle onClick={ShuffleButton}>
                    <ShuffleButton></ShuffleButton>
                </S.shuffle>
                <S.previoussong onClick={prevButton}>
                    <PreviousButton></PreviousButton>
                </S.previoussong>
                <S.pauseplay onClick={pauseplayButton}>
                    {isPlaying ? (
                        <Pausebutton backgroundColor="#fff" />
                    ) : (
                        <Playbutton backgroundColor="#fff" fill="#000000" />
                    )}
                </S.pauseplay>
                <S.nextsong onClick={nextButton}>
                    <NextButton></NextButton>
                </S.nextsong>
                <S.loopsong onClick={loopButton}>
                    <RepeatButton></RepeatButton>
                </S.loopsong>
                <S.durationdiv></S.durationdiv>
            </S.buttonsDiv>
            <S.durationDiv>
                <Duration></Duration>
            </S.durationDiv>
        </S.frameDiv>
    )
}
