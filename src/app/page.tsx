import { farmhouse, spoul } from "@/app/fonts/fonts"

export default function Home() {
  return (
    <main className="grid-content">
      <h1 className={farmhouse.className}>Céphée</h1>
      <h2 className={spoul.className}>Spoul</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam modi facere deserunt unde dolore pariatur eligendi id laborum enim nostrum quas, in, nam, recusandae adipisci magni odit illum iste?</p>
    </main>
  )
}