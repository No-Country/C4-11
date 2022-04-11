import styled, {css} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
    border: "#0075FF",
    error: "#bb2929",
    success: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width:800px) {
       grid-template-columns: 1fr
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.valido === 'false' && css`
        color: ${colors.error}
    `}

`;

const GroupInput = styled.div`
    position: relative;
    z-index: 100;
`;

const Input = styled.input`
    width: 100%;
    background-color: white;
    border-radius:45px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: 0.3 ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    
    }
    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}

    ${props => props.valido === 'false' && css`
        border: 3px solid ${colors.error} !important;
    `}

`;

const ErrorMessage = styled.p`
    font-size: 20px;
    margin: 0;
    color: ${colors.error};
    display: none;

    ${props => props.valido === 'true' && css`
        display: none;
    `}
    ${props => props.valido === 'false' && css`
        display: block;
    `}
`;

const IconVal = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colors.error};
    `}
    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colors.success};
    `}
`;
const Terminos = styled.div`
grid-column: span 2;
    input{
        margin-left: 10px;
    }
    @media (max-width: 800px){
        grid-column: span 1;
    }
`;

const ButtonCentered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    @media (max-width: 800px){
        grid-column: span 1;
    }
`;

const Button = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background-color: black;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: '0.1 ease all';

    &:hover{
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    }
`;

const Success = styled.p`
    font-size: 14px;
    color: ${colors.success};
`;

const ErrorDiv = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colors.error};
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    b{
        margin-left: 10px;
    }
`;
export {Formulario, Label, GroupInput, Input, IconVal, ErrorMessage, Terminos, ButtonCentered, Button, Success, ErrorDiv}