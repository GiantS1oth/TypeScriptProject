function Lesson06() {

  let userName: string = 'Bob';
  
  userName = '2'
  userName = 1 + 2 + '3'
  // userName = '4' / '2';
  userName = 'Bubka'
  
  let message = `Hello, ${userName}`

  let luckyNumber: number = 13;
  luckyNumber = 13.3;
  // luckyNumber = 13,1;
  // luckyNumber = NaN;
  // luckyNumber = 4 * '3';

  let isAdmin: boolean = true;
  isAdmin = false;
  

  interface User {
    name: string,
    age: number | string,
    
}

  interface User{
    job: string
  }
  const userData: User = {
    name: 'Mary',
    age: 25,
    job: 'Manager'

  }
  
  



  return <div>Lesson06 - {luckyNumber}</div>
}

export default Lesson06;