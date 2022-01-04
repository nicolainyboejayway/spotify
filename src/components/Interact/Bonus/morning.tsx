import React from 'react'
import * as S from './morning.styled'

export default function Morning() {
    return (
        <>
            <S.container>
                <S.box>
                    <S.imagebox>
                        <S.image
                            src={require(`../../covers/overmono.png`)}
                        ></S.image>
                    </S.imagebox>
                    <S.text>Overmono</S.text>
                    <S.play>
                        <S.playicon></S.playicon>
                    </S.play>
                </S.box>
            </S.container>
        </>
    )
}
