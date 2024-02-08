import * as Dialog from "@radix-ui/react-dialog"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { X } from "lucide-react"


interface NoteCardProps {
    note: {
        id: string
        date: Date
        content: string
    }
    onNoteDeleted: (id: string) => void
}

export function NoteCard({ note, onNoteDeleted }: NoteCardProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    className="flex flex-col text-left gap-3 rounded-md bg-slate-800 p-5 overflow-hidden relative hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                >
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <span className="text-sm font-medium text-slate-300">
                        {
                            formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })
                        }
                    </span>
                    <p className="text-sm leading-6 text-slate-400">
                        {note.content}
                    </p>
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-slate-900/60" />
                <Dialog.Content asChild>
                    <section
                        className="fixed left-1/2 overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none"
                    >
                        <Dialog.Close
                            className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100"
                        >
                            <X className="size-5" />
                        </Dialog.Close>
                        <div
                            className="flex flex-1 flex-col gap-3 p-5"
                        >
                            <span className="text-sm font-medium text-slate-300">
                                {
                                    formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })
                                }
                            </span>
                            <p className="text-sm leading-6 text-slate-400">
                                {note.content}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => onNoteDeleted(note.id)}
                            className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium"
                        >
                            Deseja <span className="text-red-400">apagar essa nota</span>?
                        </button>

                    </section>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}