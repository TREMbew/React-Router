import {MovieCard} from './MovieCard';
import {AddMovie} from './AddMovie';

export const MovieList = ({animelist, setanime, props}) => {
    const handleOk = (addTerm) => {
        setanime([...animelist, addTerm]);
    };
    console.log(props);
    return (
        <div>
            <AddMovie onOk={handleOk}/>
            <div className='anime-container'>
                {animelist.map((el,i) => (
                    <MovieCard key={i} item={el}/>
                ))}
            </div>        
        </div>
    );
}