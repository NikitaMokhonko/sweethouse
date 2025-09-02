import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className='min-h-screen'>Hello "/contact"!</div>
  )
}
