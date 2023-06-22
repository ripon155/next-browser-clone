import WebSearchResults from "@/components/WebSearchResults";

async function WebSearch({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.search}`
  );
  if (!response.ok) {
    throw new Error("Something went wrong !");
  }

  const data = await response.json();
  const results = data.items;

  console.log(searchParams.search);
  // console.log(results);
  let renderData;
  if (results.length > 0) {
    renderData = results.map((result, index) => {
      return <p key={index}>{result.title}</p>;
    });
  } else {
    renderData = <h1>No data found</h1>;
  }

  return <div>{results && <WebSearchResults results={data} />}</div>;
}

export default WebSearch;
