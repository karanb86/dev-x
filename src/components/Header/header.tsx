import React from 'react';
import logo from '../../assets/images/logo.png'
import './header.scss';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

const options = [
    {
        label: 'Home',
        link: '#home'
    },
    {
        label: 'Events',
        link: '#events'
    },
    {
        label: 'Promote',
        link: '#'
    },
    {
        label: 'FAQ',
        link: '#'
    },
    {
        label: 'Join  Us',
        link: '#'
    }
];

function Header (props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="header-component flex justify-between items-center">
            <div className="img-wrap flex justify-start items-center">
                <img src={logo} alt=""/>
            </div>
            <div className="menu">
                <a href="#home" className={props.homeClass}>Home</a>
                <a href="#events" className={props.eventsClass}>Events</a>
                <a href="#">Promote</a>
                <a href="#">FAQ</a>
                <a href="#">Join Us</a>
            </div>
            <input type="text" placeholder="Search..."/>

            <div className="menu-toggle">
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option.label} onClick={handleClose}>
                            <a href={option.link}>{option.label}</a>
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </div>
    )
}

export default Header;
