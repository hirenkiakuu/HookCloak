import { useRef, useState } from 'react';
import styles from './UseRefBlock.module.css';
import HookBlockContentsWrapper from '../HookBlockContentsWrapper/HookBlockContentsWrapper';

const title = 'useRef() Hook';
const description =
  'Хук позволяет сохранять ссылку на обьект в DOM или хранить значение, при изменении которого не происходит ререндер компонента.';

const UseRefBlock = () => {
  const [toggleState, setToggleState] = useState<boolean>();
  const btnNode = useRef<HTMLButtonElement | null>(null);

  const toggleRefClick = () => {
    if (btnNode.current) {
      if (toggleState) {
        btnNode.current.style.backgroundColor = 'red';
        btnNode.current.style.color = 'white';
      } else {
        btnNode.current.style.backgroundColor = 'purple';
        btnNode.current.style.color = 'black';
      }

      setToggleState((prev) => !prev);
    }
  };

  const changeRefNodeText = () => {
    if (btnNode.current) {
      btnNode.current.innerHTML = `Text has changed`;
    }
  };

  return (
    <>
      <HookBlockContentsWrapper title={title} description={description}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={toggleRefClick}>click to see</button>
          <button onClick={changeRefNodeText} ref={btnNode}>
            button represents ref node
          </button>
        </div>
      </HookBlockContentsWrapper>
    </>
  );
};

export default UseRefBlock;
