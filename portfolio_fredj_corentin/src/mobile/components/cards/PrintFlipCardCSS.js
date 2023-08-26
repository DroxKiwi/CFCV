export default function printFlipCardCSS () {
    return (`
    .card {
        perspective: 150rem;
        position: relative;
        width:250px;
        height:250px;
        box-shadow: none;
        background: none;
        margin-bottom: 100px;
      }
      
      .card-side {
        border-radius: 15px;
        transition: all 0.8s ease;
        backface-visibility: hidden;
        position: absolute;
        padding: 2rem;
        color: white;
      }
      
      .card-side.back {
        transform: rotateY(-180deg);
        width:250px;
        height:250px;
      }
      
      .card-side.front {
    
      }
      
      .card:hover .card-side.front {
        transform: rotateY(180deg);
      }
      
      .card:hover .card-side.back {
        transform: rotateY(0deg);
      }
    `)
}