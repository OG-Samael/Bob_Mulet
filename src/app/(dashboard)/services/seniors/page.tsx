import { readJSON } from '@/utils/fileHandler'
import SeniorsClient from './SeniorsClient'

type Hairstyle = {
  id: string
  title: string
  category: string
  featureImage: string
  tags: string[]
}

export default async function Page() {
  const allHairstyles = await readJSON<Hairstyle[]>('hairstyles.json')
  const seniorMaleHairstyles = allHairstyles.filter(h => h.category === 'senior-male')
  const seniorFemaleHairstyles = allHairstyles.filter(h => h.category === 'senior-female')

  return (
    <SeniorsClient
      seniorMaleHairstyles={seniorMaleHairstyles}
      seniorFemaleHairstyles={seniorFemaleHairstyles}
    />
  )
}

