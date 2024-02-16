import Hero from "../components/Hero"
import NewCollections from "../components/NewCollections"
import PopularWomen from "../components/PopularWomen"
import SaleBanner from "../components/SaleBanner"
import Subscribe from "../components/Subscribe"

const Shop = () => {
  return (
    <div>
        <Hero/>
        <PopularWomen />
        <SaleBanner />
        <NewCollections />
        <Subscribe />
    </div>
  )
}

export default Shop