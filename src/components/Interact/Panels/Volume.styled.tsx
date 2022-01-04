import styled from 'styled-components'

const height = '1rem'
const thumbHeight = 12
const trackHeight = '0.3rem'

// colours
const upperColor = '#FFF'
const lowerColor = '#1db954'
const thumbColor = '#DDDDDD'
const thumbHoverColor = '#FFF'
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`

// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color: any, size: any) => {
    let i = 18
    let shadow = `${i}px 0 0 ${size} ${color}`

    for (; i < 706; i++) {
        shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`
    }

    return shadow
}
// export const Input = styled.input`
//     cursor: pointer;
// `
export const Wrapper = styled.div`
    /* width:100%; */
    background-color: green;
`
export const VolumeInput = styled.input`
    background-color: #181818;

    overflow: hidden;
    display: inline-block;
    appearance: none;
    max-width: 700px;
    width: 70%;
    margin: 0;
    height: ${height};
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: ${height};
        border-radius: 20rem;
        background: ${lowerBackground};
    }

    &::-webkit-slider-thumb {
        position: relative;
        appearance: none;
        height: ${thumbHeight}px;
        width: ${thumbHeight}px;
        background: ${thumbColor};
        border-radius: 100%;
        border: 0;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: ${makeLongShadow(upperColor, '-10px')};
        transition: background-color 150ms;
    }

    &::-moz-range-track,
    &::-moz-range-progress {
        width: 100%;
        height: ${height};
        background: ${upperBackground};
        border-radius: 20rem;
    }

    &::-moz-range-progress {
        background: ${lowerBackground};
        border-radius: 20rem;
    }

    &::-moz-range-thumb {
        appearance: none;
        margin: 0;
        height: ${thumbHeight};
        width: ${thumbHeight};
        background: ${thumbColor};
        border-radius: 100%;
        border: 0;
        transition: background-color 150ms;
    }

    &::-ms-track {
        width: 100%;
        height: ${height};
        border: 0;
        border-radius: 20rem;
        /* color needed to hide track marks */
        color: transparent;
        background: transparent;
    }

    &::-ms-fill-lower {
        background: ${lowerBackground};
    }

    &::-ms-fill-upper {
        background: ${upperBackground};
    }

    &::-ms-thumb {
        appearance: none;
        height: ${thumbHeight};
        width: ${thumbHeight};
        background: ${thumbColor};
        border-radius: 100%;
        border: 0;
        transition: background-color 150ms;
        /* IE Edge thinks it can support -webkit prefixes */
        top: 0;
        margin: 0;
        box-shadow: none;
    }

    &:hover,
    &:focus {
        &::-webkit-slider-thumb {
            background-color: ${thumbHoverColor};
        }
        &::-moz-range-thumb {
            background-color: ${thumbHoverColor};
        }
        &::-ms-thumb {
            background-color: ${thumbHoverColor};
        }
    }
`
