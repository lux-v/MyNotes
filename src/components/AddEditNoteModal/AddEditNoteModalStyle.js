import styled from "styled-components";

export const AddEditNoteModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

export const AddEditNoteModalContent = styled.div`
    width: 500px;

    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const AddEditNoteModalTitle = styled.h2`

    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const AddEditNoteModalForm = styled.form`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const AddEditNoteModalInput = styled.input`

    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 20px;

    ${({ isError }) =>
        isError &&
        `
        border: 1px solid red;
    `}

`;

export const AddEditNoteModalTextarea = styled.textarea`

    width: 100%;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;

    padding: 10px;
    margin-bottom: 20px;

    ${({ isError }) =>
        isError &&
        `
        border: 1px solid red;
    `}
`;

export const AddEditNoteModalButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AddEditNoteModalButton = styled.button`

    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`;


export const AddEditNoteModalCloseIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const AddEditNoteModalSuccess = styled.p`

    color: green;
    font-size: 14px;


    font-weight: 700;
    margin-bottom: 20px;
`;

export const AddEditNoteModalLoading = styled.p`

    color: blue;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const AddEditNoteModalDate = styled.p`

    color: #000;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const AddEditNoteModalDateInput = styled.input`

    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 20px;

    ${({ isError }) =>
        isError &&
        `
        border: 1px solid red;
    `}
`;

export const ErrorMsg = styled.p`
    color: red;
    width: 100%;
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    margin-left: 20px;
`;
