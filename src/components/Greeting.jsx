import React, { useState } from 'react'

const Greeting = () => {
  // logic
  let name = "";

  const [username, setUsername] = useState("")

  const handleClick = () => {
    // 사용자 이름 텍스트 변경
    name = window.prompt("당신의 이름은 뭔가요?");
    setUsername(name)
    console.log(username);
  }


  // view
  return (
    <div style={{"backgroundColor" : "pink", "padding": "10px"}}>
      <button type='button' onClick={handleClick}>입력</button>
      <p>안녕하세요, {username}님</p>
      <p>오늘도 좋은 하루 보내세요.</p>
    </div>
  )
}

export default Greeting