import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Science() {
        const [news,setNews] = useState([])
        useEffect(()=>{
        axios.get("https://inshorts.deta.dev/news?category=science")
    .then((response)=>{
         console.log(response.data);
         setNews(response.data)
    })
})
  return (
    <Card className="container my-5">
        <Card className="row text-center">
           {
            news.map((value)=>{
               return(
                <Card className="col">
                <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={value.imageUrl} />
          <Card.Body>
            <Card.Title>{value.title}</Card.Title>
            <Card.Text>
              {value.Content}
            </Card.Text>
            <Button variant="primary">Main news</Button>
          </Card.Body>
        </Card>
    </Card>
               )
            })
           }
            </Card>
        </Card>
  )
}

export default Science