import { Button, Slider } from '@openui-org/react'

export default function Home() {
  return (
    <>
      <div className="p-44 flex flex-col gap-3 items-center">
        <button className="py-2 px-6 rounded-small shadow-large bg-primary text-primary-foreground">
          Example
        </button>
        <Slider defaultValue={[33]} max={90} step={1} />
        <Button className="bg-black hover:bg-black/90" rippleColor="light">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          Home
        </Button>
        <Button variant="warn" rippleColor="dark">
          WARN
        </Button>
        <Button variant="success">
          SUCCESS
        </Button>
        <Button variant="error">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
          ERROR
        </Button>
        <Button variant="ghost">
          ERROR
        </Button>
        <Button variant="link" ripple={false} asChild>
          <a href="https://google.com" target="_blank">
            ERROR

          </a>
        </Button>
        <Button variant="link" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
        </Button>
      </div>
    </>
  )
}