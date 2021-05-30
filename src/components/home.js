import  React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicNoneIcon from '@material-ui/icons/MicNone';
// import { Search } from "@material-ui/core"


const Home =(props) =>{
    const [state,setState] = React.useState('');

    const handleChange = (e) =>{
        setState(e.target.value)
    }
    const handleSubmit = (e) =>{
            props.history.push({pathname: '/search',state})
    }
    return(
        <div className="home">
            <div className="home_container">
                <div className="home_logo">
                    <img src="/img/googlelogo.png" alt="logo"/>
                </div>
                <form className="home_form" onSubmit={handleSubmit}>
                <input type="text" className="home_input" onChange={handleChange} value={state}  />
                    <div className="home_group">
                        <input type="submit" className="home_btn1" value="Tìm trên Google" />
                        <input type="submit" className="home_btn2" value="Xem trang đầu tiên tìm được" />
                    </div>
                    <SearchIcon className="search_icon"/>
                    <MicNoneIcon className="microphone_icon" />
                </form>
            </div>
        </div>
    )
}

export default Home;