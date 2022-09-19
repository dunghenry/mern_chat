import {
    FormControl,
    FormLabel,
    Input,
    VStack,
    InputGroup,
    InputRightElement,
    Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../store/actions/authActions';
import { useDispatch } from 'react-redux';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    //! Login
    const handleSubmit = async () => {
        const user = {
            email,
            password,
        };
        dispatch(authLogin({ user, navigate }));
    };
    return (
        <VStack spacing={'5px'}>
            <FormControl id="login_email" isRequired>
                <FormLabel>Email : </FormLabel>
                <Input
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="login_password" isRequired>
                <FormLabel>Password : </FormLabel>
                <InputGroup size={'md'}>
                    <Input
                        type={show ? 'text' : 'password'}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            h="1.75rem"
                            size={'sm'}
                            onClick={() => setShow(!show)}
                        >
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                style={{ marginTop: 15 }}
                colorScheme="blue"
                width={'100%'}
                onClick={handleSubmit}
            >
                Login
            </Button>
        </VStack>
    );
};

export default Login;
