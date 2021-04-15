import React from 'react'
import { Heading, Text, Flex, Stack } from '@chakra-ui/react'


interface Props {
    label: string;
    description: string;
    image: string;
}

export const Slide = ({ label, description, image }: Props) => {
    return (
        <Flex direction="column" align="center" justify="center" h="100%" w="100%" bgImage={`url(/banners/continents/${image})`} bgSize="cover" bgPosition="center" backgroundRepeat="no-repeat">

            <Heading color="light.heading">{label}</Heading>
            <Text color="light.heading">{description}</Text>

        </Flex >
    )
}