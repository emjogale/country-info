import Weather from './Weather';
const Country = ({ country, weather }) => {
  const languages = Object.values(country.languages);
  const flag = country.flags.png;

  return (
    <div style={{ maxWidth: '90%' }}>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>

      <h3>languages:</h3>
      <ul>
        {languages.map((language) => (
          <li key={language}> {language}</li>
        ))}
      </ul>

      <div>
        <img src={flag} alt="flag" style={{ maxWidth: '90%' }}></img>
      </div>

      <Weather country={country} weather={weather} />
    </div>
  );
};

export default Country;
