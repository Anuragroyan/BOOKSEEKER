import React, {useState} from 'react';
import './Catalog.css';
import JSONDATA from './Cartdata.json';

const Catalog = () => {
    const [ serachTerm, setSearchTerm ] = useState("");
    return(
        <>
        <h2 className="top"> Catalog</h2>
        <div className="search">
            <input type="text" 
            placeholder="Search Book Name ..."
            onChange={(e) => {
                setSearchTerm(e.target.value);
            }} />
             {JSONDATA.filter((val) => {
                if (serachTerm == "") {
                    return val
                } else if (val.title.toLowerCase().includes(serachTerm.toLowerCase())) {
                    return val
                }
             }).map((val,key) => {
                return (
                    <div  className="user"  key={key}>
                        <p className="values">{val.title} || {val.description} || Rs{val.price}</p>
                    </div>
                );
             })}
        </div><br/>
        </>
    );
};

export default Catalog;