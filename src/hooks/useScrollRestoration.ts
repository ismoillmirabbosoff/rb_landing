import Router from 'next/router'
import { useEffect } from 'react'

function saveScrollPos(url: string) {
	const scrollPos = { x: window.scrollX, y: window.scrollY }
	sessionStorage.setItem(url, JSON.stringify(scrollPos))
}

function restoreScrollPos(url: string) {
	const scrollPos = JSON.parse(sessionStorage.getItem(url) as string)
	if (scrollPos) {
		window.scrollTo(scrollPos.x as number, scrollPos.y as number)
	}
}

// @ts-ignore
export const useScrollRestoration = router => {
	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			let shouldScrollRestore = false
			window.history.scrollRestoration = 'manual'
			restoreScrollPos(router.asPath as string)
			// @ts-ignore
			const onBeforeUnload = event => {
				saveScrollPos(router.asPath as string)
				// @typescript-eslint/no-dynamic-delete
				delete event.returnValue
			}

			const onRouteChangeStart = () => {
				saveScrollPos(router.asPath as string)
			}

			const onRouteChangeComplete = (url: string) => {
				if (shouldScrollRestore) {
					shouldScrollRestore = false
					restoreScrollPos(url)
				}
			}

			window.addEventListener('beforeunload', onBeforeUnload)
			Router.events.on('routeChangeStart', onRouteChangeStart)
			Router.events.on('routeChangeComplete', onRouteChangeComplete)
			Router.beforePopState(() => {
				shouldScrollRestore = true
				return true
			})

			return () => {
				window.removeEventListener('beforeunload', onBeforeUnload)
				Router.events.off('routeChangeStart', onRouteChangeStart)
				Router.events.off('routeChangeComplete', onRouteChangeComplete)
				Router.beforePopState(() => true)
			}
		}
	}, [router])
}
