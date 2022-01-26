import { Flex, Grid, Text, Box, VStack, Button } from "@chakra-ui/react"
import { FiShoppingBag } from "react-icons/fi"
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../provider/AuthProvider";
import { useHistory } from "react-router";

interface LogInData {
    email: string,
    password: string
}

export const LogIn = () => {

    const logInSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória"),
    });

    const { logIn } = useAuth();

    const { formState: { errors }, register, handleSubmit } = useForm<LogInData>({
        resolver: yupResolver(logInSchema),
    });

    const handleSignIn = (data: LogInData) => {
        logIn(data)
    }

    const history = useHistory();

    return (
        <Flex 
        padding="10px 15px"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="100vw"
        flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
        >
            <Grid 
            as="form" 
            mt="4" 
            w="75%" 
            marginLeft="200px"
            marginRight={[ "200px", "200px", "200px", "0px"]}
            padding="10px" 
            onSubmit={handleSubmit(handleSignIn)} 
            borderColor="gray.100"
            borderWidth="2px"
            borderRadius="5px"
            >
                <Text fontWeight="700" fontSize="lg" >Login</Text>
                <VStack mt="6" spacing="5">
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
                </VStack>
                <Button 
                mt="20px" 
                bgColor="green.primary" 
                color="white" 
                _hover={{bgColor:"green.success"}} 
                type="submit"
                > Logar 
                </Button>

                <Text 
                mt="10px" 
                w="100%" 
                textAlign="center" 
                fontSize="sm" 
                color="gray.200" 
                >Crie sua conta para saborear muitas delícias e <br/> matar sua fome!
                </Text>

                <Button 
                mt="10px" 
                bgColor="gray.0" 
                color="gray.300" 
                _hover={{bgColor:"gray.200"}} 
                onClick={() => history.push("/signup")}
                >Cadastrar
                </Button>

            </Grid>


            <Grid w="100%" paddingLeft="100px" mb="20px">
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

        </Flex>
    )
}