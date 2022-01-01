import './App.css';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Punklist from './Components/Punklist';
import Main from './Components/Main';
import savedData from 'C:/Users/india/nft-cryptopunk/src/Assests/data/data.json'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get 
      ('https://testnets-api.opensea.io/assets?asset_contract_address=0x3FD39cB0fE58318931BBd506968186F6891f913D&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])
  return (
    <div className='app'>
      <Header />
      <Main punkListData={savedData} selectedPunk={selectedPunk}/>
      <Punklist 
        punkListData={savedData} 
        setSelectedPunk={setSelectedPunk} />
      </div>
  )
}

export default App;
