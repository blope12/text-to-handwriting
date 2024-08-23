import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

import { HiPencil } from "react-icons/hi";

import './Usage.css'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: '#ff8080'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[900],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: '#ff6666'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: '#ff4d4d'
  },
}))(MuiDialogActions);

function Usage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="usage">
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{color: 'white', backgroundColor: '#ec4c4c'}}>
        Usage
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h4>HandReacting</h4>
           <h5>Usage</h5>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom className="text">
            <HiPencil /> Choose from 34 handwritten-style fonts. <br /> 
            <HiPencil /> Adjust font size to control the number of words per line. <br />
            <HiPencil /> Modify font weight to alter the text's boldness. <br /> 
            <HiPencil /> Adjust letter spacing and word spacing to arrange words more closely. <br /> 
            <HiPencil /> Change font color and page color to achieve a paper-like appearance. <br />
            <HiPencil /> Set line height appropriately when page lines are enabled. <br /> 
            <HiPencil /> Page lines add lines to the page for a structured look. <br /> 
            <HiPencil /> The scan effect adds a shadow to the page for a more realistic feel. <br /> 
            <HiPencil /> Page margin creates a border around the page. <br />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button className="button" autoFocus href="https://github.com/blope12" color="primary" 
            target="_blank" rel="noopener noreferrer"
            variant="contained" startIcon={<GitHubIcon />}>
            Visit My GitHub
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Usage