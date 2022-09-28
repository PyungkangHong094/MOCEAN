import React, { useCallback, useContext, useState } from 'react';

export const DialogContext = React.createContext({
    type: '',
    show: false,
    data: {},
    showAlertDialog: ({ title, message, onConfirm }) => { },
    showConfirmDialog: ({ title, message, onConfirm, onCancel }) => { },
    dismiss: () => { },
});

export const useDialog = () => useContext(DialogContext);

const initialData = {
    types: [],
    show: false,
    title: '',
    message: '',
    onConfirm: () => { },
    onCancel: () => { },
};

export const DialogProvider = ({ children }) => {
    const [data, setData] = useState(initialData);
    const { types, show, ...restData } = data;
    const type = types.length === 0 ? '' : types[types.length - 1];

    const showAlertDialog = useCallback(
        ({ title, message, onConfirm = () => { } }) => {
            setData({
                types: [...types, 'alert'],
                show: true,
                title,
                message,
                onConfirm,
            });
        },
        [types]
    );

    const showConfirmDialog = useCallback(
        ({ title, message, onConfirm = () => { }, onCancel = () => { } }) => {
            setData({
                types: [...types, 'confirm'],
                show: true,
                title,
                message,
                onConfirm,
                onCancel,
            });
        },
        [types]
    );


    const dismiss = useCallback(() => {
        setData((prev) => ({ ...prev, show: false }));
        setTimeout(() => {
            if (types.length > 1) {
                setData((prev) => ({
                    ...prev,
                    types: types.slice(0, types.length - 1),
                    show: true,
                }));
            } else {
                setData(initialData);
            }
        }, 300);
    }, [initialData, types]);

    return (
        <DialogContext.Provider
            value={{
                type,
                show,
                data: restData,
                showAlertDialog,
                showConfirmDialog,
                dismiss,
            }}
        >
            {children}
        </DialogContext.Provider>
    );
};