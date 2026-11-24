import AliceCarouselImport from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const AliceCarousel = AliceCarouselImport.default ?? AliceCarouselImport
import { img_300 } from '../utils'

export const Carousel = ({ credits }) => {
console.log(credits);

  const items = credits.map(obj => (
    <div key={obj.id} className="px-2">
      <img
        src={obj.profile_path ? img_300 + obj.profile_path : '/noImage.jpg'}
        alt={obj.name}
        className="w-full h-40 object-contain"
      />
      <p className="text-center text-sm">{obj.name}</p>
    </div>
  ))

  return (
    <div className="w-full">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: { items: 2 },
          600: { items: 3 },
          1024: { items: 6 }
        }}
        controlsStrategy="alternate"
      />
    </div>
  )
}

/*

const items = [
  <div className="bg-red-400 p-10">Első elem</div>,
  <div className="bg-blue-400 p-10">Második elem</div>,
  <div className="bg-green-400 p-10">Harmadik elem</div>,
]

export const Carousel = ({credits}) => {
  console.log(credits);
  
  return (
    <AliceCarousel
      items={items}
      responsive={{
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
      }}
    />
  )
}*/