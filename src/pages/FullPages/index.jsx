import { Container } from '../../styles.shared';
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
            <Container>
                <BestRecipes />
                <BestServices />
                <Blog />
                <Join />
            </Container>
            <Footer />
        </>
    );
}

export default FullPages;