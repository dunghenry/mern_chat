import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import Login from '~/components/auth/Login';
import '../App.css';
const LoginPage = () => {
    return (
        <Container maxW="xl" centerContent style={{ marginTop: '25px' }}>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m={'40px 0 15px 0'}
                borderRadius="lg"
                borderWidth="1px"
                textAlign="center"
            >
                <Text fontSize="3xl" fontFamily="Work sans" color="black">
                    Login
                </Text>
            </Box>
            <Box
                bg="white"
                w="100%"
                borderRadius={'lg'}
                p={4}
                borderWidth="1px"
            >
                <Login />
            </Box>
        </Container>
    );
};

export default LoginPage;
