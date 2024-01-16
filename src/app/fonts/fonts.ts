import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '500', '700'],
    style: ['italic', 'normal'],
})

const farmhouse = localFont({
    src: './Farmhouse-Children.otf',
    variable: '--font-farmhouse'
});

const spoul = localFont({
    src: './Spoul-Regular.ttf',
    variable: '--font-spoul'
});

export { poppins, farmhouse, spoul };