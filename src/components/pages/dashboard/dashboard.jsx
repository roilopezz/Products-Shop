import Products from "../main/products";
import Cart from "../main/cart";
import { Switch, Route } from "react-router-dom";
import { CartContexts } from "../../../contexts/contexCart";
import React, { Component, useEffect } from "react";
import SideNav from "../main/sideNav";

const Dashboard = () => {
  useEffect(() => {}, [window.scrollTo(0, 0)]);

  return (
    <>
      <div className="row">
        <SideNav />
        <main className=" ms-sm-auto col-xl-11 col-10 px-md-5 ">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>
          <div className="test">
            <div className="row">
              {/* <Products /> */}
              <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/cart" component={Cart} />
              </Switch>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;

// class Dashboard extends Component {
//   static contextType = CartContexts;

//   componentDidMount() {
//     window.scrollTo(0, 0);
//   }

//   render() {
//     return (
//       <>
//         <div className="row">
//           <SideNav />
//           <main className=" ms-sm-auto col-xl-11 col-10 px-md-5 ">
//             <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h1 className="h2">Dashboard</h1>
//             </div>
//             <div className="test">
//               <div className="row">
//                 <Switch>
//                   <Route exact path="/cart" component={Cart} />
//                   <Route exact path="/" component={Products} />
//                 </Switch>
//               </div>
//             </div>
//           </main>
//         </div>
//       </>
//     );
//   }
// }

// export default Dashboard;
