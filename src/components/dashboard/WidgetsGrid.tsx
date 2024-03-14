'use client'

import { IoCartOutline } from 'react-icons/io5'
import { SimpleWidget } from '..'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {
  const isCart = useAppSelector( state => state.counter.count );
  console.log("🚀 ~ WidgetsGrid ~ isCart:", isCart)
  return (
    <div className="flex flex-wrap p-2">
        <SimpleWidget 
          title={ `${isCart}` } 
          subTitle='Added Products' 
          label='Contador' 
          icon={<IoCartOutline  size={70} className="text-blue-600" />}
          href='/dashboard/counter'
        />
    </div>
  )
}
