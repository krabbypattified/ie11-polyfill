// Babel polyfill
if (!window._babelPolyfill) require('@babel/polyfill')

// document.currentScript
const currentExecutingScript = require('current-executing-script')
if (!document.currentScript) Object.defineProperty(document, 'currentScript', { get: currentExecutingScript })

// new CustomEvent
const CustomEvent = (event, params = { bubbles: false, cancelable: false, detail: undefined }) => {
  var evt = document.createEvent('CustomEvent')
  evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
  return evt
}
CustomEvent.prototype = window.Event.prototype
if ( typeof window.CustomEvent !== "function" ) window.CustomEvent = CustomEvent

// new URL
require('url-polyfill')

// fetch
require('whatwg-fetch')
