import react, { useState } from 'react';
import RankItem from '../componentes/RankItem';
import dados from './dados.json';
import styles from './index.module.css';

export default function Home() {

     const [list, setList] = useState(dados);

     function handleFilterByGold(){
       const filterList = [...list].filter(item => item.GoldMedals > 0);
       setList(filterList);
     }

     function handleFilterBySilver(){
      const filterList = [...list].filter(item => item.SilverMedals > 0);
      setList(filterList);
    }

    function handleFilterByBronze(){
      const filterList = [...list].filter(item => item.BronzeMedals > 0);
      setList(filterList);
    }

     function handleClearFilter(){
       setList(dados);
     }
     
  return (
    <div>
      <h1>Quadro de medalhas - Tokio 2020 </h1>
      <div>
        <button onClick={handleFilterByGold}>Somente com Ouro</button>
        <button onClick={handleFilterBySilver}>Somente com Prata</button>
        <button onClick={handleFilterByBronze}>Somente com Bronze</button>
        <button onClick={handleClearFilter}>Todos</button>
         </div>
      <div>Resultado: {list.length} itens</div>
      <div>
        <div className={styles.header}>
          <div>#</div>
          <div>Time</div>
          <div>Ouro</div>
          <div>Prata</div>
          <div>Bronze</div>
          <div>Total</div>
        </div>
        {list.map(item => {
          return <RankItem item={item} />;
        })}
      </div>
    </div>
  );
}
