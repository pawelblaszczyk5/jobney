// @refresh reload
import { type JSX, Suspense } from 'solid-js';
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from 'solid-start';

// eslint-disable-next-line import/no-unassigned-import, import/extensions -- Tailwind stylesheet
import '~/root.css';

export default (): JSX.Element => (
	<Html lang="en">
		<Head>
			<Title>Jobney</Title>
			<Meta charset="utf-8" />
			<Meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>
		<Body class="p-4">
			<Suspense>
				<ErrorBoundary>
					<Routes>
						<FileRoutes />
					</Routes>
				</ErrorBoundary>
			</Suspense>
			<Scripts />
		</Body>
	</Html>
);
