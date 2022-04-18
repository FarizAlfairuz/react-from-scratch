import styled, { css } from 'styled-components'

const View = styled.div<{ margin?: string; padding?: string }>`
  ${(props) =>
    props.margin
      ? css`
          margin: ${props.margin};
        `
      : css``}
  ${(props) =>
    props.padding
      ? css`
          padding: ${props.padding};
        `
      : css``}
  display: flex;
  justify-content: between;
  width: 100%;
`

export default View
