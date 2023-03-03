import Link from 'next/link'
import { style } from './index.style'
import Content from '@/components/layouts/Content'
import { BASE_PATH } from '@/config'

export function SiteFooter(): JSX.Element {
  return (
    <footer css={style.siteFooter}>
      <Content>
        <div css={style.wrapFooter}>
          <div css={style.footerLogo}>
            <Link href="/">
              <img src={`${BASE_PATH}/common/logo.png`} alt="プレスメディア" />
            </Link>
          </div>

          <div css={style.footerSns}>
            <a href="https://twitter.com/Pressmedia_Dlab" target="_blank" rel="noopener noreferrer">
              <img
                src={`${BASE_PATH}/common/twitter.svg`}
                alt="株式会社プレスメディアのTwitterアカウント"
                css={style.twitter}
              />
            </a>
          </div>
        </div>
        <div css={style.copyright}>
          <p>© pressmedia, Inc. All Rights Reserved.</p>
        </div>
      </Content>
    </footer>
  )
}
