import { useEffect } from "react"

import { HomeLayout } from "../layouts"
import { Button, DevPrettyObj } from "../components"
import { storeHooks } from "../store"

export type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const { refetch, resetStore, fetchContent } = storeHooks.useStoreActions((s) => s.characters)
  const heroes = storeHooks.useStoreState((s) => s.characters)

  useEffect(() => {
    fetchContent({ skip: 10, limit: 10 })
  }, [])

  return (
    <HomeLayout>
      <HomeLayout.Title>Home sweet home</HomeLayout.Title>
      <DevPrettyObj obj={heroes} />
      <Button loading={heroes.loading} onClick={() => refetch()}>
        Refetch!
      </Button>
      <Button loading={heroes.loading} onClick={() => fetchContent({ skip: 1, limit: 10 })}>
        Fetch first page!
      </Button>
      <Button loading={heroes.loading} onClick={() => fetchContent({ skip: 0, limit: 5 })}>
        Fetch other page!
      </Button>
      <Button onClick={() => resetStore()}>Reset!</Button>
    </HomeLayout>
  )
}

export default IndexPage
