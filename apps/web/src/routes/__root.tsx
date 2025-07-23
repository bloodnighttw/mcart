import { createRootRoute, Outlet, type ErrorComponentProps } from '@tanstack/react-router'

export const Route = createRootRoute({
  	component: () => {
		return (
			<Outlet />
		)
	},
	errorComponent: ({ error }: ErrorComponentProps) => {
		return <div>error : {error.stack}</div>
	},
})