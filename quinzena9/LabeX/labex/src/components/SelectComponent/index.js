import { ChakraProvider, Select } from "@chakra-ui/react"

export function SelectComponent() {
    return (
        <ChakraProvider>
            <Select
                // variant="unstyled"
                placeholder="Selecione uma viagem"
                bg="#2C2C2C"
                color="#fFFFFF"
                fontFamily='Montserrat'
                fontWeight='500'
                fontSize='14'
                h='46px'
                border='none'
                _focus={{
                    border: '1.25px',
                    borderStyle: 'solid',
                    borderColor: '#464646'
                }}
            >
                <option>Ida a Mercúrio</option>
                <option>Ida a Marte</option>
                <option>Ida a Júpiter</option>
                <option>Ida a Saturno</option>
                <option>Ida a Urano</option>
                <option>Ida a Netuno</option>
            </Select>
        </ChakraProvider>
    )
}