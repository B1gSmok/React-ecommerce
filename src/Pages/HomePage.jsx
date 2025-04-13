import CategoryFilter from "../Features/CategoryFilter/CategoryFilter"
import FooterSection from "../Features/Footer/FooterSection"
import Navbar from "../Features/NavBar/Navbar"
import ProductList from "../Features/ProductList/ProductList"
function Home() {
    return (
        <>
            <Navbar />
            <CategoryFilter >
                <ProductList/>
            </CategoryFilter>
            <FooterSection/>
        </>
    )
}

export default Home
