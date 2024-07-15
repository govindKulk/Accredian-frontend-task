import { Box, Button, FormControl, FormHelperText, Modal, TextField, Typography, Alert, Snackbar } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdSend } from 'react-icons/io'
import { AuthContext } from '../../context.jsx'
import useModalStore from '../../hooks/useModalStore.js'

const RegisterModal = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const { isModalOpen, closeModal, type } = useModalStore();
    
    const [snackOpen, setsnackOpen] = React.useState(false);
    const [requestError, setRequestError] = React.useState(null);
    const [alertMessage, setAlertMessage] = React.useState('Successfully sent referral! ');
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const {login} = useContext(AuthContext)
    
    const handleClose = (event, reason) => {
      console.log(reason);
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


    function handleCloseModal() {
        if (isLoading) {
            return;
        }
        closeModal();
    }


    const onSubmit = async (data) => {
        // Handle form submission with data (refererName, refererEmail, refereeName, refereeEmail)
        setIsLoading(true);
        console.log(data);

        const res = await fetch('https://accredian-backend-task-5nfb.onrender.com/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })

        if (res.ok) {
            setsnackOpen(true);
            setAlertMessage('Successfully Loggedin! ');
            setRequestError(null);
            const data = await res.json();
            console.log(data);
            login(data.accessToken, data.user);

            setTimeout(() => {
                setsnackOpen(false);
                reset();
                setIsLoading(false);
                closeModal();

            }, 6000)
        }
        else {
            const data = await res.json();
            console.log(data);
            setAlertMessage(data.message ? data.message : 'An error occured');
            setRequestError(data)
            setsnackOpen(true);

            setTimeout(() => {
                setsnackOpen(false);
                setIsLoading(false);


            }, 6000)

            
        }

    };




    return (
        <Modal
            open={isModalOpen && type === "register"}
            onClose={handleCloseModal}
            sx={{
                display: 'flex'
                , justifyContent: 'center'
                , alignItems: 'center'
                , height: '100vh'
                , bgcolor: 'rgba(0,0,0,0.5)'

            }}
        >

            <Box sx={{
                bgcolor: "white", padding: '12px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                width: '350px',
            }}>
                 <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={!requestError ? "success": "error"}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>

                <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight={"bold"}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth margin="normal" error={errors.email}>

                        <TextField
                            {...register('email', { required: 'Your Email is required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid Email' } })}
                            id="email"
                            label="Your Email"
                            size="small"
                            type="email"
                        />
                        {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
                    </FormControl>
                    <FormControl fullWidth margin="normal" error={errors.name}>

                        <TextField
                            {...register('name', { required: 'Your name is required'})}
                            id="name"
                            label="Your name"
                            size="small"
                            type="text"
                        />
                        {errors.name && <FormHelperText>{errors.name.message}</FormHelperText>}
                    </FormControl>
                    <FormControl fullWidth margin="normal" error={errors.password}>
                        <TextField
                            {...register('password', { required: 'Your Password is required' })}
                            id="password"
                            label="Your Password"
                            size="small"
                            type="password"
                        />
                        {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
                    </FormControl>
                
        
                    <LoadingButton
                    loading={isLoading}
                    loadingPosition='start'
                    startIcon={<IoMdSend size={20}/>}
                    fullWidth sx={{ bgcolor: '#1a73e8' }} variant="contained" type="submit">
                        Submit
                    </LoadingButton>
                </form>
            </Box>

           
        </Modal>
    )
}

export default RegisterModal
