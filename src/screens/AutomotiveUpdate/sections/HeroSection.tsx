import { stylesSmallComponent } from '@/styles/theme/component';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { JSX } from 'react';

export const HeroSection = (): JSX.Element => {
  const contactInfo = [
    {
      label: "Address :",
      value: "110, 16th Road, Chembur, Mumbai – 400071",
    },
    {
      label: "Phone :",
      value: "+91 22 25208822",
    },
    {
      label: "Email :",
      value: "info@supremegroup.co.in",
    },
  ];

  const formFields = [
    { id: "fullName", label: "Full name", type: "text" },
    { id: "email", label: "E-mail", type: "email" },
    { id: "subject", label: "Subject", type: "text" },
    { id: "message", label: "Message", type: "textarea" },
  ];

  return (
    <Box component="section" sx={{ bgcolor: 'primary.main', py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
            <Typography variant="h3" color="white" sx={{ fontSize: '3rem' }}>
              Get in touch
            </Typography>

            <Box sx={{ width: 48, height: 3, bgcolor: 'white' }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Typography variant="h5" color="white" sx={{ fontWeight: 'normal' }}>
                For general enquiries
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contactInfo.map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 0.3 }}>
                    <Typography variant="h6" color="white" fontWeight="600">
                      {item.label}
                    </Typography>
                    <Typography
                      variant="body1" //
                      color="white"
                      fontWeight={300} // thin
                      sx={{ opacity: 0.8 }} 
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.875 }}>
              {formFields.map((field, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  <Typography variant="h6" color="white" fontWeight="semibold">
                    {field.label}
                  </Typography>
                  <TextField
                    id={field.id}
                    type={field.type}
                    multiline={field.type === "textarea"}
                    // rows={field.type === "textarea" ? 4 : 1}
                    maxRows={field.type === "textarea" ? 4 : 1}
                    variant="standard"
                    fullWidth
                    sx={{
                      '& .MuiInput-root': {
                        color: 'white',
                        '&:before, &:after': {
                          borderColor: 'white',
                        },
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              sx={{
                ...stylesSmallComponent.buttonStyle,
                width: 'fit-content',
                minWidth: 120,
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'lightgray',
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};