import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ButtonFab from './ButtonFab';

ExpansiblePanel.propTypes = {
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            mainHeading: PropTypes.string.isRequired,
            secondaryHeading: PropTypes.string.isRequired,
            hiddenContent: PropTypes.any
        })
    ),
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    needButtons: PropTypes.bool,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        margin: 'auto',
    },
    heading: {
        fontWeight: 'bold',
        flexBasis: '33.33%',
        flexShrink: 0,
        textShadow: '1px 1px 3px black'
    },
    secondaryHeading: {
        paddingLeft: '10px',
        fontSize: theme.typography.pxToRem(15),
        textShadow: '1px 1px 3px black'
    }
}));

export default function ExpansiblePanel({
    actions, backgroundColor, color, needButtons }) {
    const classes = useStyles();

    // const [expanded, setExpanded] = React.useState(false);

    // const handleChange = panel => (event, isExpanded) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    const styles = {
        expansionPanelContainer: {
            position: 'relative',
        },
        expansionPanel: {
            color: color,
            backgroundColor: backgroundColor, // default is paper color
            margin: '35px 0'
        },
        button1: {
            transform: 'translate(-50%, -50%)'
        },
        button2: {
            transform: 'translate(-50%, -50%)'
        },
        iconContainer: {
            position: 'absolute',
            top: -10,
            left: 10
        },

    }

    return (
        <div className={classes.root}
        >
            {actions.map(panel => (
                <div
                    style={styles.expansionPanelContainer}
                >
                    <ExpansionPanel
                        key={panel.id}
                        style={styles.expansionPanel}
                        className="disabledLink"
                    >
                        <ExpansionPanelSummary
                            expandIcon={
                                <div
                                    style={styles.iconContainer}
                                    className="enabledLink"
                                >
                                    <ButtonFab
                                        backgroundColor="var(--mainPink)"
                                        size="small"
                                        iconFontAwesome="fas fa-plus"
                                        iconMarginLeft="0"
                                        iconAfterClick="fas fa-minus"
                                    />
                                </div>
                            }
                            aria-controls={`panel${panel.id}bh-content`}
                            id={`panel${panel.id}bh-header`}
                        >
                            <Typography
                                className={clsx(classes.heading, "text-title")}
                            >
                                {panel.mainHeading}
                            </Typography>
                            <Typography
                                className={classes.secondaryHeading}
                            >
                                {panel.secondaryHeading}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>{panel.hiddenContent}</ExpansionPanelDetails>
                    </ExpansionPanel>
                    <div style={styles.buttonsContainer} >
                        <ButtonFab
                            iconFontAwesome="fas fa-plus"
                            top={-30}
                            left={40}
                            style={styles.button1}
                            iconMarginLeft="0"
                            iconFontAwesome="fas fa-trash-alt"
                            backgroundColor='#4834d4'
                            onClick={null}
                        />
                        <ButtonFab
                            top={-27}
                            left={90}
                            title="trocar tipo usuário"
                            variant="extended"
                            iconFontAwesome="fas fa-user-plus"
                            style={styles.button2}
                            backgroundColor="grey"
                            onClick={null}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
