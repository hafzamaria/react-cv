import React from "react";
import ReactDOM from "react-dom";
import './style.css'

function Hi() {
  return <div className="flexbox">

    <p className="intro">
      <p class="one">
        <p className="name">Hafza Maria</p>
        <p className="web">WEB Develpor</p></p>
      <p className="contact">
        <h2 className="h3">Contact</h2><p>
          <b>MobileNo:</b>03215673804</p>
        <p><b>Email:</b>Maria@gmail.com</p>
        <p><b>Address:</b>F.B Area block-17</p>
      </p>
    </p>
    <p className="obsolute">
      <h3 className="h3">OBJECTIVE</h3>
      <p className="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <p className="p2">Animi dolore perferendis fuga atque fugiat, omnis voluptas ab.
          Eveniet, nulla mollitia.
        </p>
      </p>
    </p>
    <p className="hoEdu">
      <p className="hoby">
        <h3>HOBBIES</h3>
        <ul className="all">
          <li>Learning</li>
          <li>Dressing</li>
          <li>Cooking</li>
        </ul>
      </p>
      <p>
        <h3>Education</h3>
        <ul className="ul">
          <li>20015</li>
          <p>Intermediate(private)</p>
          <li>2008</li>
          <p>Matriculation(Iqra Huffaz Girls Secondary School)</p>
        </ul>
      </p>
    </p>
    <p className="lang">
      <p>
        <h3>LANGUAGES</h3>
        <ul className="all">
          <li>Urdu</li>
          <li>English</li>
        </ul>
      </p>
      <p className="skils">
        <h3>Skills</h3>
        <ul className="all" >
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </p>
    </p>

  </div>
}
ReactDOM.render(<Hi />, document.querySelector('#root'));

