import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Icon from './alieaters_icon.png'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ImageUpload from "./ImageUpload";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import pink from "@material-ui/core/colors/pink";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.alieaters.com/">
                AliEaters Code支部
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

class Item {
    constructor(title, url, tag, favorite){
        this.title = title;
        this.url = url;
        this.tag = tag;
        this.favorite = favorite;
    }
}

const initialCards = [
    new Item("one", "https://images.unsplash.com/photo-1595777480569-8e542c4f904c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80", "#dog", false),
    new Item("two", "https://images.unsplash.com/photo-1542117991-205f1f56bd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "#cat", false),
    new Item("three", "https://images.unsplash.com/photo-1505896202-4fe971e982fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "#lion", false),
    new Item("four", "https://images.unsplash.com/photo-1431057499046-ecd6e0f36ebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "#cow", false),
    new Item("five", "https://images.unsplash.com/photo-1429341565469-c014916dc816?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "#rabbit", false),
    new Item("six", "https://images.unsplash.com/photo-1457599227512-c157ba17f37a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "#bear", false),
    new Item("seven", "https://images.unsplash.com/photo-1460380547286-0da8aead0d11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "#bird", false),
    new Item("eight", "https://images.unsplash.com/photo-1526505262320-81542978f63b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "#pig", false),
    new Item("nine", "https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "#fish", false),
    new Item("ten", "https://images.unsplash.com/photo-1554900773-632f4c042da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "#elephant", false)
];

export default function Album() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [favorite, setFavorite] = React.useState(false);
    const handleFavorite = () => {
        (favorite) ? setFavorite(false) : setFavorite(true);
    };

    const [cards, setCards] = React.useState(initialCards);
    const handleRemove = (item) => {
        const newCards = cards.filter((card) => card !== item);
        setCards(newCards);
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <img src={Icon} height="50" background-color="#3f51b5" alt="AliEaters Icon"/>
                    <Typography variant="h6" color="inherit" noWrap>
                        AliEaters's Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="xl">
                        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                            思い出をここに。
                        </Typography>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <ImageUpload cardName="Input Image"/></Grid>
                        </Grid>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea onClick={handleOpen}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={card.url}
                                            title={card.title}
                                        />
                                    </CardActionArea>
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className={classes.modal}
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{timeout: 500}}
                                    >
                                        <Fade in={open}>
                                            <img
                                                src={card.url}
                                                alt={card.title}
                                            />
                                        </Fade>
                                    </Modal>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            {card.tag}
                                        </Typography>
                                        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
                                            {favorite ? <FavoriteIcon style={{color: pink[500]}}/> : <FavoriteIcon/>}
                                        </IconButton>
                                        <IconButton aria-label="delete image" onClick={() => handleRemove(card)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    AliEaters - Alibaba Cloud Developers Community
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Presented by airi, Hiro, terao, watanabe, yoshimura, yuichi.big, zakky and anzoo
                </Typography>
                <Copyright/>
            </footer>
        </React.Fragment>
    );
};
