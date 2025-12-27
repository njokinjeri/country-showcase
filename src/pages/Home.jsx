import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import RegionFilter from "../components/RegionFilter"
import CountryCard from "../components/CountryCard"

export default function Home() {
  return (
    <main className="w-screen h-screen bg-neutral-100 font-nunito flex flex-col items-center md:items-start gap-6 overflow-hidden">
        <Header />
        <section className="w-full flex flex-col justify-start gap-8 p-6 md:flex-row md:justify-between">
            <SearchBar />
            <RegionFilter />
        </section>
        <section className="flex flex-col justify-center items-center gap-4">
            <CountryCard />
        </section>
    </main>
  )
}

