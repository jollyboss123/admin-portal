import type { HorizontalNavItems } from '@layouts/types'
import administrator from './administrator'
import appAndPages from './app-and-pages'
import cashierAndFinance from './cashier-and-finance'
import charts from './charts'
import dashboard from './dashboard'
import forms from './forms'
import others from './others'
import reporting from './reporting'
import transactions from './transactions'
import uiElements from './ui-elements'

export default [...dashboard, ...appAndPages, ...uiElements, ...forms, ...charts, ...others, ...cashierAndFinance, ...reporting, ...transactions, ...administrator] as HorizontalNavItems
