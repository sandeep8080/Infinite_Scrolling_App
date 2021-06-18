import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(0);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    getCardDataAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Logic for infinite Scrolling
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight)
      return;
    console.log('Fetch more list items!');
    setPage(prevState => prevState + 1);
    setFetching(true);
  };

  useEffect(() => {
    if (!fetching) return;
    getCardDataAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  const getCardDataAPI = () => {
    console.log('app', page);
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`).
      then(async response => {
        try {
          const { data } = await response.json();
          setCardData(prevState => [...prevState, ...data]);
          setFetching(false);
        } catch (error) {
          console.log(error);
        }
      });
  };
  // console.log(cardData, page);
  return (
    < div className="App" >
      <header className="App-header">
        Cards App
      </header>
      <main className='cards'>
        <div className='cards-containers'>
          {cardData.map((obj, index) => <Card key={index} {...obj} />
          )}
        </div>
      </main>
    </div >
  );
}

export default App;
