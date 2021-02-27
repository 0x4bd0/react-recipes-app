import { Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export interface FooterProps {
    
}
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight : '50px',
      textAlign :'center',
      backgroundColor : '#1b31fd42'
    },
    text  : {

    }
  }),
);

const Footer: React.FC<FooterProps> = () => {
    const classes = useStyles();

    return (  
        <Box className={classes.root}>
            <h5>All rights reversed @Foody</h5>
        </Box>
    );
}
 
export default Footer;