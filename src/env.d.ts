/* eslint-disable @typescript-eslint/no-unused-vars */

type Adapter = {
	build: (options: Options) => Promise<void>;
	dev: (options: Options) => Promise<void>;
	name: string;
	start: (options: Options) => Promise<void>;
};

declare module 'solid-start-vercel' {
	function adapter(options: { edge?: boolean; ssr?: boolean }): Adapter;

	export = adapter;
}
