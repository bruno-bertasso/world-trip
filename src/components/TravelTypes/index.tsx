import { Flex, Container } from '@chakra-ui/react';
import { TravelTypeItem } from "./travel_type_item"

interface TravelTypesProps {

}

export const TravelTypes = ({ }: TravelTypesProps) => {
    return (
        <Container maxWidth={{ base: '100%', lg: '1160px' }} px={{ base: "50px" }} >
            <Flex dir="row" justify={{ base: "center", lg: "space-between" }} align="center" wrap={{ base: 'wrap', lg: 'nowrap' }}  >

                <TravelTypeItem iconName={"cocktail"} label="vida noturna" />
                <TravelTypeItem iconName={"surf"} label="praia" />
                <TravelTypeItem iconName={"building"} label="moderno" />
                <TravelTypeItem iconName={"museum"} label="clássico" />
                <TravelTypeItem iconName={"earth"} label="e mais..." />

            </Flex>
        </Container >

    );
}

export default TravelTypes;