import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLElement> {
    onClick: () => void
    src: string
    alt: any
}

interface Image extends React.HTMLAttributes<HTMLElement> {
    onClick: () => void
    background: any
}

export const ImageContainer = styled.div<Image>`
    width: 3rem;
    height: 3rem;
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: cover;
`
export const TrackImage = styled.image<Props>`
    width: 100%;
    height: 100%;
`

export const TextInfo = styled.div`
    display: grid;
    margin: auto;
`

export const TrackTitle = styled.div`
    font-size: 0.9rem;
    padding-left: 1rem;
    margin-bottom: 0.2rem;
    justify-content: left;
`

export const TrackArtist = styled.span`
    position: relative;
    font-size: 0.7rem;
    padding-left: 1rem;
    color: grey;

    justify-content: left;
`

interface aTag {
    href: any
}
export const ContentLinkTrack = styled.a<aTag>`
    color: white;
    text-decoration: none;
`
export const ContentLinkArtist = styled.a<aTag>`
    color: white;
    text-decoration-line: none;
`
