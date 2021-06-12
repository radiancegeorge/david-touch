import styled from 'styled-components';
import footerBg from "../img/Rectangle 18.png";
import { devices } from './devices';
const max_width = 80;

export const HeaderWrap = styled.header`
    width: 100vw;
    position: relative;
    overflow-y: hidden;
    .blur-bg{
        position: absolute;
        filter: blur(8px)
    }
    & > nav{
        width: ${max_width}%;
        height: 180px;
        display: flex;
        align-items: center;
        margin: auto;
        justify-content: center;
        position: relative;
        & > .logo{
            position: absolute;
            width: 288px;
            left: 0;
            & > img {
                width: 100%;
            }
        }
    }
    @media ${devices.mobile}{
        & > nav{
            width: ${max_width + 10}%!imporatant;
            height: 100vh;
            display: block;
            & > .logo{
                width: 288px;
                position: static;
                & > img {
                    width: 100%;
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
    &  .hero{
        margin-top: 102px;
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
                transform: rotateZ(-90deg)
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
                    color: white;
                    font-size: 14px;
                    font-weight: 800;
                    border: 1px solid white;
                    width: fit-content;
                    padding: 16px 28px;
                    margin-top: 28px;
                    border-radius: 4px;
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
`;

export const AboutWrap = styled.div`
    background-color: #373737;
    position: relative;
    margin: 10px 0;
    padding: 60px 0;
    .wrap{
        background-color: #D6D5E5;
        max-width: calc(${max_width}% + 80px);
        margin-left: auto;
        padding: 67px;
        border-radius: 11px 0px 0px 11px;
        .about-header{
            color: #F2F2F2;
            position: absolute;
            transform: rotateZ(-90deg);
            left: -160px;
            top: 250px;
            .header{
            font-weight: 100;
            font-size: 96px;
            }
        }
        
        .about-text{
            font-weight: 600;
            font-size: 32px;
            text-align: right;
            margin-left: auto;
            color: #A6A297;
        }
    }
`;

export const GalleryWrap = styled.div`
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
                flex-basis: 30%;
                margin: 10px;
                height: fit-content!important;
                img{
                    width: 100%!important;
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
                flex-basis: 30%;
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
            }
            & > div{
                flex-basis: 30%;
                text-transform: uppercase;
                font-size: 14px;

            }
        }
        form{
            text-align: center;
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
`;