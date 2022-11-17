import Header from './header/Header';
import Main from './main/Main';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [songs, setSongs] = useState([])
  const [input, setInput] = useState()

  useEffect(()=>{
    const options = {
      params: {query: input ? input : 'never+gonna+give+you+up', safesearch: 'false'},
      headers: {
      'X-RapidAPI-Key': 'dedde4f9d2msh69d9b563eabe128p19c240jsn0ef64e0dbe10',
      'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      }
    };
  
      axios.get('https://simple-youtube-search.p.rapidapi.com/search', options)
      .then(({ data }) => {
        setSongs(data)
        console.log(songs);
      }).catch(function (error) {
        console.error(error);
      });
  },[input])

  const handleSearch = ({ target }) => {
    setInput(target.value)
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch}/>
      <Main />
    </div>
  );
}

export default App;
