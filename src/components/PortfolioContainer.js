import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import NewOpenIcon from '@material-ui/icons/OpenInNew';

import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: "2rem",
    display: "grid"
  },
  chipsContainer: {
    marginTop: "1rem"
  },
  chip:{
    margin: "0.3rem 0.3rem 0 0",
    color: "white",
    height: "18px"
  }
});

const chips = (classes, skills) => {

  let newSkillsArray = skills.filter(skill => skill !== "All");

  const EachChip = newSkillsArray.map(skill => {

    let bgColor = {
      background : "rgb(5,182,226)"
    }
    if (skill === "React") {
        bgColor = {
        background : "rgb(5,182,226)"
      }
    } else if (skill === "Redux") {
        bgColor = {
        background : "rgb(114, 72, 182)"
      }
    } else if (skill === "Next.js") {
        bgColor = {
          background : "rgb(34, 29, 30)"
        }
    } else if (skill === "React-router v4") {
        bgColor = {
          background : "rgb(202, 66, 69)"
        }
    } else if (skill === "HTML") {
        bgColor = {
          background : "rgb(242, 90, 49)"
        }
    } else if (skill === "CSS") {
        bgColor = {
          background : "rgb(14, 125, 194)"
        }
    } else if (skill === "Express.js") {
        bgColor = {
          color: "rgb(52,52,52)",
          border: "1px solid rgb(52,52,52)"
        }
    } else if (skill === "MongoDB" || skill === "Mongoose") {
        bgColor = {
          backgroundColor: "#529949",
          backgroundImage: "linear-gradient(90deg, #529949 25%, #412f1f 100%)"
        }
    } else if (skill.includes("Firebase")) {
        bgColor = {
          background: "#f5820b",
          backgroundImage : "linear-gradient(270deg, #f5820b 25%, #FFE32C 100%)"
        }
    } else if (skill === "Python 3" || skill === "Pygame") {
        bgColor = {
          backgroundColor: "#336c9c",
          backgroundImage: "linear-gradient(90deg, #336c9c 25%, #FFE32C 100%)"
        }
    } else if (skill === "Postgresql") {
        bgColor = {
          backgroundColor: "#0064a5",
          backgroundImage: "linear-gradient(90deg, #0064a5 25%, #336791 100%)"
        }
    } else if (skill === "Nginx") {
        bgColor = {
          backgroundColor: "rgb(13,147,75)"
        }
    } else if (skill === "Digital Ocean") {
        bgColor = {
          color: "rgb(0, 129, 255)",
          border: "1px solid rgb(0, 129, 255)"
        }
    } else if (skill === "Heroku") {
        bgColor = {
          color: "rgb(98, 21, 175)",
          border: "1px solid rgb(98, 21, 175)"
        }
    } else if (skill === "Jest") {
        bgColor = {
          backgroundColor: "rgb(149, 64, 88)"
        }
    } else if (skill === "Enzyme") {
        bgColor = {
          backgroundColor: "rgb(252, 92, 100)"
        }
    } else if (skill === "CircleCI") {
        bgColor = {
          backgroundColor: "rgb(52,52,52)"
        }
    } else if (skill === "AWS S3") {
        bgColor = {
          backgroundColor: "rgb(225, 84, 68)",
          backgroundImage: "linear-gradient(90deg, rgb(225, 84, 70) 25%, rgb(124, 28, 20) 100%)"
        }
    } else {
        bgColor = {
          backgroundColor: "#12375c",
        } 
    }


    return <Chip key={skill} label={`# ${skill}`} className={classes.chip} style={bgColor} />
  })
  return EachChip;
}

class PortfolioContainer extends React.Component {

render() {

  const { classes, onePortfolio } = this.props;

  return (
    <Card className={classes.card}>
      <CardActionArea target="_blank" component="a" href={onePortfolio.page}>
        <CardMedia
          component="img"
          alt={onePortfolio.title}
          className={classes.media}
          height="140"
          image={onePortfolio.image}
          title={onePortfolio.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {onePortfolio.title}
          </Typography>

          {
            (Array.isArray(onePortfolio.content))
            ?(onePortfolio.content.map((val,index)=><Typography key={index} component="p" style={{paddingBottom:"0.4rem"}}>{val}</Typography>))
            :<Typography component="p">{onePortfolio.content}</Typography>
          }

          <div className={classes.chipsContainer}>
          {
            chips(classes, onePortfolio.skills)
          }
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          (onePortfolio.page) 
          && (
              <Button size="small" target="_blank" component="a" href={onePortfolio.page}>
                <NewOpenIcon color="primary" />
              </Button>
            )
        }
        {
          (onePortfolio.repo) 
          && (
            <Button variant="outlined" size="small" target="_blank" component="a" href={onePortfolio.repo} color="primary">
              Repo
            </Button>
            )
        }
        {
          (onePortfolio.backend) 
          && (
              <Button variant="outlined" size="small" target="_blank" component="a" href={onePortfolio.backend} color="secondary">
                Backend
              </Button>
            )

        }
      </CardActions>
    </Card>
  );
  }
}

PortfolioContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioContainer);