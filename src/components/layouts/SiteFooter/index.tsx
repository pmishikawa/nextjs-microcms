import { style } from './index.style'
import Content from '@/components/layouts/Content'

export function SiteFooter(): JSX.Element {
  return (
    <footer css={style.siteFooter}>
      <Content>
        <div css={style.copyright}>
          <p>©️ 2023 Ishikawa Kazuya</p>
        </div>
      </Content>
    </footer>
  )
}
