function DataFetcher({ render }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetchData().then(setData);
  }, []);
  return render(data);
}

<DataFetcher render={(data) => <div>{data}</div>} />;
