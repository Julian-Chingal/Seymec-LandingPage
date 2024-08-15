// components
import { Card, CardContent } from "../ui/card";
import {
  Carousel as Cl,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const items = [
  {
    title: "First slide",
    description: "This is the first slide",
    url: "https://media.istockphoto.com/id/1221478578/es/foto/mujer-joven-con-auriculares-trabajando-desde-casa.jpg?s=1024x1024&w=is&k=20&c=GkJ7bNCO_wq-FLK0pv5bskNUIBHYkV8rpOHr7_-hrSU=",
  },
  {
    title: "Second slide",
    description: "This is the second slide",
    url: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpghttps://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
  },
  {
    title: "Third slide",
    description: "This is the third slide",
    url: "https://media.istockphoto.com/id/1075846806/es/foto/joven-estudiante-estudiando-en-la-biblioteca.jpg?s=1024x1024&w=is&k=20&c=t0mqCi32de4RZKcYYt4MaWB55K3dT2NJvDubivUAlaU=",
  },
];

export function Carousel() {
  return (
    <section>
      <div className="">
        <Cl
          className=""
          autoplay={3000}
          opts={{
            dragFree: true,
            loop: true,
          }}
        >
          <CarouselContent>
            {items.map((item, index: number) => (
              <CarouselItem key={index}>
                <div>
                  <Card>
                    <CardContent className="">
                      <img
                        src={item.url}
                        alt={item.description}
                        className=""
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex  justify-center items-center" />
          <CarouselNext className="hidden sm:flex  justify-center items-center" />
        </Cl>
      </div>
    </section>
  );
}
