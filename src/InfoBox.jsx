import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css'
export default function InfoBox({ Info }){
    
   
    let hot_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let Cold_URL="https://images.unsplash.com/photo-1641672222794-536ad524a929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let Rain_URL="https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UkFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return(
        <div className='InfoBox'>
           

            <div className='cardContainer'>

                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={Info.humidity > 80 ? Rain_URL:Info.temperature >18 ? hot_URL:Cold_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {Info.city}{" "}{Info.humidity > 80 ? <ThunderstormIcon/>:Info.temperature >18 ? <WbSunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div className='desc'>Temperature : {Info.temperature}&deg;C</div>
                    <div className='desc'>Maximum Temperature : {Info.Minimum_temperature}&deg;C</div>
                    <div className='desc'>Minimum Temperature : {Info.Max_temperature}&deg;C</div>
                    <div className='desc'>Humidity : {Info.humidity}%C</div>
                    <div className='desc'>The weather description can be as <i>{Info.weather}</i> and feels like  : {Info.feels_like}&deg;C</div>
                    </Typography>
                </CardContent>
                </Card>
            </div>

        </div>
    )
}