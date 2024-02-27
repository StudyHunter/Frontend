import { useEffect } from 'react'


const SubmitMakeRoom = ({title, member, thumbnail, tags}) => {


  useEffect(() => {
  fetch('http://localhost:4000/api/MakeRoom')
  .then((response) => response.json())
  .then((data) => console.log(data))
  }, []);

  console.log(tags)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // console.log(title, member, thumbnail)
    fetch('http://localhost:4000/api/MakeRoom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        member,
        thumbnail,
      })
    })
  }

  return(
    <>
      <button onClick={onSubmitHandler}>
        submit
      </button>
    </>
  )
}

export default SubmitMakeRoom;