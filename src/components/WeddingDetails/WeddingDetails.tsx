import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import cover from 'assets/invitation/cover.png'
import hotelCallout from 'assets/invitation/hotelCallout.png'
import theme from 'assets/invitation/theme.png'
import { FlowerDivider } from 'components/FlowerDivider/FlowerDivider'
import { Image } from 'components/Image/Image'
import { BEIGE, BLACK, BROWN } from 'constants/colours'

export const WeddingDetails = () => (
  <Stack sx={{ textAlign: 'center', gap: '16px' }}>
    <Typography variant="h5" sx={{ color: BROWN }}>
      Details
    </Typography>
    <Image src={cover} sx={{ px: '40px' }} />
    <Image src={theme} sx={{ px: '40px' }} />
    <Stack sx={{ backgroundColor: BEIGE, textAlign: 'left', mx: '20px' }}>
      <Typography variant="h6" sx={{ color: BROWN }}>
        Looking for some inspiration?
      </Typography>
      <Typography variant="body2" sx={{ color: BLACK }}>
        Visit our Pinterest board here to get some outfit ideas and a feel of
        the wedding vibe.
      </Typography>
    </Stack>
    <FlowerDivider />
    <Typography variant="h6" sx={{ color: BROWN }}>
      Staying in Tagaytay
    </Typography>
    <Typography variant="body2" sx={{ color: BLACK }}>
      We know it’s an early Monday celebration, so feel free to make a weekend
      out of it! We recommend staying at Hotel Casiana, which is where we’ll
      also be, or any nearby accommodation of your choice, to help you get a
      fresher and more relaxed start to the day.
    </Typography>
    <Image src={hotelCallout} sx={{ mx: '20px' }} />
    <FlowerDivider />
    <Typography variant="h6" sx={{ color: BROWN }}>
      Getting there & around
    </Typography>
  </Stack>
)
