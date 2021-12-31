import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, Stack, Card, CardHeader, } from '@mui/material';
// components
import useResponsive from '../../hooks/useResponsive';
import TeamCard from './TeamCard';

// ----------------------------------------------------------------------

const BoxStyle = styled('div')(({ theme }) => ({
    maxWidth: '85%',
    width: '1518px',
    height: 'auto',
    margin: '0 auto 200px',
    borderRadius: '46px',
    position: 'relative',
    padding: '1px',
    zIndex: '5'
}));

// ----------------------------------------------------------------------

const FOUNDATION_LIST = [
    {
        name: 'VK Samhith',
        description: 'Founder, Chief Executive Officer & Blockchain Lead',
        icon: `team/SamhithBW.png`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Game Developer, 25+ RMG Games, 3Million users.  Ex - MPL, Jio, Paytm Games. Running an Indie Game Studio in India'
    },
    {
        name: 'Omrum Cetin',
        description: 'Chief Technical Officer & Game Lead',
        icon: `RadioactiveDark_walk.png`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Software Developer in multicultural environment, multiple languages, developing algorithms which are being used worldwide'
    },
    {
        name: 'Tetsuo420',
        description: 'Co-Founder & Cheif Business Officer',
        icon: `QuantumDark_walk.png`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Serial entrepreneur specialising emerging industries such as Crypto & Cannabis.'
    },
    {
        name: 'Ssaulgoodmann',
        description: 'Cheif - Product & Design',
        icon: `MechaLight_walk.png`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Delivering narrative & identity building as a service for emerging internet technologies'
    },
    {
        name: 'Buzzkill77',
        description: 'Co-Founder & Strategy',
        icon: `SpaceDark_walk.png`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Crypto champion & investor since 2016'
    },
    {
        name: 'JP',
        description: 'Co-Founder & Strategy',
        icon: `team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Growth Hacker & Gamer, Public & Publisher Relations, Digital marketing for the company.'
    },
    {
        name: 'Sowmya Yarlagadda',
        description: 'Game Producer',
        icon: `team/Sowmya_Yarlagadda.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Game Producer and QA across game generes. Ex - EA - NFS, FIFA, MOH-Airborne, and Interactive RPG, Hyper Casual games'
    },
    {
        name: 'Suresh Pitla',
        description: 'Lead 3D Generalist',
        icon: `team/Suresh_Pitla.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: '3D Generalist - Ex- DRDO Projects, Byjus, Famous Indian TV Series, Animated Russian Movies and E-Learning apps'
    },
    {
        name: 'Raviteja Bandreddy',
        description: 'Blockchain Developer',
        icon: `team/Ravi_Bandreddy.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: 'MERN stack blockchain developer with over 4 years of experience in Python, Django, Solidity, Node.js, and React.js. Developed various dapps and blockchain related web applications related to financial services.'
    },
    {
        name: 'Revanth Sama',
        description: 'Game Producer',
        icon: `team/Revanth_Sama.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Idir Belaid',
        description: 'Gameplay Programmer',
        icon: `team/Idir_Belaid.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Ashish Polaki',
        description: 'Gameplay Programmer',
        icon: `team/Ashish_Polaki.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Davinder Singh',
        description: 'Gameplay Programmer',
        icon: `team/Davinder_Singh.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Nikhil Ghode',
        description: 'Junior Gameplay Programmer',
        icon: `team/Nikhil_Ghode.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Madhav Gojiya',
        description: 'Junior Gameplay Programmer',
        icon: `team/Madhav_Gojiya.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Sriharan S',
        description: 'Junior Gameplay Programmer',
        icon: `team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Jatin Pandey',
        description: 'Junior Gameplay Programmer',
        icon: `team/Jatin_Pandey.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Robin Kamboj',
        description: '3D Environment Artist',
        icon: `team/Robin_kamboj.jpeg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Sangam Sharma',
        description: '3D Character Artist',
        icon: `team/Sangam_Sharma.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Lalit Dhawane',
        description: '3D Artist',
        icon: `team/Lalit_Dhawane.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Sourav Passi',
        description: '3D Artist',
        icon: `team/Sourav_Passi.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Rehyansh Verma',
        description: '3D Artist',
        icon: `team/Rehyansh_Verma.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Prakriti Sharma',
        description: '3D Animator',
        icon: `team/Prakriti_Sharma.jpg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Akhil Pulla',
        description: '3D Animator',
        icon: `team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Spandana Taruvu',
        description: 'Junior 2D Artist',
        icon: `team/Spandana_Taruvu.jpeg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Guteneva Evgeniia',
        description: '2D Pixel Artist',
        icon: `team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    },
    {
        name: 'Sai Rakesh Akaremsetti ',
        description: 'Game Producer',
        icon: `team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/home',
        credibility: ''
    }
]
export default function AboutTeams({ item }) {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <>
            <Typography variant="h3" sx={{ textAlign: 'left', mt: 3, pb: 5 }}>
                Core Team
            </Typography>
            <Grid item xs={12} sm={12} alignItems={'center'} justifyItems={'center'}>
                <Box
                    sx={{
                        display: 'grid',
                        gap: 1,
                        gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        justifyItems: 'center'
                    }}
                >
                    {FOUNDATION_LIST.map((item) => (
                        <TeamCard key={item.name} item={item} />
                    ))}
                </Box>
            </Grid>
        </>
    );
}
