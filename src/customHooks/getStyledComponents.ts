import { alpha, Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeContext } from './themeHook';

function useGetStyledComponents() {
    const { theme } = useThemeContext();

    const StyledCard = styled(Card)({
        background: `linear-gradient(to bottom right, ${alpha(theme.palette.primary.dark, 0.8)}, ${alpha(theme.palette.secondary.dark, 0.7)})`,
        color: theme.palette.text.primary,
        borderRadius: '25px',
        padding: theme.spacing(6),
        boxShadow: `0px 20px 50px ${alpha(theme.palette.primary.dark, 0.6)}`,
        transition: 'transform 0.5s ease, box-shadow 0.5s ease',
        '&:hover': {
            transform: 'scale(1.06)',
            boxShadow: `0px 30px 70px ${alpha(theme.palette.secondary.main, 0.8)}`,
        },
        maxWidth: '1000px',
        width: '100%',
        margin: 'auto',
    });

    const StyledBackgroundBox = styled(Box)({
        background: theme.palette.mode === 'dark'
            ? 'linear-gradient(160deg, #0f2027, #203a43, #2c5364)'
            : 'linear-gradient(160deg, #dce35b, #45b649)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(4),
        boxShadow: theme.shadows[4],
    });

    const IconBox = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(2),
        background: alpha(theme.palette.common.white, 0.15),
        padding: theme.spacing(3),
        borderRadius: '20px',
        transition: 'background 0.3s ease, transform 0.3s ease',
        '&:hover': {
            background: alpha(theme.palette.common.white, 0.3),
            transform: 'scale(1.05)',
        },
        boxShadow: `0px 10px 30px ${alpha(theme.palette.primary.dark, 0.3)}`,
    });

    const IconTypography = styled(Typography)({
        fontSize: '1.25rem',
        color: theme.palette.text.primary,
        textAlign: 'center',
        fontWeight: 600,
        marginTop: theme.spacing(1),
    });

    return {
        StyledCard,
        StyledBackgroundBox,
        IconBox,
        IconTypography,
    };
}

export default useGetStyledComponents;
