import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #000000;
        --red:#fe6700; 

        --text-title:#de9352;
        --text-body:#000000;

    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        @media(max-width:1080px){
            font-size:93.75;
        }

        @media(max-width:720px){
            font-size: 87.5%;
        }
    }

    button{
        cursor:pointer;
    }

    [disable]{
        opacity:0.6;
        cursor:not-allowed;
    }
`