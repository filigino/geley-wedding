import React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { Flower } from 'components/Flower/Flower'
import { BLACK, MAROON, PINK } from 'constants/colours'
import {
  ADOBE_HANDWRITING_ERNIE,
  FONT_SIZE_CONTENT,
  FONT_SIZE_H4,
  FONT_SIZE_H6,
  LATO,
  LINOTYPE_DIDOT,
} from 'constants/fonts'
import { TRANSFORM_X } from 'constants/transforms'

export const SpecialThanks = () => (
  <Stack sx={{ textAlign: 'center' }}>
    <Typography
      variant="h4"
      sx={{
        color: MAROON,
        fontFamily: LINOTYPE_DIDOT,
        transform: TRANSFORM_X,
        fontSize: FONT_SIZE_H4,
      }}
    >
      SPECIAL THANKS
    </Typography>
    <Typography
      variant="h6"
      sx={{
        color: PINK,
        fontFamily: ADOBE_HANDWRITING_ERNIE,
        fontSize: FONT_SIZE_H6,
      }}
    >
      to our parents who loved us first,
    </Typography>
    <Stack
      direction="row"
      sx={{
        justifyContent: 'space-between',
        mx: '70px',
        alignSelf: 'center',
        maxWidth: '500px',
      }}
    >
      <Flower />
      <Stack sx={{ justifyContent: 'center', gap: '12px' }}>
        <Stack>
          <Typography
            sx={{
              color: BLACK,
              fontFamily: LATO,
              fontSize: FONT_SIZE_CONTENT,
            }}
          >
            Ferdinand Salayo
          </Typography>
          <Typography
            sx={{
              color: BLACK,
              fontFamily: LATO,
              fontSize: FONT_SIZE_CONTENT,
            }}
          >
            Chona Salayo
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              color: BLACK,
              fontFamily: LATO,
              fontSize: FONT_SIZE_CONTENT,
            }}
          >
            Danilo Alcantara
          </Typography>
          <Typography
            sx={{
              color: BLACK,
              fontFamily: LATO,
              fontSize: FONT_SIZE_CONTENT,
            }}
          >
            Wilma Alcantara
          </Typography>
        </Stack>
      </Stack>
      <Flower sx={{ transform: 'scaleX(-1)' }} />
    </Stack>
  </Stack>
)
