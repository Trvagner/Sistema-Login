import React from 'react'
import GlobalStyle from './styles/global'
import { AuthProvider } from "./contexts/auth";
import RoutesApp from './routes'
import Banner from './componentes/Banner';
import Rodape from './componentes/Rodape';

const App = () => {
  return (
    <AuthProvider>
      <Banner/>
      <RoutesApp/>
      <GlobalStyle/>
      <Rodape/>
     </AuthProvider>
  )
}

export default App