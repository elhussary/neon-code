/* eslint-disable no-unused-vars */

import { Monaco } from '@monaco-editor/react';
import { Id } from '../../convex/_generated/dataModel';

declare interface Theme {
	id: string;
	label: string;
	color: string;
}

declare interface Language {
	id: string;
	label: string;
	logoPath: string;
	monacoLanguage: string;
	defaultCode: string;
	pistonRuntime: LanguageRuntime;
}

declare interface LanguageRuntime {
	language: string;
	version: string;
}

declare interface ExecuteCodeResponse {
	compile?: {
		output: string;
	};
	run?: {
		output: string;
		stderr: string;
	};
}

declare interface ExecutionResult {
	code: string;
	output: string;
	error: string | null;
}

declare interface CodeEditorState {
	language: string;
	output: string;
	isRunning: boolean;
	error: string | null;
	theme: string;
	fontSize: number;
	editor: Monaco | null;
	executionResult: ExecutionResult | null;
	setEditor: (editor: Monaco) => void;
	getCode: () => string;
	setLanguage: (language: string) => void;
	setTheme: (theme: string) => void;
	setFontSize: (fontSize: number) => void;
	runCode: () => Promise<void>;
}

declare interface Snippet {
	_id: Id<'snippets'>;
	_creationTime: number;
	userId: string;
	language: string;
	code: string;
	title: string;
	userName: string;
}
