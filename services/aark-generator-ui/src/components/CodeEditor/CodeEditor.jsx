import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { FolderStructure } from '../FolderStructure';

import jsonExample from './examples/json.example.json';

export const CodeEditor = () => {
  const [value, setValue] = useState(JSON.stringify(jsonExample, null, 2));

  return (
    <div className="grid-x">
      <div className="CodeBox cell small-6">
        <Editor
          height="800px"
          theme="dark"
          language="json"
          onChange={(ev, val) => setValue(val)}
          value={value}
          options={{
            smoothScrolling: true,
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
      <div className="FolderTree cell small-6">
        <div className="grid-x">
          <FolderStructure structure={JSON.parse(value).structure} />
        </div>
      </div>
    </div>
  );
};
