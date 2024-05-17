   
// import React, { useState } from 'react';
// import axios from 'axios';
// import './CapsuleSearch.css';

// const CapsuleSearch = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState('');

//   const handleSearch = async () => {
//     setError('');
//     try {
//       const response = await axios.get('https://backend.cappsule.co.in/api/v1/new_search', {
//         params: {
//           q: query,
//           pharmacyIds: '1,2,3'
//         },
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       setResults(response.data);
//     } catch (error) {
//       setError('Error fetching data. Please try again later.');
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="capsule-search">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter medicine name"
//       />
//       <button onClick={handleSearch}>Search</button>
//       {error && <p className="error">{error}</p>}
//       <div className="results">
//         {results.length > 0 ? (
//           results.map((result, index) => (
//             <div key={index} className="result-item">
//               <p><strong>Salt:</strong> {result.salt}</p>
//               <p><strong>Form:</strong> {result.form}</p>
//               <p><strong>Strength:</strong> {result.strength}</p>
//               <p><strong>Packing:</strong> {result.packing}</p>
//               <p><strong>Price:</strong> {result.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No results found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CapsuleSearch;

import React, { useState } from 'react';
import axios from 'axios';
import './CapsuleSearch.css';

const CapsuleSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setResults([]);
    try {
      const response = await axios.get('https://backend.cappsule.co.in/api/v1/new_search', {
        params: {
          q: query,
          pharmacyIds: '1,2,3'
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data && response.data.length > 0) {
        setResults(response.data);
        console.log(response.data);
      } else {
        setError('No results found');
      }
    } catch (error) {
      setError('Error fetching data. Please try again later.');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="capsule-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter medicine name"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
      <div className="results">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="result-item">
              <p><strong>Salt:</strong> {result.salt}</p>
              <p><strong>Form:</strong> {result.form}</p>
              <p><strong>Strength:</strong> {result.strength}</p>
              <p><strong>Packing:</strong> {result.packing}</p>
              <p><strong>Price:</strong> {result.price}</p>
            </div>
          ))
        ) : (
          !error && <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default CapsuleSearch;
