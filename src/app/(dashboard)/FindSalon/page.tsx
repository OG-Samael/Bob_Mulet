'use client'

import { useState } from 'react'

import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import salonsData from '@/app/salons-map/data/salon.json'
import type { Salon } from '@/app/salons-map/types/salon'
import { useMapSync } from '@/app/salons-map/hooks/useMapSync'
import './FindSalon.css'

const MapView = dynamic(() => import('@/app/salons-map/components/MapView'), { ssr: false })

export default function FindSalonPage() {
  const salons: Salon[] = salonsData

  const { visibleSalons, selectedSalon, updateVisibleSalons, selectSalon } = useMapSync(salons)

  const [search, setSearch] = useState('')

  const filteredSalons = visibleSalons.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
      {/* ── Map panel (appears first on mobile) ── */}
      <Box sx={{ flex: 1, position: 'relative', overflow: 'hidden', order: { xs: 1, md: 2 }, minHeight: { xs: '50vh', md: 'auto' } }}>
        <MapView
          salons={salons}
          selectedSalon={selectedSalon}
          onBoundsChange={updateVisibleSalons}
          onMarkerClick={selectSalon}
        />
      </Box>

      {/* ── Left panel ── */}
      <Box
        sx={{
          width: { xs: '100%', md: 320 },
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          borderRight: { md: '1px solid' },
          borderTop: { xs: '1px solid', md: 'none' },
          borderColor: 'divider',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          order: { xs: 2, md: 1 },
          maxHeight: { xs: '50vh', md: 'none' },
        }}
      >
        {/* Search bar */}
        <Box sx={{ p: 3, pb: 2 }}>
          <OutlinedInput
            fullWidth
            placeholder='Search salons…'
            value={search}
            onChange={e => setSearch(e.target.value)}
            size='small'
            startAdornment={
              <InputAdornment position='start'>
                <i className='tabler-search iconSearch' />
              </InputAdornment>
            }
            endAdornment={
              search.length > 0 ? (
                <InputAdornment position='end'>
                  <Box
                    component='span'
                    onClick={() => setSearch('')}
                    sx={{ cursor: 'pointer', display: 'flex', color: 'text.secondary' }}
                  >
                    <i className='tabler-x iconClear' />
                  </Box>
                </InputAdornment>
              ) : null
            }
          />
        </Box>

        <Divider />

        {/* Salon list / empty state */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {filteredSalons.length > 0 ? (
            filteredSalons.map(salon => (
              <Box
                key={salon.id}
                onClick={() => selectSalon(salon)}
                sx={{
                  px: 3,
                  py: 2,
                  cursor: 'pointer',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  bgcolor: selectedSalon?.id === salon.id ? 'action.selected' : 'transparent',
                  '&:hover': { bgcolor: 'action.hover' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1,
                }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant='body1' fontWeight={600} noWrap>
                    {salon.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' noWrap>
                    {salon.address}
                  </Typography>
                  {salon.waitTime !== undefined && (
                    <Typography variant='caption' color='success.main' fontWeight={600}>
                      ~{salon.waitTime} min wait
                    </Typography>
                  )}
                </Box>
                <Button
                  variant='outlined'
                  size='small'
                  href={`/book?salonName=${encodeURIComponent(salon.name)}&salonAddress=${encodeURIComponent(salon.address)}&waitTime=${salon.waitTime ?? 12}`}
                  onClick={e => e.stopPropagation()}
                  sx={{ flexShrink: 0, fontSize: '0.7rem', px: 1.5 }}
                >
                  Check In
                </Button>
              </Box>
            ))
          ) : (

            /* ── Empty / initial state ── */
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  bgcolor: 'action.hover',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <i className='tabler-map-pin-search iconMapPin' />
              </Box>
              <Typography variant='h6' fontWeight={600} gutterBottom>
                No salons found
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ maxWidth: 220 }}>
                Try adjusting your search or panning the map to a different area.
              </Typography>
            </Box>
          )}
        </Box>

        {/* Selected salon detail strip */}
        {selectedSalon && (
          <>
            <Divider />
            <Box sx={{ p: 3 }}>
              <Typography variant='caption' color='text.disabled' textTransform='uppercase' letterSpacing={1}>
                Selected
              </Typography>
              <Typography variant='subtitle1' fontWeight={700} mt={0.5}>
                {selectedSalon.name}
              </Typography>
              <Typography variant='body2' color='text.secondary' mb={1.5}>
                {selectedSalon.address}
              </Typography>
              {selectedSalon.waitTime !== undefined && (
                <Typography variant='body2' color='success.main' fontWeight={600} mb={1.5}>
                  <i className='tabler-clock iconClock' />
                  ~{selectedSalon.waitTime} min current wait
                </Typography>
              )}
              <Button
                variant='contained'
                size='medium'
                fullWidth
                href={`/book?salonName=${encodeURIComponent(selectedSalon.name)}&salonAddress=${encodeURIComponent(selectedSalon.address)}&waitTime=${selectedSalon.waitTime ?? 12}`}
              >
                Book Now — Join Queue
              </Button>
            </Box>
          </>
        )}
      </Box>

      {/* ── Right panel — Live map (desktop only, mobile uses the one above) ── */}
    </Box>
  )
}
