import { ChangeEvent, useState } from "react"
import Logo from "./assets/logo-nlw-expert.svg"
import { NewNoteCard } from "./components/new-note-card"
import { NoteCard } from "./components/note-card"

interface Note {
	id: string,
	date: Date,
	content: string
}

export function App() {

	const [search, setSearch] = useState<string>('')

	const [notes, setNotes] = useState<Note[]>(() => {
		const noteOnStorage = localStorage.getItem('notes')

		if (noteOnStorage) return JSON.parse(noteOnStorage)

		return []
	})

	function onNoteCreated(content: string) {
		const newNote = {
			id: crypto.randomUUID(),
			date: new Date(),
			content
		}

		const notesArray = [newNote, ...notes]

		setNotes(notesArray)

		localStorage.setItem('notes', JSON.stringify(notesArray))
	}

	function onNoteDeleted(id: string){
		const notesArray = notes.filter(note => {
			return note.id !== id
		})

		setNotes(notesArray)
		localStorage.setItem('notes', JSON.stringify(notesArray))
	}

	function handleSearch(event: ChangeEvent<HTMLInputElement>) {
		const query = event.target.value

		setSearch(query)
	}

	

	const filteredNotes = search !== ''
		? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()))
		: notes


	return (
		<div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
			<img src={Logo} alt="nlw expert" />
			<form
				className="w-full"
			>
				<input
					type="text"
					placeholder="Busque em suas notas..."
					className="w-full bg-transparent text-3xl text-slate-300 font-semibold tracking-tight placeholder:text-slate-500 outline-none"
					onChange={handleSearch}
				/>
			</form>

			<div className="h-px bg-slate-700" />

			<main
				className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-6"
			>
				<NewNoteCard onNoteCreated={onNoteCreated} />

				{
					filteredNotes.map(note => {
						return <NoteCard
							note={note}
							key={note.id}
							onNoteDeleted={onNoteDeleted}
						/>
					})
				}

			</main>
		</div>

	)
}