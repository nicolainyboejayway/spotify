import styled from 'styled-components'

import { Button } from './Button'

interface Properties {
    backgroundColor?: string
}

export const StyledButton = styled(Button)<Properties>`
    // width: 5rem;
    // height: 5rem;
    // background-color: {(props)=>props.backgroundColor};
`
