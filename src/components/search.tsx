import { Box, Container, Input } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Label } from "@material-ui/icons";

export interface SearchProps {
    
}
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign :'center',
    },
    input  : {
    margin : '60px',
    minWidth : '50vw'
    }
  }),
);


const Search: React.FC<SearchProps> = () => {
    const classes = useStyles();

    return ( 
        <Container className={classes.root}>
            <Input className={classes.input} placeholder="Search your favorite food"></Input>
        </Container>
     );
}
 
export default Search;