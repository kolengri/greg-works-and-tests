import { useEffect } from "react"

import { HomeLayout } from "../layouts"
import { Button, ItemCard, TilesGrid } from "../components"
import { storeHooks } from "../store"

export type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const { refetch, resetStore, fetchContent } = storeHooks.useStoreActions((s) => s.characters)
  const { result: characters, skip } = storeHooks.useStoreState((s) => s.characters.data)
  const { loading } = storeHooks.useStoreState((s) => s.characters)

  useEffect(() => {
    fetchContent({ skip: 0, limit: 10 })
  }, [])

  return (
    <HomeLayout>
      <HomeLayout.Title>Home sweet home</HomeLayout.Title>
      <TilesGrid>
        {characters.map((item) => (
          <ItemCard key={item.id}>
            <ItemCard.Image src={item.image} />
            <ItemCard.Header>{item.name}</ItemCard.Header>
          </ItemCard>
        ))}
      </TilesGrid>
      <Button loading={loading} onClick={() => refetch()}>
        Refetch!
      </Button>
      <Button loading={loading} onClick={() => fetchContent({ skip: skip + 10, limit: 10 })}>
        Next
      </Button>
      <Button loading={loading} onClick={() => fetchContent({ skip: skip - 10, limit: 10 })}>
        Prev
      </Button>

      <Button loading={loading} onClick={() => fetchContent({ search: "skywalk" })}>
        show skywalkers
      </Button>

      <Button onClick={() => resetStore()}>Reset!</Button>
    </HomeLayout>
  )
}

export default IndexPage
