import React from 'react'

export interface ButtonProps {
    buttonLabel: string
    giveItAName: string
}

export function Button({ buttonLabel, giveItAName }: ButtonProps) {
    return (
        <button className={`${giveItAName}StyledButton`}>{buttonLabel}</button>
    )
}
