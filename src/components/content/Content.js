import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Content.css';

export default function Content(props) {

  function capitalize(input) {
    input = input.replaceAll('-', ' ');
    var words = input.split(' ');
    var CapitalizedWords = [];
    words.forEach(element => {
      CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    return CapitalizedWords.join(' ');
  }

  const[message, setMessage] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api/types").then((res) => res.json()).then((data) => setMessage(data.message));
  }, []);

  var topic = capitalize(props.topic);
  var ds = capitalize(props.ds);

  return (

    <div>
      {/* <h3>{props.ds}</h3>
      <h3>{props.topic}</h3> */}

      <div className='content-title'>
        <p>{topic} {topic === "Operation" ? "in" : "of"} {ds}</p>
      </div>

      <div className="content-info">
        <p>
          <pre>     <span>Lorem</span> </pre>{message}</p>
        <p>
          <pre>     <span>Lorem</span> </pre>temporibus animi incidunt in recusandae aliquam ratione optio amet commodi, dolores architecto. Cupiditate deserunt alias rerum quos, earum iste minus nihil obcaecati facere ea id, doloremque velit et vel quaerat nam quis itaque ut ad expedita porro molestiae veritatis commodi? Aperiam minus impedit facilis totam eius ipsam delectus. Optio, ipsam animi consectetur voluptatibus quod, culpa sint ea tempora officia numquam cupiditate facilis saepe fugiat odit distinctio aut commodi cum temporibus doloremque accusantium, minus aliquam. Eius, ipsa impedit?
        </p>
        <p>
          <pre>     <span>Lorem</span> </pre>temporibus animi incidunt in recusandae aliquam ratione optio amet commodi, dolores architecto. Cupiditate deserunt alias rerum quos, earum iste minus nihil obcaecati facere ea id, doloremque velit et vel quaerat nam quis itaque ut ad expedita porro molestiae veritatis commodi? Aperiam minus impedit facilis totam eius ipsam delectus. Optio, ipsam animi consectetur voluptatibus quod, culpa sint ea tempora officia numquam cupiditate facilis saepe fugiat odit distinctio aut commodi cum temporibus doloremque accusantium, minus aliquam. Eius, ipsa impedit?
        </p>
        <p>
          <pre>     <span>Lorem</span> </pre>temporibus animi incidunt in recusandae aliquam ratione optio amet commodi, dolores architecto. Cupiditate deserunt alias rerum quos, earum iste minus nihil obcaecati facere ea id, doloremque velit et vel quaerat nam quis itaque ut ad expedita porro molestiae veritatis commodi? Aperiam minus impedit facilis totam eius ipsam delectus. Optio, ipsam animi consectetur voluptatibus quod, culpa sint ea tempora officia numquam cupiditate facilis saepe fugiat odit distinctio aut commodi cum temporibus doloremque accusantium, minus aliquam. Eius, ipsa impedit?
        </p>
        <p>
          <pre>     <span>Lorem</span> </pre>temporibus animi incidunt in recusandae aliquam ratione optio amet commodi, dolores architecto. Cupiditate deserunt alias rerum quos, earum iste minus nihil obcaecati facere ea id, doloremque velit et vel quaerat nam quis itaque ut ad expedita porro molestiae veritatis commodi? Aperiam minus impedit facilis totam eius ipsam delectus. Optio, ipsam animi consectetur voluptatibus quod, culpa sint ea tempora officia numquam cupiditate facilis saepe fugiat odit distinctio aut commodi cum temporibus doloremque accusantium, minus aliquam. Eius, ipsa impedit?
        </p>
        <p>
          <pre>     <span>Lorem</span> </pre>temporibus animi incidunt in recusandae aliquam ratione optio amet commodi, dolores architecto. Cupiditate deserunt alias rerum quos, earum iste minus nihil obcaecati facere ea id, doloremque velit et vel quaerat nam quis itaque ut ad expedita porro molestiae veritatis commodi? Aperiam minus impedit facilis totam eius ipsam delectus. Optio, ipsam animi consectetur voluptatibus quod, culpa sint ea tempora officia numquam cupiditate facilis saepe fugiat odit distinctio aut commodi cum temporibus doloremque accusantium, minus aliquam. Eius, ipsa impedit?
        </p>
      </div>
    </div>

  )
}
