import  React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { key,cx } from '../API';

const Search = (props) =>{
    const goBack = () =>{
        props.history.push('/');
    }
    const [state,setState] = React.useState(props.location.state ?props.location.state: '');

    const handleChange =(e) =>{
        setState(e.target.value)
    }
    return(
        <div className="search">
            <div className="search_form">
                <div className="search_form_logo">
                    <img src="/img/googlelogo_search.png" alt="logo" onClick={goBack} />
                </div>
                <div className="search_form_input">
                <form className="home_form" >
                <input type="text" className="home_input" value={state} onChange={handleChange} />
                    <SearchIcon className="search_icon"/>
                    <MicNoneIcon className="microphone_icon" />
                </form>
                </div>
            </div>
        </div>
    )
}

export default Search;