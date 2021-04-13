import { useEffect } from "react"

import { HomeLayout } from "../layouts"
import { Button, ItemCard, TilesGrid, Container, Pagination } from "../components"
import { storeHooks } from "../store"

export type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const { refetch, resetStore, fetchContent } = storeHooks.useStoreActions((s) => s.characters)
  const { result: characters, skip, limit, total } = storeHooks.useStoreState(
    (s) => s.characters.data
  )
  const { loading } = storeHooks.useStoreState((s) => s.characters)

  const showAll = () => fetchContent({ skip: 0, limit: 20 })

  useEffect(() => {
    showAll()
  }, [])

  return (
    <HomeLayout>
      <HomeLayout.Title className="text-center mx-auto font-jedy my-10">Star Wars</HomeLayout.Title>
      <Container className="my-16">
        <TilesGrid>
          {characters.map((item) => (
            <ItemCard key={item.id}>
              <ItemCard.Image height={200} width={200} src={item.image} />
              <ItemCard.Header>{item.name}</ItemCard.Header>
            </ItemCard>
          ))}
        </TilesGrid>
        <div className="flex justify-between w-full flex-wrap">
          <div className="grid grid-flow-col auto-cols-max gap-6">
            <Button
              loading={loading}
              onClick={() => fetchContent({ search: "skywalk", skip: 0, limit: 20 })}
            >
              Show skywalkers
            </Button>
            <Button loading={loading} onClick={showAll}>
              Show All
            </Button>
            <Button loading={loading} onClick={() => refetch()}>
              Refetch!
            </Button>
            <Button onClick={() => resetStore()}>Clear!</Button>
          </div>
          <div>
            <Pagination {...{ limit, skip, total }} className="max-w-xs ml-auto">
              <Pagination.NextButton onClick={() => fetchContent({ skip: skip + limit, limit })} />
              <Pagination.PrevButton onClick={() => fetchContent({ skip: skip - limit, limit })} />
            </Pagination>
          </div>
        </div>
      </Container>
    </HomeLayout>
  )
}

export default IndexPage
