import { createRootRoute, Outlet, type ErrorComponentProps } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  	component: () => {
		return <>
			<Outlet />
			<TanStackRouterDevtools/>
		</>
	},
	errorComponent: ({ error }: ErrorComponentProps) => {
		return <div>error : {error.stack}</div>
	},
})