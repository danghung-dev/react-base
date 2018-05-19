import styled, { css } from 'styled-components'

export const theme = {
  blue: '#59C3C3',
  yellow: '#ffeb3b',
  purple: '#D741A7',
  cherry: '#E02F5E',
  tomato: '#F06449',
  main: 'mediumseagreen',
  color_primary: '#800000',
  color_secondary: '#008000',
  color_secondary_fade: '#159915',
  color_tertiary: '#f1b13c',
  light_gray: '#f3f3f3',
  mid_light_gray: '#BCBCBC',
  mid_gray: '#8F8F8F',
  dark_gray: '#525252',
  box_padding_width: '100px',
  box_padding_height: '80px'
}

export const Box = styled.div`
  // min-width: 1200px;
  margin: auto;
  // margin-top: 100px;
  // margin-bottom: 100px;
  position: relative;
  // width: 65%;
  // background: white;
  display: block;
  padding: 0px 0px;
  background: ${props => props.background};
  height: 100%;
`

export const OuterWrapper = styled.div`
  height: 100%;
`
export const Margin = styled.div`
  height: 100px;
  background: ${props => props.background};
  width: 100%;
`
