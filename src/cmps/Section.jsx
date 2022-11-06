import styled from "styled-components"
import Fade from 'react-reveal/Fade';

export const Section = ({ title, description, btnLeft, btnRight, backgroundImg }) => {
    console.log(backgroundImg);

    return (
        <Wrap background={backgroundImg}>
            <Fade bottom>
                <Title isDecorate={description.isDecorate}>
                    <h1>{title}</h1>
                    <p>{description.normal} <span className="underline">{description.decoration}</span></p>
                </Title>
            </Fade>
            <Fade bottom>
                <GroupedButtons>
                    <ActionButtons>
                        <button className="left-btn">{btnLeft}</button>
                        {btnRight &&
                            <button className="right-btn">{btnRight}</button>
                        }
                    </ActionButtons>
                    <ArrowDown>
                        <img src="https://res.cloudinary.com/ibarak/image/upload/v1667735351/tesla-clone/gbfbm2euvgzozpfsipdc.svg"></img>
                    </ArrowDown>
                </GroupedButtons>
            </Fade>
        </Wrap>
    )
}

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background: ${(props => `url(${props.background})`)};
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: column;
justify-content: space-between;

`

const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 16vh;
font-size: 1.3em;
h1 {
    margin-bottom: 12px;
}
p {
font-size: 0.75em;
}

.underline {
    text-decoration: ${(props => (props.isDecorate) ? `underline` : `none`)};
}
`

const ActionButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom:3em;
    gap: 1em;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
    }

 button {
    width: 256px;
    height: 40px;
    border-radius: 4px;
    border: none;
    padding: 7px 27px;
    font-weight: 600;

    @media (max-width: 700px) {
    width: 85%;

    }

 }
 .left-btn {
    background: #393C40;
    color: #fff;
 }
 .right-btn {
    background: #E2E2E1;
    color: #393C41;
 }
`

const ArrowDown = styled.div`
    overflow-x: hidden;
    margin:auto;
    width:2.2em;
    animation: animateDown infinite 2s;
    color: black;
    margin-bottom: 1em
`

const GroupedButtons = styled.div``