import React from 'react'

import { SxProps } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { BLUE, BROWN, BLACK } from 'constants/colours'

interface RsvpProps {
  sx?: SxProps
}

export const Rsvp = ({ sx }: RsvpProps) => (
  <Stack
    sx={{
      backgroundColor: BLUE,
      textAlign: 'center',
      px: '20px',
      py: '20px',
      ...sx,
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
)
