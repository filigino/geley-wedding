import React from 'react'

import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import hero from 'assets/invitation/hero.png'
import timeline from 'assets/invitation/timeline.png'
import { Image } from 'components/Image/Image'
import { LogoDivider } from 'components/LogoDivider/LogoDivider'
import { Rsvp } from 'components/Rsvp/Rsvp'
import { SpecialThanks } from 'components/SpecialThanks/SpecialThanks'
import { WeddingDetails } from 'components/WeddingDetails/WeddingDetails'
import { PADDING_X } from 'constants/spacing'

export const Invitation = () => (
  <Container maxWidth="md" disableGutters>
    <Stack>
      <Image src={hero} sx={{ mt: '48px', mx: PADDING_X }} />
      <Rsvp sx={{ mt: '20px' }} />
      <Image src={timeline} sx={{ mt: '20px' }} />
      <Rsvp />
      <LogoDivider />
      <WeddingDetails />
      <LogoDivider />
      <SpecialThanks />
    </Stack>
  </Container>
)
