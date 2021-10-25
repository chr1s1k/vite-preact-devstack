import { render } from 'preact'
import { App } from './components'

const appEl = document.getElementById('app')

if (appEl) {
  render(<App />, appEl)
}
