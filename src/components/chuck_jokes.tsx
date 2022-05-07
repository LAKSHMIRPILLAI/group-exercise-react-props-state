// An alternative way of declaring a component is to write it as a function which
// returns a JSX.Element 


import Joke from "../joke";
const ChuckJokes: React.FC<Joke> = ({id,joke}) => (
    <div>
        <p>{id} : {joke}</p>
    </div>
);

export default ChuckJokes;
