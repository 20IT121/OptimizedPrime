import React from 'react'
import './Content1styles.css'

export default function Content1() {
  var audio = new Audio('collectingmaterial.wav');
  // const buttons = document.querySelectorAll(".button1");
  // buttons.forEach(button => {
  //   button.addEventListener("click", () => {
  //     audio.play();
  //   });
  // });
  const voice = () => {
    audio.play();
  }

  return (
    <div className='my-4 mx-4 body' onClick={voice}>
        <h1>Data Structures</h1>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, animi natus harum inventore maiores, doloremque illum quo iusto temporibus incidunt exercitationem molestias magnam mollitia corrupti quidem quis perspiciatis doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti nesciunt dolor, ipsam recusandae eveniet eos ducimus doloremque veritatis vitae eum! Officiis odit dolorum facilis, dignissimos perferendis debitis eligendi at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus commodi illo dolor tenetur optio nulla ipsam quod, minima magnam quasi, mollitia provident deleniti dolorum repellendus soluta sit totam esse!</p>
        <button className='button1'>CLICK HERE TO VIEW DS</button><br/><br/>

        <h1>Algorithms</h1>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, animi natus harum inventore maiores, doloremque illum quo iusto temporibus incidunt exercitationem molestias magnam mollitia corrupti quidem quis perspiciatis doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti nesciunt dolor, ipsam recusandae eveniet eos ducimus doloremque veritatis vitae eum! Officiis odit dolorum facilis, dignissimos perferendis debitis eligendi at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus commodi illo dolor tenetur optio nulla ipsam quod, minima magnam quasi, mollitia provident deleniti dolorum repellendus soluta sit totam esse!</p>
        <button className='button1'>CLICK HERE TO VIEW ALGOS</button><br/><br/>
        
        <h1>Inbuilt Libraries</h1><br/>
        <button className='button1'>CLICK HERE TO VIEW INBUILT LIBRARIES</button>
    </div>
  )
}
