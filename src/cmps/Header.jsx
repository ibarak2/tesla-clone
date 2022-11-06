import { useState } from "react"
import styled from "styled-components"


export const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false)

    const onChangeBurgerStatus = () => {
        setBurgerStatus(!burgerStatus)
    }

    return (
        <MainNav>
            <Logo>
                <a href="#">
                    <img src="https://res.cloudinary.com/ibarak/image/upload/v1667735351/tesla-clone/boegfgsnbqsvisnaoblf.svg"></img>
                </a>
            </Logo>
            <CarsNav>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </CarsNav>
            <MenuNav>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a onClick={onChangeBurgerStatus} href="#">Menu</a>
            </MenuNav>
            <RightMenu show={burgerStatus}>
                <span onClick={onChangeBurgerStatus}>X</span>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
                <a href="#">Accessories</a>
            </RightMenu>
        </MainNav>
    )
}

const MainNav = styled.div`
position:fixed;
left: 0;
top: 0;
right: 0;
height: 56px;
background: transparent;
z-index: 10;
display: flex;
justify-content:space-between;
align-items: center;
padding: 0 3em;
`

const Logo = styled.div`
width: 96px;
height:20px;
`

const CarsNav = styled.div`
margin-left:180px;
a {
text-transform: uppercase;    
text-decoration: none;
font-weight:bold;
padding: 0 12px;
font-family: Gotham-Bold;
:hover {
    background: grey;
    opacity: 0.8;
    color: #fff;
    border-radius:2px;
}
}

@media (max-width: 1100px) {
    display: none;
}
`

const MenuNav = styled.div`
a {
text-transform: uppercase;    
text-decoration: none;
font-weight:bold;
padding: 0 12px;
font-family: Gotham-Bold;
height: 40px;
@media (max-width: 550px) {
font-size: 10px;
padding: 0 8px;

}
:hover {
    background: grey;
    opacity: 0.8;
    color: #fff;
}
}
`

const RightMenu = styled.div`
display: flex;
flex-direction: column;
padding-top: 40px;
position:fixed;
z-index:100;
background: #fff;
heigth:100vh;
width: 300px;
top:0;
right:0;
bottom:0;
transform: ${(props => (props.show) ? 'translateX(0)' : 'translateX(100%)')};
transition: transform 0.25s ease-out;
a {
    text-decoration:none;
    padding: 8px 16px;
    border-bottom: 1px solid gray;
}
span {
    position: fixed;
    top:1em;
    right:1em;
    cursor: pointer;
    height:30px;
    width:30px;
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:4px;
    color: #fff;
}
`