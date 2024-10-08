// import styles from './UseContextBlock.module.css';
import HookBlockContentsWrapper from '../HookBlockContentsWrapper/HookBlockContentsWrapper';
import { ThemeContext } from '../../context/theme.context';
import { useContext } from 'react';

const title = 'useContext() Hook';
const description =
  'Хук хранит в себе неперсистентные данные, которые можно передать по дереву любому компоненту заранее обернув ветки в провайдер контекста.';
const externalLink = 'https://react.dev/reference/react/useContext';

const UseContextBlock = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <>
      <HookBlockContentsWrapper
        title={title}
        description={description}
        externalLink={externalLink}
      >
        <div style={{ display: 'flex', gap: '5px' }}>
          <button onClick={() => setTheme('default')}>Темная тема</button>
          <button onClick={() => setTheme('dark')}>Светлая тема</button>
        </div>
      </HookBlockContentsWrapper>
    </>
  );
};

export default UseContextBlock;
