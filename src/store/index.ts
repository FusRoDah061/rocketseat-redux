import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

// A store estará disponível para todos os componentes React.
// Será criada uma única vez na aplicação.
// O parâmetros da função createStore representa o estado inicial, igual ao useState
const store = createStore(rootReducer);

export default store;
