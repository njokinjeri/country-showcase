import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import RegionFilter from "../components/RegionFilter"
import CountriesList from "../components/CountriesList"

export default function Home() {
  return (
    <main className="w-screen h-screen bg-neutral-100 font-nunito flex flex-col items-center gap-6 overflow-x-hidden">
        <Header />
        <section className="w-full flex flex-col justify-start gap-8 p-6 md:flex-row md:justify-between">
            <SearchBar />
            <RegionFilter />
        </section>
        <section className="flex flex-col justify-center items-center gap-4 pb-6">
            <CountriesList />
        </section>
    </main>
  )
}

