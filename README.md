# ie11-polyfill
**Disclaimer: I don't like Internet Explorer.**
I created this repository to support IE11 in some projects of mine.
I work in a babel environment and do not want to load unnecessary JS in Chrome just to support IE11, so I only download this polyfill library if the current browser is IE11.
```
if (isIE11) await loadJS('http://jsdelivr.../ie11-polyfill/...')
```
This project is basically `@babel/polyfill` + some other IE11 polyfills for my specific use case. Feel free to fork or submit a PR to add the ones you need. Or just steal this code for yourself.
