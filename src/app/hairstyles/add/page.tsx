'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'

const CATEGORIES = [
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'kids', label: 'Kids' },
  { value: 'senior-male', label: 'Senior Male' },
  { value: 'senior-female', label: 'Senior Female' },
]

export default function AddHairstylePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    category: 'men',
    featureImage: '',
    tags: '',
    description: '',
    cutFrequency: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
      ...form,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      sections: [],
    }

    const res = await fetch('/api/hairstyles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      router.push('/hairstyles')
    } else {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth='sm' sx={{ py: 6 }}>
      <Typography variant='h4' fontWeight={800} sx={{ mb: 4 }}>
        Add New Hairstyle
      </Typography>
      <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label='Title'
          name='title'
          value={form.title}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          select
          label='Category'
          name='category'
          value={form.category}
          onChange={handleChange}
          required
          fullWidth
        >
          {CATEGORIES.map(c => (
            <MenuItem key={c.value} value={c.value}>{c.label}</MenuItem>
          ))}
        </TextField>
        <TextField
          label='Feature Image URL'
          name='featureImage'
          value={form.featureImage}
          onChange={handleChange}
          placeholder='/images/salon/example.jpg'
          fullWidth
        />
        <TextField
          label='Tags (comma-separated)'
          name='tags'
          value={form.tags}
          onChange={handleChange}
          placeholder='Classic, Short, Fade'
          fullWidth
        />
        <TextField
          label='Description'
          name='description'
          value={form.description}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          label='Cut Frequency'
          name='cutFrequency'
          value={form.cutFrequency}
          onChange={handleChange}
          placeholder='Every 3-4 weeks'
          fullWidth
        />
        <Button type='submit' variant='contained' size='large' disabled={loading}>
          {loading ? 'Saving...' : 'Add Hairstyle'}
        </Button>
      </Box>
    </Container>
  )
}
