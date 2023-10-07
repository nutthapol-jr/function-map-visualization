import { Noto_Sans_Thai } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const notoSansThai = Noto_Sans_Thai({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: notoSansThai.style.fontFamily,
  },
});

export default theme;