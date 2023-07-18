import CountryCard from './CountryCard';

async function getData() {
  const res = await fetch(`https://api.sampleapis.com/countries/countries`)
  return res.json();
}

export default async function CountryList() {
  const allCountries = await getData();

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {allCountries.map(country => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </section>
  )
          }
