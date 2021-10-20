import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import { useContext } from "react";
import Theme from "../../Context";
import "./style.css";
function Home() {
  let val = useContext(Theme);
  // console.log(theme)
  let darkMode = val?.[0];
  console.log(darkMode);
  let theme = val?.[1];
  console.log(theme);
  return (
    <>
      {/* <Navbar/> */}
      <div
        className="asd"
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          height: "auto",
        }}
      >
        <div
          style={{
            color: theme?.[darkMode]?.colorc,
          }}
          className="asd"
        
        >
          <h1>Lorem</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque. Quaerat provident commodi
            consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
            hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
            cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
            placeat. Voluptatem quaerat non architecto ab laudantium modi minima
            sunt esse temporibus sint culpa, recusandae aliquam numquam totam
            ratione voluptas quod exercitationem fuga. Possimus quis earum
            veniam quasi aliquam eligendi, placeat qui corporis!Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum
            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium
            nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus
            tenetur fugiat, temporibus enim commodi iusto libero magni deleniti
            quod quam consequuntur! Commodi minima excepturi repudiandae velit
            hic maxime doloremque. Quaerat provident commodi consectetur veniam
            similique ad earum omnis ipsum saepe, voluptas, hic voluptates
            pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
            excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
            Voluptatem quaerat non architecto ab laudantium modi minima sunt
            esse temporibus sint culpa, recusandae aliquam numquam totam ratione
            voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
            aliquam eligendi, placeat qui corporis!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
            sint commodi repudiandae consequuntur voluptatum laborum numquam
            blanditiis harum quisquam eius sed odit fugiat iusto fuga
            praesentium optio, eaque rerum! Provident similique accusantium nemo
            autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus
            tenetur fugiat, temporibus enim commodi iusto libero magni deleniti
            quod quam consequuntur! Commodi minima excepturi repudiandae velit
            hic maxime doloremque. Quaerat provident commodi consectetur veniam
            similique ad earum omnis ipsum saepe, voluptas, hic voluptates
            pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
            excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
            Voluptatem quaerat non architecto ab laudantium modi minima sunt
            esse temporibus sint culpa, recusandae aliquam numquam totam ratione
            voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
            aliquam eligendi, placeat qui corporis!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
            sint commodi repudiandae consequuntur voluptatum laborum numquam
            blanditiis harum quisquam eius sed odit fugiat iusto fuga
            praesentium optio, eaque rerum! Provident similique accusantium nemo
            autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus
            tenetur fugiat, temporibus enim commodi iusto libero magni deleniti
            quod quam consequuntur! Commodi minima excepturi repudiandae velit
            hic maxime doloremque. Quaerat provident commodi consectetur veniam
            similique ad earum omnis ipsum saepe, voluptas, hic voluptates
            pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
            excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
            Voluptatem quaerat non architecto ab laudantium modi minima sunt
            esse temporibus sint culpa, recusandae aliquam numquam totam ratione
            voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
            aliquam eligendi, placeat qui corporis!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
            sint commodi repudiandae consequuntur voluptatum laborum numquam
            blanditiis harum quisquam eius sed odit fugiat iusto fuga
            praesentium optio, eaque rerum! Provident similique accusantium nemo
            autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus
            tenetur fugiat, temporibus enim commodi iusto libero magni deleniti
            quod quam consequuntur! Commodi minima excepturi repudiandae velit
            hic maxime doloremque. Quaerat provident commodi consectetur veniam
            similique ad earum omnis ipsum saepe, voluptas, hic voluptates
            pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
            excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
            Voluptatem quaerat non architecto ab laudantium modi minima sunt
            esse temporibus sint culpa, recusandae aliquam numquam totam ratione
            voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
            aliquam eligendi, placeat qui corporis!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
            sint commodi repudiandae consequuntur voluptatum laborum numquam
            blanditiis harum quisquam eius sed odit fugiat iusto fuga
            praesentium optio, eaque rerum! Provident similique accusantium nemo
            autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus
            tenetur fugiat, temporibus enim commodi iusto libero magni deleniti
            quod quam consequuntur! Commodi minima excepturi repudiandae velit
            hic maxime doloremque. Quaerat provident commodi consectetur veniam
            similique ad earum omnis ipsum saepe, voluptas, hic voluptates
            pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
            excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
            Voluptatem quaerat non architecto ab laudantium modi minima sunt
            esse temporibus sint culpa, recusandae aliquam numquam totam ratione
            voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
            aliquam eligendi, placeat qui corporis!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
            sint commodi repudiandae consequuntur voluptatum laborum numquam
            blanditiis harum quisquam eius sed odit fugiat iusto fuga
            praesentium optio, eaque rerum! Provident similique accusantium nemo
            autem. Veritatis obcaecati tenetur iure eius earum ut molestias
            architecto voluptate aliquam nihil, eveniet aliquid culpa officia
            aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
            ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
            repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
            modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus
            tenetur fugiat, temporibus enim commodi iusto libero magni deleniti
            quod quam consequuntur! Commodi minima excepturi repudiandae velit
            hic maxime doloremque. Quaerat provident commodi consectetur veniam
            similique ad earum omnis ipsum saepe, voluptas, hic voluptates
            pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
            excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
            Voluptatem quaerat non architecto ab laudantium modi minima sunt
            esse temporibus sint culpa, recusandae aliquam numquam totam ratione
            voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
            aliquam eligendi, placeat qui corporis!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
