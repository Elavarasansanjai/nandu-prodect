import HotDishes from './components/prodects/HotDishes';
import MainNavigation from './components/mainNavigation';
import HomePage from './components/Homepage';
import FreshItems from './components/freshItems';

const IndexPage = () => {
  return (
    <div>
      <MainNavigation />
      <HomePage />
      <FreshItems />
      <HotDishes />
    </div>
  );
};
export default IndexPage;
