import React from 'react';
import HomeProdect from './home-prodect';

const HomePage = () => {
  const homeProdect = [
    {
      id: '1.1',
      Pname: 'Carrot',
      PDetail: 'Completely Free to Use High-quality',
      PPrice: 60,
      PImg: 'https://tse1.mm.bing.net/th?id=OIP.Up56c2HxweRvT3hncOadCwHaFD&pid=Api&P=0&h=180 ',
    },
    {
      id: '1.2',
      Pname: 'Mango',
      PDetail: 'They are a great source of magnesium and potassium',
      PPrice: 68,
      PImg: 'https://media.istockphoto.com/id/168370138/photo/mango.jpg?s=612x612&w=0&k=20&c=ENq2BrUV8dNH2rth_ZYBBtS9RWDwCbI25SfulxirmnQ=',
    },
    {
      id: '1.3',
      Pname: 'Apple',
      PDetail: 'They are rich in fiber and antioxidants',
      PPrice: 70,
      PImg: 'https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=wbm2rjFuYpgQewyfKF2bGMrxTReYgwoKXMC7BRdXC54=',
    },
    {
      id: '1.4',
      Pname: 'Grapes',
      PDetail:
        'Grapes are a good source of potassium, a mineral that helps balance fluids in your body',
      PImg: 'https://media.istockphoto.com/id/489520104/photo/green-grape-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9kg_3pMeBKYnHHjx2JECF61QwzxTikLaQ2w-6A5tOO0=',
  
      PPrice: 90,
    },
  ];
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>The Fastest</h2>
        <h2>
          Delivery in <span>Your</span>
        </h2>
        <h2>
          <span>City</span>
        </h2>
        <p>
          Choose from a wide range of cuisines and categories for food delivery.
          Get fresh home delivered food at your doorstep from FreshMenu. Order
          food online from FreshMenu.
        </p>
      </div>

      <div className="homeprodect">
        {homeProdect.map((prodect) => {
          return (
            <HomeProdect
              Pname={prodect.Pname}
              PDetail={prodect.PDetail}
              PPrice={prodect.PPrice}
              PImg={prodect.PImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
