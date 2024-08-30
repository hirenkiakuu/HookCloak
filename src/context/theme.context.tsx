import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
} from 'react';

interface ThemeContextProviderProps {
  children: ReactNode;
}

type ThemeContextType = {
  theme: 'default' | 'dark';
  setTheme: Dispatch<SetStateAction<'default' | 'dark'>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'default',
  setTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<'default' | 'dark'>('default');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
