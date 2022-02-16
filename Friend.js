class Friend extends React.Component {
  render() {
    const { name, hobbies, phone } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h4>Phone Number: {phone}</h4>
        <h4>Hobbies</h4>
        <ul>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    );
  }
}
