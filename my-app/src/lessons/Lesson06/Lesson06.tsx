function Lesson06() {

  let userName: string = 'Bob';
  
  userName = '2'
  userName = 1 + 2 + '3'
  // userName = '4' / '2';
  userName = 'Bubka'
  
  let message = `Hello, ${userName}`


  return <div>Lesson06 - {message}</div>
}

export default Lesson06;