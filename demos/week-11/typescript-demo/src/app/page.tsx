import Image from "next/image";
import Link from "next/link";

export default function Home() {

type gamesType = {
  name: string,
  releaseYear: number,
  rating: number,
  studio: string,
  slug: string,
  img_url?: string
}
const games: gamesType[] = [
  {
    name: 'Counter Strike',
    releaseYear: 2000,
    rating: 8.2,
    studio: "Valve",
    slug: "counter-strike",
    img_url: "https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg"
  }, 
  {
    name: "Dead Cells",
    releaseYear: 2019,
    rating: 9.2,
    studio: 'some-place-games',
    slug: 'dead-cells',
    img_url: 'https://assets1.ignimgs.com/2019/06/10/dead-cells---button-fin-1560125633132.jpg'
  },
  {
    name: "Skyrim",
    releaseYear: 2011,
    rating: 9.8,
    studio: "Bethesda",
    slug: "elder-scrolls-skyrim",
    img_url: "https://cdn.cdkeys.com/500x706/media/catalog/product/v/s/vsdada.jpg"
  },
  {
    name: "dreamlight valley",
    releaseYear: 2023,
    rating: 10,
    studio: "disney",
    slug: "dreamlight-valley",
    img_url: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000033556/292fc20e9f2a3a8fa74efdaed2cb6e87ac3fee7f15853a552d55411bac787e8b"
  }
]

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        {games.map(game => (
          <div>
            <h2>{game.name}</h2>
            {/* to deal with the fact the my img src may not be set */}
            {game.img_url ? 
              <Image src={game.img_url} alt="something" height={400} width={250}/>
              :
              ''
            }
            <Link href={`/${game.slug}`}>{game.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
