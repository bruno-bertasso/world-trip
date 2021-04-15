import { Flex, Image, Stack, Text, Avatar } from '@chakra-ui/react'

import React from 'react'

interface Props {
    city: string;
    country: string;
    icon?: string;
    image?: string;
}

export const CountryCard = ({ city, country, icon = "", image = "" }: Props) => {
    return (
        <Flex direction="column" w="256px" h="279px" border="1px solid rgba(255, 186, 8, 0.5)"
            borderRadius="4px">
            <Image h="173px" w="256px" src={`/banners/cities/${image}`} />
            <Flex direction="row" justify="space-between" align="center" mx="24px" mt="18px">
                <Stack>
                    <Text fontSize={{ base: "", lg: "20px" }} lineHeigth={{ base: "", lg: "25px" }} fontWeight="600" color="dark.heading">{city}</Text>
                    <Text fontSize={{ base: "", lg: "16px" }} lineHeigth={{ base: "", lg: "26px" }} color="dark.info" >{country}</Text>
                </Stack>
                <Avatar src={`/flags/${icon}`} size="sm" />
            </Flex>
        </Flex>
    )
}
