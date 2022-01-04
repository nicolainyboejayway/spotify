import React from 'react'
import * as S from '../Panels/Playpanel.styles'

export interface NextButtonClick {}

export default function NextButton(props: NextButtonClick) {
    const handleClick = () => {}
    return <S.NextButton onClick={handleClick}></S.NextButton>
}
