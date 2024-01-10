'use client'
import About from '@/Components/Feed/About'
import IEEEAMU from '@/Components/Feed/IEEEAMU'
import IEEEClubs from '@/Components/Feed/IEEEClubs'
import Message from '@/Components/Feed/Message'
import Mission from '@/Components/Feed/Mission'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div className=' mt-[50px] flex flex-col justify-center' >
      <div>
      <IEEEAMU/>
      </div>
      <div>
      <About/>
      <Mission/>
      <Message/>
      <IEEEClubs/>
      </div>
    </motion.div>
  )
}
