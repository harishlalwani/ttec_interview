import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [vanityNumbers, setVanityNumbers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVanityNumbers = async () => {
            try {
                axios.defaults.headers.get['Content-Type'] ='application/json';
                const response = await axios.get('https://qc4vn5unki.execute-api.us-east-1.amazonaws.com/default/fetchLastCallers');
                console.log('response', response);
                setVanityNumbers(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchVanityNumbers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <h1>Last 5 Callers' Vanity Numbers</h1>
            <ul>
                {vanityNumbers.map((caller, index) => (
                    <li key={index}>
                        <strong>Caller:</strong> {caller.phoneNumber} <br />
                        <strong>Vanity Numbers:</strong> {caller.vanityNumbers.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
