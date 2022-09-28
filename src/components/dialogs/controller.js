import { CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
// import NetworkLoading from './../components/NetworkLoading';
import { useDialog } from './context';
import { AlertDialog, ConfirmDialog } from './dialogs';

const DialogController = () => {
    const { type, show, dismiss, data } = useDialog();

    return (
        <>
            {(() => {
                switch (type) {
                    case 'alert':
                        return <AlertDialog open={show} dismiss={dismiss} {...data} />;
                    case 'confirm':
                        return <ConfirmDialog open={show} dismiss={dismiss} {...data} />;
                    default:
                        return null;
                }
            })()}
            {/* {(authLoading || dbLoading) && <CircularProgress />} */}
        </>
    );
};

export default DialogController;