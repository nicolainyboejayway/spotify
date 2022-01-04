import React from 'react'
import Morning from './morning'
import ContentBox from './ContentBox'
import * as S from '../../../App.styled'

export default function Home() {
    return (
        <S.HomeDiv>
            <S.TextDiv>
                <S.Text>Good Morning</S.Text>
            </S.TextDiv>
            <S.EveningDiv>
                <Morning></Morning>
                <Morning></Morning>
                <Morning></Morning>
                <Morning></Morning>
                <Morning></Morning>
                <Morning></Morning>
            </S.EveningDiv>
            <S.TextDiv>
                <S.Text>Episodes You May Like</S.Text>
            </S.TextDiv>
            <S.ContentDiv>
                <ContentBox
                    title={'Flyvende Tallerken'}
                    description="DR"
                ></ContentBox>
                <ContentBox
                    title={'Podcast 1'}
                    description="By Spotify"
                ></ContentBox>
                <ContentBox
                    title={'Podcast 2'}
                    description="By Spotify"
                ></ContentBox>
                <ContentBox
                    title={'Podcast 3'}
                    description="By Spotify"
                ></ContentBox>
            </S.ContentDiv>
            <S.TextDiv>
                <S.Text>Mixed For Today</S.Text>
            </S.TextDiv>
            <S.ContentDiv>
                <ContentBox
                    title={'Daily Mix 1'}
                    description="By Spotify"
                    playable={true}
                ></ContentBox>
                <ContentBox
                    title={'Daily Mix 2'}
                    description="By Spotify"
                    playable={true}
                ></ContentBox>
                <ContentBox
                    title={'Daily Mix 3'}
                    description="By Spotify"
                    playable={true}
                ></ContentBox>
                <ContentBox
                    title={'Daily Mix 4'}
                    description="By Spotify"
                    playable={true}
                ></ContentBox>
            </S.ContentDiv>
        </S.HomeDiv>
    )
}
