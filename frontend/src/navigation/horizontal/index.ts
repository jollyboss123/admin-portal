import type { HorizontalNavItems } from '@layouts/types'
import administrator from './administrator'
import appAndPages from './app-and-pages'
import cashierAndFinance from './cashier-and-finance'
import dashboard from './dashboard'
import others from './others'
import reporting from './reporting'
import transactions from './transactions'

export default [...dashboard, ...appAndPages, ...others, ...cashierAndFinance, ...reporting, ...transactions, ...administrator] as HorizontalNavItems
