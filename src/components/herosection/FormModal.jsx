import { Box, Button, FormControl, FormHelperText, Modal, TextField, Typography, Alert, Snackbar } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React from 'react'
import useModalStore from '../../hooks/useModalStore'
import { useForm } from 'react-hook-form'
import { IoMdSend } from 'react-icons/io'

const FormModal = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const { isModalOpen, closeModal } = useModalStore();
    
    const [snackOpen, setsnackOpen] = React.useState(false);
    const [requestError, setRequestError] = React.useState(null);
    const [alertMessage, setAlertMessage] = React.useState('Successfully sent referral! ');
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
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

        const res = await fetch('https://accredian-backend-task-5nfb.onrender.com/referal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (res.ok) {
            setsnackOpen(true);
            setAlertMessage('Successfully sent referral! ');
            setRequestError(null);

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
            open={isModalOpen}
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
                    Refer a friend and earn more.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth margin="normal" error={errors.refererName}>

                        <TextField
                            {...register('refererName', { required: 'Your Name is required' })}
                            id="refererName"
                            label="Your Name"
                            size="small"
                            type="text"
                        />
                        {errors.refererName && <FormHelperText>{errors.refererName.message}</FormHelperText>}
                    </FormControl>
                    <FormControl fullWidth margin="normal" error={errors.refererEmail}>
                        <TextField
                            {...register('refererEmail', { required: 'Your Email is required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid Email' } })}
                            id="refererEmail"
                            label="Your Email"
                            size="small"
                            type="email"
                        />
                        {errors.refererEmail && <FormHelperText>{errors.refererEmail.message}</FormHelperText>}
                    </FormControl>
                    <FormControl fullWidth margin="normal" error={errors.refereeName}>
                        <TextField
                            {...register('refereeName', { required: 'Referee Name is required' })}
                            id="refereeName"
                            label="Referee Name"
                            size="small"
                            type="text"
                        />
                        {errors.refereeName && <FormHelperText>{errors.refereeName.message}</FormHelperText>}
                    </FormControl>
                    <FormControl fullWidth margin="normal" error={errors.refereeEmail}>
                        <TextField
                            {...register('refereeEmail', { required: 'Referee Email is required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid Email' } })}
                            id="refereeEmail"
                            label="Referee Email"
                            size="small"
                            type="email"
                        />
                        {errors.refereeEmail && <FormHelperText>{errors.refereeEmail.message}</FormHelperText>}
                    </FormControl>
                    <FormControl fullWidth margin="normal" >
                        <TextField
                            {...register('message')}
                            id="message"
                            label="Message(Optional)"
                            size="small"
                            type="text"
                        />

                    </FormControl>
        
                    <LoadingButton
                    loading={isLoading}
                    loadingPosition='start'
                    startIcon={<IoMdSend size={20}/>}
                    fullWidth sx={{ bgcolor: '#1a73e8' }} variant="contained" type="submit">
                        Send Referral
                    </LoadingButton>
                </form>
            </Box>

           
        </Modal>
    )
}

export default FormModal
