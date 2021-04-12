import { useEffect } from "react"

import { HomeLayout } from "../layouts"
import { Button } from "../components"
import { storeHooks } from "../store"

export type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const { refetch, resetStore, fetchContent } = storeHooks.useStoreActions((s) => s.heroes)
  const heroes = storeHooks.useStoreState((s) => s.heroes)

  useEffect(() => {
    fetchContent({ page: 3, limit: 10 })
  }, [])

  return (
    <HomeLayout>
      <HomeLayout.Title>Home sweet home</HomeLayout.Title>
      <pre>{JSON.stringify(heroes, null, 4)}</pre>

      <Button loading={heroes.loading} onClick={() => refetch()}>
        Refetch!
      </Button>
      <Button onClick={() => resetStore()}>Reset!</Button>
    </HomeLayout>
  )
}

export default IndexPage
