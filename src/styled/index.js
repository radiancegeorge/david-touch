import styled from 'styled-components';
import footerBg from "../img/Rectangle 18.png";
import { devices } from './devices';
const max_width = 80;

export const HeaderWrap = styled.header`
    width: 100vw;
    position: relative;
    overflow-y: hidden;
    .overlay{
        background-color: black;
        width: 100%;
        min-height: 150%;
        position: absolute;
        opacity: 0.5;
        z-index: 1;
        pointer-events: none;
    }
    .blur-bg{
        position: absolute;
        filter: blur(8px)
    }
    & > nav{
        width: ${max_width - 8}%;
        height: 180px;
        display: flex;
        align-items: center;
        margin: auto;
        justify-content: center;
        position: relative;
        a{
            &:hover{
                color: yellow;
            }
        }
        & > .logo{
            width: 188px;
            margin-right: auto;
            & > img {
                width: 100%;
            }
            .hamburger{
                display: none;
            }
        }
    }
    @media ${devices.mobileM}{
        position: fixed;
        top: 0;
        z-index: 99;
        & > nav{
            width: 100%;
            height: fit-content;
            display: block;
            margin: initial;
            a{
                padding: 20px;
                transition: 0.3s;
                background: white;
                color: #373737;
                margin-right: 0;
                font-size: 14px;
                display: ${ ({linkDisplay}) => linkDisplay ? linkDisplay : "none" };
                &:hover{
                    color: #F2E635;
                }
            }
            & > .logo{
                width: 100%;
                position: static;
                padding: 10px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                & > img {
                    width: 70px;
                }
                .hamburger{
                    display: initial;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const Link = styled.a`
    text-decoration: none;
    margin-right: ${ ({ nav }) => nav ? "64px" : 0};
    display: block;
    font-family: raleway;
    color: white;
    font-weight: 600;
`;

export const HeroSection = styled.div`
    .overlay{
        background-color: black;
        width: 100%;
        min-height: 150%;
        position: absolute;
        opacity: 0.5;
    }
    & .hero{
        padding-top: 102px;
        padding-bottom: 300px;
        & > .wrap{
            max-width: ${max_width}%;
            margin: auto;
            .home-text{
                color: white;
                font-weight: 100;
                font-size: 96px;
                position: absolute;
                left: -50px;
                bottom: 250px;
                transform: rotateZ(-90deg);
            }
            .jumbotron{
                color: white;
                font-size: 54px;
                max-width: 512px;
                margin-left: 60px;
                h1{
                    font-weight: 900;
                    line-height: 88px;
                }
                a{
                    color: black;
                    font-size: 14px;
                    font-weight: 800;
                    border: 1px solid yellow;
                    width: fit-content;
                    padding: 16px 28px;
                    margin-top: 28px;
                    border-radius: 4px;
                    background-color: yellow;
                    
                }
                p{
                    font-size: 16px;
                    color: #F2E635;
                    line-height: 19px;
                    font-weight: bold;
                    margin-bottom: 10px;   
                }
            }
        }
    }
    @media ${devices.mobileM}{
        & .hero{
            padding-bottom: 100px;
            & > .wrap{
                max-width: ${max_width}%;
                margin: auto;
                position: relative;
                padding-top: 50px;
                .home-text{
                    font-size: 56px;
                    position: absolute;
                    left: -70px;
                    bottom: 35%;
                }
                .jumbotron{
                    color: white;
                    font-size: 20px;
                    max-width: 512px;
                    h1{
                        font-weight: 800;
                        line-height: 38px;
                    }
                    a{
                        font-size: 12px;
                        padding: 10px;
                    }
                    p{
                        font-size: 12px;
                    }
                }
            }
        }
    }
    @media ${devices.mobileS}{
        & .hero{
            padding: 50px 0;
            & > .wrap{
                .home-text{
                    font-size: 46px;
                    position: absolute;
                    left: -50px;
                    bottom: 35%;
                }
                .jumbotron{
                    color: white;
                    font-size: 16px;
                    a{
                        font-size: 10px;
                    }
                    p{
                        font-size: 10px;
                    }
                }
            }
        }
    }

