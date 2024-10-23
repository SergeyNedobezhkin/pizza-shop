import { Container, SortPopup, TopBar } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1 ">
            <div className="flex flex-col gap-16 ">

              <ProductsGroupList title={"Пиццы"} categoryId={1} listClassName="grid-cols-3 gap-8" items={[
                {
                  id: 1,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 300, }]
                },
                {
                  id: 2,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 200, }]
                }, {
                  id: 3,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 670, }]
                },
                {
                  id: 4,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 600, }]
                },
                {
                  id: 5,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 560, }]
                },
                {
                  id: 6,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 760, }]
                },
                {
                  id: 7,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 360, }]
                },
                {
                  id: 8,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 400, }]
                },


              ]} />

              <ProductsGroupList title={"Комбо"} categoryId={2} listClassName="grid-cols-3 gap-8" items={[
                {
                  id: 1,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 300, }]
                },
                {
                  id: 2,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 200, }]
                }, {
                  id: 3,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 670, }]
                },
                {
                  id: 4,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 600, }]
                },
                {
                  id: 5,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 560, }]
                },
                {
                  id: 6,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 760, }]
                },
                {
                  id: 7,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 360, }]
                },
                {
                  id: 8,
                  name: "Президентская",
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif",
                  price: 300,
                  items: [{ price: 400, }]
                },


              ]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
