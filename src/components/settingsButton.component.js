import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Deleter from './deleter.component';
import Renamer from './renamer.component';

export default function SettingsButton({ componentName, componentId, deleteComponent, renameComponent }) {
    const [optionsShow, setOptionsShow] = useState(false);

    const className = (optionsShow) ? 'settingsOptions visible' : 'settingsOptions';
    
    return (
        <>
            <button 
                className='settingsButton' 
                onMouseEnter={() => setOptionsShow(true)}
                onMouseLeave={() => setOptionsShow(false)}
            >
                <FontAwesomeIcon icon='cog' />
            </button>
            <div 
                className={className}
                onMouseEnter={() => setOptionsShow(true)}
                onMouseLeave={() => setOptionsShow(false)}
            >
                <Renamer 
                    initialName={componentName} 
                    renameId={componentId} 
                    renameComponent={renameComponent}
                    onDialogShow={() => setOptionsShow(false)}
                />
                <Deleter 
                    deleteId={componentId} 
                    deleteComponent={deleteComponent} 
                    onDialogShow={() => setOptionsShow(false)}
                />
            </div>
        </>
    )
}