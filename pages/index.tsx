import { useEffect } from "react"

import { HomeLayout } from "../layouts"
import { Button, ItemCard } from "../components"
import { storeHooks } from "../store"

export type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const { refetch, resetStore, fetchContent } = storeHooks.useStoreActions((s) => s.characters)
  const { result: characters, skip, total } = storeHooks.useStoreState((s) => s.characters.data)
  const { loading } = storeHooks.useStoreState((s) => s.characters)

  useEffect(() => {
    fetchContent({ skip: 0, limit: 10 })
  }, [])

  return (
    <HomeLayout>
      <HomeLayout.Title>Home sweet home</HomeLayout.Title>
      {characters.map((item, index) => (
        <ItemCard key={index}>
          <ItemCard.Image src={item.image} />
          <ItemCard.Header>{item.name}</ItemCard.Header>
        </ItemCard>
      ))}
      <Button loading={loading} onClick={() => refetch()}>
        Refetch!
      </Button>
      <Button loading={loading} onClick={() => fetchContent({ skip: skip + 10, limit: 10 })}>
        Next
      </Button>
      <Button loading={loading} onClick={() => fetchContent({ skip: skip - 10, limit: 10 })}>
        Prev
      </Button>

      <Button onClick={() => resetStore()}>Reset!</Button>
    </HomeLayout>
  )
}

export default IndexPage
