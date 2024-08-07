const res = fetch("http://localhost:3004/skills")
  .then((res) => res.json())
  .then((data) => console.log(data[0].lang + " " + data[0].percentage));
// const res = fetch("http://localhost:3004/user")
//   .then((res) => res.json()) // Ensure you return the result of res.json()
//   .then((data) => console.log(data))
//   .catch((error) => console.error('Error fetching data:', error)); // Optional: handle errors
