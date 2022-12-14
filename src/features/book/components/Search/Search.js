
import {ReactSearchAutocomplete} from "react-search-autocomplete";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search(){
    const navigate = useNavigate();
    const [items, setItems]=useState([]);

    
    useEffect(()=>{
        fetch("book.json")
        .then((res) => res.json())
        .then((parsedJson) => {
          console.log(parsedJson);
          setItems(parsedJson);
        });
    },[])
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
        navigate("/book/"+item.title);
      }

      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.title}</span>
          </>
        )
      }

    return(
        <ReactSearchAutocomplete
            items={items}
            fuseOptions={{ keys: ["title"] }}
            onSelect={handleOnSelect}
            formatResult={formatResult}
            styling={{
               zIndex: '998',
                }}
          />
    );
}

export default Search;