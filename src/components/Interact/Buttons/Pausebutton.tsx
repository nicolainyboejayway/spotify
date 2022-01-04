import React from 'react'
import * as S from '../Panels/Playpanel.styles'

export interface pauseButtonProps {
    name?: string
    backgroundColor: string
    fill?: string
}

export default function Pausebutton({
    name,
    backgroundColor,
    fill,
}: pauseButtonProps) {
    const handleClick = () => {}
    return (
        <div>
            <S.Playpausebackground
                backgroundColor={backgroundColor}
                className={name}
            >
                <S.pausebuttonicon onClick={handleClick}></S.pausebuttonicon>
            </S.Playpausebackground>
        </div>
    )
}
