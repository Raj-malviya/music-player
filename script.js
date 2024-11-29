// const fruits = ['apple','mango','orange','grapws']
// for (let i=0; i<fruits.length; i++) {
//   console.log(fruits[i]=i);
// }
// debugger
// for(let fruit of fruits){
//   console.log(fruit);
// }
// const letters = 'tilak malvuya'
// for(const letter of letters){
//   console.log(letter);
// }
// const person = {
//   name: 'tilak',
//   lastname: 'malciya',
//   age: 32,
//   phone: 78747397489,
//   city: 'bangalore'
// }
// // for(const key in person){
// //   console.log(key,':',person[key]);
// // }
// const personkeys = Object.entries(person)
// for(const key of personkeys){
//   console.log(key);
// }
// const personvalues = Object.entries(person)
// const fruits = ['apple','mango','orange','grapws']
// for(fruit of fruits){
//   console.log(fruit);
// }
// debugger
// fruits.map((fruit) => {
//   console.log(fruit);
// })

// fruits.forEach(abc)
// function abc(el){
//   console.log(el);
// }
// const months = ['jan','feb','mar','april','may']
// months.map((month,a)=>{
//   console.log(a+1,month);
//   return a
// })
// const months = ['january','febauary','mar','april','May','december']

// const flm = months.filter((month,a)=>{
//   console.log(month);
//   return a>=3
// })

// const students = [
//   {
//     name: 'akash',
//     age: 21
//   },
//   {
//     name: 'adarsh',
//     age: 17
//   },
//   {
//     name: 'amiir',
//     age: 21
//   },
//   {
//     name: 'akash',
//     age: 18
//   },
//   {
//     name: 'raman',
//     age: 23
//   },
//   {
//     name: 'nidhi',
//     age: 16
//   }
// ]

// const mastu = students.filter((student) => {
//   console.log(students.age);
// })

// const nums = [1,2,3]
//  const sum = nums.reduce((accmulator,current,i)=>{
//   // console.log(current);
//   // console.log(accmulator,current);
//   debugger
//   return accmulator + current
// },)

// const en = [2,6,9,8,6]
// const ram = en.every((num,i)=>{
//   return num%2===0
// })
// console.log(ram);
// function add(a=2,b=3){
//   let sum = 0
//   for(let i=0; i < arguments.length; i++){
//     sum = sum+arguments[i]
//   }
//  return sum
// // }
// function multiply(a,b=3){
//   return a*b
// }
// function die(sides){
//   if(sides === undefined){
//     sides = 4
//   }
//   return Math.floor(Math.random()*sides)+1
// }
// const num1 = [1,2,3,4,5]
// const num2 = [6,7,8,9,10]
// const myname = 'anurag'
// const user = {
//   name: 'tilak',
//   age: 21
// }
// const updated = {...user,city:'varanasi'}
// function add(){
//   let sum = 0
//   for(let i = 0; i<arguments.length; i++){
//     sum = sum + arguments[i]
//   }
//   return sum
// }
// const joinedarry = [...num1,...num2,...myname]

// const colors = ['red','green','yellow','pink','black']

// const user = {
//   name: 'krishna',
//   age: 32,
//   address: {
//     city: 'bangalore',
//     state: 'karnataka'
//   },
// }

// const colors2 = colors[1]
// const [] = colors
// const age = user.age
// const name = user.name
// const { name:username, age } = user
// const {address: {city}} = user
// const {2: colorss } = colors
// function intro({age,name}){
//   console.log(age,name);
// }
// intro(user)
// function print([a,b]){
//   console.log([a,b]);
// }
// print(colors)
// setTimeout(()=>{
//   location.reload()
// },2000)
// location.href = 'https://developer.mozilla.org/en-US/'
// let sum = 0
// for(let i=1; i<=5; i++){
//  sum = sum + i*i
//   }
//   console.log('the sum of squres is',sum);
// let n = 5
// let factorial = 1
// for(let i=1; i<=n; i++) {
//   factorial*= i;
// }
// console.log(factorial);
// let n = prompt('which table do you want')
// for(let i=1; i<=10; i++){
//   console.log(n + ' x ' + i + ' = ' + (n*i));
// }
// const names =  'krishna'
// for(let i=0; i<names.length; i++){
// console.log(names[i]);
// }
// const muname = ['ja','feb','mar','apr']
// const cp = muname.map((month,i)=>{
//   console.log(i,month);
//   return month.length >=3
// })
// const num = [1,2,3,4]
// const cp = num.map((x)=>{
//   console.log(x);
//   return x*2
// })
// const a = ['tilak']
// const cp = a.map((x)=>{
//   console.log(x);
//   return x.toUpperCase()
// })
// const a = [{ name: 'tilak',age: 23},
// { name: 'ila',age: 23},
// { name: 'wewak',age: 23}]
// const cp = a.map((x)=>{
//   console.log(x);
//   return x.name
// })
  // 
