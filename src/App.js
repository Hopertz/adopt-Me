import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Detail';
import { StrictMode, useState } from 'react';
import ThemeContext from './ThemeContext';

const App = () => {
    const theme = useState('yellow');
    return (
        <StrictMode>
            {' '}
            <ThemeContext.Provider value={theme}>
                <div>
                    <BrowserRouter>
                        <header>
                            <Link to="/">Adopt Me!</Link>
                        </header>

                        <Routes>
                            <Route path="/details/:id" element={<Details />} />
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </BrowserRouter>
                    ;
                </div>
            </ThemeContext.Provider>
        </StrictMode>
    );
};

// const App = () => {
//     return React.createElement('div', {}, [
//         React.createElement('h1', {}, 'Adopt Me!'),
//         React.createElement(Pet, {
//             name: 'Luna',
//             animal: 'Dog',
//             breed: 'Havanese',
//         }),

//         React.createElement(Pet, {
//             name: 'Pepper',
//             animal: 'Bird',
//             breed: 'Cockatiel',
//         }),
//         React.createElement(Pet, {
//             name: 'Doink',
//             animal: 'Cat',
//             breed: 'Mix',
//         }),
//     ])
// }

render(<App />, document.getElementById('root'));
