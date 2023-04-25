import './app-bar-search'
import './apps/user-list'
import './jwt'
import mock from './mock'
import './pages/profile'

// forwards the matched request over network
mock.onAny().passThrough()
