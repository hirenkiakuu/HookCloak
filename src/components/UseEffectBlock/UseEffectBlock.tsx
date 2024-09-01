import { useEffect, useState } from 'react';
import HookBlockContentsWrapper from '../HookBlockContentsWrapper/HookBlockContentsWrapper';
import styles from './UseEffectBlock.module.css';

const title = 'useEffect() Hook';
const description =
  'Хук управляет поведением компонента при каких-либо изменениях указанных в зависимостях';

const UseEffectBlock = () => {
  const [redState, setRedState] = useState<number>();
  const [greenState, setGreenState] = useState<number>();

  const [blueState, setBlueState] = useState<number>();

  const [blockStyle, setBlockStyle] = useState({
    height: '45px',
    backgroundColor: 'rgb(255,255, 255)',
    color: 'black',
    padding: '10px',
  });

  const block = <div style={blockStyle}>Данный блок будет заререндерен</div>;

  useEffect(() => {
    setBlockStyle({
      ...blockStyle,
      backgroundColor: `rgb(${redState}, ${greenState}, ${blueState})`,
    });
  }, [redState, greenState, blueState]);

  const generateRandomColor = () => {
    setRedState(Math.floor(Math.random() * 255));
    setGreenState(Math.floor(Math.random() * 255));
    setBlueState(Math.floor(Math.random() * 255));
  };

  return (
    <>
      <HookBlockContentsWrapper title={title} description={description}>
        <div>
          <button onClick={generateRandomColor}>
            click to generate random background color
          </button>
          {block}
        </div>
      </HookBlockContentsWrapper>
    </>
  );
};

export default UseEffectBlock;
