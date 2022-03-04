import SearchIcon from '@material-ui/icons/Search';
import { Input, SearchContainer } from './styledComponents';

const SearchForm = () => {

    const handle = (evt) => {
        if (evt.keyCode === 32) evt.preventDefault()
        console.log(evt)
    }

    return (<>
    <SearchContainer>
     <Input onKeyDown={handle}/>
     
     <SearchIcon />
     </SearchContainer>
    </>);
}


export default SearchForm;