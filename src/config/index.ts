//import getConfig from 'next/config'
//const { basePath } = getConfig()

export const GOOGLE_TAG_MANAGER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string

export const BASE_PATH = ''

// micor cms
export const API_URL = process.env.NEXT_PUBLIC_API_URL as string
export const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN as string
export const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string

// posts
let perPage = 0
if (typeof process.env.NEXT_PUBLIC_PER_PAGE === 'string') {
  perPage = Number(process.env.NEXT_PUBLIC_PER_PAGE)
}
export const PER_PAGE = perPage
