import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import imageService from "@/services/imageService";
import { useEffect, useState } from "react";

var esa = "..";
function admindesboard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [url, setUrl] = useState("");
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  /* const sendImages = async (e) => {
    e.preventDefault();

    const respuesta = await imageService.sendImage(image);
    console.lo(respuesta);
  }; */

  async function uploadFile() {
    const data = new FormData();
    data.append("image", selectedImage);
    const url = `https://api.imgbb.com/1/upload?key=`;
    const upload = await fetch(url, {
      method: "POST",
      body: data,
    })
      .then((r) => r.json())
      .then((r) => setUrl(r.data.url));

    return upload?.data?.url;
  }
  /*  const handleChange = (e) => {
    const valor = e.target.files[0];
    console.log(valor);
    setImg(valor);
  }; */
  return (
    <>
      {isLoggedIn && (
        <Container>
          <Row>
            <h2>admindesboard: hola admin</h2>

            <input
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <input type="submit" value="enviar" onClick={uploadFile} />
          </Row>
          <Row>
            {url && (
              <div>
                <img alt="not found" width={"250px"} src={url} />
                <br />
                <button onClick={() => setUrl(null)}>Remove</button>
              </div>
            )}
          </Row>
        </Container>
      )}
    </>
  );
}

export default admindesboard;
