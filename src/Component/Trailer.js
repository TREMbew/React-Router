import React from 'react';
import {Link} from 'react-router-dom';
import {Data} from '../data';

const Trailer = ({data}) => {
    console.log(data);
    let anime = Data.find(el => el.title === data.match.params.id);
    console.log(anime);
    let descriptionData;
    let trailerData;
    if(anime)
        descriptionData = <><p>{anime.description}</p></>
        trailerData = <><iframe title={anime.title} width="560" height="315" src={anime.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></>
    return (
        <div className='anime-page' style={{textAlign:'center'}}>
            <Link to='/'>
            <button style={{width:200, height:50}}>Go To Home</button>
            </Link>
            <div className='anime-trailer'>
                <div style={{color:'white', fontSize:20, fontWeight:'600', borderRadius:'4px solid black'}}>
                    {descriptionData}
                    <br></br>
                    {trailerData}
                </div>
            </div>
        </div>
    )
}

export default Trailer
