import styled from 'styled-components'
import { Box } from './Box'

export const Flex = styled(Box)`
    display: flex;
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
    gap: ${(props) => props.gap}px;
`
