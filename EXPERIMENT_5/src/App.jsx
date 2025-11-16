import React, { useState } from 'react';
import './App.css';

function App() {
const [languages, setLanguages] = useState([
{ name: 'Javascript', votes: 0 },
{ name: 'Python', votes: 0 },
{ name: 'Java', votes: 0 },
{ name: 'C#', votes: 0 }
]);

const voteForLanguage = (index) => {
const newLanguages = [...languages]; // Create a copy of the array
newLanguages[index].votes++;
setLanguages(newLanguages); // Update the state
};
return (
<div className="voting-app">
<h1>Vote for Your Favorite Language</h1>
{languages.map((language, index) => (
<div key={index} className="language-item">
<div className="votes">{language.votes}</div>
<div className="name">{language.name}</div>
<button onClick={() => voteForLanguage(index)}>Vote</button>
</div>
))}
</div>
);
}
export default App;