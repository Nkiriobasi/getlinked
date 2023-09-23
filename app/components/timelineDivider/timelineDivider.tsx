import Image from "next/image";
import Line1 from '@/public/line1.svg';
import Line from '@/public/line.svg';
import No1 from '@/public/no1.svg';
import No2 from '@/public/no2.svg';
import No3 from '@/public/no3.svg';
import No4 from '@/public/no4.svg';
import No5 from '@/public/no5.svg';
import No6 from '@/public/no6.svg';

const TimelineDivider = () => {
  return (
    <div className='flex flex-col items-center justify-start'>
        <Image 
            src={Line1} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={No1} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={Line} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={No2} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={Line} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={No3} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={Line} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={No4} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={Line} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={No5} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={Line} 
            alt="divider" 
            className="mb-2"
        />
        <Image 
            src={No6} 
            alt="divider" 
        />
    </div>
  )
}

export default TimelineDivider