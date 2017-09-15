 import React from 'react';
 import {
     render
 } from 'react-dom';
   import 'bootstrap/dist/css/bootstrap.css';

 /**
  * Building a searchable product data table
    using React.
    1.start with Mock data
  */
 //1.Mock DATA
 const PRODUCTS = [{
         category: "Sporting Goods",
         price: "$49.99",
         stocked: true,
         name: "Football"
     },
     {
         category: "Sporting Goods",
         price: "$9.99",
         stocked: true,
         name: "Baseball"
     },
     {
         category: "Sporting Goods",
         price: "$29.99",
         stocked: false,
         name: "Basketball"
     },
     {
         category: "Electronics",
         price: "$99.99",
         stocked: true,
         name: "iPod Touch"
     },
     {
         category: "Electronics",
         price: "$399.99",
         stocked: false,
         name: "iPhone 5"
     },
     {
         category: "Electronics",
         price: "$199.99",
         stocked: true,
         name: "Nexus 7"
     }
 ];
//Step 2: Break The UI Into A Component Hierarchy
//container -Component
 const FilterableProductTable = (props) => {
    return (
        <div className="container">
            <div className="page-header">
                <h1>Product Search App
                   <small>Easy!to Use</small>
             </h1>
            </div>    
            <div className="jumbotron">
                <div className="container">
                    <h1>Welcome to landing page!</h1>
                    <p>This is an example for jumbotron.</p>
                    <p><a className="btn btn-primary btn-lg" role="button">
                        Learn more</a>
                    </p>
                </div>
            </div>
           <SearchBar />
           <ProductTable products={props.products} />  
        </div>    
    );

}
const SearchBar = () => {
    return (
        <div className="row">
            <div class="col-md-6">
     <form role="form">
        <div className="form-group">            
           <input type="text" className="form-control" placeholder="Search..." />
        </div>   
         <div className="checkbox">
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </div>
            
              </form>   
            </div>
        </div>
    );
}
const ProductTable = (props)=> {

    var rows = [];
    var lastCategory = null;
    props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );

    
}
const ProductCategoryRow = (props) => {
        return <tr><th colSpan="2">{props.category}</th></tr>;

}
const ProductRow = (props) => {

    var name = props.product.stocked ?
      props.product.name :
      <span style={{color: 'red'}}>
        {props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{props.product.price}</td>
      </tr>
    );
  }
    

render(<FilterableProductTable products={PRODUCTS}/>, root);