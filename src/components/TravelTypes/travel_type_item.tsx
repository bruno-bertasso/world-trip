import { Square, Text, Image, Stack, useBreakpointValue, Center } from '@chakra-ui/react';
import { CircleIcon } from '../Icons/CircleIcon'

interface TravelTypeItemProps {
    label: string;
    altText?: string;
    iconName: string;
    iconSize?: string;
}

export const TravelTypeItem = ({ label, altText = label, iconName, iconSize = "85px" }: TravelTypeItemProps) => {
    const isLg = useBreakpointValue({ base: false, lg: true });

    return (
        <Stack direction={{ base: 'row', lg: 'column' }} align='center' m="auto" spacing={{ base: 2, lg: 2 }} wrap={{ base: 'wrap', lg: 'nowrap' }} my={{ base: "24px", lg: "27px" }}
            minW="100px" >
            { isLg ? <Square size={iconSize}>
                < Image src={`/icons/${iconName}.svg`} alt={altText} />
            </Square > : <CircleIcon boxSize={'8px'} color="brand.highlight" />}
            <Center flexGrow={2}>
                <Text fontSize={{ base: "18px", lg: "24px" }} lineHeight={{ base: "27px", lg: "36px" }} fontWeight={{ base: "500", lg: "600" }} color="dark.heading" >{label}</Text>
            </Center>
        </Stack >
    );
}

export default TravelTypeItem;