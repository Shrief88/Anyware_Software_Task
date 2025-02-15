import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from '../pages/Dashboard'

// Mock the axios client
vi.mock('../../api/axios', () => ({
  axiosClient: {
    get: vi.fn()
  }
}))

// Mock the useQuery hook
vi.mock(import("@tanstack/react-query"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useQuery: vi.fn().mockReturnValue({
      data: [],
    })
  
  }
})


describe('Dashboard Component', () => {
  // Create a new QueryClient for each test
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )

  it('renders dashboard layout correctly', () => {
    render(<Dashboard />, { wrapper })
    expect(screen.getByText('EXAMS TIME')).toBeInTheDocument()
    expect(screen.getByText('Announcements')).toBeInTheDocument()
    expect(screen.getByText('What is due')).toBeInTheDocument()
  })
})
