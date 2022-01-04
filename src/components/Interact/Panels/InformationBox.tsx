import React from 'react'
import Heart from '../Buttons/Heart'
import ImageOpener from '../Buttons/ImageOpener'
import * as S from './SongControls.styles'
import './informationbox.css'
import * as Se from '../Panels/informationbox.styled'

export interface SongProps {
    title?: string
    artist?: string
    image?: string
}

export default function InformationBox({ title, artist, image }: SongProps) {
    const handleonClickImage = () => {
        console.log('I clicked the image')
    }
    const handleLike = () => {
        console.log('I LIKE')
    }
    return (
        <div>
            <S.informationpanel>
                <Se.ImageContainer
                    onClick={handleonClickImage}
                    background={require('../svgs/7aa83ee6-b7da-43de-b3bb-57e38ec774b5.jpeg')}
                >
                    <Se.TrackImage
                        onClick={handleonClickImage}
                        alt=""
                        src="{require('../svgs/7aa83ee6-b7da-43de-b3bb-57e38ec774b5.jpeg')}"
                    ></Se.TrackImage>
                </Se.ImageContainer>
                <Se.TextInfo>
                    <Se.TrackTitle>
                        <Se.ContentLinkTrack href="/#">
                            {title}
                        </Se.ContentLinkTrack>
                    </Se.TrackTitle>
                    <Se.TrackArtist>
                        <Se.ContentLinkArtist href="/#">
                            {artist}
                        </Se.ContentLinkArtist>
                    </Se.TrackArtist>
                </Se.TextInfo>

                <div>
                    <div onClick={handleLike}>
                        <Heart fill={'white'}></Heart>
                    </div>
                </div>
                <div>
                    <ImageOpener></ImageOpener>
                </div>
            </S.informationpanel>
        </div>
    )
}
