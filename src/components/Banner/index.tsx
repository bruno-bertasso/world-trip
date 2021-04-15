import { Stack, Flex, Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

interface IndexProps {

}

export const Banner = ({ }: IndexProps) => {
    const isLg = useBreakpointValue({ base: false, lg: true });

    return (
        <Flex dir="row" h={{ base: "163px", lg: "368.21px" }} w="100%" maxW="1440" align="center" justify="space-evenly" bgImage="url('/Background.png')" backgroundRepeat="no-repeat" >

            <Stack spacing={{ base: "8px", lg: "20px" }} ml={"16px"}>
                <Heading as="h1" fontSize={{ base: "20px", lg: "36px" }} lineHeight={{ base: "30px", lg: "54px" }} fontWeight="500" color="light.heading">5 Continentes,<br /> Infinitas Possibilidades</Heading>
                <Text fontSize={{ base: "14px", lg: "20px" }} lineHeight={{ base: "21px", lg: "30px" }} color="light.info">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </ Stack>

            {
                isLg &&
                <Box position="relative" bottom="-33.21px" transform="rotate(3deg)" >
                    <img src="/others/Airplane.svg" height="270.74" width="417.15" />
                </Box>
            }
        </Flex >
    );
}

export default Banner;