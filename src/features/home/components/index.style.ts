import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const mainSection = css`
  position: relative;
  ${minMq('MD')} {
    position: relative;
  }
`

const messgeSectin = css``

const visual = css`
  height: auto;
  width: 100%;
`

const title = css`
  color: #aa00ff;
  font-weight: 700;
  margin: 80px;
`

const input = css`
  background-color: ${variables.WHITE};
  margin-top: 15px;

  input {
    border-radius: 2px;
    line-height: 1.6;
    padding: 10px;
    width: 100%;
  }
`

const button = css`
  background-color: ${variables.SUB_C};
  border-radius: 2px;
  color: ${variables.BASE_BGC};

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  max-width: 400px;
  padding: 15px 15px;
  text-align: center;
  width: 100%;
`

export const style = {
  mainSection,
  messgeSectin,
  visual,
  title,
  input,
  button,
}
