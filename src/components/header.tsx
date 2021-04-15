import { Flex, Image } from '@chakra-ui/react';


interface HeaderProps {

}

export const Header = ({ }: HeaderProps) => {
    return (
        <Flex align='center' justify='center' width="100%" height={{ base: 50, lg: 100 }}>
            <Image src="/Logo.png" width={{ base: "81px", lg: "184.06px" }} height={{ base: "20px", lg: "45.92" }} />
        </Flex>
    );
}

export default Header;