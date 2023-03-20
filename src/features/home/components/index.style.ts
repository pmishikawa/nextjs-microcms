import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const mainSection = css`
  margin-top: 50px;

  ${minMq('MD')} {
    margin-top: 80px;
  }
`

const visual = css`
  height: auto;
  width: 100%;
`

const text = css`
  line-height: 1.8;
  margin-top: 15px;
  text-align: justify;

  ${minMq('MD')} {
    margin-top: 30px;
  }
`

const list = css`
  line-height: 1.8;
  margin-top: 15px;
  text-align: justify;

  ${minMq('MD')} {
    margin-top: 30px;
  }
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
  visual,
  text,
  list,
  input,
  button,
}
