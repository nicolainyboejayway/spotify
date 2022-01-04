import React, { useRef, useEffect, useState, MutableRefObject } from 'react'
import * as S from './SongInfo.styled'

export interface ModalProps {
    showString: string
    onClose: () => void
}

export default function SongInfo({ showString, onClose }: ModalProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef() as MutableRefObject<HTMLDivElement>
    const titleRef = useRef() as MutableRefObject<HTMLHeadingElement>
    const descriptionRef = useRef() as MutableRefObject<HTMLHeadingElement>
    const imageRef = useRef() as MutableRefObject<HTMLImageElement>
    const circleRef = useRef() as MutableRefObject<HTMLDivElement>
    const playRef = useRef() as MutableRefObject<HTMLDivElement>

    const [show, setShow] = useState('')

    useEffect(() => {
        setShow(showString)
        return () => {
            setShow('none')
        }
    }, [showString])

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 25
            let yAxis = (window.innerHeight / 2 - e.pageY) / 25
            cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
        }
        containerRef.current?.addEventListener('mousemove', onMouseMove)

        containerRef.current?.addEventListener('mouseenter', (e) => {
            cardRef.current.style.transition = 'all 0.05s ease'

            //PopOut
            titleRef.current.style.transform = 'translateZ(150px)'
            descriptionRef.current.style.transform = 'translateZ(100px)'
            imageRef.current.style.transform = 'translateZ(180px)'
            imageRef.current.style.width = '12rem'
            circleRef.current.style.transform =
                'translateZ(100px) rotate(45deg)'
            playRef.current.style.transform = 'translateZ(75px)'
        })

        containerRef.current?.addEventListener('mouseleave', (e) => {
            cardRef.current.style.transition = 'all 0.5s ease'
            cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`

            //Popback
            titleRef.current.style.transform = 'translateZ(0px)'
            descriptionRef.current.style.transform = 'translateZ(0px)'
            imageRef.current.style.transform = 'translateZ(0px)'
            imageRef.current.style.width = '10rem'
            circleRef.current.style.transform = 'translateZ(0px)'
            playRef.current.style.transform = 'translateZ(0px)'
        })

        return () => {
            containerRef.current?.removeEventListener('mousemove', onMouseMove)
        }
    }, [
        titleRef,
        descriptionRef,
        imageRef,
        circleRef,
        playRef,
        containerRef,
        cardRef,
    ])

    return (
        <>
            <S.GlobalStyle />
            <S.mainDiv>
                <S.container show={show} ref={containerRef}>
                    <S.card ref={cardRef}>
                        <S.close onClick={onClose} />
                        <S.imageart>
                            <S.contentimage
                                ref={imageRef}
                                src={require(`../../covers/overmono.png`)}
                            ></S.contentimage>
                            <S.circle ref={circleRef}></S.circle>
                        </S.imageart>
                        <S.info>
                            <S.title ref={titleRef}>
                                OverMono - Diamond Cut
                            </S.title>
                            <S.description ref={descriptionRef}>
                                Overmono's debut EP, Arla, appeared in 2016,
                                with its mix of big room, trance-inspired
                                arpeggiated riffs and dusty rave breaks gaining
                                DJ play and positive reviews.
                            </S.description>
                            <S.listen ref={playRef}>
                                <S.play>Play</S.play>
                            </S.listen>
                        </S.info>
                    </S.card>
                </S.container>
            </S.mainDiv>
        </>
    )
}
