import { Theme } from '@/theme'
import { createBox } from '@shopify/restyle'
import { Check } from 'phosphor-react-native'
import { Pressable } from 'react-native'

const CheckboxBox = createBox<Theme>()

type CheckboxProps = {
  onChecked: (checked: boolean) => void
  checked: boolean
}

export function Checkbox({ checked, onChecked }: CheckboxProps) {
  function handleChecked() {
    onChecked(!checked)
  }

  return (
    <Pressable onPress={handleChecked}>
      <CheckboxBox
        backgroundColor={checked ? 'accentPrimary' : 'mainBackground'}
        borderColor="accentPrimary"
        borderWidth={2}
        height={20}
        width={20}
      >
        {checked ? <Check /> : undefined}
      </CheckboxBox>
    </Pressable>
  )
}
