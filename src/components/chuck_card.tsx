import ChuckImage from  '../assets/chuck_norris.jpg';


const ChuckCard: React.FC<{chuckGreeting:string}> = ({chuckGreeting}) =>

        <>
            <h2>{chuckGreeting}</h2>

            <img src={ChuckImage} alt='A handsome man' /> 
        </>


export default ChuckCard;