`;

export const AboutWrap = styled.div`
    background-color: #373737;
    position: relative;
    margin: 10px 0;
    padding: 60px 0;
    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.08;
    }
    .about-header{
        color: #F2F2F2;
        position: absolute;
        transform: rotateZ(-90deg);
        left: -150px;
        top: 250px;
        .header{
            font-weight: 100;
            font-size: 96px;
        }
    }
    .wrap{
        background-color: transparent;
        position: relative;
        z-index: 2;
        max-width: calc(${max_width}% + 80px);
        margin-left: auto;
        padding: 67px;
        border-radius: 11px 0px 0px 11px;
        .about-text{
            font-weight: 600;
            font-size: 32px;
            text-align: left;
            margin-left: auto;
            color: white;
        }
    }
    @media ${devices.mobileM} {
        margin: 5px 0;
        .wrap{
            max-width: calc(${max_width}% - 30px);
            padding: 47px 47px 47px 0px;
            .about-text{
                font-weight: 700;
                font-size: 16px;
            }
        }
        .about-header{
            left: -90px;
            top: 210px;
            .header{
                font-size: 56px;
            }
        }
    }
    @media ${devices.mobileS} {
        .wrap{
            padding: 20px 20px 20px 0;
            
            .about-text{
                font-size: 14px;
            }
        }
        .about-header{
            left: -70px;
            .header{
                font-size: 46px;
            }
        }
    }
`;

export const GalleryWrap = styled.div`
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        background: grey;
        top: 0;
        filter: blur(8px);
        opacity: 0.5;
    }
    filter: grayscale(100%);
    position: relative;
    overflow: hidden;
    padding: 180px 0;
    .wrap{
        max-width: ${max_width}%;
        margin: auto;
        .gallery-header{
            color: #F2F2F2;
            position: absolute;
            transform: rotateZ(-90deg);
            left: -130px;
            top: 50%;
            .header{
                font-weight: 100;
                font-size: 96px;
                color: black;
            }
        }
        
        .content-wrap{
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-around;
            div{
                flex-basis: 30%;
                margin: 10px;
                height: fit-content!important;
                position: relative;
                img{
                    width: 100%!important;
                }
            }
        }
    }
    @media ${devices.mobileM} {
        filter: grayscale(100%);
        position: relative;
        overflow: hidden;
        padding: 50px 0;
        .wrap{
            max-width: ${max_width}%;
            margin: auto;
            .gallery-header{
                position: static;
                transform: rotateZ(0deg);
                text-align: center;
                .header{
                font-weight: 100;
                font-size: 56px;
                }
            }
            .header{
                font-weight: 100;
                font-size: 96px;
            }
            .content-wrap{
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: space-around;
                div{
                    flex-basis: 90%;
                    margin: 20px;
                    height: fit-content!important;
                    img{
                        width: 100%!important;
                    }
                }
            }
        }
    }
`;
export const FooterWrap = styled.footer`
    background: linear-gradient(0deg, rgba(55, 55, 55, 0.9), rgba(55, 55, 55, 0.9)), url("${footerBg}");
    margin: 10px 0 0 0;
    background-size: 100%;
    padding-bottom: 100px;
    .wrap{
        max-width: ${max_width}%;
        margin: auto;
        .footer-photos{
            display: flex;
            align-items: center;
            justify-content: space-around;
            img{
                width: 30%;
                mix-blend-mode: lighten;
                padding: 5%;
            }
        }
        .footer-text-area{
            color:#D6D5E5;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            table{
                color: #D6D5E5;
                width: 100%;
                border-spacing: 28px;
            }
            h3{
                text-align: center;
                color: yellow;
            }
            & > div{
                flex-basis: 30%;
                text-transform: uppercase;
                font-size: 14px;

            }
        }
        form{
            text-align: center;
            textarea{
                min-width: 300px;
                padding: 10px;
                background: transparent;
                margin-bottom: 20px;
                color: white;
                &:focus{
                    outline: none;
                }
            }
            input{
                padding: 10px;
                width: 100%;
                border: none;
                border-bottom: 1px solid #A6A297;
                background-color: transparent;
                margin-bottom: 32px;
                margin-top: 32px;
                color: #A6A297;
                &:focus{
                    outline: none;
                }
            }
            button{
                background: #F2E635;
                border-radius: 4px;
                border: 1px solid transparent;
                display: block;
                padding: 12px 48px;
                color: #373737;
                margin: auto;
                font-size: 14px;
                font-weight: 800;
                cursor: pointer;
            }
        }
    }
    @media ${devices.mobileM}{
        background: linear-gradient(0deg, rgba(55, 55, 55, 0.9), rgba(55, 55, 55, 0.9)), url("${footerBg}");
        .wrap{
            .footer-photos{
                justify-content: space-around;
                img{
                    width: 30%;
                    mix-blend-mode: lighten;
                    padding: 0;
                }
            }
            .footer-text-area{
                justify-content: space-around;
                flex-wrap: wrap;
                h3{
                    text-align: center;
                }
                
            }
        }
    }
    @media ${devices.mobileS}{
        overflow: hidden!important;
        table{
            font-size: 12px;
        }
        .footer-text-area{
            max-width: 300;
        }
    }
`;