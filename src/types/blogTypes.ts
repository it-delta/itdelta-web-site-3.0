export interface BlogContentType {
  type: string,
  value: [] | string
}

export interface BlogType {
  id: string,
  active: boolean,
  publish_date:  string | undefined,
  title: string,
  slug?: string,
  description: string,
  content: BlogContentType[],
  author: {
    image: {src: string},
    name: string,
    role: string
  }
}