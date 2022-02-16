class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
          name="Elton"
          hobbies={["swimming", "reading", "cleaning"]}
          phone="326-435-5466"
        />

        <Friend
          name="Johnny"
          hobbies={["cooking", "running", "knitting"]}
          phone="516-974-5445"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
