import React, {useState} from 'react';
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
import {blue, grey, pink} from "@material-ui/core/colors";

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

function fetchItems() {
    /*** ダミーデータ ***/
    const initialItemsJsonDummy = '{"Items":[{"item":{"title":"one","url":"https://images.unsplash.com/photo-1595777480569-8e542c4f904c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","tag":"#dog","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}},{"item":{"title":"two","url":"https://images.unsplash.com/photo-1542117991-205f1f56bd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","tag":"#cat","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}},{"item":{"title":"three","url":"https://images.unsplash.com/photo-1505896202-4fe971e982fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","tag":"#lion","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}},{"item":{"title":"four","url":"https://images.unsplash.com/photo-1431057499046-ecd6e0f36ebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","tag":"#cow","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}},{"item":{"title":"five","url":"https://images.unsplash.com/photo-1429341565469-c014916dc816?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","tag":"#rabbit","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}},{"item":{"title":"six","url":"https://images.unsplash.com/photo-1457599227512-c157ba17f37a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","tag":"#bear","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}},{"item":{"title":"seven","url":"https://images.unsplash.com/photo-1460380547286-0da8aead0d11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","tag":"#bird","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}},{"item":{"title":"eight","url":"https://images.unsplash.com/photo-1526505262320-81542978f63b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","tag":"#pig","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}},{"item":{"title":"nine","url":"https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","tag":"#fish","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}},{"item":{"title":"ten","url":"https://images.unsplash.com/photo-1554900773-632f4c042da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","tag":"#elephant","favorite":false,"zoomed":false,"createdDate":"2020/07/29 12:30"}}]}';
    const initialItems = JSON.parse(initialItemsJsonDummy).Items;

    /*** API ***/

    const items = [];
    initialItems.forEach(item => {
        items.push(item.item);
    });
    return items;
}

export default function Album() {
    const classes = useStyles();

    const items = fetchItems();

    const [modalItem, setModalItem] = useState(null);
    const handleOpenModal = (item) => {
        item.zoomed = true;
        setModalItem(item);
    };
    const handleCloseModal = (item) => {
        item.zoomed = false;
        setModalItem(null);
    };

    const [favoriteItem, setFavoriteItem] = useState(null);
    const handleCheckFavorite = (item) => {
        (item.favorite) ? item.favorite = false : item.favorite = true;
        (favoriteItem == item) ? setFavoriteItem(null) : setFavoriteItem(item);
    };

    const [cards, setCards] = useState(items);
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
                        {cards.map((item) => (
                            <Grid item key={item} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea onClick={() => handleOpenModal(item)}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={item.url}
                                            title={item.title}
                                        />
                                    </CardActionArea>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="h3" style={{color: blue[500]}}>
                                            {item.tag}
                                        </Typography>
                                        <Typography gutterBottom variant="h7" component="h5" style={{color: grey[500]}}>
                                            {item.createdDate}
                                        </Typography>
                                        <IconButton aria-label="add to favorites"
                                                    onClick={() => handleCheckFavorite(item)}>
                                            {item.favorite ? <FavoriteIcon style={{color: pink[500]}}/> :
                                                <FavoriteIcon/>}
                                        </IconButton>
                                        <IconButton aria-label="delete image" onClick={() => handleRemove(item)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {modalItem ?
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={modalItem.zoomed}
                            onClose={() => handleCloseModal(modalItem)}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{timeout: 500}}
                        >
                            <Fade in={modalItem.zoomed}>
                                <img
                                    src={modalItem.url}
                                    alt={modalItem.title}
                                />
                            </Fade>
                        </Modal>
                        : <br/>}
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
