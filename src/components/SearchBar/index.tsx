import { Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { InputSearch } from "./input"

interface SearchData {
    search: string
}

export const SearchBar = () => {

    const { register, handleSubmit } = useForm<SearchData>();

    const handleSearch = ({ search }: SearchData) => {
        console.log(search)
    };

    return (
        <Flex
            alignItems="center"
            w="75%"
            flexDir={["column", "column", "row", "row"]}
            bgColor="gray.0"
        >
            <Flex 
            as="form" 
            onSubmit={handleSubmit(handleSearch)}
            borderColor="gray.100"
            bgColor="gray.0"
            alignItems="center"
            >
                <InputSearch
                    placeholder="Pesquisar"
                    w={["100%", "100%", "35vw"]}
                    {...register("search")}
                />
            </Flex>
        </Flex>
    )
}