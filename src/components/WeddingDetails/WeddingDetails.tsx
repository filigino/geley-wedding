import React from 'react'

import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import cover from 'assets/invitation/cover.png'
import hotelCallout from 'assets/invitation/hotelCallout.png'
import theme from 'assets/invitation/theme.png'
import { FlowerDivider } from 'components/FlowerDivider/FlowerDivider'
import { Image } from 'components/Image/Image'
import { BEIGE, BLACK, MAROON, PINK } from 'constants/colours'
import { ADOBE_HANDWRITING_ERNIE, LATO, LINOTYPE_DIDOT } from 'constants/fonts'
import { PADDING_X } from 'constants/spacing'
import { TRANSFORM_X } from 'constants/transforms'

export const WeddingDetails = () => (
  <Stack sx={{ textAlign: 'center', gap: '16px' }}>
    <Typography
      variant="h4"
      sx={{
        color: MAROON,
        fontFamily: LINOTYPE_DIDOT,
        transform: TRANSFORM_X,
      }}
    >
      DETAILS
    </Typography>
    <Image src={cover} sx={{ mx: '40px' }} />
    <Image src={theme} sx={{ mx: '40px' }} />
    <Stack
      sx={{
        backgroundColor: BEIGE,
        textAlign: 'left',
        mx: PADDING_X,
        px: '12px',
        py: '12px',
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: BLACK, fontFamily: ADOBE_HANDWRITING_ERNIE }}
      >
        Looking for some inspiration?
      </Typography>
      <Typography sx={{ color: BLACK, fontFamily: LATO, fontSize: '11px' }}>
        Visit our Pinterest board{' '}
        <Link
          href="https://pinterest.com/Lesleyend/gino-lesley-official-wedding-board"
          target="_blank"
          underline="none"
          sx={{
            color: PINK,
            fontWeight: 'bold',
            borderBottom: `1px solid ${PINK}`,
          }}
        >
          here
        </Link>{' '}
        to get some outfit ideas and a feel of the wedding vibe.
      </Typography>
    </Stack>
    <FlowerDivider />
    <Typography
      variant="h6"
      sx={{ color: PINK, fontFamily: ADOBE_HANDWRITING_ERNIE }}
    >
      Staying in Tagaytay
    </Typography>
    <Typography
      sx={{ color: BLACK, fontFamily: LATO, fontSize: '11px', mx: '24px' }}
    >
      We know it’s an early Monday celebration, so feel free to make a weekend
      out of it! We recommend staying at Hotel Casiana, which is where we’ll
      also be, or any nearby accommodation of your choice, to help you get a
      fresher and more relaxed start to the day.
    </Typography>
    <Image src={hotelCallout} sx={{ mx: PADDING_X }} />
    <FlowerDivider />
    <Typography
      variant="h6"
      sx={{ color: PINK, fontFamily: ADOBE_HANDWRITING_ERNIE }}
    >
      Getting there & around
    </Typography>
    <Typography
      sx={{ color: BLACK, fontFamily: LATO, fontSize: '11px', mx: '24px' }}
    >
      Tagaytay can be a 2-hour drive from Manila, so having your own vehicle may
      be the most convenient, especially with the traffic. Please allow ample
      travel time when going from the church to Balay Dako, as it can be a
      30-minute drive.
    </Typography>
    <Stack
      sx={{
        backgroundColor: BEIGE,
        textAlign: 'left',
        mx: PADDING_X,
        px: '12px',
        py: '12px',
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: BLACK, fontFamily: ADOBE_HANDWRITING_ERNIE }}
      >
        Looking for some inspiration?
      </Typography>
      <Typography sx={{ color: BLACK, fontFamily: LATO, fontSize: '11px' }}>
        Visit our Pinterest board{' '}
        <Link
          href="https://pinterest.com/Lesleyend/gino-lesley-official-wedding-board"
          target="_blank"
          underline="none"
          sx={{
            color: PINK,
            fontWeight: 'bold',
            borderBottom: `1px solid ${PINK}`,
          }}
        >
          here
        </Link>{' '}
        to get some outfit ideas and a feel of the wedding vibe.
      </Typography>
    </Stack>
  </Stack>
)
