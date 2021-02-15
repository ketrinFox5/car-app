import Header from "./components/Header";
import {Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import carsDataJson from "./data.json";
import CarsList from "./components/CarsList";


function App() {

  const [cars, setCars] = useState({
    activeCars: [],
    doneCars: []
  });
  useEffect(() => {
    const carsData = localStorage.getItem('cars');
    if (carsData === null) {
      const api =  new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(carsDataJson);
        }, 1000);
      });
    
      api.then(carsData => {
        setCars(carsData);
        localStorage.setItem('cars', JSON.stringify(carsData));
      });
    } else {
      setCars(JSON.parse(carsData));
    }
  }, [])

  const handleAddCar = data => {
    const newActiveCars = [...cars.activeCars, {...data, isCompleted: false}];
    const carsData = {...cars, activeCars: newActiveCars}
    setCars(carsData);
    localStorage.setItem('cars', JSON.stringify(carsData));
  }

  const handleComplete = carNumber => {
    const currentCar = cars.activeCars.find(car => car.carNumber === carNumber);
    const newActiveCars = cars.activeCars.filter(car => car.carNumber !== currentCar.carNumber);
    const newDoneCars = [...cars.doneCars, {...currentCar, isCompleted: true}];
    const carsData = {activeCars: newActiveCars, doneCars: newDoneCars}
    setCars(carsData);
    localStorage.setItem('cars', JSON.stringify(carsData));
  }
 

  return (
    <div className="App">
      <Header handleAddCar={handleAddCar}/>
      <Container>
      <Route path='/active-cars' component={props => <CarsList {...props} content={cars.activeCars} handleComplete={handleComplete} title={'Список машин, записанных на ТО'}/>}/>
      <Route path='/done-cars' component={ props => <CarsList {...props} content={cars.doneCars} title={'Cписок завершенных ТО'}/>}/>
      </Container>
    </div>
  );
}

export default App;
