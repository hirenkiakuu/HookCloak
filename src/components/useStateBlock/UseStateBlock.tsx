import HookBlockContentsWrapper from '../HookBlockContentsWrapper/HookBlockContentsWrapper';
import { useState } from 'react';
import styles from './UseStateBlock.module.css';

const title = 'useState() Hook';
const description = `Используется для хранения локального состояния компонента. 
Синтаксис: [value, setValue] = useState()`;

const UseStateBlock = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = (diff: number) => {
    setCounter((prev) => prev + diff);
  };

  return (
    <HookBlockContentsWrapper title={title} description={description}>
      <div style={{ display: 'flex', gap: '5px' }}>
        <p>counter is {counter}</p>
        <button onClick={() => increment(1)}>increment +</button>
        <button onClick={() => increment(-1)}>decrement -</button>
      </div>
    </HookBlockContentsWrapper>
  );
};

export default UseStateBlock;
