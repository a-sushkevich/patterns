function Tabs({ children }) {
  const [active, setActive] = React.useState(0);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
}

Tabs.Panel = function Panel({ index, children }) {
  const { active } = React.useContext(TabsContext);
  return active === index ? children : null;
};
