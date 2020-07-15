import useSWR from 'swr'
import fetch from 'unfetch'

const fetcher = url => fetch(url).then(r => r.json())

export function Profile() {
  const { data, error } = useSWR('/user/', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return "Piotr"
}
