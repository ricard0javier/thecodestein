class Broadcast extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      alerts: new Set()
    };

    this.client = deepstream('http://localhost:6040').login();
    this.id = Math.floor(Math.random() * 1000);

    this.handleEmail = this.handleEmail.bind(this);
    this.handleRecordChange = this.handleRecordChange.bind(this);

    this.throttledEventPublisher = throttle(this.eventPublisher, 1000);
  }

  componentDidMount() {
    this.broadcastRecord = this.client.record.getRecord('form');
    this.broadcastRecord.subscribe('editedBy', this.handleRecordChange);
  }
  // ============ UTILITIES ============

  handleEmail(event) {
    this.setState({email: event.target.value});
    this.throttledEventPublisher({id: this.id}, this.broadcastRecord);
  }

  eventPublisher(value, record) {
    record.set('editedBy', value);
  }

  handleRecordChange(value) {
    if (value.id !== this.id) {
      this.setState({alerts: this.state.alerts.add(value.id)});
    }
    setTimeout(this.cleanAlerts(this), 10000);
  }

  cleanAlerts(scope) {
    scope.setState({alerts: new Set()});
  }

  // ============ RENDER ============
  render() {
    return (
      <div className="container">
        <h2>Example form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleEmail}/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"/> Remember me</label>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        {Array.from(this.state.alerts).map((alert, index) => (
          <div><span key={index}>Alert: User '{alert}' is editing this form too</span><br/></div>
        ))}
      </div>
    );
  }

}

function throttle(callback, wait, context = this) {
  let timeout = null;
  let callbackArgs = null;

  const later = () => {
    callback.apply(context, callbackArgs);
    timeout = null;
  };

  return function () {
    if (!timeout) {
      callbackArgs = arguments;
      timeout = setTimeout(later, wait);
    }
  };
}
