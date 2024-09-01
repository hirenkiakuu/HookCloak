import styles from './HooksPage.module.css';
// import HookBlock from '../components/HookBlock/HookBlock';
import UseStateBlock from '../components/useStateBlock/UseStateBlock';
import UseRefBlock from '../components/useRefBlock/UseRefBlock';
import UseContextBlock from '../components/UseContextBlock/UseContextBlock';
import UseEffectBlock from '../components/UseEffectBlock/UseEffectBlock';

const HooksPage = () => {
  return (
    <>
      <h1 className={styles['heading']}>
        React hooks and other mechanisms interactive guide
      </h1>
      <div className={styles['hooks-container']}>
        <UseStateBlock />
        <UseRefBlock />
        <UseContextBlock />
        <UseEffectBlock />
        {/* useReducer - форма + forwardRef*/}
        {/* useContext */}
        {/* useRef */}
        {/* redux}
        {/* модалка */
        /* i18n?
        }


        {/*Здесь будут блоки с компонентами, по сути это контейнер*/}
        {/* Блок с примером работы useEffect */}
        {/* Внизу форма для обратной связи */}
        {/* Так же нужна будет страница с другими элементами, например со списком с фильтрами*/}
        {/* Кнопка с модалкой (желательно портал)*/}
        {/* Блок с асинхронными операциями, может быть redux*/}
        {/* Сделть монорепозиторий для бекенда? */}
        {/* На бэке эндопинты простые с возвратом моковых данных */}
        {/* Параметризированные запросы?*/}
      </div>
    </>
  );
};

export default HooksPage;
