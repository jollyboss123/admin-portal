import { createLayouts } from '@layouts'
import '@layouts/styles/index.scss'
import { layoutConfig } from '@themeConfig'

// generate layout config from themeConfig so don't have to write config twice
export default createLayouts(layoutConfig)
