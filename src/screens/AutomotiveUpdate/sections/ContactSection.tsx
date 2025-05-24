import { Box, Container, Grid, Typography } from '@mui/material';
import { JSX } from 'react';

export const ContactSection = (): JSX.Element => {
  const footerLinks = [
    {
      title: "APPLICATIONS",
      links: ["Apparel", "Automotive", "Filtration", "Customised Solutions"],
    },
    {
      title: "COMPANY",
      links: ["Innovation", "Global Competency", "About Us", "Contact Us"],
    },
    {
      title: "MORE",
      links: ["Careers", "Privacy Policy", "Terms and Conditions"],
    },
    {
      title: "FOLLOW US",
      links: ["Twitter", "LinkedIn", "Instagram", "Medium"],
    },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper' }}>
      <Box sx={{ position: 'relative', width: '100%' }}>

        <Box
          component="img"
          src="/img/bgDesign.png"
          alt="Decorative element"
          sx={{
            position: 'absolute',
            width: 419,
            height: 502,
            top: 180,
            right: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ py: 14 }}>
          <Box sx={{ mb: 10 }}>
            <Box sx={{ position: 'relative', width: 226, height: 63 }}>
              <Box
                component="img"
                src="/img/logo.png"
                alt="Supreme Group logo text"
                sx={{
                  position: 'absolute',
                  height: 53,
                  top: '5px',
                  left: '0px',
                }}
              />
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 6,
            mb: 10,
            paddingBottom: 10,
          }}>
            {footerLinks.map((column, index) => (
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                }} key={index}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {column.title}
                </Typography>
                <Box sx={{ 
                  '& > *': { lineHeight: '41px' },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.3,
                   }}>
                  {column.links.map((link, linkIndex) => (
                    <Typography
                      key={linkIndex}
                      variant="body2"
                      sx={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 500 }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 10, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 500 }}>
              ©2023. All Rights Reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 500 }}>
              Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};