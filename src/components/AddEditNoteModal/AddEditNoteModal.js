import React, { useState } from 'react'

import {
    AddEditNoteModalWrapper,
    AddEditNoteModalContent,
    AddEditNoteModalTitle,
    AddEditNoteModalForm,
    AddEditNoteModalInput,
    AddEditNoteModalTextarea,
    AddEditNoteModalButton,
    AddEditNoteModalButtons,
    AddEditNoteModalCloseIcon,
    AddEditNoteModalDate,
    AddEditNoteModalDateInput,
    AddEditNoteModalLoading,
    ErrorMsg,

} from './AddEditNoteModalStyle'
//icons
import CloseIcon from '../../assets/icons/close.png'
//dummy data
import { dummyNoteContent } from '../../constants/constants'

const AddEditNoteModal = ({
    openAddEditNoteModal,
    setOpenAddEditNoteModal,
    isAddNewNote,
    clickedNote,
}) => {
    const [title, setTitle] = useState(isAddNewNote ? 'Test' : clickedNote.title)
    const [content, setContent] = useState(isAddNewNote ? dummyNoteContent : clickedNote.content)
    const [date, setDate] = useState(isAddNewNote ? '2023-02-01' : clickedNote.date)

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (title === '' || content === '' || date === '') {
            setError(true)
        } else {
            setError(false)
            setLoading(true)

            // setTimeout(() => {
            isAddNewNote ? handleAddNote(e) : handleEditNote(e)
            // }, 2000)

        }
    }

    const handleAddNote = (e) => {
        e.preventDefault()
        const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes')) || []
        const newNote = {
            id: Math.floor(Math.random() * 100000000),
            title,
            content,
            date,
        }

        const newNotes = [...notesFromLocalStorage, newNote]
        localStorage.setItem('notes', JSON.stringify(newNotes))
        setLoading(false)
        setOpenAddEditNoteModal(false)
        window.location.reload()
    }

    const handleEditNote = (e) => {
        e.preventDefault()
        const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'))
        const newNotes = notesFromLocalStorage.map(note => {
            if (note.id === clickedNote.id) {
                return {
                    ...note,
                    title,
                    content,
                    date,
                }
            } else {
                return note
            }
        })
        localStorage.setItem('notes', JSON.stringify(newNotes))
        setLoading(false)
        setOpenAddEditNoteModal(false)
        window.location.reload()
    }


    return (
        <>
            {openAddEditNoteModal && (
                <AddEditNoteModalWrapper>
                    <AddEditNoteModalContent>
                        <AddEditNoteModalTitle>
                            {isAddNewNote ? 'Add new note' : 'Edit note'}
                        </AddEditNoteModalTitle>
                        <AddEditNoteModalForm>
                            {title === '' && error === true && <ErrorMsg>Title is required</ErrorMsg>}
                            <AddEditNoteModalInput
                                type="text"
                                placeholder="Title"
                                value={title}
                                isError={title === '' && error}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {content === '' && error && <ErrorMsg>Content is required</ErrorMsg>}
                            <AddEditNoteModalTextarea
                                placeholder="Content"
                                value={content}
                                isError={content === '' && error}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            {date === '' && error && <ErrorMsg>Date is required</ErrorMsg>}
                            <AddEditNoteModalDate>
                                <AddEditNoteModalDateInput
                                    type="date"
                                    value={date}
                                    isError={date === '' && error}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </AddEditNoteModalDate>
                            <AddEditNoteModalButtons>
                                <AddEditNoteModalButton
                                    onClick={handleSubmit}
                                >
                                    {isAddNewNote ? 'Add note' : 'Edit note'}
                                </AddEditNoteModalButton>
                                <AddEditNoteModalButton
                                    onClick={() => setOpenAddEditNoteModal(false)}
                                >
                                    Cancel
                                </AddEditNoteModalButton>
                            </AddEditNoteModalButtons>

                            {loading && <AddEditNoteModalLoading>Loading...</AddEditNoteModalLoading>}
                        </AddEditNoteModalForm>
                        <AddEditNoteModalCloseIcon
                            src={CloseIcon}
                            onClick={() => setOpenAddEditNoteModal(false)}
                        />
                    </AddEditNoteModalContent>
                </AddEditNoteModalWrapper>
            )}
        </>

    )
}

export default AddEditNoteModal