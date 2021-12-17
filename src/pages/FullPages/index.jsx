import Header from '../Header';
import BestRecipes from '../BestRecipes';
import BestServices from '../BestServices';
import Blog from '../Blog';
import Join from '../Join';
import Footer from '../Footer';

const FullPages = () => {
    
    return (
        <>
        <Header />
            <main>
               <BestRecipes />
               <BestServices />
                <Blog />
                <Join />
            </main>
           <Footer />
        </>
    );
}

export default FullPages;