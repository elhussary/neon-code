import EditorPanel from './_components/editor-panel';
import OutputPanel from './_components/output-panel';
import HeaderPanel from './_components/header-panel';

export default function Home() {
	return (
		<main className="min-h-screen">
			<div className="max-w-[1800px] mx-auto p-4">
				<HeaderPanel />

				<section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<EditorPanel />
					<OutputPanel />
				</section>
			</div>
		</main>
	);
}
