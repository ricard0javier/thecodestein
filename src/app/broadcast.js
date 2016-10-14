class Broadcast extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "aaa",
      alerts: new Set()
    };
    this.client = deepstream('localhost:6020').login();

    this.handleEmail = this.handleEmail.bind(this);
    this.handleRecordChange = this.handleRecordChange.bind(this);
    this.publishRecordChange = throttle(this.publishRecordChange, 1000);
    this.id = Math.floor(Math.random() * 1000);
  }

  componentDidMount() {
    this.broadcastRecord = this.client.record.getRecord('form');
    this.broadcastRecord.subscribe('editedBy', this.handleRecordChange);
  }
  // ============ UTILITIES ============

  handleEmail(event) {
    this.setState({email: event.target.value});
    this.publishRecordChange({id: this.id}, this.broadcastRecord);
  }

  publishRecordChange(value, record) {
    record.set('editedBy', value);
  }

  handleRecordChange(value) {
    this.setState({alerts: this.state.alerts.add(value.id)});
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

/**
 * Execute a function given a delay time
 *
 * @param {type} func
 * @param {type} wait
 * @param {type} immediate
 * @returns {Function}
 */
function debounce(func, wait, immediate) {
  let timeout = null;

  return () => {
    const context = this;
    const args = arguments;

    const later = () => {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
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
