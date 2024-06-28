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
        backgroundColor={checked ? 'accent500' : 'neutral400'}
        borderColor="accent500"
        justifyContent="center"
        alignItems="center"
        borderRadius={999}
        borderWidth={2}
        height={22}
        width={22}
      >
        {checked ? <Check size={16} weight="bold" color="#fff" /> : undefined}
      </CheckboxBox>
    </Pressable>
  )
}
