import { Text } from "react-native"
import styled from "styled-components/native"

interface StyleComponentProps {
    fontSize: string,
    color: string
}

export const StyledText = styled(Text)<StyleComponentProps>`
font-size:${(props)=>props.fontSize || "16px"};
color: ${(props)=>props.color || "white"};
`