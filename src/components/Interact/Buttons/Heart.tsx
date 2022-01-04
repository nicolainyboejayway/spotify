import React from 'react'
import * as S from '../Buttons/Heart.styled'

export interface ButtonProps {
    name?: string
    fill: string
}

export default function Heart({ name, fill }: ButtonProps) {
    const handleLike = () => {}
    return (
        <S.heartButton
            className={name}
            fill={fill}
            onClick={handleLike}
        ></S.heartButton>
    )
}
