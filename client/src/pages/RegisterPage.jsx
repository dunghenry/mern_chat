import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import Signup from '~/components/auth/Signup';
import '../App.css';
const RegisterPage = () => {
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
                    Signup
                </Text>
            </Box>
            <Box
                bg="white"
                w="100%"
                borderRadius={'lg'}
                p={4}
                borderWidth="1px"
            >
                <Signup />
            </Box>
        </Container>
    );
};

export default RegisterPage;
