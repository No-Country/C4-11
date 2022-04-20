import styled, {css} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
    border: "#0075FF",
    error: "#bb2929",
    success: "#1ed12d"
}

const Formulario = styled.form`
    display: block;

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
    border-radius: 5px;
    /*height: 45px;
    line-height: 45px;*/
    padding: 0 40px 0 10px;
    transition: 0.3 ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(134, 134, 134, 0.4);
    
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
    margin-bottom: -10px;
    color: ${colors.error};
    visibility: hidden;

    ${props => props.valido === 'true' && css`
        visibility: hidden;
    `}
    ${props => props.valido === 'false' && css`
        visibility: visible;
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

const ButtonCentered = styled.div`
    margin: 20px 0 20px 0;
    display: flex;
    justify-content: center;
   
`;

const Button = styled.button`
    background-color: black;
    color: yellow;
    font-size: 1rem;
    padding: 5px 35px 5px 35px;
    border: 1px solid yellow;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover{
         color: #d3d300;
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
    
    b{
        margin-left: 10px;
    }

    @media(max-width: 600px){
        font-size: 0.8rem;   
    }
    @media(max-width: 450px){
        position: relative;
        width: 320px;
        left: -35px;
    }


`;
export {Formulario,  Label, GroupInput, Input, IconVal, ErrorMessage, ButtonCentered, Button, Success, ErrorDiv}