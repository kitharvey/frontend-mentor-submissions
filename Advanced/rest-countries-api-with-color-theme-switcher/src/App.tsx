import MainPage from './pages/MainPage'
import './scss/styles.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
