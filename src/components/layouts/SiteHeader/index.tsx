import { Navigation } from '@/components/layouts/Navigation'
import { style } from './index.style'

const SiteHeader = (): JSX.Element => {
  return (
    <header css={style.siteHeader} id="site_header">
      <Navigation />
    </header>
  )
}

export default SiteHeader
