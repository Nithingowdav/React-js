const heading = React.createElement('div', { id: 'parent' }, [
     React.createElement('div', { id: 'child1' }, [ 
    React.createElement('h1', {}, 'Hello World!!'),
     React.createElement('p', {}, 'This is a paragraph'), 
     React.createElement('a', {href: 'https://www.google.com'}, 'Google')]),
     React.createElement('div', { id: 'child2' }, [ 
        React.createElement('h1', {}, 'Hello World!!'), 
        React.createElement('p', {}, 'This is a paragraph'),
]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);