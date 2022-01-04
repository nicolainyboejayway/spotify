import React from 'react'
import * as S from '../Panels/Playpanel.styles'

export interface ButtonProps {
    name?: string
    backgroundColor: string
    fill: string
}

export default function Playbutton({
    name,
    backgroundColor,
    fill,
}: ButtonProps) {
    return (
        <S.Playpausebackground
            backgroundColor={backgroundColor}
            className={name}
        >
            <S.playbuttonicon fill={fill}></S.playbuttonicon>
        </S.Playpausebackground>
    )
}
