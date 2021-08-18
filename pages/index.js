import react, { useState, useEffect } from 'react';
import RankItem from '../componentes/RankItem';
import dados from './dados.json';
import styles from './index.module.css';

export default function Home() {

     const [list, setList] = useState(dados);
     const [count, setCount] = useState (0);

     useEffect (() => {
       setCount(count + 1);
     }, [list]);

     function handleFilterByGold(){
       const filterList = [...dados].filter(item => item.GoldMedals > 0);
       setList(filterList);
     }

     function handleFilterBySilver(){
      const filterList = [...dados].filter(item => item.SilverMedals > 0);
      setList(filterList);
    }

    function handleFilterByBronze(){
      const filterList = [...dados].filter(item => item.BronzeMedals > 0);
      setList(filterList);
    }

     function handleClearFilter(){
       setList(dados);
     }

     function handleSortByGoldMedals (){
       const sortedList = [...list].sort((a, b) => a.GoldMedals - b.GoldMedals);
       setList(sortedList);
     }

     function handleSortBySilverMedals (){
      const sortedList = [...list].sort((a, b) => a.SilverMedals - b.SilverMedals);
      setList(sortedList);
    }

    function handleSortByBronzeMedals (){
      const sortedList = [...list].sort((a, b) => a.BronzeMedals - b.BronzeMedals);
      setList(sortedList);
    }

  
     
  return (
    <div>
      <h1>Quadro de medalhas - Tokio 2020 </h1>
      <div>
        <button onClick={handleFilterByGold}>Somente com Ouro</button>
        <button onClick={handleFilterBySilver}>Somente com Prata</button>
        <button onClick={handleFilterByBronze}>Somente com Bronze </button>
        <button onClick={handleClearFilter}>Todos</button>
         </div>
      <div>Resultado: {list.length} itens ({count})</div>
      <div>
        <div className={styles.header}>
          <div>#</div>
          <div>Time</div>
          <div onClick={handleSortByGoldMedals}>Ouro</div>
          <div onClick={handleSortBySilverMedals}>Prata</div>
          <div onClick={handleSortByBronzeMedals}>Bronze</div>
          <div>Total</div>
        </div>
        {list.map(item => {
          return <RankItem item={item} />;
        })}
      </div>
    </div>
  );
}
