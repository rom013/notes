import Logo from "./assets/logo-nlw-expert.svg"
import { NewNoteCard } from "./components/new-note-card"
import { NoteCard } from "./components/note-card"

export function App() {
	return (
		<div className="mx-auto max-w-6xl my-12 space-y-6">
			<img src={Logo} alt="nlw expert" />
			<form
				className="w-full"
			>
				<input
					type="text"
					placeholder="Busque em suas notas..."
					className="w-full bg-transparent text-3xl text-slate-300 font-semibold tracking-tight placeholder:text-slate-500 outline-none"
				/>
			</form>

			<div className="h-px bg-slate-700" />

			<main
				className="grid grid-cols-3 auto-rows-[250px] gap-6"
			>
				<NewNoteCard/>
				
				<NoteCard
					note={{
						content: "hello world",
						date: new Date()
					}}
				/>
			</main>
		</div>

	)
}