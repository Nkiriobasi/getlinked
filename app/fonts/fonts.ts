import localFont from 'next/font/local'
import { Unica_One } from 'next/font/google'

export const montserrat = localFont({
    src: './Montserrat/Montserrat-VariableFont_wght.ttf',
    display: 'swap',
})

export const unica_One = Unica_One({ 
    weight: '400', 
    subsets: ['latin'] 
})
 