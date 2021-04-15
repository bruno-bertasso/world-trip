import { Flex, Heading, Center, SimpleGrid, Text, Stack } from '@chakra-ui/react';
import { Header } from "../../components/header"
import { Banner2 } from "../../components/Banner2"

import { CountryCard } from "../../components/CountryCard"
import { useRouter } from 'next/router'


interface IndexProps {


}

function Index({ }: IndexProps) {

    const router = useRouter()
    const { type } = router.query;

    const database = {
        europe: {
            name: "Europa",
            cover: "",
            description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
            languages: "50",
            countries: "60",
            cities_100: "27",
            cities: [
                {

                    name: 'Londres',
                    image: 'londres.png',
                    country_flag: 'inglaterra.png',
                    country_name: 'Reino Unido'
                },
                {

                    name: 'Paris',
                    image: 'paris.png',
                    country_flag: 'frança.png',
                    country_name: 'França'
                }, {

                    name: 'Roma',
                    image: 'roma.png',
                    country_flag: 'italia.png',
                    country_name: 'Itália'
                }, {

                    name: 'Praga',
                    image: 'praga.png',
                    country_flag: 'republica_tcheca.png',
                    country_name: 'República Tcheca'
                }, {

                    name: 'Amsterdã',
                    image: 'amsterdã.png',
                    country_flag: 'holanda.png',
                    country_name: 'Holanda'
                }
            ]
        },
        asia: {
            name: "Ásia",
            cover: "",
            description: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
            languages: "78",
            countries: "122",
            cities_100: "17",
            cities: [
                {

                    name: 'Tókio',
                    image: 'tokio.jpeg',
                    country_flag: 'japão.png',
                    country_name: 'Japão'
                },
                {

                    name: 'Xangai',
                    image: 'xangai.jpg',
                    country_flag: 'china.png',
                    country_name: 'China'
                }
            ]
        },
        north_america: {
            name: "América do Norte",
            cover: "",
            description: "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).",
            languages: "2",
            countries: "3",
            cities_100: "27",
            cities: [
                {

                    name: 'Nova York',
                    image: 'nova_iorque.jpg',
                    country_flag: 'estados_unidos.png',
                    country_name: 'Estados Unidos'
                },
                {

                    name: 'Cidade do México',
                    image: 'cidade_do_mexico.jpg',
                    country_flag: 'mexico.png',
                    country_name: 'México'
                }
            ]
        },
        south_america: {
            name: "América do Sul",
            cover: "",
            description: "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17.819.100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7.500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente. ",
            languages: "2",
            countries: "12",
            cities_100: "2",
            cities: [
                {

                    name: 'Buenos Aires',
                    image: 'buenos-aires.jpg',
                    country_flag: 'argentina.png',
                    country_name: 'Argentina'
                },
                {

                    name: 'Rio de Janeiro',
                    image: 'rio-de-janeiro.jpg',
                    country_flag: 'brasil.png',
                    country_name: 'Brasil'
                }
            ]
        },
        oceania: {
            name: "Oceania",
            cover: "",
            description: "",
            languages: "50",
            countries: "60",
            cities_100: "27",
            cities: [
                {

                    name: 'Londres',
                    image: 'londres.png',
                    country_flag: 'inglaterra.png',
                    country_name: 'Reino Unido'
                },
                {

                    name: 'Paris',
                    image: 'paris.png',
                    country_flag: 'frança.png',
                    country_name: 'França'
                }
            ]
        },
        africa: {
            name: "África",
            cover: "",
            description: "Apresenta grande diversidade étnica, cultural, social e política.Dos trinta países mais pobres do mundo(com mais problemas de subnutrição, analfabetismo, baixa expectativa de vida), pelo menos 21 são africanos.Apesar disso existem alguns países com um padrão de vida razoável, mas não existe nenhum país realmente desenvolvido na África.",
            languages: "21",
            countries: "52",
            cities_100: "1",
            cities: [
                {

                    name: 'Joanesburgo',
                    image: 'joanesburgo.jpg',
                    country_flag: 'africa_do_sul.png',
                    country_name: 'África do Sul'
                },
                {

                    name: 'Cairo',
                    image: 'cairo.jpg',
                    country_flag: 'egito.png',
                    country_name: 'Egito'
                }
            ]
        }
    }



    return (
        <Flex direction="column" border="2px solid red" m="auto" w='100%' maxW="1440px" bg="brand.white" >
            <Header />
            <Banner2 title={database[type as string]?.name} />
            <Center>
                <Flex w={{ base: "100%", lg: '80%' }} px={{ base: "16px", lg: "0px" }} direction={{ base: "column", lg: 'row' }} align="center" justify="space-between" my={{ base: "24px", lg: "80px" }}>
                    <Text width={{ base: "100%", lg: '600px' }} pb={{ base: "16px", lg: '0px' }} fontSize={{ base: "14px", lg: "24px" }} lineHeight={{ base: "21px", lg: "36px" }} color="dark.heading" textAlign="justify">
                        {database[type as string]?.description}
                    </Text>
                    <Stack direction="row" spacing={6} w={{ base: "100%", lg: 'auto' }} justify="space-between" border="1px solid red">
                        <Stack spacing="2px" align="center">
                            <Text color="#FFBA08" fontSize={{ base: "24px", lg: "48px" }} lineHeight={{ base: "36px", lg: "72px" }} fontWeight="600">{database[type as string]?.countries}</Text>
                            <Text fontSize={{ base: "18px", lg: "24px" }} lineHeight={{ base: "27px", lg: "36px" }} fontWeight="600">Países</Text>
                        </Stack>
                        <Stack spacing="2px" align="center">
                            <Text color="#FFBA08" fontSize={{ base: "24px", lg: "48px" }} lineHeight={{ base: "36px", lg: "72px" }} fontWeight="600">{database[type as string]?.languages}</Text>
                            <Text fontSize={{ base: "18px", lg: "24px" }} lineHeight={{ base: "27px", lg: "36px" }} fontWeight="600">Línguas</Text>
                        </Stack>
                        <Stack spacing="2px" align="center">
                            <Text color="#FFBA08" fontSize={{ base: "24px", lg: "48px" }} lineHeight={{ base: "36px", lg: "72px" }} fontWeight="600">{database[type as string]?.cities_100}</Text>
                            <Text fontSize={{ base: "18px", lg: "24px" }} lineHeight={{ base: "27px", lg: "36px" }} fontWeight="600">Cidades +100</Text>
                        </Stack>
                    </Stack>

                </Flex>
            </Center>

            <Center>
                <Flex direction="column" >
                    <Heading align="left" color="dark.heading" fontSize={{ base: "24px", lg: "36px" }} lineHeight={{ base: "36px", lg: "54px" }} mb={{ base: "20px", lg: "54px" }}  >
                        Cidades +100
                    </Heading>
                    <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={8} mb={"35px"}>
                        {database[type as string]?.cities.map(city =>
                            (<CountryCard key={city.name} city={city.name} country={city.country_name} icon={city.country_flag} image={city.image} />)
                        )}


                    </SimpleGrid>
                </Flex>
            </Center>
        </Flex >
    );
}

export default Index;