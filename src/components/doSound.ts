import { useRef } from 'react'
import { Howl, HowlCallback } from 'howler'

// import asd from "../components/music-player/songs/"
interface props {
    src: string | string[]
    format?: string[] | undefined
    playing?: boolean | undefined
    mute?: boolean | undefined
    loop?: boolean | undefined
    preload?: boolean | undefined
    volume?: number | undefined
    onEnd?: (() => void) | undefined
    onPause?: (() => void) | undefined
    onPlay?: ((id: number) => void) | undefined
    onVolume?: ((id: number) => void) | undefined
    onStop?: ((id: number) => void) | undefined
    onLoad?: (() => void) | undefined
    onLoadError?: ((id: number) => void) | undefined
    html5?: boolean | undefined
}

export function DoSound(props?: props) {
    //const {Howl, Howler} = require('howler')
    const MyHowl = useRef<Howl | null>(null)
    const set = (name: string, autoplay = false) => {
        MyHowl.current?.stop()

        //  const { default: src } = require(`../music-player/songs/${name}.mp3`);
        // const {
        //     default: src,
        // } = require(`../components/music-player/songs/${name}.mp3`)

        MyHowl.current = new Howl({
            src: [`../components/music-player/songs/${name}.mp3`],
        })
        play()
        // MyHowl.current = new Howl({ src: [`../music-player/songs/${name}.mp3`], autoplay });

        //let sound = new Howl({src:[`../music-player/songs/${name}.mp3`], volume: 0.5})
        //console.log(sound)
        //sound.play();
    }

    const play = () => {
        console.log('i should play')
        MyHowl.current?.play()
        console.log(MyHowl)
    }

    const pause = () => {
        MyHowl.current?.pause()
    }

    const duration = () => {
        return MyHowl.current?.duration()
    }

    const playbackPosition = () => {
        return MyHowl.current?.seek()
    }

    const volume = (volume: number) => MyHowl.current?.volume(volume)

    const onceLoaded = (fn: HowlCallback) => {
        MyHowl.current?.once('load', fn)
    }

    return { set, play, pause, duration, playbackPosition, volume, onceLoaded }
}
