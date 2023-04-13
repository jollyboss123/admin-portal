import type { VerticalNavItems } from '@/@layouts/types'
import appAndPages from './app-and-pages'
import dashboard from './dashboard'
import others from './others'

export default [...dashboard, ...appAndPages, ...others] as VerticalNavItems
