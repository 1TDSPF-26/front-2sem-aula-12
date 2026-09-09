import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ObservadorDeRota() {
  const location = useLocation();

  useEffect(() => {
    console.log(`Rota acessada: ${location.pathname}`);
    document.title = `Aplicação | ${location.pathname}`;
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}