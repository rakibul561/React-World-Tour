import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Contries = () => {

    const [Countries, sesCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => sesCountries(data))
    }, [])


    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)
    }


    const handleVisitedFlags = flag => {
        const newVisitedFlag = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlag);
    }



    return (
        <div>
            <h3>Countries: {Countries.length} </h3>
            {/* visited country added  */}
            <div>
                <h4>visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">

                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
                  
            </div>

            {/* display country */}
            <div className="contry-container">
                {
                    Countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Contries;