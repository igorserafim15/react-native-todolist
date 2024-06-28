import { Theme } from '@/theme'
import { colors } from '@/theme/colors'
import { createBox } from '@shopify/restyle'
import { useState } from 'react'
import { TextInput } from 'react-native'

type InputProps = React.ComponentProps<typeof TextInput>

const InputBox = createBox<Theme>()

function Input(props: InputProps) {
  const [focused, setFocused] = useState(false)

  function handleFocused() {
    setFocused(true)
  }
  function handleBlur() {
    setFocused(false)
  }

  return (
    <InputBox
      borderColor={focused ? 'accent500' : 'neutral500'}
      backgroundColor="neutral500"
      borderRadius={8}
      borderWidth={2}
      flex={1}
    >
      <TextInput
        {...props}
        placeholderTextColor={colors.neutral300}
        onFocus={handleFocused}
        onBlur={handleBlur}
        style={{
          fontFamily: 'Inter_400Regular',
          color: colors.neutral100,
          paddingHorizontal: 12,
          fontSize: 16,
          height: 52,
        }}
      />
    </InputBox>
  )
}

export { Input, type InputProps }
