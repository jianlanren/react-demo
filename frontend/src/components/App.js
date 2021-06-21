import React, { Component } from "react";
import { render } from "react-dom";
import Select from 'react-select';
import {Line} from 'react-chartjs-2';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectValue: "sh600031",
      loaded: false,
      placeholder: "Loading"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({selectValue: e.target.value});
  }

  componentDidMount() {
    fetch("api/stocks")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
    <div>
    <h1>Stock demo</h1>
      <select className="dropdown" onChange={this.handleChange}>
        {this.state.data.map(contact => {
            return(
            <option key={contact.stockId} value={contact.stockId}>
              {contact.stockName}
            </option>);
                }
                )
            }
        </select>
        <p>select stock id : {this.state.selectValue}</p>
        <h2> data table </h2>
        <Child callFromParent = {this.state.selectValue} />
      </div>
    );
  }
}


class Child extends Component{
    state = {data:[],
    url : this.props.callFromParent}

    componentWillReceiveProps(nextProps) {
    this.setState({ url: nextProps.callFromParent });
    }

    fetchData = () => {
        fetch('api/stocks/?stock_id='+ this.state.url)
        .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
        })
        .then(data => {
            this.setState(() => {
            return {
            data
            };
            });
         });
        }
    /*plotData = () => {fetch('api/stocks/?stock_id='+ this.state.url)
        .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
        })
        .then(data => {
            this.setState(() => {
            return {
            data
            };
            });
         });

         }*/

    render(){
    return(
    <div className="child">
        <button onClick={this.fetchData}>
        fetchData
        </button>
        <button onClick={this.plotData}>
        plotData
        </button>

        <p> Table of stockId: {this.props.callFromParent}</p>

        <table>
            <tbody>
            {this.state.data.map(contact => {
            return (
            <tr key={contact.date}>
                <td>{contact.date}---</td>
                <td>{contact.price}</td>
            </tr>
          );
        })}
        </tbody>
        </table>

      </div>
    );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);