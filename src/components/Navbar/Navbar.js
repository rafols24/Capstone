import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        width:1440,
    },
    tabSpacing:{
        marginRight:150,
    },
    indicator:{
        backgroundColor: 'primary'
    }
}));
const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className={classes.root}>
                <AppBar style={{ backgroundColor: '#15AF50' }} position='static'>

                    <Tabs   TabIndicatorProps={{style: {background:'#FFC315'}}} value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab style={{marginLeft:100}}className={classes.tabSpacing}label={<Box display='flex'><HomeIcon />&nbsp; Home</Box>} {...a11yProps(0)} />
                        <Tab className={classes.tabSpacing}label={<Box display='flex'><MapOutlinedIcon />&nbsp; Virtual Map</Box>} {...a11yProps(1)} />
                        <Tab className={classes.tabSpacing}label={<Box display='flex'><CropOriginalIcon />&nbsp; Exhibits</Box>} {...a11yProps(2)} />
                        <Tab className={classes.tabSpacing}label={<Box display='flex'><LibraryBooksOutlinedIcon />&nbsp; Library</Box>} {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                   
            </TabPanel>
                <TabPanel value={value} index={1}>

            </TabPanel>
                <TabPanel value={value} index={2}>
                    
            </TabPanel>
            </div>
        </>
    )
}

export default Navbar
