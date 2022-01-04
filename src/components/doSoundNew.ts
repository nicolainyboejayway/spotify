import { Howl, HowlCallback } from 'howler'

import { useRef, useState } from 'react'

export function DoSoundNew() {
    const MyHowl = useRef<Howl | null>(null)
    let CurrentSong: string = ''
    let CurrentTrack: string = ''
    let CurrentArtist: string = ''
    const [volume, setVolume] = useState(1)

    const set = (name: string, trackTitle: string, trackArtist: string) => {
        CurrentSong = name
        CurrentTrack = trackTitle
        CurrentArtist = trackArtist

        console.log(
            'This is the TrackTitle: ',
            trackTitle,
            ' This is the Artist: ',
            trackArtist
        )
        MyHowl.current?.stop()
        MyHowl.current = new Howl({
            src: [require(`./music-player/songs/${name}.mp3`)],
            autoplay: false,
            loop: false,
            volume: volume,
            html5: true,
            format: ['mp3', 'aac'],
            onend: function () {
                console.log('Finished!')
            },
        })

        MyHowl.current?.once('load', function () {
            play()
            duration()
        })
    }

    const trackTitle = () => {
        return CurrentTrack
    }

    const trackArtist = () => {
        return CurrentArtist
    }

    const currentID = () => {
        console.log('I AM HERE')
        return CurrentSong
    }

    const play = () => {
        MyHowl.current?.play()
    }

    const pause = () => {
        MyHowl.current?.pause()
    }

    const loop = () => {
        MyHowl.current?.loop()
    }

    const duration = () => {
        const setDuration = MyHowl.current?.duration()
        return setDuration
    }

    const getVolume = () => {
        return MyHowl.current?.volume()
    }

    const controlVolume = (vol: number) => {
        setVolume(vol)
        MyHowl.current?.volume(volume)
    }

    const playbackPosition = () => {
        return MyHowl.current?.seek()
    }

    const onceLoaded = (fn: HowlCallback) => {
        MyHowl.current?.once('load', fn)
    }

    const setPosition = (pos: number) => {
        MyHowl.current?.seek(pos)
    }

    return {
        duration,
        playbackPosition,
        play,
        set,
        trackTitle,
        trackArtist,
        pause,
        loop,
        currentID,
        getVolume,
        controlVolume,
        onceLoaded,
        setPosition,
    }
}
