import { Flex, Heading } from '@chakra-ui/react';

interface IndexProps {
    title: string;
}

export const Banner2 = ({ title }: IndexProps) => {


    return (
        <Flex align={{ base: "center", lg: "flex-end" }} justify={{ base: "center", lg: "flex-start" }} h={{ base: "150px", lg: "500px" }} w="100%" maxW="1440" bgImage="url('/banners/continents/europe_cover.png')" backgroundRepeat="no-repeat" backgroundPosition="center" bgColor="black">
            <Heading pl={{ base: "0px", lg: "40px" }} pb={{ base: "0px", lg: "60px" }} as="h1" fontSize={{ base: "28px", lg: "48px" }} lineHeight={{ base: "42px", lg: "72px" }} fontWeight="500" color="light.heading">{title}</Heading>
        </Flex>
    );
}

export default Banner2;