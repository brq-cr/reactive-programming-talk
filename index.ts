import './style.css';

import { of, Observable, fromEvent, count } from 'rxjs';
import { map } from 'rxjs/operators';

// Imperavive vs declarative
/*
function addToCounter() {
  const counter = document.getElementById('counter');
  const sum = parseInt(counter.innerHTML) + 1;
  counter.innerHTML = sum.toString();
}

function load() {
  const box = document.getElementById('example');
  console.log('asad');
  box.addEventListener('click', addToCounter, false);
}

load();
*/
const box = document.getElementById('example');
fromEvent(box, 'click')
  .pipe(map(() => 1))
  .subscribe((x) => console.log(x));

/*

// Hot vs Cold observables
const observable = Observable.create((observer) => {
  const random = Math.random()
  observer.next(random);
});

// subscription 1
observable.subscribe((data) => {
  console.log(data);
});

// subscription 2
observable.subscribe((data) => {
  console.log(data); 
});

*/
