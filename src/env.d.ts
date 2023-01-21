/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module 'solid-start-vercel' {
	function adapter(options: { edge?: boolean; ssr?: boolean }): import('solid-start/vite').Adapter;

	export = adapter;
}
