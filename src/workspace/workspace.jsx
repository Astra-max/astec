import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import "../styles/terminal.css";

export default function Workspace() {
  const [files, setFiles] = useState([
    { name: "main.py", language: "python", content: "print('Hello World')" },
    { name: "app.js", language: "javascript", content: "console.log('Hello JS')" },
    { name: "main.go", language: "go", content: "package main\nimport \"fmt\"\nfunc main(){fmt.Println(\"Hello Go\",56+4)}" }
  ]);

  const [activeFile, setActiveFile] = useState(files[0]);
  const [output, setOutput] = useState(["💻 Welcome to DevWorkspace!"]);
  const terminalInputRef = useRef(null);
  const [cwd, setCwd] = useState("/project");

  // Update file content in editor
  const handleEditorChange = (value) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.name === activeFile.name ? { ...f, content: value } : f
      )
    );
  };

  const runFile = (file) => {
    let simulatedOutput = "";

    try {
      if (file.language === "python") {
        if (file.content.includes("print(")) {
          simulatedOutput =
            file.content.match(/print\((.*)\)/)?.[1] || "Output";
        }
      } else if (file.language === "javascript") {
        if (file.content.includes("console.log(")) {
          simulatedOutput =
            file.content.match(/console.log\((.*)\)/)?.[1] || "Output";
        }
      } else if (file.language === "go") {
        if (file.content.includes("fmt.Println(")) {
          simulatedOutput =
            file.content.match(/fmt.Println\((.*)\)/)?.[1] || "Output";
        }
      }
    } catch (err) {
      simulatedOutput = `❌ Error: ${err.message}`;
    }

    setOutput((prev) => [
      ...prev,
      `▶ Running: ${file.name}`,
      simulatedOutput.replaceAll(/['"]+/g, ""),
      `✔ Execution completed`
    ]);
  };

  // Terminal command handler
  const handleTerminalKeyDown = (e) => {
    if (e.key === "Enter") {
      const command = terminalInputRef.current.value.trim();
      const args = command.split(" ");
      const cmd = args[0];

      switch (cmd) {
        case "clear":
          setOutput([]);
          break;
        case "ls":
          setOutput((prev) => [...prev, files.map((f) => f.name).join("  ")]);
          break;
        case "cd":
          setCwd(args[1] || cwd);
          setOutput((prev) => [...prev, `📂 Changed directory to ${cwd}`]);
          break;
        case "run":
          const filename = args[1];
          const file = files.find((f) => f.name === filename);
          if (file) {
            runFile(file);
          } else {
            setOutput((prev) => [...prev, `❌ File not found: ${filename}`]);
          }
          break;
        case "mv":
          if (args.length < 3) {
            setOutput((prev) => [...prev, "❌ Usage: mv <old> <new>"]);
          } else {
            const oldName = args[1];
            const newName = args[2];
            setFiles((prev) =>
              prev.map((f) =>
                f.name === oldName ? { ...f, name: newName } : f
              )
            );
            setOutput((prev) => [...prev, `✔ Renamed ${oldName} → ${newName}`]);
          }
          break;
        default:
          setOutput((prev) => [...prev, `❓ Unknown command: ${command}`]);
      }

      terminalInputRef.current.value = "";
    }
  };

  // Silence Monaco resize errors
  useEffect(() => {
    const resizeObserverErrSilencer = (e) => {
      if (e.message.includes("ResizeObserver loop")) {
        e.stopImmediatePropagation();
      }
    };
    window.addEventListener("error", resizeObserverErrSilencer);
    return () =>
      window.removeEventListener("error", resizeObserverErrSilencer);
  }, []);

  return (
    <div className="workspace">
      {/* Sidebar with explorer look */}
      <div className="sidebar">
        <h3>📁 Project Files</h3>
        <ul>
          {files.map((file) => (
            <li
              key={file.name}
              className={file.name === activeFile.name ? "active" : ""}
              onClick={() => setActiveFile(file)}
            >
              📄 {file.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Editor Section */}
      <div className="editor-container">
        <div className="toolbar">
          <span>{activeFile.name}</span>
          <button className="run-top" onClick={() => runFile(activeFile)}>
            ▶ Run
          </button>
        </div>

        <Editor
          height="65vh"
          theme="vs-dark"
          language={activeFile.language}
          value={activeFile.content}
          onChange={handleEditorChange}
        />

        {/* Terminal */}
        <div className="terminal">
          <div className="terminal-header">
            <span>Terminal — {cwd}</span>
          </div>
          <div className="terminal-output">
            {output.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
          <input
            ref={terminalInputRef}
            type="text"
            placeholder="$ "
            onKeyDown={handleTerminalKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
