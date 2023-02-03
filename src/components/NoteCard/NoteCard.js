import React, { useState } from 'react'
import {
    NoteCardWrapper,
    NoteCardHeader,
    NoteCardTitle,
    NoteCardDate,
    NoteCardContentWrapper,
    NoteCardContent,
    NoteCardFooter,
    NoteCardFooterItem,
    NoteCardFooterIcon,
    NoteCardFooterText,
    NoteCardAddNewIcon,

} from "./NoteCardStyle"
//icons
import EditIcon from '../../assets/icons/edit.png'
import DeleteIcon from '../../assets/icons/delete.png'
import AddNewIcon from '../../assets/icons/plus.png'
//components
import AddEditNoteModal from '../AddEditNoteModal/AddEditNoteModal'
//react-markdown
import ReactMarkdown from 'react-markdown'



const handleDeleteNote = (id) => {
    const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'))
    const newNotes = notesFromLocalStorage.filter(note => note.id !== id)

    localStorage.setItem('notes', JSON.stringify(newNotes))
    window.location.reload()
}

const NoteCard = ({
    isAddNewNote,
    note = {},

}) => {
    const { id, title, content, date } = note
    const [openAddEditNoteModal, setOpenAddEditNoteModal] = useState(false)

    return (
        <>
            <NoteCardWrapper
                isAddNewNote={isAddNewNote}
                onClick={isAddNewNote ?
                    () => setOpenAddEditNoteModal(true)
                    : null
                }
            >
                <NoteCardHeader>
                    <NoteCardTitle>
                        {isAddNewNote ? 'Add new note' : title}
                    </NoteCardTitle>
                    <NoteCardDate>
                        {date}
                    </NoteCardDate>
                </NoteCardHeader>
                <NoteCardContentWrapper>
                    {isAddNewNote ?
                        <NoteCardAddNewIcon src={AddNewIcon} />
                        :
                        <NoteCardContent>
                            <ReactMarkdown>
                                {content}
                            </ReactMarkdown>
                        </NoteCardContent>
                    }
                </NoteCardContentWrapper>
                {!isAddNewNote &&
                    <NoteCardFooter>
                        <NoteCardFooterItem
                            onClick={() => setOpenAddEditNoteModal(true)}
                        >
                            <NoteCardFooterIcon src={EditIcon} />
                            <NoteCardFooterText>
                                Edit
                            </NoteCardFooterText>
                        </NoteCardFooterItem>
                        <NoteCardFooterItem
                            onClick={() => {
                                handleDeleteNote(id)
                                console.log("Delete note number: " + id)
                            }}
                        >
                            <NoteCardFooterIcon src={DeleteIcon} />
                            <NoteCardFooterText>
                                Delete
                            </NoteCardFooterText>
                        </NoteCardFooterItem>
                    </NoteCardFooter>
                }
            </NoteCardWrapper>
            {openAddEditNoteModal &&
                <AddEditNoteModal
                    clickedNote={{ id, title, content, date }}
                    isAddNewNote={isAddNewNote}
                    openAddEditNoteModal={openAddEditNoteModal}
                    setOpenAddEditNoteModal={setOpenAddEditNoteModal}
                />
            }
        </>
    )
}

export default NoteCard