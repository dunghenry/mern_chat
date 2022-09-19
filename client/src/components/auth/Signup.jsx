import {
    FormControl,
    FormLabel,
    Input,
    VStack,
    InputGroup,
    InputRightElement,
    Button,
    useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authRegister } from '~/store/actions/authActions';
import { useDispatch } from 'react-redux';
const Signup = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [pic, setPic] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const postDetails = (pic) => {
        setLoading(true);
        if (pic === undefined) {
            toast({
                title: 'Please select an image!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'bottom',
            });
            return;
        }
        if (pic.type === 'image/png' || pic.type === 'image/jpeg') {
            const data = new FormData();
            data.append('file', pic);
            data.append('upload_preset', 'chat-app');
            data.append('cloud_name', 'dxguh35gk');
            fetch('https://api.cloudinary.com/v1_1/dxguh35gk/image/upload', {
                method: 'POST',
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    console.log(data.url.toString());
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        } else {
            toast({
                title: 'Please select an image!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'bottom',
            });
            setLoading(false);
            return;
        }
    };
    const handleSubmit = async () => {
        setLoading(true);
        if (!name || !email || !password || !confirmPassword) {
            toast({
                title: 'Please enter all the feilds!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'bottom',
            });
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            toast({
                title: 'Passwords do not match',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'bottom',
            });
            return;
        }
        try {
            const user = {
                name,
                email,
                password,
                pic,
            };
            dispatch(authRegister({ user, navigate }));
            toast({
                title: 'Register account successfully!',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'bottom',
            });
            setLoading(false);
        } catch (error) {
            toast({
                title: 'Register account failure!',
                description: error.response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom',
            });
            setLoading(false);
        }
    };
    return (
        <VStack spacing={'5px'}>
            <FormControl id="name" isRequired>
                <FormLabel>Name : </FormLabel>
                <Input
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email : </FormLabel>
                <Input
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
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
            <FormControl id="confirm_password" isRequired>
                <FormLabel>Confirm Password : </FormLabel>
                <InputGroup size={'md'}>
                    <Input
                        type={show ? 'text' : 'password'}
                        placeholder="Enter your confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
            <FormControl id="pic" isRequired>
                <FormLabel>Upload your Picture : </FormLabel>
                <Input
                    type="file"
                    // hidden
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button
                style={{ marginTop: 15 }}
                colorScheme="blue"
                width={'100%'}
                onClick={handleSubmit}
                isLoading={loading}
            >
                Sign Up
            </Button>
        </VStack>
    );
};

export default Signup;
