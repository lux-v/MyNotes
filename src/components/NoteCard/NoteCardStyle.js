import styled from "styled-components";

export const NoteCardWrapper = styled.div`
    width:300px;
    min-width: 300px;
    min-height: 340px;

    overflow: hidden;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;


    &:hover {
        transform: scale(1.05);
    }

    ${({ isAddNewNote }) =>
        isAddNewNote &&
        `
        max-width: 300px;
        max-height: 300px;
        border: 2px dashed #ccc;
        justify-content: center;
        align-items: center;

        `}
`;

export const NoteCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NoteCardTitle = styled.h3`
    font-size: 1.2rem;
`;

export const NoteCardDate = styled.p`
    font-size: 0.8rem;
    color: #999;
`;

export const NoteCardContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const NoteCardContent = styled.div`
    font-size: 0.9rem;
    color: #666;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const NoteCardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NoteCardFooterItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: #999;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #000;
    }
`;

export const NoteCardFooterIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

export const NoteCardFooterText = styled.p`
    font-size: 0.8rem;
    color: #999;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #000;
    }
`;

export const NoteCardAddNewIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

export const ColorPickerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
`;

export const ColorPickerTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

