import React from "react";
import MDBSortable from "sortable";
import "./index.css";

const Item = props => `Item ${props.title}`;
//console.log(Item);

//var items2 = items;

//function Dashboard() {

class Dashboard extends React.Component {
  state = {
    items: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  };

  // var items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  onSortEndHandler = (obj, err) => {
    var indn = obj.newIndex;
    var indv = obj.oldIndex;
    var itemn = this.state.items[indn];
    var itemv = this.state.items[indv];
    //console.log(itemn);
    //console.log(itemv);
    var newarray = [...this.state.items];
    newarray[indn] = itemv;
    newarray[indv] = itemn;
    this.setState({
      items: newarray
    });
    console.log(this.state.items);

    //console.log(
    //    'this.state.items
    //);
  };
  //<Item key={index} title={item} />;
  render() {
    const renderedItems = this.state.items.map((item, index) => {
      return `Item ${item}`;
    });

    return (
      <div>
        <MDBSortable
          axis="xy"
          items={renderedItems}
          itemClassName="SortableItem"
          listClassName="SortableList"
          onSortOver={(obj, e) => this.onSortEndHandler(obj, e)}
          onClick={() => alert("Hugo")}
        />
      </div>
    );
  }
}

export default Dashboard;