// const a = [[2,3,4],[5,2],[3,4,2,5,6]]  
// const cp = a.map((x)=>{
//   console.log(x);
//   return x.length
// })
// const a = [
//   {title: 'bhagvad geeta', author: 'hari', year: 1920},
//   {title: 'bhagvatam', author: 'govinda', year: 2012},
//   {title: 'chaitanya charitamrita', author: 'radha', year: 2010}
// ]
// const uy = a.map((y)=>{
//   console.log(y);
//   return {title: y.title, author: y.author}
// }) 
// const h1 = document.querySelector('h1')
// const container = document.querySelector('.container')
// const card = document.querySelector('.card')
// const firstimg = document.querySelector('img')

// for(let i = 2; i <= 100; i++){
//   const newcard = card.cloneNode()
//   newcard.innerText = i
//   container.appendChild(newcard)
// }

// for(let i = 2; i <= 900; i++){
// const newimg = firstimg.cloneNode()
// firstimg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
// container.appendChild(newimg)
// }

// const p = document.createElement('p')
// p.innerText = 'ram'
// p.classList.add('hari')
// p.id = 'hi'
// container.append(p)

// for(let i = 2; i <= 100; i++){
// const photo = document.createElement('img')
// photo.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
// container.append(photo)
// }

// const container = document.querySelector('.container')

// for(let i=1; i<=100; i++){
//   const imgcontainer = document.createElement('div')
//   imgcontainer.classList.add('img-container')
  
//   const newimg = document.createElement('img')
//   newimg.src =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  
//   const p = document.createElement('p')
//   p.innerText = i
  
//   imgcontainer.append(newimg,p)
  
//   container.append(imgcontainer)
// }

// for(let i=1; i<=100; i++){
//   const imgcontainer = document.createElement('div')
//   imgcontainer.classList.add('img-container')

// const myhtml = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
// <p>${i}</p>`

// imgcontainer.innerHTML = myhtml
// container.append(imgcontainer)
// }

// let myhtml = ``

// for(let i=1; i<=10; i++){
//  myhtml += `
//   <div class="img-container">
//       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//       <p>${i}</p>
//     </div>
//     `
// }
// container.innerHTML = myhtml

// const h1 = document.querySelector('h1')
// const card = document.querySelector('.card')
// const container = document.querySelector('.container')
// const input = document.querySelector('input')
// const cardlist = document.querySelectorAll('.card')

// function sayhi(){
//   console.log('hii');
// }
// //  h1.onclick = sayhi
// h1.addEventListener('click',sayhi)
// h1.addEventListener('click',function(){
//   console.log('ram');
// })
// let count = 1
// card.addEventListener('click',(e)=>{
//   console.log(e);
//   const newcard = document.createElement('div')
//   newcard.classList.add('card')
//   const newcard = card.cloneNode()
// newcard.classList.remove('add-card')
  // newcard.innerText = count++
  // container.append(newcard)
// })
// container.addEventListener('click',(e)=>{
//   if(e.target !== container){
//     e.target.remove()
//   }
// })


// setInterval(()=>{
//   input.focus()
// },2000)
// setTimeout(()=>{
//   input.focus()
// },2000)

// setTimeout(()=>{
//   input.blur()
// },4000)

// for(let i=1; i<=500; i++){
//   card.click()
// }
// const intervalid = setInterval(()=>{
//   if(count > 500){
//     clearInterval(intervalid)
//   }
//   card.click()
// },10)

// const username = document.querySelector('#username')
// const para = document.querySelector('p')
// const form = document.querySelector('form')

// let inputvalue

// username.addEventListener('click',(e)=>{
//   console.log(e);
//   inputvalue = e.target.value
//   para.innerText = e.target.value
// })

// form.addEventListener('click',(e)=>{
  // e.preventDefault()
//   console.log(e.target);
//   console.log(e.currentTarget);
// })
// const h1 = document.querySelector('h1')
// const input = document.querySelector('#ram')
// window.addEventListener('keydown',(e)=>{
//   console.log(e.key);
//   console.log(e.code);
// })
// const a = null

// const green = document.querySelector('.green')
// const pink = document.querySelector('.pink')
// const blue = document.querySelector('.blue')

// window.addEventListener('click',(e)=>{
//   console.log('window');
// },true)
// document.addEventListener('click',(e)=>{
//   console.log('document');
// },true)
// green.addEventListener('click',(e)=>{
//   // e.stopPropagation()
//   console.log('green');
// },true)
// pink.addEventListener('click',(e)=>{
//   console.log('pink');
// }, {capture: true})
// blue.addEventListener('click',(e)=>{
//   console.log('blue');
// },{once: true})


// const div = document.getElementById('example');
// const h1 = document.querySelector('h1');
// console.log(h1.innerHTML);
let box = document.querySelector('.box')
console.log(box.textContent);



// console.log(div.innerHTML); // Output: 'Hello <b>World</b>'
// div.innerHTML = "<i>Hi there!</i>";
// console.log(div.innerHTML); // Output: '<i>Hi there!</i>'
// console.log(div.textContent); // Output: '<i>Hi there!</i>'

