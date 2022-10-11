import React from 'react'
import "./styles.css"

function Carousel({data}) {
    return (
        <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={data.imagen} className="a-block w-50 " alt="..." style={{maxWidth:"900px",maxHeight:"600px"}}/>
    </div>
    <div className="carousel-item">
      <img src={data.imagen2} className="a-block w-50 " alt="..."style={{maxWidth:"900px",maxHeight:"600px"}} />
    </div>
    <div className="carousel-item">
      <img src={data.imagen3} className="a-block w-50 " alt="..." style={{maxWidth:"900px",maxHeight:"600px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>
</div>
    )
}

export default Carousel
