// Fix for "tsc --noEmit" issue:
// https://github.com/solidjs/solid-start/issues/255

import fs from 'node:fs';

const ADDED_STR = '// @ts-nocheck\n\n';
const FILES = [
	'node_modules/solid-start/data/createRouteAction.tsx',
	'node_modules/solid-start/data/createRouteData.tsx',
	'node_modules/solid-start/data/Form.tsx',
	'node_modules/solid-start/entry-client/mount.tsx',
	'node_modules/solid-start/entry-client/StartClient.tsx',
	'node_modules/solid-start/entry-server/render.ts',
	'node_modules/solid-start/entry-server/StartServer.tsx',
	'node_modules/solid-start/error-boundary/ErrorBoundary.tsx',
	'node_modules/solid-start/islands/index.tsx',
	'node_modules/solid-start/root/InlineStyles.tsx',
	'node_modules/solid-start/root/Links.tsx',
	'node_modules/solid-start/root/Scripts.tsx',
	'node_modules/solid-start/router.tsx',
	'node_modules/solid-start/server/components/HttpHeader.tsx',
	'node_modules/solid-start/server/components/HttpStatusCode.tsx',
	'node_modules/solid-start/server/middleware.ts',
	'node_modules/solid-start/server/responses.ts',
	'node_modules/solid-start/server/server-functions/server.ts',
	'node_modules/solid-start/types.ts',
	'node_modules/solid-start/api/index.ts',
	'node_modules/solid-start/api/middleware.ts',
	'node_modules/solid-start/api/router.ts',
	'node_modules/solid-start/api/types.ts',
	'node_modules/solid-start/data/FormError.tsx',
	'node_modules/solid-start/index.tsx',
	'node_modules/solid-start/islands/server-router.tsx',
	'node_modules/solid-start/islands/router.ts',
	'node_modules/solid-start/server/server-functions/types.ts',
	'node_modules/solid-start/server/ServerContext.tsx',
	'node_modules/solid-start/session/cookie.ts',
	'node_modules/solid-start/session/cookies.ts',
	'node_modules/solid-start/session/memoryStorage.ts',
	'node_modules/solid-start/vite/plugin.d.ts',
];

const addTsNoCheck = (file: string) => {
	const content = fs.readFileSync(file).toString();

	if (!content.includes(ADDED_STR)) {
		fs.writeFileSync(file, ADDED_STR + content);
	}
};

FILES.forEach(src => addTsNoCheck(src));
