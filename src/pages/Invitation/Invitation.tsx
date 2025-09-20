import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import hero from 'assets/invitation/hero.png'
import { Image } from 'components/Image/Image'

const BLACK = '#2d2d2d'
const BLUE = '#f2f9ff'
const BROWN = '#5a3941'

export const Invitation = () => (
  <Container maxWidth="md" disableGutters>
    <Stack>
      <Image src={hero} sx={{ mt: '48px', width: '100%' }} />
      <Stack
        sx={{
          backgroundColor: BLUE,
          textAlign: 'center',
          px: '20px',
          py: '20px',
        }}
      >
        <Typography variant="h5" sx={{ color: BROWN }}>
          RSVP
        </Typography>
        <Typography variant="body2" sx={{ color: BLACK }}>
          Kindly email <b>ginoandlesleywedding@gmail.com</b> to confirm your
          attendance.
        </Typography>
        <Typography variant="body2" sx={{ color: BLACK }}>
          Please note the deadline to RSVP is November 26, 2025.
        </Typography>
      </Stack>
    </Stack>
  </Container>
)
