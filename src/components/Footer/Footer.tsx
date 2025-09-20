import React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import seeYouThere from 'assets/invitation/seeYouThere.png'
import { Image } from 'components/Image/Image'
import { BLACK, BLUE } from 'constants/colours'
import { ADOBE_HANDWRITING_ERNIE } from 'constants/fonts'

export const Footer = () => (
  <Stack sx={{ backgroundColor: BLUE, gap: '20px', px: '40px', pb: '20px' }}>
    <Image src={seeYouThere} sx={{ width: '80%' }} />
    <Box alignSelf="flex-end">
      <Typography
        variant="h4"
        sx={{
          color: BLACK,
          fontFamily: ADOBE_HANDWRITING_ERNIE,
          ml: '36px',
        }}
      >
        Love,
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: BLACK,
          fontFamily: ADOBE_HANDWRITING_ERNIE,
        }}
      >
        Gino & Lesley
      </Typography>
    </Box>
  </Stack>
)
