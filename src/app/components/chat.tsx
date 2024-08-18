'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useChat } from 'ai/react';

import {
  Box,
  Stack,
  Typography,
  Button,
  Modal,
  TextField,
} from "@mui/material";

/* const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
}; */


export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  });

  return (
    
    <Box
    sx={{
      backgroundImage: 'url("green-green.jpg")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      overflow: "auto",
    }}
    >
      <Typography variant='h1' fontWeight={'500'} display={'inline'} textAlign={'center'}>
        CashGPT
      </Typography>
      <Typography variant='h3' fontWeight={'100'} width='1500px' textAlign={'center'}>
        Your favorite financial educator for — kids, adults, everywhere
      </Typography>
      <Stack width={"500px"} height={"700px"} bgcolor={'white'} border={'20px shadow black'} borderRadius={'50px'} overflow={'auto'} spacing={2} textAlign={'center'} padding={"50px"} paddingTop={"20px"}>
        {messages.map(message => (
          <div key={message.id}>
            {message.role === 'user' ? 'User: ' : 'AI: '}
            {message.content}
          </div>
        ))}
      </Stack>

      <form onSubmit={handleSubmit}>
        <TextField name="prompt" placeholder='Type prompt here...' value={input}  onChange={handleInputChange} sx={{bgcolor: 'white', marginBottom:'10px', minHeight: '20px'}}/>
        <Button type='submit' variant="contained" sx={{bgcolor: 'green', marginLeft:'20px','&:hover': {backgroundColor: 'lime', color: 'black'}}}>
          Submit
        </Button>
      </form>
      </Box>

    
  );
}