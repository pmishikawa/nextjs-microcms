import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'
import { fontSize } from '@/styles/mixin'

export const page = css`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-flow: column;
  flex-flow: column;
  font-family: 'Zen Maru Gothic', 'Noto Sans JP', 'Hiragino Kaku Gothic ProN',
    'ヒラギノ角ゴ ProN W3', sans-serif;
  ${fontSize(14)}

  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  min-height: 100vh;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: ${variables.HEADER_H_SP};
  position: relative;
  width: 100%;

  ${minMq('MD')} {
    ${fontSize(16)}
    padding-left: 0;
    padding-right: 0;
    padding-top: ${variables.HEADER_H_PC};
  }
`

export const style = {
  page,
}
