import { useEffect } from "react"

import Layout from "../components/Layout"
import { storeHooks } from "../store"

export type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const fetch = storeHooks.useStoreActions((s) => s.heroes.fetchContent)
  const refetch = storeHooks.useStoreActions((s) => s.heroes.refetch)
  const heroes = storeHooks.useStoreState((s) => s.heroes)
  useEffect(() => {
    fetch({})
  }, [])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <pre>{JSON.stringify(heroes, null, 4)}</pre>
      <button onClick={() => refetch()}>Refetch!</button>
    </Layout>
  )
}

export default IndexPage
