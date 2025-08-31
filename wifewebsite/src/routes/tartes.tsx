import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tartes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tartes"!</div>
}
