const palete = {
  blue: {
    500: '#4EA8DE',
    700: '#1E6F9F',
  },
  purple: {
    500: '#8284FA',
    700: '#5E60CE',
  },
  neutral: {
    100: '#F2F2F2',
    200: '#D9D9D9',
    300: '#808080',
    400: '#333333',
    500: '#262626',
    600: '#1A1A1A',
    700: '#0D0D0D',
  },
  danger: {
    500: '#E25858',
  },
}

export const colors = {
  mainBackground: palete.neutral[500],
  mainForeground: palete.neutral[500],
  textPrimary: palete.blue[500],
  textSecondary: palete.blue[500],

  accentPrimary: palete.neutral[500],
  accentSecondary: palete.neutral[500],
}
