import { QueryClient } from '@tanstack/react-query'
import { REACT_QUERY_CACHE_TIME, REACT_QUERY_STALE_TIME } from '@/config/api'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: REACT_QUERY_STALE_TIME,
      gcTime: REACT_QUERY_CACHE_TIME,
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

// For queries
export const QueryKey = {
  test: 'test'
} as const

// For mutations
export const MutationKey = {
  test: 'test'
} as const
