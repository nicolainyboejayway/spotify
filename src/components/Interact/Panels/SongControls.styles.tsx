import styled from 'styled-components'

export const pauseplay = styled.div``
pauseplay.defaultProps = {
    onClick: () => {},
}

export const nextsong = styled.div``
export const previoussong = styled.div``
export const loopsong = styled.div``
export const durationdiv = styled.div``
export const shuffle = styled.div``

export const masterDiv = styled.div`
    position: fixed;
    background-color: #181818;
    border-style: solid;
    border-width: thin;
    width: 100%;
    height: 6rem;
    bottom: 0%;
`

export const panel = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    top: 12.5%;

    justify-content: center;
    @media (max-width: 800px) {
        padding-left: 2rem;
    }
`

export const informationpanel = styled.div`
    position: absolute;
    display: flex;
    font-size: 1rem;
    left: 1rem;
    top: 25%;
    vertical-align: middle;
`
