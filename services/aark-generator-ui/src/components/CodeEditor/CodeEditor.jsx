import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { useState, useRef } from 'react';
import ControlledEditor from '@monaco-editor/react';
import CodeIcon from '@material-ui/icons/Code';
import FolderIcon from '@material-ui/icons/Folder';

import clsx from 'clsx';
import { FolderStructure } from '../FolderStructure';

import { useStyles } from './CodeEditor.styles';
import jsonExample from './examples/json.example.json';

const validateJson = str => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
};

export const CodeEditor = () => {
  const classes = useStyles();
  const [visibleTab, setVisibleTab] = useState(0);
  const [value, setValue] = useState(JSON.stringify(jsonExample, null, 2));

  const codeEditorRef = useRef();

  const handleEditorDidMount = (_, editor) => {
    codeEditorRef.current = editor;

    if (visibleTab === 0) {
      codeEditorRef.current.onDidChangeModelContent(() => {
        setValue(codeEditorRef.current.getValue());
      });
    }
  };

  const handleTabChange = (event, newValue) => {
    setVisibleTab(newValue);
  };

  // TODO: Handle error if JSON is invalid.
  const getStructureConfig = json => {
    const parsedJson = validateJson(json);
    console.log('parsedJson >>>', parsedJson);

    if (!parsedJson) {
      return [];
    }

    return parsedJson.structure;
  };

  return (
    <div className={clsx(classes.codeEditor, 'grid-y')}>
      <Tabs
        value={visibleTab}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<CodeIcon />} label="Edit JSON" />
        <Tab icon={<FolderIcon />} label="UI Editor" />
      </Tabs>

      <div className="grid-x">
        <div
          className={clsx('CodeBox cell', {
            hide: visibleTab !== 0,
          })}
        >
          <ControlledEditor
            theme="dark"
            height="800px"
            language="json"
            value={value}
            options={{
              smoothScrolling: true,
              minimap: {
                enabled: false,
              },
            }}
            editorDidMount={handleEditorDidMount}
          />
        </div>
        {visibleTab === 1 && (
          <div
            className={clsx('FolderTree cell', {
              hide: visibleTab !== 1,
            })}
          >
            <div className="grid-x">
              <FolderStructure structure={getStructureConfig(value)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
