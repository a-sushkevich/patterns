function useFetch(url) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, [url]);
  return data;
}
