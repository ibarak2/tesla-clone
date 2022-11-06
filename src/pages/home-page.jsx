import styled from "styled-components"
import { Header } from "../cmps/Header"
import { Section } from "../cmps/Section"

export const HomePage = () => {

    return (
        <Container>
            <Header />
            <Section
                title={'Model 3'}
                description={{ normal: 'Order Online for', decoration: 'Touchless Delivery', isDecorate: true }}
                btnLeft={'Custom Order'}
                btnRight={'Existing Inventory'}
                backgroundImg={'https://res.cloudinary.com/ibarak/image/upload/v1667735352/tesla-clone/qxy2h2ohjcjtqdoyjn4e.jpg'}
            />
            <Section
                title={'Model Y'}
                description={{ normal: 'Order Online for', decoration: 'Touchless Delivery', isDecorate: true }}
                btnLeft={'Custom Order'}
                btnRight={'Existing Inventory'}
                backgroundImg={'https://res.cloudinary.com/ibarak/image/upload/v1667735354/tesla-clone/g9ne2qjvs4vmxlmshzsd.jpg'}
            />
            <Section
                title={'Model S'}
                description={{ normal: 'Order Online for', decoration: 'Touchless Delivery', isDecorate: true }}
                btnLeft={'Custom Order'}
                btnRight={'Existing Inventory'}
                backgroundImg={'https://res.cloudinary.com/ibarak/image/upload/v1667735354/tesla-clone/pa46jm5n2rs3y3l3grul.jpg'}
            />
            <Section
                title={'Model X'}
                description={{ normal: 'Order Online for', decoration: 'Touchless Delivery', isDecorate: true }}
                btnLeft={'Custom Order'}
                btnRight={'Existing Inventory'}
                backgroundImg={'https://res.cloudinary.com/ibarak/image/upload/v1667735355/tesla-clone/me6vcothke9btcggfssa.jpg'}
            />
            <Section
                title={'Solar Panels'}
                description={{ normal: 'Lowest Cost Solar Panels in America', decoration: '', isDecorate: false }}
                btnLeft={'Order Now'}
                btnRight={'Learn More'}
                backgroundImg={'https://res.cloudinary.com/ibarak/image/upload/v1667735358/tesla-clone/x8nchxksqcfqbct7c914.jpg'}
            />
            <Section
                title={'Solar Roof'}
                description={{ normal: 'Produce Clean Energy From Your Roof', decoration: '', isDecorate: false }}
                btnLeft={'Order Now'}
                btnRight={'Learn More'}
                backgroundImg={'https://res.cloudinary.com/ibarak/image/upload/v1667735358/tesla-clone/med8mpzy5ww96w0f8oz6.jpg'}
            />
            <Section
                title={'Accessories'}
                description={{ normal: '', decoration: '', isDecorate: false }}
                btnLeft={'Shop Now'}
                backgroundImg={'https://res.cloudinary.com/ibarak/image/upload/v1667735351/tesla-clone/fewndeazppr6oxueoa8m.jpg'}
            />
        </Container>
    )
}

const Container = styled.div`

`