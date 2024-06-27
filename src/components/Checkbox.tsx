import { Theme } from '@/theme'
import { createBox } from '@shopify/restyle'
import { useState } from 'react'
import { Pressable } from 'react-native'

const CheckboxBox = createBox<Theme>()

type CheckboxProps = {
  onChecked: () => void
  checked: boolean
}

export function Checkbox({ checked, onChecked }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <Pressable>
      <CheckboxBox height={20} width={20} backgroundColor="mainForeground">
        oi
      </CheckboxBox>
    </Pressable>
  )
}
