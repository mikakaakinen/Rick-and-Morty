import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Characters from './components/Characters';
import EpisodeInfo from './components/EpisodeInfo';
import Footer from './components/Footer';
import Header from './components/Header';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div
                    style={{
                        minHeight: 'calc(100vh - 80px)',
                        backgroundColor: '#e8e8e8',
                        paddingBottom: '35px',
                    }}
                >
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Characters} />
                        <Route
                            exact
                            path="/episode/:id"
                            component={EpisodeInfo}
                        />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </ApolloProvider>
    );
}

export default App;
