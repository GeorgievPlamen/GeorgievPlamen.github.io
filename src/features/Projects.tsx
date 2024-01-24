import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import MyBox from "../app/components/MyBox";

export default function Projects() {
  return (
    <>
      <MyBox>
        <Card sx={{ maxWidth: 360, backgroundColor: "#323232" }}>
          <CardMedia
            sx={{ height: 180 }}
            image="../public/Images/wordle.png"
            title="Wordle Placeholder"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wordle Placeholder
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              dignissimos, cupiditate natus deserunt reprehenderit eius aut
              reiciendis dolorum obcaecati autem quaerat dolor sapiente eligendi
              eos porro quibusdam quae minima quis?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Live</Button>
            <Button size="small">Source</Button>
          </CardActions>
        </Card>
        <Divider />
        <Card
          sx={{ maxWidth: 360, backgroundColor: "#323232", marginTop: "50px" }}
        >
          <CardMedia
            sx={{ height: 180 }}
            image="./public/Images/wordle.png"
            title="Wordle Placeholder"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wordle Placeholder
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              dignissimos, cupiditate natus deserunt reprehenderit eius aut
              reiciendis dolorum obcaecati autem quaerat dolor sapiente eligendi
              eos porro quibusdam quae minima quis?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Live</Button>
            <Button size="small">Source</Button>
          </CardActions>
        </Card>
      </MyBox>
    </>
  );
}
