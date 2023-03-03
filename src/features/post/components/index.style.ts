import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'

const userSection = css`
  margin-top: 40px;
  position: relative;
  ${minMq('MD')} {
    position: relative;
  }
`

export const style = {
  userSection,
}
