import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { Flower } from 'components/Flower/Flower'
import { BLACK, MAROON, PINK } from 'constants/colours'
import { ADOBE_HANDWRITING_ERNIE, LATO, LINOTYPE_DIDOT } from 'constants/fonts'
import { TRANSFORM_X } from 'constants/transforms'

export const SpecialThanks = () => (
  <Stack sx={{ textAlign: 'center' }}>
    <Typography
      variant="h4"
      sx={{ color: MAROON, fontFamily: LINOTYPE_DIDOT, transform: TRANSFORM_X }}
    >
      SPECIAL THANKS
    </Typography>
    <Typography
      variant="h6"
      sx={{ color: PINK, fontFamily: ADOBE_HANDWRITING_ERNIE }}
    >
      to our parents who loved us first,
    </Typography>
    <Stack direction="row" sx={{ justifyContent: 'space-between', mx: '70px' }}>
      <Flower />
      <Typography sx={{ color: BLACK, fontFamily: LATO, fontSize: '11px' }}>
        Ferdinand Salayo
        <br />
        Chona Salayo
        <br />
        <br />
        Danila Alcantara
        <br />
        Wilma Alcantara
      </Typography>
      <Flower sx={{ transform: 'scaleX(-1)' }} />
    </Stack>
  </Stack>
)
