import Link from 'next/link';

import { api } from '@/convex/_generated/api';
import { ConvexHttpClient } from 'convex/browser';

import { currentUser } from '@clerk/nextjs/server';
import { SignedIn } from '@clerk/nextjs';

import { Blocks, Code2, Sparkles } from 'lucide-react';

import ThemeSelector from './theme-selector';
import LanguageSelector from './language-selector';
import ExecuteCode from './execute-code';
import ProfileButton from './profile-button';

const HeaderPanel = async () => {
	const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
	const user = await currentUser();

	const convexUser = await convex.query(api.users.getUser, {
		userId: user?.id || ''
	});

	return (
		<header className="flex items-center lg:justify-between justify-center bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg">
			<section className="hidden lg:flex items-center gap-8">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3 group relative">
					<div
						className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1
              ring-white/10 group-hover:ring-white/20 transition-all"
					>
						<Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
					</div>

					<div className="flex flex-col">
						<span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
							NeonCode
						</span>

						<span className="block text-xs text-blue-400/60 font-medium">
							Interactive Code Editor
						</span>
					</div>
				</Link>

				{/* Snippets */}
				<Link
					href="/snippets"
					className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 
           hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
				>
					<div
						className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
                to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
					/>
					<Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
					<span
						className="text-sm font-medium relative z-10 group-hover:text-white
                 transition-colors"
					>
						Snippets
					</span>
				</Link>
			</section>

			{/* Navigation */}
			<nav className="hidden lg:flex items-center gap-5">
				<ThemeSelector />
				<LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />

				{!convexUser?.isPro && (
					<Link
						href="/pricing"
						className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 
                transition-all duration-300"
					>
						<Sparkles className="size-4 text-amber-400 hover:text-amber-300" />
						<span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
							Pro
						</span>
					</Link>
				)}

				<SignedIn>
					<ExecuteCode />
				</SignedIn>

				<div className="pl-3 border-l border-gray-800">
					<ProfileButton />
				</div>
			</nav>
		</header>
	);
};

export default HeaderPanel;
