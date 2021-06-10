import styled from 'styled-components';

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
`