import styled from 'styled-components'

export const frameDiv = styled.div`
    display: grid;
    width: 20rem;
    height: 5rem;
    background-color: #181818;
    padding: 0.2rem;
`

export const buttonsDiv = styled.div`
    display: flex;
    width: 20rem;
    background-color: #181818;
    height: 2.5rem;
    margin-bottom: 0.8rem;
    justify-content: center;
`

export const durationDiv = styled.div`
    display: flex;
    width: 20rem;
    background-color: #181818;

    height: 1.5rem;
`

export const pauseplay = styled.div``
pauseplay.defaultProps = {
    onClick: () => {},
}
export const previoussong = styled.div``
export const nextsong = styled.div``
export const loopsong = styled.div``
export const durationdiv = styled.div``
export const shuffle = styled.div``
