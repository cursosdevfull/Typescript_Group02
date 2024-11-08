export type TData = Data[];

export type Data = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

async function fetchData() {
  const data: Awaited<TData> = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((response) => response.json());
  console.log(data[0].thumbnailUrl);
}

fetchData();