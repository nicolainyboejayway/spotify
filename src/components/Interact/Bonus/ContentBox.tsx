import React from 'react'
import * as S from './ContentBox.styled'

export interface ContentProps {
    title: string
    description: string
    image?: any
    playable?: boolean
}

export default function ContentBox({
    title,
    description,
    image,
    playable,
}: ContentProps) {
    return (
        <S.contentDiv>
            <S.frameDiv>
                <S.contentImage>
                    <S.image
                        src={require(`../../covers/overmono.png`)}
                    ></S.image>
                </S.contentImage>
                <S.headline>{title}</S.headline>
                <S.description>{description}</S.description>
                {playable ? (
                    <S.playdiv>
                        <S.playicon></S.playicon>
                    </S.playdiv>
                ) : null}
            </S.frameDiv>
        </S.contentDiv>
    )
}
