import { Flex, Grid, Text, Box, VStack, Button } from "@chakra-ui/react"
import { FiShoppingBag } from "react-icons/fi"
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useHistory } from "react-router";

const signUpSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirme_password: yup.string().required("Obrigatório confirmar senha").oneOf([yup.ref("password")], "Senhas diferentes")
});

interface SignUpData {
    name: string,
    email: string,
    password: string,
}

interface SignUpProps {
    name: string,
    email: string,
    password: string,
    confirme_password: string
}

export const SignUp = () => {

    const history = useHistory();

    const { formState: { errors }, register, handleSubmit } = useForm<SignUpProps>({
        resolver: yupResolver(signUpSchema),
    });

    const handleSignUp = ({ name, email, password }: SignUpData) => {
        api
            .post("/signup", { name, email, password })
            .then((response) => {
                console.log("cadastrado")
                history.push("/")
            })
            .catch((err) => console.log("Erro ao cadastrar"))
    }

    return (
        <Flex 
        padding="10px 15px"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="100vw"
        flexDirection={["column", "column", "column", "row"]}
        >

            <Grid w="100%" paddingLeft="100px" marginBottom="30px" >
                <Flex alignItems="center" paddingBottom="20px">
                    <Text fontSize="2xl" fontWeight="bold" paddingRight="5px">Burger</Text>
                    <Text fontSize="lg" fontWeight="bold" color="red.secundary">Kenzie</Text>
                </Flex>
                <Flex 
                w="315px"
                alignItems="center"
                padding="10px"
                border="1px solid"
                borderColor="gray.100"
                borderRadius="5px"
                >
                    <Box
                    w="60px"
                    h="60px"
                    bgColor="rgba(39, 174, 96, 0.1);"
                    borderRadius="5px"
                    >
                        <Flex w="100%" h="100%" alignItems="center" justifyContent="center" color="green.primary">
                            <FiShoppingBag color="green" opacity="100%" size="1.5em" />
                        </Flex>
                    </Box>
                    <Text fontSize="xs" color="gray.300" paddingLeft="10px" >
                        A vida é como um sanduíche, é preciso <br/> recheá-la com os <b>melhores</b> <br/> ingredientes.
                    </Text>
                </Flex>
            </Grid>

            <Grid 
            as="form" 
            mt="4" 
            w="75%" 
            marginRight="200px"
            marginLeft={[ "200px", "200px", "200px", "0px"]}
            padding="10px" 
            onSubmit={handleSubmit(handleSignUp)} 
            borderColor="gray.100"
            borderWidth="2px"
            borderRadius="5px"
            >
                <Flex justifyContent="space-between">
                    <Text fontWeight="700" fontSize="lg" >Cadastro</Text>
                    <Text fontWeight="500" fontSize="sm" color="gray.300" textDecorationLine="underline" as="button" onClick={() => history.push("/")} >Retornar para o login</Text>
                </Flex>
                <VStack mt="6" spacing="5">
                <Input 
                    placeholder="Nome" 
                    label="Nome" 
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    {...register("name")}
                    />
                    <Input 
                    placeholder="Email" 
                    label="Email" 
                    error={!!errors.email} 
                    helperText={errors.email?.message}
                    {...register("email")}
                    />
                    <Input 
                    placeholder="Senha" 
                    label="Senha" 
                    error={!!errors.password} 
                    helperText={errors.password?.message}
                    {...register("password")}
                    />
                    <Input 
                    placeholder="Confirme sua senha" 
                    error={!!errors.confirme_password} 
                    helperText={errors.confirme_password?.message}
                    {...register("confirme_password")}
                    />
                </VStack>
                <Button mt="20px" bgColor="gray.0" color="gray.300" _hover={{bgColor:"gray.200"}} type="submit">Cadastrar</Button>
            </Grid>

        </Flex>
    )
}