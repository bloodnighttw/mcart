import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="bg-amber-50">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export const Route = createFileRoute('/')({
  component: App,
});