import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  
function App() {
    return (
        <div className='container'>
           <Header/>
           <Menu/>
           <Footer/>
        </div>
    );
}

function Header(){

    return( 
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
    );
}
function Menu(){
  const pizzas = pizzaData.length;

  return (
  <main className='menu'>
    <h2>~ Our menu ~</h2>
    {pizzas>0 && (
      <React.Fragment key={'dhoni'}>
      
          <p>Pizza is unarguably one of the most common and popular available options when it comes to comfort food. But are all pizzas created the same? Well, certainly not. The taste, texture, and quality vary significantly from one pizza place to another.</p>

        <ul className='pizzas'>
          {
            pizzaData.map(pizza => <Pizza props={pizza} key={pizza.name}/> )
          }
        </ul>
      </React.Fragment>
      )
    }
    
  </main>
  );
}

function Pizza({props}) {

  return (
      <li className={`pizza ${props.soldOut ? 'sold-out' : ''}`}>
         <img src={props.photoName} alt={props.name}/>
         <div>
          <h3>{props.name} </h3>
          <p>{props.ingredients}</p>
          <span>{props.soldOut?'SOLD OUT' :"$"+ props.price}</span>
         </div>
      </li>
  )
}

function Timer(){
  const [time,setTime] = useState(new Date().toLocaleTimeString());
  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000)
  },[])
  return(
    <b>{time} </b>
  )
}

function Footer(){
    
    const hour = new Date().getHours();
    const isOpen = hour >= 8 && hour <= 22;

    
    return (
      <footer className='footer'>
      {
        isOpen && (
          <div className="order">
            <p>We're open between 10 am to 11:00 pm. Come visit us or order online.</p>
            <button className='btn'>Order</button>
            <Timer/>
          </div>
        )
      }
      </footer>
      )
    // true && execute
    // false && not render
   // return React.createElement("footer",null,"We are currently open!")
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>);
