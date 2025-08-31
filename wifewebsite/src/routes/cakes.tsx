import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cakes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cakes"!</div>
}
