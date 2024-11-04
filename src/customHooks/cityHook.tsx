import { CityContext } from '@/context/CityContext'
import { useContext } from 'react'

export const useCity = () => useContext(CityContext)