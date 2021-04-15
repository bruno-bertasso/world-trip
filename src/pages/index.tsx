import { Flex, Divider, Heading, Center, Box } from '@chakra-ui/react';
import { Header } from "../components/header"
import { Banner } from "../components/Banner"
import { TravelTypes } from "../components/TravelTypes"
import { Carrousel } from "../components/Carrousel"



interface IndexProps {

}

function Index({ }: IndexProps) {



    return (
        <Flex direction="column" m="auto" w='100%' maxW="1440px" bg="brand.white" >
            <Header />
            <Banner />
            <TravelTypes />


            <Center>
                <Divider display="flex" alignItems="center" mb={8} width={"60px"} borderTopWidth={"2px"} borderTopColor={"dark.heading"} />
            </Center>

            <Heading align="center" color="dark.heading" fontSize={{ base: "20px", lg: "36px" }} lineHeight={{ base: "30px", lg: "54px" }} mb={{ base: "20px", lg: "54px" }}  >
                Vamos nessa?<br />
                Então escolha seu continente
            </Heading>

            <Box pb={{ base: "24px", lg: "40px" }}>
                <Carrousel />
            </Box>

        </Flex >
    );
}

export default Index;