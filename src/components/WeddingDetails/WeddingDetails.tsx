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
import {
  ADOBE_HANDWRITING_ERNIE,
  FONT_SIZE_CONTENT,
  FONT_SIZE_H4,
  FONT_SIZE_H6,
  LATO,
  LINOTYPE_DIDOT,
} from 'constants/fonts'
import { PADDING_X } from 'constants/spacing'
import { TRANSFORM_X } from 'constants/transforms'

export const WeddingDetails = () => (
  <Stack sx={{ textAlign: 'center', gap: '12px' }}>
    <Typography
      variant="h4"
      sx={{
        color: MAROON,
        fontFamily: LINOTYPE_DIDOT,
        transform: TRANSFORM_X,
        fontSize: FONT_SIZE_H4,
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
        px: ['20px', '30px'],
        py: '16px',
        pb: ['16px', '24px'],
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: BLACK,
          fontFamily: ADOBE_HANDWRITING_ERNIE,
          fontSize: FONT_SIZE_H6,
        }}
      >
        Looking for some inspiration?
      </Typography>
      <Typography
        sx={{ color: BLACK, fontFamily: LATO, fontSize: FONT_SIZE_CONTENT }}
      >
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
      sx={{
        color: PINK,
        fontFamily: ADOBE_HANDWRITING_ERNIE,
        fontSize: FONT_SIZE_H6,
      }}
    >
      Staying in Tagaytay
    </Typography>
    <Typography
      sx={{
        color: BLACK,
        fontFamily: LATO,
        fontSize: FONT_SIZE_CONTENT,
        mx: '24px',
      }}
    >
      We know it’s an early Monday celebration, so feel free to make a weekend
      out of it! We recommend staying at Hotel Casiana, which is where we’ll
      also be, or any nearby accommodation of your choice, to help you get a
      fresher and more relaxed start to the day.
    </Typography>
    <Image src={hotelCallout} sx={{ mx: PADDING_X }} />
    <FlowerDivider sx={{ transform: 'scaleX(-1)' }} />
    <Typography
      variant="h6"
      sx={{
        color: PINK,
        fontFamily: ADOBE_HANDWRITING_ERNIE,
        fontSize: FONT_SIZE_H6,
      }}
    >
      Getting there & around
    </Typography>
    <Typography
      sx={{
        color: BLACK,
        fontFamily: LATO,
        fontSize: FONT_SIZE_CONTENT,
        mx: '24px',
      }}
    >
      Tagaytay can be a 2-hour drive from Manila, so having your own vehicle may
      be the most convenient, especially with the traffic. Please allow ample
      travel time when going from the church to Balay Dako, as it can be a
      30-minute drive.
    </Typography>
    <Stack
      sx={{
        backgroundColor: BEIGE,
        mx: PADDING_X,
        // px: '12px',
        // py: '16px',
        px: ['20px', '30px'],
        py: ['16px', '24px'],
        // pb: ['16px', '24px'],
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: BLACK,
          fontFamily: LINOTYPE_DIDOT,
          fontSize: ['14px', '20px'],
        }}
      >
        PARKING
      </Typography>
      <Typography
        sx={{ color: BLACK, fontFamily: LATO, fontSize: FONT_SIZE_CONTENT }}
      >
        Parking will be available at the Caleruega chapel, Balay Dako and Hotel
        Casiana should you choose to stay there. If you plan to stay elsewhere,
        please check with your accommodation for parking.
      </Typography>
    </Stack>
    <FlowerDivider />
    <Typography
      variant="h6"
      sx={{
        color: PINK,
        fontFamily: ADOBE_HANDWRITING_ERNIE,
        fontSize: FONT_SIZE_H6,
      }}
    >
      Gifts
    </Typography>
    <Typography
      sx={{
        color: BLACK,
        fontFamily: LATO,
        fontSize: FONT_SIZE_CONTENT,
        mx: '24px',
      }}
    >
      Your love and support mean the world to us, and having you with us on our
      wedding day is the only gift we need. We kindly ask that you don't feel
      obligated to bring a present — your presence is truly enough.
    </Typography>
    <FlowerDivider sx={{ transform: 'scaleX(-1)' }} />
    <Typography
      variant="h6"
      sx={{
        color: PINK,
        fontFamily: ADOBE_HANDWRITING_ERNIE,
        fontSize: FONT_SIZE_H6,
      }}
    >
      Plus ones and little ones
    </Typography>
    <Typography
      sx={{
        color: BLACK,
        fontFamily: LATO,
        fontSize: FONT_SIZE_CONTENT,
        mx: '24px',
      }}
    >
      Unfortunately, while we would love to invite more people, including plus
      ones and children, we’re only able to invite a select a few due to limited
      spacing. Thank you for understanding, and hope we can still enjoy this
      celebration together!
    </Typography>
  </Stack>
)
