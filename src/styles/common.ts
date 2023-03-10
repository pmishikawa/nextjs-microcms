import { css } from 'styled-components'
import { minMq, maxMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'
import { fontSize } from '@/styles/mixin'

const common = css`
  main {
    flex: 1;
  }

  h2 {
    font-family: 'M PLUS 1p', sans-serif;
    font-style: normal;
    font-weight: 500;
    height: auto;
    margin-bottom: -10px;
    line-height: 100%;
    padding-bottom: 10px;
    width: fit-content;

    span {
      ${fontSize(30)}
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      padding-bottom: 10px;
      margin-bottom: -10px;
    }
    ${fontSize(80)}
  }

  h3 {
    color: ${variables.BASE_BDC};
    font-weight: 700;
  }

  a {
    cursor: pointer;
    text-decoration: none;

    &.is-hover {
      transition: all 0.2s;

      img,
      span {
        opacity: 0.75;
      }
    }

    img,
    span {
      display: block;
      max-width: 100%;
      pointer-events: none;
    }
  }

  button {
    cursor: pointer;
  }

  [data-mq='sp'] {
    ${minMq('MD')} {
      display: none !important;
    }
  }

  [data-mq='pc'] {
    ${maxMq('MD')} {
      display: none !important;
    }
  }
`

export default common
