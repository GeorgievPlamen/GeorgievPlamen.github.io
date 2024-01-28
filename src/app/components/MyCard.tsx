import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface Props {
  img: string;
  title: string;
  description: string;
  liveLink: string;
  sourceLink: string;
}

export default function MyCard({
  img,
  title,
  description,
  liveLink,
  sourceLink,
}: Props) {
  return (
    <Grid item>
      <Card
        sx={{
          marginTop: "50px",
          maxWidth: 360,
          backgroundColor: "#323232",
        }}
      >
        <CardMedia sx={{ height: 180 }} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            href={liveLink}
            target="_blank"
          >
            Live
          </Button>
          <Button
            variant="contained"
            size="small"
            href={sourceLink}
            target="_blank"
          >
            Source
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
